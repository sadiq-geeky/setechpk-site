# SE TECH Website - cPanel Deployment Guide

## Overview
This guide will help you deploy the SE TECH React/Vite website to cPanel hosting.

## Prerequisites
- cPanel hosting account
- Domain configured (setech.pk)
- SSH/FTP access (optional but helpful)
- Node.js installed locally (for building)

---

## Step 1: Build the Production Bundle

Before deploying, you need to create a production-ready build of your website.

### Commands to Run:
```bash
# Navigate to your project directory
cd /var/www/setechpk-site

# Build the production bundle
npm run build
```

This will create a `dist` folder with all optimized files.

---

## Step 2: Prepare Files for Upload

### What to Upload:
After building, you only need to upload the **contents** of the `dist` folder.

**Files/Folders to Upload from `dist/`:**
- `index.html` (Main HTML file)
- `assets/` (Folder containing CSS and JS bundles)
- `logo.png` (Your logo)
- `favicon.ico` (Website icon)
- `robots.txt` (SEO file)
- `sitemap.xml` (SEO file)

**DO NOT upload:**
- `node_modules/` ❌
- `client/` ❌
- `package.json` ❌
- `vite.config.ts` ❌
- Any development files ❌

---

## Step 3: Configure .htaccess for React Router

Since this is a Single Page Application (SPA) with React Router, you need to configure `.htaccess` to handle client-side routing.

### Create `.htaccess` file:
Create a file named `.htaccess` in the root of your public_html directory (or domain folder).

**`.htaccess` content:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle Authorization Header
  RewriteCond %{HTTP:Authorization} .
  RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html to allow client-side routing
  RewriteRule ^ index.html [L]
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Disable directory browsing
Options -Indexes

# Set default charset
AddDefaultCharset UTF-8
```

---

## Step 4: Upload to cPanel

### Option A: File Manager (Easy)

1. **Login to cPanel**
   - Go to your hosting provider's cPanel login
   - Enter your credentials

2. **Navigate to File Manager**
   - Find "File Manager" in cPanel
   - Open your domain's public directory
     - Usually `public_html/` for main domain
     - Or `public_html/subdomain/` for subdomain

3. **Clear Existing Files** (if any)
   - Select all old files
   - Delete them (backup first if needed!)

4. **Upload Files**
   - Click "Upload" button
   - Select all files from your local `dist/` folder
   - Wait for upload to complete

5. **Create .htaccess**
   - Click "New File"
   - Name it `.htaccess`
   - Edit and paste the content from Step 3

### Option B: FTP (Recommended for large files)

1. **Use FTP Client** (FileZilla, Cyberduck, etc.)
   - Host: ftp.yourdomain.com (replace with your domain)
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21

2. **Navigate to public_html**

3. **Upload dist contents**
   - Select all contents of `dist/` folder
   - Drag and drop to `public_html/`

4. **Upload .htaccess**
   - Create .htaccess file with content from Step 3
   - Upload to `public_html/`

---

## Step 5: Verify Deployment

### Checklist:
1. ✅ Visit your domain: `https://setech.pk`
2. ✅ Check home page loads correctly
3. ✅ Test navigation (About, Services, Products, etc.)
4. ✅ Verify all routes work
5. ✅ Test on mobile device
6. ✅ Check browser console for errors
7. ✅ Verify logo and images load
8. ✅ Test contact form
9. ✅ Verify robots.txt: `https://setech.pk/robots.txt`
10. ✅ Verify sitemap.xml: `https://setech.pk/sitemap.xml`

---

## Step 6: Post-Deployment Configuration

### SSL Certificate (HTTPS)
1. Go to cPanel → SSL/TLS
2. Install free Let's Encrypt certificate
3. Or use your hosting provider's free SSL
4. Force HTTPS redirect (add to .htaccess):
```apache
# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Domain Configuration
If deploying to subdomain:
1. Create subdomain in cPanel
2. Point it to correct directory
3. Update DNS if needed

---

## Quick Deployment Checklist

### Before Upload:
- [ ] Run `npm run build` successfully
- [ ] Test build locally with `npm run preview`
- [ ] Backup existing site (if any)
- [ ] Verify all images and assets are in dist/

### During Upload:
- [ ] Clear old files from public_html
- [ ] Upload all dist/ contents
- [ ] Create/upload .htaccess file
- [ ] Set correct file permissions (644 for files, 755 for directories)

### After Upload:
- [ ] Test website URL
- [ ] Check all pages/routes
- [ ] Test on mobile
- [ ] Enable SSL/HTTPS
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics

---

## Troubleshooting

### Issue: 404 on page refresh
**Solution**: Check .htaccess is correct and mod_rewrite is enabled

### Issue: CSS/JS not loading
**Solution**: 
- Check file paths in index.html (should be relative)
- Clear browser cache
- Check file permissions

### Issue: Images not showing
**Solution**:
- Verify images are in dist folder
- Check image paths are correct
- Check file permissions (644)

### Issue: Blank page
**Solution**:
- Check browser console for errors
- Verify all files uploaded correctly
- Check index.html exists in root

### Issue: Routes not working
**Solution**:
- Verify .htaccess is in correct location
- Check if mod_rewrite is enabled on server
- Contact hosting support if needed

---

## File Structure on cPanel

After deployment, your `public_html/` should look like:

```
public_html/
├── .htaccess           # Routing configuration
├── index.html          # Main HTML file
├── favicon.ico         # Site icon
├── logo.png           # Your logo
├── robots.txt         # SEO file
├── sitemap.xml        # SEO file
└── assets/            # Compiled CSS/JS
    ├── index-[hash].css
    └── index-[hash].js
```

---

## Updating the Website

When you need to update your website:

1. Make changes locally
2. Run `npm run build`
3. Upload new `dist/` contents to cPanel
4. Clear browser cache
5. Verify changes

**Pro Tip**: Keep .htaccess file - don't delete it when updating!

---

## Performance Tips

1. **Enable Gzip Compression** (already in .htaccess)
2. **Enable Browser Caching** (already in .htaccess)
3. **Use CDN** (optional - Cloudflare free tier)
4. **Optimize images before uploading**
5. **Minify code** (Vite does this automatically)

---

## Security Tips

1. Keep .htaccess file secure
2. Use strong cPanel password
3. Enable SSL/HTTPS
4. Regular backups
5. Keep files updated
6. Monitor access logs

---

## Need Help?

If you encounter issues:
1. Check your hosting provider's documentation
2. Contact their support (they can enable mod_rewrite)
3. Check browser console for specific errors
4. Verify DNS settings are correct

---

**Last Updated**: December 5, 2025
**Deployment Type**: Static SPA (React + Vite)
**Hosting**: cPanel/Apache
