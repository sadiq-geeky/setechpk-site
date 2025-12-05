import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronRight, LayoutDashboard, LineChart, Settings, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function SetCrm() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-900 to-slate-900"></div>
                <div className="container-width relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-4">SET CRM v2.0</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Smarter Customer <br />
                            <span className="text-primary">Relationships</span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            Transform your sales process with our AI-powered CRM. Automate workflows, track leads, and close deals faster than ever before.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="rounded-full px-6 h-10 text-base" asChild>
                                <Link to="/contact">Request Demo</Link>
                            </Button>
                            <Button variant="secondary" size="lg" className="rounded-full px-6 h-10 text-base" asChild>
                                <a href="#features">View Features</a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="container-width mt-12 relative z-10">
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="SET CRM Dashboard"
                            className="w-full h-auto object-cover opacity-90"
                        />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="section-padding">
                <div className="container-width">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Everything You Need to Grow</h2>
                        <p className="text-base text-muted-foreground">
                            Powerful features designed to help your sales team perform at their best.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
                                title: "Unified Dashboard",
                                desc: "Get a 360-degree view of your sales pipeline, tasks, and performance metrics in one place."
                            },
                            {
                                icon: <Zap className="h-6 w-6 text-primary" />,
                                title: "Workflow Automation",
                                desc: "Automate repetitive tasks like follow-ups, emails, and lead assignments to save time."
                            },
                            {
                                icon: <LineChart className="h-6 w-6 text-primary" />,
                                title: "Advanced Analytics",
                                desc: "Make data-driven decisions with real-time reporting and forecasting tools."
                            },
                            {
                                icon: <Users className="h-6 w-6 text-primary" />,
                                title: "Lead Management",
                                desc: "Capture, track, and nurture leads effectively to maximize conversion rates."
                            },
                            {
                                icon: <Settings className="h-6 w-6 text-primary" />,
                                title: "Customizable Modules",
                                desc: "Tailor the CRM to fit your unique business processes and requirements."
                            },
                            {
                                icon: <CheckCircle className="h-6 w-6 text-primary" />,
                                title: "Task Management",
                                desc: "Keep your team organized with built-in task tracking and collaboration tools."
                            }
                        ].map((feature, i) => (
                            <Card key={i} className="hover:shadow-lg transition-all">
                                <CardContent className="pt-6">
                                    <div className="mb-3 bg-primary/10 w-fit p-2.5 rounded-xl">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Why Choose SET CRM?</h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Increase Productivity", desc: "Reduce manual data entry and focus on selling." },
                                    { title: "Better Customer Insights", desc: "Understand your customers' needs and preferences." },
                                    { title: "Scalable Architecture", desc: "Grow your CRM as your business expands." },
                                    { title: "Seamless Integration", desc: "Connect with your existing tools and apps." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="mt-1 bg-primary/20 p-1 rounded-full h-fit">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-base">{benefit.title}</h4>
                                            <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent rounded-2xl transform -rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                alt="CRM Benefits"
                                className="relative rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container-width">
                    <div className="bg-primary rounded-2xl p-10 text-center text-primary-foreground relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Boost Your Sales?</h2>
                            <p className="text-primary-foreground/90 text-lg mb-6">
                                Join hundreds of businesses using SET CRM to drive growth.
                            </p>
                            <Button size="lg" variant="secondary" className="rounded-full px-6" asChild>
                                <Link to="/contact">Request a Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
