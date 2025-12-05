import { useEffect } from 'react';

export function StructuredData() {
    useEffect(() => {
        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SE TECH Pvt Ltd",
            "alternateName": "SE TECH",
            "url": "https://setech.pk",
            "logo": "https://setech.pk/logo.png",
            "description": "Technology solutions provider specializing in custom software development, resource outsourcing, and innovative products.",
            "email": "info@setech.pk",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK",
                "addressLocality": "Pakistan"
            },
            "sameAs": [
                "https://setech.pk"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@setech.pk",
                "availableLanguage": ["English"]
            }
        };

        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development",
            "provider": {
                "@type": "Organization",
                "name": "SE TECH Pvt Ltd"
            },
            "areaServed": {
                "@type": "Country",
                "name": ["Pakistan", "United Arab Emirates", "Global"]
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Technology Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Software Development",
                            "description": "Tailored software solutions built from scratch to meet unique business requirements"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Resource Outsourcing",
                            "description": "Access skilled developers, designers, and technical experts on-demand"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Technology Consulting",
                            "description": "Expert guidance on technology strategy, architecture design, and digital transformation"
                        }
                    }
                ]
            }
        };

        // Software Product Schema (SetCRM)
        const productSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SetCRM",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Demo available"
            },
            "description": "Complete customer relationship management with powerful analytics, lead tracking, and sales intelligence",
            "provider": {
                "@type": "Organization",
                "name": "SE TECH Pvt Ltd"
            },
            "featureList": [
                "Advanced Lead Management",
                "Real-time Analytics Dashboard",
                "Workflow Automation",
                "Customer Service Management",
                "Visual Workflow Designer"
            ]
        };

        // Website Schema
        const websiteSchema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SE TECH",
            "url": "https://setech.pk",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://setech.pk/?s={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };

        // Add all schemas to the page
        const schemas = [organizationSchema, serviceSchema, productSchema, websiteSchema];

        schemas.forEach((schema, index) => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = `structured-data-${index}`;
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);
        });

        // Cleanup function
        return () => {
            schemas.forEach((_, index) => {
                const script = document.getElementById(`structured-data-${index}`);
                if (script) {
                    document.head.removeChild(script);
                }
            });
        };
    }, []);

    return null;
}
