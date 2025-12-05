import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function Projects() {
    return (
        <div className="overflow-hidden">
            <SEO
                title="Case Studies & Projects - Success Stories"
                description="Explore SE TECH's successful projects: Fresh Basket e-commerce platform and ApplyNext CRM for education consultancy. Real-world software solutions delivering measurable business results."
                keywords="case studies, software projects, Fresh Basket, ApplyNext CRM, e-commerce platform, education CRM, project portfolio, client success stories, software development showcase"
            />
            {/* Hero */}
            <section className="bg-secondary/30 py-12 lg:py-20">
                <div className="container-width text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-3">Our Work</Badge>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Success Stories</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Explore how we've helped businesses across various industries achieve their digital transformation goals.
                    </p>
                </div>
            </section>

            {/* Projects List */}
            <section className="section-padding">
                <div className="container-width space-y-12">

                    {/* Fresh Basket */}
                    <div className="group grid md:grid-cols-2 gap-6 items-center">
                        <div className="overflow-hidden rounded-xl shadow-lg aspect-video relative">
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                                alt="Fresh Basket"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Badge>E-Commerce</Badge>
                                <Badge variant="outline">Custom Development</Badge>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Fresh Basket</h2>
                            <p className="text-base text-muted-foreground mb-4">
                                A comprehensive e-commerce solution for a fresh produce delivery service. We built a custom platform with real-time inventory management, route optimization, and a seamless mobile app for customers.
                            </p>
                            <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                                <Link to="/projects/fresh-basket">
                                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* ApplyNext CRM */}
                    <div className="group grid md:grid-cols-2 gap-6 items-center">
                        <div className="md:order-2 overflow-hidden rounded-xl shadow-lg aspect-video relative">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="ApplyNext CRM"
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <div className="md:order-1">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge>EdTech</Badge>
                                <Badge variant="outline">CRM Solution</Badge>
                            </div>
                            <h2 className="text-2xl font-bold mb-3">ApplyNext CRM</h2>
                            <p className="text-base text-muted-foreground mb-4">
                                A specialized CRM for higher education institutions to manage student applications and admissions. Features include automated communication workflows, document management, and analytics.
                            </p>
                            <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                                <Link to="/projects/applynext-crm">
                                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary/5">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Let's collaborate to build something amazing.
                    </p>
                    <Button size="lg" className="rounded-full px-6" asChild>
                        <Link to="/contact">Start a Project</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
