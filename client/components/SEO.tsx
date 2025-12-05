import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonical?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

export function SEO({
    title,
    description,
    keywords = "software development, custom software, CRM, ERP, web applications, mobile apps, Pakistan, Dubai, technology solutions, SE TECH",
    ogImage = "https://setech.pk/logo.png",
    ogType = "website",
    canonical,
    author = "SE TECH Pvt Ltd",
    publishedTime,
    modifiedTime
}: SEOProps) {
    const location = useLocation();
    const siteUrl = "https://setech.pk";
    const fullUrl = canonical || `${siteUrl}${location.pathname}`;
    const fullTitle = title.includes("SE TECH") ? title : `${title} | SE TECH`;

    useEffect(() => {
        // Update document title
        document.title = fullTitle;

        // Remove existing meta tags
        const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
        existingMetas.forEach(meta => meta.remove());

        // Helper function to create meta tags
        const createMetaTag = (name: string, content: string, property = false) => {
            const meta = document.createElement('meta');
            meta.setAttribute(property ? 'property' : 'name', name);
            meta.setAttribute('content', content);
            meta.setAttribute('data-seo', 'true');
            document.head.appendChild(meta);
        };

        // Standard meta tags
        createMetaTag('description', description);
        createMetaTag('keywords', keywords);
        createMetaTag('author', author);
        createMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        createMetaTag('googlebot', 'index, follow');

        // Open Graph tags
        createMetaTag('og:title', fullTitle, true);
        createMetaTag('og:description', description, true);
        createMetaTag('og:type', ogType, true);
        createMetaTag('og:url', fullUrl, true);
        createMetaTag('og:image', ogImage, true);
        createMetaTag('og:image:alt', title, true);
        createMetaTag('og:site_name', 'SE TECH', true);
        createMetaTag('og:locale', 'en_US', true);

        // Twitter Card tags
        createMetaTag('twitter:card', 'summary_large_image');
        createMetaTag('twitter:title', fullTitle);
        createMetaTag('twitter:description', description);
        createMetaTag('twitter:image', ogImage);
        createMetaTag('twitter:image:alt', title);
        createMetaTag('twitter:site', '@setech');
        createMetaTag('twitter:creator', '@setech');

        // Additional SEO tags
        createMetaTag('theme-color', '#ea580c');
        createMetaTag('mobile-web-app-capable', 'yes');
        createMetaTag('apple-mobile-web-app-capable', 'yes');
        createMetaTag('apple-mobile-web-app-status-bar-style', 'default');
        createMetaTag('apple-mobile-web-app-title', 'SE TECH');
        createMetaTag('application-name', 'SE TECH');

        // Article-specific tags (if applicable)
        if (publishedTime) {
            createMetaTag('article:published_time', publishedTime, true);
        }
        if (modifiedTime) {
            createMetaTag('article:modified_time', modifiedTime, true);
        }

        // Canonical link
        const existingCanonical = document.querySelector('link[rel="canonical"]');
        if (existingCanonical) {
            existingCanonical.setAttribute('href', fullUrl);
        } else {
            const canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            canonical.setAttribute('href', fullUrl);
            document.head.appendChild(canonical);
        }

        // Language
        document.documentElement.lang = 'en';

        // Cleanup function
        return () => {
            const metas = document.querySelectorAll('meta[data-seo="true"]');
            metas.forEach(meta => meta.remove());
        };
    }, [fullTitle, description, keywords, ogImage, ogType, fullUrl, author, publishedTime, modifiedTime]);

    return null;
}
