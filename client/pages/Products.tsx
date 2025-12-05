import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function Products() {
    return (
        <div className="overflow-hidden">
            <SEO
                title="Our Products - Enterprise-Grade SaaS Solutions"
                description="Explore SE TECH's powerful SaaS products: SET CRM for customer relationship management with advanced automation and analytics, and CXB platform for unified customer experience management."
                keywords="SET CRM, CXB platform, CRM software, customer relationship management, customer experience platform, sales automation, workflow automation, lead scoring, customer journey tracking"
            />
            {/* Hero */}
            <section className="bg-secondary/30 py-12 lg:py-20">
                <div className="container-width text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-3">Our Products</Badge>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Enterprise-Grade SaaS Solutions</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Powerful platforms designed to streamline operations, enhance customer experience, and accelerate growth.
                    </p>
                </div>
            </section>

            {/* Products List */}
            <section className="section-padding">
                <div className="container-width space-y-16">

                    {/* SET CRM */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-xl overflow-hidden shadow-xl border bg-slate-900 aspect-video flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-50"></div>
                                <h3 className="text-3xl font-bold text-white relative z-10">SET CRM</h3>
                                {/* Placeholder for actual screenshot */}
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="SET CRM Dashboard"
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Badge className="mb-3">Customer Relationship Management</Badge>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">SET CRM</h2>
                            <p className="text-base text-muted-foreground mb-6">
                                An advanced CRM tailored for businesses needing automation, workflows, analytics, and customer management.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {["Advanced Lead Scoring", "Automated Workflows", "Sales Pipeline Management", "Detailed Analytics"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="rounded-full px-6" asChild>
                                <Link to="/products/set-crm">
                                    Explore SET CRM <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* CXB */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <Badge className="mb-3 bg-teal-600 hover:bg-teal-700">Customer Experience</Badge>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">CXB Platform</h2>
                            <p className="text-base text-muted-foreground mb-6">
                                A communication and experience-based platform designed to unify customer interactions and drive satisfaction.
                            </p>
                            <ul className="space-y-2 mb-6">
                                {["Unified Communication Hub", "Customer Journey Tracking", "Feedback Management", "Multi-channel Integration"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm">
                                        <CheckCircle className="h-4 w-4 text-teal-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button size="lg" className="rounded-full px-6 bg-teal-600 hover:bg-teal-700" asChild>
                                <Link to="/products/cxb">
                                    Explore CXB <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <div className="relative rounded-xl overflow-hidden shadow-xl border bg-teal-900 aspect-video flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/20 opacity-50"></div>
                                <h3 className="text-3xl font-bold text-white relative z-10">CXB</h3>
                                {/* Placeholder for actual screenshot */}
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                    alt="CXB Dashboard"
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
