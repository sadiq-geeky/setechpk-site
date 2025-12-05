import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, GitBranch, Link as LinkIcon, Workflow, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function Integrations() {
    return (
        <div className="overflow-hidden">
            <SEO
                title="Integrations - Connect Your Business Systems"
                description="SE TECH offers seamless integrations with n8n, Zapier, Make.com, and more. Automate workflows, sync data across platforms, and eliminate manual tasks. Expert API integration and automation services."
                keywords="API integrations, n8n automation, Zapier integrations, Make.com, workflow automation, system integration, data synchronization, API development, webhook integration, automation services"
            />
            {/* Hero */}
            <section className="bg-secondary/30 py-12 lg:py-20">
                <div className="container-width text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-3">System Integrations</Badge>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Connect Your World</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We bridge the gap between your favorite apps and services. Automate workflows, synchronize data, and boost productivity with our integration solutions.
                    </p>
                </div>
            </section>

            {/* Supported Platforms */}
            <section className="section-padding">
                <div className="container-width">
                    <h2 className="text-2xl font-bold mb-8 text-center">Platforms We Master</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-all border-primary/20">
                            <CardContent className="pt-6 text-center">
                                <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="h-24 flex items-center justify-center mx-auto mb-6 bg-white rounded-lg p-4">
                                        <img
                                            src="/integrations/zapier.png"
                                            alt="Zapier"
                                            className="h-20 w-auto object-contain hover:scale-105 transition-transform mix-blend-darken"
                                        />
                                    </div>
                                </a>
                                <h3 className="text-lg font-bold mb-2">Zapier</h3>
                                <p className="text-sm text-muted-foreground">
                                    The leader in no-code automation. We build complex Zaps to connect over 5,000 apps.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-primary/20">
                            <CardContent className="pt-6 text-center">
                                <a href="https://make.com" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="h-24 flex items-center justify-center mx-auto mb-6">
                                        <img
                                            src="/integrations/make.png"
                                            alt="Make.com"
                                            className="h-20 w-auto object-contain hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </a>
                                <h3 className="text-lg font-bold mb-2">Make.com</h3>
                                <p className="text-sm text-muted-foreground">
                                    Visual automation for complex workflows. We design scenarios that handle intricate logic and data transformation.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all border-primary/20">
                            <CardContent className="pt-6 text-center">
                                <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="h-24 flex items-center justify-center mx-auto mb-6">
                                        <img
                                            src="/integrations/n8n.png"
                                            alt="n8n"
                                            className="h-20 w-auto object-contain hover:scale-105 transition-transform"
                                        />
                                    </div>
                                </a>
                                <h3 className="text-lg font-bold mb-2">n8n</h3>
                                <p className="text-sm text-muted-foreground">
                                    Fair-code workflow automation for tech teams. We leverage n8n for full control and self-hosted solutions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Automation Use Cases</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <GitBranch className="h-5 w-5 text-primary" />,
                                        title: "Lead Capture & Routing",
                                        desc: "Automatically sync leads from Facebook Ads to your CRM and notify the sales team."
                                    },
                                    {
                                        icon: <Workflow className="h-5 w-5 text-primary" />,
                                        title: "E-commerce Fulfillment",
                                        desc: "Send order details to your logistics provider and update inventory instantly."
                                    },
                                    {
                                        icon: <LinkIcon className="h-5 w-5 text-primary" />,
                                        title: "Data Synchronization",
                                        desc: "Keep customer data consistent across your CRM, Helpdesk, and Marketing tools."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-base">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-background p-6 rounded-xl shadow-xl border">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">FB</div>
                                <ArrowRight className="text-muted-foreground h-4 w-4" />
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">Sheet</div>
                                <ArrowRight className="text-muted-foreground h-4 w-4" />
                                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">Slack</div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-1.5 bg-secondary rounded w-3/4"></div>
                                <div className="h-1.5 bg-secondary rounded w-full"></div>
                                <div className="h-1.5 bg-secondary rounded w-5/6"></div>
                            </div>
                            <div className="mt-6 p-3 bg-green-50 text-green-700 rounded-lg text-xs font-medium flex items-center gap-2">
                                <CheckCircle className="h-3 w-3" /> Workflow Executed Successfully
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-8">Why Automate?</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { icon: <Zap className="h-6 w-6 text-yellow-500" />, title: "Save Time", desc: "Eliminate manual data entry." },
                            { icon: <CheckCircle className="h-6 w-6 text-green-500" />, title: "Reduce Errors", desc: "Consistent data handling." },
                            { icon: <Activity className="h-6 w-6 text-blue-500" />, title: "Scale Faster", desc: "Handle more volume effortlessly." },
                            { icon: <LinkIcon className="h-6 w-6 text-purple-500" />, title: "Better Insights", desc: "Unified data across systems." }
                        ].map((benefit, i) => (
                            <div key={i} className="p-4 border rounded-xl">
                                <div className="mx-auto w-fit mb-3">{benefit.icon}</div>
                                <h3 className="font-bold mb-1 text-sm">{benefit.title}</h3>
                                <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary/5">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h2>
                    <Button size="lg" className="rounded-full px-6" asChild>
                        <Link to="/contact">Get a Consultation</Link>
                    </Button>

                    {/* Trademark Disclaimer */}
                    <p className="text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
                        All trademarks, logos, and brand names are the property of their respective owners. Zapier, Make.com, and n8n logos are used to show our integration capabilities. All company, product, and service names are for identification purposes only. Use of these names, trademarks, and brands does not imply endorsement.
                    </p>
                </div>
            </section>
        </div>
    );
}

// Helper component for the benefits section
function Activity({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    );
}
