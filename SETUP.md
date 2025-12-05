# Quantitative Trading Website - Setup & Deployment Guide

## 📁 Files to Edit for Your Links

All your personal links are located in a single file:

### **`src/pages/Index.tsx`** (Lines 5-7)

```javascript
const GOOGLE_FORM_URL = "https://forms.google.com/YOUR_FORM_ID";
const LINKEDIN_URL = "https://linkedin.com/in/YOUR_PROFILE";
const EMAIL = "contact@example.com";
```

**Replace these with:**
- `GOOGLE_FORM_URL`: Your Google Form link for client applications
- `LINKEDIN_URL`: Your LinkedIn profile URL
- `EMAIL`: Your professional email address

### **`index.html`** (Line 7)

Update your name in the meta title:
```html
<title>Quantitative Trading Systems — Private Clients | Your Name Here</title>
```

---

## 🖥️ Option 1: Home Server Deployment (Old Computer)

### Prerequisites
- Node.js 18+ installed
- npm or bun package manager

### Step 1: Build the Production Files

```bash
# Clone or copy your project to the server
cd /path/to/your/project

# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist/` folder with all static files.

### Step 2: Serve with a Static Server

**Option A: Using `serve` (Simplest)**
```bash
# Install serve globally
npm install -g serve

# Serve the dist folder
serve -s dist -l 3000
```

**Option B: Using Nginx (Recommended for Production)**

1. Install Nginx:
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

2. Create config file `/etc/nginx/sites-available/trading-site`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;  # or your local IP like 192.168.1.100
    
    root /path/to/your/project/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. Enable and start:
```bash
sudo ln -s /etc/nginx/sites-available/trading-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**Option C: Using Python (Quick Testing)**
```bash
cd dist
python3 -m http.server 8080
```

### Step 3: Access Your Site
- Local network: `http://192.168.x.x:3000` (your server's IP)
- Same machine: `http://localhost:3000`

### Step 4: Run on Startup (Optional)

Create a systemd service `/etc/systemd/system/trading-site.service`:
```ini
[Unit]
Description=Trading Website
After=network.target

[Service]
Type=simple
User=your-username
WorkingDirectory=/path/to/your/project
ExecStart=/usr/bin/npx serve -s dist -l 3000
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Enable it:
```bash
sudo systemctl enable trading-site
sudo systemctl start trading-site
```

---

## 🚀 Option 2: Vercel Deployment (Free, Easiest)

### Step 1: Push to GitHub (if not already)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Vite - just click **Deploy**
5. Your site is live at `your-project.vercel.app`

### Custom Domain on Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

---

## 📦 Option 3: GitHub Pages (Free)

### Step 1: Update `vite.config.ts`

Add base path (if deploying to `username.github.io/repo-name`):
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

### Step 2: Build and Deploy

**Manual Method:**
```bash
npm run build
# Copy dist/ contents to gh-pages branch
```

**Automated Method (GitHub Actions):**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install and Build
        run: |
          npm install
          npm run build
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Step 3: Enable GitHub Pages
1. Go to repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`

---

## ☁️ Option 4: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**

---

## 🔒 Option 5: Cloudflare Pages (Free, Fast)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select your repository
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy

---

## 🌐 Making Home Server Accessible from Internet

### Option A: Port Forwarding
1. Log into your router (usually `192.168.1.1`)
2. Find "Port Forwarding" settings
3. Forward external port 80 → internal IP:3000
4. Use your public IP or a dynamic DNS service

### Option B: Cloudflare Tunnel (Recommended, Secure)
```bash
# Install cloudflared
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
chmod +x cloudflared

# Login and create tunnel
./cloudflared tunnel login
./cloudflared tunnel create trading-site
./cloudflared tunnel route dns trading-site yourdomain.com
./cloudflared tunnel run trading-site
```

### Option C: Tailscale / ZeroTier (Private Network)
- Great for accessing your site from anywhere securely
- No port forwarding needed

---

## 📋 Quick Reference

| Method | Cost | Difficulty | Best For |
|--------|------|------------|----------|
| Home Server | Free | Medium | Full control, learning |
| Vercel | Free | Easy | Quick deployment |
| GitHub Pages | Free | Easy | Static sites |
| Netlify | Free | Easy | CI/CD included |
| Cloudflare Pages | Free | Easy | Global CDN |

---

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ❓ Need Help?

- Vite docs: https://vitejs.dev
- Vercel docs: https://vercel.com/docs
- Nginx docs: https://nginx.org/en/docs/
