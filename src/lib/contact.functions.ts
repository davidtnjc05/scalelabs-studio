import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { enqueueTransactionalEmail } from "@/lib/email/enqueue.server";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  business: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(2000),
  preferDate: z.string().trim().max(150).optional().or(z.literal("")),
  wantsAppointment: z.boolean(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      business: data.business || null,
      message: data.message,
      prefer_date: data.preferDate || null,
      wants_appointment: data.wantsAppointment,
    });

    if (error) {
      console.error("contact_submissions insert failed", error);
      return { ok: false as const, error: "Anfrage konnte nicht gespeichert werden." };
    }

    // Fire-and-log emails: confirmation to customer + notification to David.
    const trigger = crypto.randomUUID();
    try {
      await Promise.all([
        enqueueTransactionalEmail({
          templateName: "contact-confirmation",
          recipientEmail: data.email,
          idempotencyKey: `contact-confirm-${trigger}`,
          templateData: { name: data.name },
        }),
        enqueueTransactionalEmail({
          templateName: "contact-notification",
          idempotencyKey: `contact-notify-${trigger}`,
          templateData: {
            name: data.name,
            email: data.email,
            business: data.business,
            message: data.message,
            preferDate: data.preferDate,
            wantsAppointment: data.wantsAppointment,
          },
        }),
      ]);
    } catch (emailErr) {
      console.error("Email enqueue failed", emailErr);
    }

    return { ok: true as const };
  });