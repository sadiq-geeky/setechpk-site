#!/bin/bash

# SE TECH Website - Deployment Preparation Script
# This script prepares your website for cPanel deployment

echo "=========================================="
echo "SE TECH Website - Deployment Preparation"
echo "=========================================="
echo ""

# Step 1: Clean previous builds
echo "📦 Step 1: Cleaning previous builds..."
if [ -d "dist" ]; then
    rm -rf dist
    echo "✅ Cleaned old dist folder"
else
    echo "✅ No previous dist folder found"
fi

# Step 2: Build production bundle
echo ""
echo "🏗️  Step 2: Building production bundle..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please check errors above."
    exit 1
fi

# Step 3: Copy .htaccess to dist
echo ""
echo "📄 Step 3: Adding .htaccess to dist folder..."
if [ -f ".htaccess" ]; then
    cp .htaccess dist/.htaccess
    echo "✅ .htaccess copied to dist/"
else
    echo "⚠️  .htaccess not found in root. Creating one..."
    cat > dist/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  RewriteCond %{HTTP:Authorization} .
  RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
  
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 day"
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

Options -Indexes
AddDefaultCharset UTF-8
EOF
    echo "✅ .htaccess created in dist/"
fi

# Step 4: Create deployment package
echo ""
echo "📦 Step 4: Creating deployment package..."
cd dist
zip -r ../setech-deployment.zip .
cd ..
echo "✅ Created setech-deployment.zip"

# Step 5: Display file list
echo ""
echo "📋 Step 5: Files ready for deployment:"
echo "----------------------------------------"
ls -lh dist/
echo "----------------------------------------"

# Step 6: Show deployment stats
echo ""
echo "📊 Deployment Statistics:"
echo "----------------------------------------"
DIST_SIZE=$(du -sh dist | cut -f1)
ZIP_SIZE=$(du -sh setech-deployment.zip | cut -f1)
FILE_COUNT=$(find dist -type f | wc -l)

echo "Total files: $FILE_COUNT"
echo "Dist folder size: $DIST_SIZE"
echo "Zip file size: $ZIP_SIZE"
echo "----------------------------------------"

# Step 7: Final instructions
echo ""
echo "✅ Deployment package ready!"
echo ""
echo "📤 Next Steps:"
echo "1. Upload 'setech-deployment.zip' to cPanel File Manager"
echo "2. Extract it in your public_html directory"
echo "3. Or manually upload all files from 'dist/' folder"
echo "4. Visit your website to verify"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo ""
echo "=========================================="
echo "🚀 Ready for deployment!"
echo "=========================================="
