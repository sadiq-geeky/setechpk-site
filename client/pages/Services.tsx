import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, Cloud, Code2, Database, Layout, PenTool, Server, Settings, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function Services() {
    const services = [
        {
            id: "custom-software",
            icon: <Code2 className="h-10 w-10 text-primary" />,
            title: "Custom Software Development",
            desc: "Tailor-made software solutions designed to meet your specific business requirements. We build scalable, secure, and high-performance applications.",
            features: ["Requirement Analysis", "Architecture Design", "Full-Stack Development", "QA & Testing"]
        },
        {
            id: "crm-erp",
            icon: <Database className="h-10 w-10 text-primary" />,
            title: "CRM & ERP Development",
            desc: "Streamline your business operations with custom CRM and ERP systems. Automate workflows, manage customer data, and gain actionable insights.",
            features: ["Workflow Automation", "Data Centralization", "Custom Reporting", "Third-party Integrations"]
        },
        {
            id: "web-apps",
            icon: <AppWindow className="h-10 w-10 text-primary" />,
            title: "Web Applications",
            desc: "Modern, responsive, and progressive web applications (PWAs) that deliver a native-app-like experience in the browser.",
            features: ["React / Next.js", "Responsive Design", "PWA Support", "SEO Optimization"]
        },
        {
            id: "mobile-apps",
            icon: <Smartphone className="h-10 w-10 text-primary" />,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications for iOS and Android. We create engaging mobile experiences for your users.",
            features: ["React Native / Flutter", "iOS & Android", "App Store Submission", "Maintenance"]
        },
        {
            id: "cloud-devops",
            icon: <Cloud className="h-10 w-10 text-primary" />,
            title: "Cloud & DevOps",
            desc: "Optimize your infrastructure with our cloud and DevOps services. We ensure high availability, security, and automated deployments.",
            features: ["AWS / Azure / GCP", "CI/CD Pipelines", "Containerization", "Infrastructure as Code"]
        },
        {
            id: "api-integrations",
            icon: <Server className="h-10 w-10 text-primary" />,
            title: "API Integrations & Automations",
            desc: "Connect your disparate systems and automate manual tasks. We integrate with popular tools like Salesforce, HubSpot, Slack, and more.",
            features: ["REST / GraphQL APIs", "Webhook Integration", "Custom Connectors", "Data Synchronization"]
        },
        {
            id: "dedicated-teams",
            icon: <Users className="h-10 w-10 text-primary" />,
            title: "Dedicated Teams",
            desc: "Scale your development capacity with our dedicated teams. We provide vetted developers who work exclusively on your projects.",
            features: ["Vetted Talent", "Flexible Scaling", "Direct Communication", "Timezone Alignment"]
        },
        {
            id: "support-maintenance",
            icon: <Settings className="h-10 w-10 text-primary" />,
            title: "Support & Maintenance",
            desc: "Keep your software running smoothly with our support and maintenance packages. We handle updates, bug fixes, and performance monitoring.",
            features: ["24/7 Monitoring", "Security Updates", "Bug Fixes", "Performance Tuning"]
        },
        {
            id: "ui-ux",
            icon: <PenTool className="h-10 w-10 text-primary" />,
            title: "UI/UX Design",
            desc: "Create intuitive and visually appealing user interfaces. Our design team focuses on user experience to drive engagement and conversion.",
            features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
        }
    ];

    return (
        <div className="overflow-hidden">
            <SEO
                title="Our Services - Comprehensive Technology Solutions"
                description="SE TECH offers complete technology services: Custom Software Development, CRM/ERP, Web & Mobile Apps, Cloud & DevOps, API Integrations, UI/UX Design, Dedicated Teams, and 24/7 Support & Maintenance."
                keywords="custom software development, CRM development, ERP development, web applications, mobile app development, cloud solutions, DevOps, API integrations, dedicated development teams, UI/UX design, software maintenance"
            />
            {/* Hero */}
            <section className="bg-secondary/30 py-12 lg:py-20">
                <div className="container-width text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-3">Our Expertise</Badge>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Comprehensive Technology Services</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        From concept to deployment, we provide end-to-end solutions to help your business thrive in the digital age.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader className="pb-2">
                                    <div className="mb-3 bg-primary/5 w-fit p-2.5 rounded-xl">
                                        {service.icon}
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4 min-h-[60px]">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-1.5">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-xs font-medium text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary/5">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        We understand that every business is unique. Contact us to discuss your specific requirements.
                    </p>
                    <Button size="lg" className="rounded-full px-6" asChild>
                        <Link to="/contact">Get a Quote</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
