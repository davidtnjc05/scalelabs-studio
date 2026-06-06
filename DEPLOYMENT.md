# Deployment Guide für ScaleLabs Studio

Diese Anleitung zeigt dir **Schritt für Schritt**, wie du deine Seite auf Vercel deployst (und Lovable verlässt).

---

## **Phase 1: GitHub Repo erstellen** (5 min)

### Schritt 1: Repo auf GitHub erstellen
1. Öffne https://github.com/davidtnjc05 (dein GitHub Profil)
2. Klicke auf **"+"** oben rechts → **"New repository"**
3. Name: `scalelabs-studio`
4. Private oder Public? → **Public** (damit Vercel zugriff hat)
5. Klicke **"Create repository"**

### Schritt 2: Code hochladen
Öffne dein **Terminal/PowerShell** auf deinem Computer und führe diese Befehle aus:

```bash
cd /pfad/zu/scalelabs-studio-folder
git init
git add .
git commit -m "Initial commit: ScaleLabs Studio"
git branch -M main
git remote add origin https://github.com/davidtnjc05/scalelabs-studio.git
git push -u origin main
```

**Fertig!** Dein Code ist jetzt auf GitHub.

---

## **Phase 2: Auf Vercel deployen** (5 min)

### Schritt 1: Vercel Project erstellen
1. Öffne https://vercel.com/dashboard
2. Klicke auf **"Add New..."** → **"Project"**
3. Klicke auf **"Import Git Repository"**
4. Paste deine GitHub URL: `https://github.com/davidtnjc05/scalelabs-studio`
5. Klicke **"Import"**

### Schritt 2: Environment Variables setzen
Vercel wird dich jetzt fragen: **"Configure Project"**

Trage diese Variablen ein:

```
SUPABASE_PUBLISHABLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGxic2Jkd2xjcm9mYXljc2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTU3MTAsImV4cCI6MjA5NDc3MTcxMH0.1JZZ53hxu6-zvAL-f8frF8XaQa9I2zArmwH_Hu9rQbY

SUPABASE_URL = https://ypdlbsbdwlcrofaycsiu.supabase.co

VITE_SUPABASE_PROJECT_ID = ypdlbsbdwlcrofaycsiu

VITE_SUPABASE_PUBLISHABLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZGxic2Jkd2xjcm9mYXljc2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTU3MTAsImV4cCI6MjA5NDc3MTcxMH0.1JZZ53hxu6-zvAL-f8frF8XaQa9I2zArmwH_Hu9rQbY

VITE_SUPABASE_URL = https://ypdlbsbdwlcrofaycsiu.supabase.co
```

### Schritt 3: Deploy!
Klicke auf **"Deploy"** und warte. Das dauert 1-2 Minuten.

Du bekommst dann eine URL wie: `https://scalelabs-studio.vercel.app`

---

## **Phase 3: Domain umleiten** (optional, aber wichtig)

### Deine Domain (scalelabsstudio.com) zu Vercel zeigen

1. Gehe in **Vercel Dashboard** → dein Projekt
2. Klicke auf **"Settings"** → **"Domains"**
3. Trage deine Domain ein: `scalelabsstudio.com`
4. Folge den Anweisungen (DNS-Records bei deinem Domain-Provider aktualisieren)

**Dein Domain-Provider:** (Wo hast du scalelabsstudio.com registriert?)
- Wenn du weißt, sag mir Bescheid, ich helfe dir mit den DNS-Settings.

---

## **Fertig! 🚀**

Deine Seite läuft jetzt auf Vercel statt Lovable. Du kannst **Lovable jetzt canceln**.

### Nächste Schritte:
- Jede neue Änderung: `git push` → Vercel deployt automatisch
- Kundenseiten: Gleicher Prozess

---

## **Falls was nicht funktioniert:**

- **Build-Fehler:** Check Vercel Logs (Dashboard → Deployments)
- **Fehlende Dependencies:** `npm install` lokal und pushen
- **Supabase-Probleme:** .env Variablen prüfen

---

**Fragen?** Schreib mir! 💬
