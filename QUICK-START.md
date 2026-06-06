# 🚀 SCHNELL-CHECKLISTE: Von Lovable zu Vercel

## Dein Schritt-für-Schritt Plan

### ✅ **JETZT SOFORT:**

**1. Code herunterladen und auf deinen Computer speichern**
   - Datei: `ScaleLabsStudio-Vercel-Ready.zip`
   - Entzippe sie in einen Ordner
   - Öffne Terminal/PowerShell in diesem Ordner

**2. GitHub Repository erstellen**
   ```
   1. Gehe zu: https://github.com/davidtnjc05
   2. Klicke + → New repository
   3. Name: scalelabs-studio
   4. Klicke "Create repository"
   ```

**3. Code zu GitHub pushen**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/davidtnjc05/scalelabs-studio.git
   git push -u origin main
   ```

**4. Vercel Project erstellen**
   ```
   1. Gehe zu: https://vercel.com/dashboard
   2. "Add New..." → "Project"
   3. "Import Git Repository"
   4. Füge deine GitHub URL ein
   5. Klicke "Import"
   ```

**5. Environment Variables in Vercel setzen**
   Vercel fragt dich nach Env Vars - kopiere diese:
   
   ```
   SUPABASE_PUBLISHABLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGxic2Jkd2xjcm9mYXljc2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTU3MTAsImV4cCI6MjA5NDc3MTcxMH0.1JZZ53hxu6-zvAL-f8frF8XaQa9I2zArmwH_Hu9rQbY
   
   SUPABASE_URL = https://ypdlbsbdwlcrofaycsiu.supabase.co
   
   VITE_SUPABASE_PROJECT_ID = ypdlbsbdwlcrofaycsiu
   
   VITE_SUPABASE_PUBLISHABLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGxic2Jkd2xjcm9mYXljc2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTU3MTAsImV4cCI6MjA5NDc3MTcxMH0.1JZZ53hxu6-zvAL-f8frF8XaQa9I2zArmwH_Hu9rQbY
   
   VITE_SUPABASE_URL = https://ypdlbsbdwlcrofaycsiu.supabase.co
   ```

**6. Deploy!**
   ```
   Klick "Deploy" in Vercel
   ⏳ Warte 1-2 Minuten
   ✅ Deine Seite läuft!
   ```

**7. Domain einrichten (scalelabsstudio.com)**
   - Vercel Project → Settings → Domains
   - Füge deine Domain ein
   - Folge den DNS-Anweisungen

---

### 📚 **Hilfreiche Dateien:**
- `DEPLOYMENT.md` - Detaillierte Anleitung mit Screenshots
- `README.md` - Projekt-Info
- `vercel.json` - Vercel-Konfiguration (schon ready!)

---

### ❓ **Bei Problemen:**
- Build-Fehler? → Schau Vercel Logs (Dashboard)
- Dependencies-Fehler? → `npm install` lokal + git push
- Supabase-Fehler? → Env Vars in Vercel prüfen

---

## ✨ **Das wars!**

Deine Seite läuft jetzt auf Vercel statt Lovable.
- Lovable kannst du jetzt canceln
- Jede Änderung: `git push` → Auto-Deploy ✅

