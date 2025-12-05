import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code2, Cpu, Globe, Rocket, Shield, Users, Zap, Layers, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { StructuredData } from "@/components/StructuredData";
import { SEO } from "@/components/SEO";

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="overflow-hidden">
            <SEO
                title="SE TECH - Technology Solutions That Drive Success"
                description="Leading software development company in Pakistan & Dubai. Custom software, CRM/ERP development, web & mobile apps, cloud solutions, and API integrations. Transform your business with cutting-edge technology."
                keywords="software development Pakistan, software development Dubai, custom software development, CRM development, ERP development, web application development, mobile app development, cloud solutions, API integrations, SE TECH, technology solutions Pakistan"
                ogType="website"
            />
            <StructuredData />
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center pt-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-background to-background"></div>

                <div className="container-width relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="space-y-5"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-primary bg-primary/10">
                                <Rocket className="mr-2 h-3 w-3" />
                                Innovating the Future
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-3xl lg:text-5xl font-bold tracking-tight leading-tight">
                                Technology Solutions <br />
                                <span className="text-gradient">That Drive Success</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                We craft digital experiences that transform businesses. From custom software to enterprise solutions, we are your partner in innovation.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                                <Button size="lg" className="rounded-full px-6 h-10 text-sm" asChild>
                                    <Link to="/contact">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-6 h-10 text-sm" asChild>
                                    <Link to="/products">View Products</Link>
                                </Button>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 border-t">
                                <div>
                                    <div className="text-xl font-bold text-foreground">100+</div>
                                    <div className="text-xs text-muted-foreground">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-foreground">50+</div>
                                    <div className="text-xs text-muted-foreground">Expert Engineers</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-foreground">99%</div>
                                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Dashboard Preview"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-2.5 glass rounded-xl z-20"
                            >
                                <BarChart3 className="h-5 w-5 text-primary" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 p-2.5 glass rounded-xl z-20"
                            >
                                <Zap className="h-5 w-5 text-yellow-500" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Overview */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <Badge variant="outline" className="mb-2">What We Do</Badge>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-3">End-to-End Technology Services</h2>
                        <p className="text-base text-muted-foreground">
                            We provide comprehensive software solutions, from custom development to cloud integrations and dedicated teams.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Code2 className="h-6 w-6 text-primary" />,
                                title: "Custom Software",
                                desc: "Tailored solutions built to address your specific business challenges and goals."
                            },
                            {
                                icon: <Layers className="h-6 w-6 text-primary" />,
                                title: "Cloud & Integrations",
                                desc: "Seamlessly connect your systems and leverage the power of the cloud."
                            },
                            {
                                icon: <Users className="h-6 w-6 text-primary" />,
                                title: "Dedicated Teams",
                                desc: "Extend your workforce with our skilled developers and technical experts."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="mb-3">{item.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                                <Link to="/services" className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                        <div className="max-w-2xl">
                            <Badge variant="outline" className="mb-2">Our Products</Badge>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Enterprise-Grade Solutions</h2>
                            <p className="text-base text-muted-foreground">
                                Powerful SaaS platforms designed to streamline your operations.
                            </p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/products">View All Products</Link>
                        </Button>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <Card className="overflow-hidden border-0 shadow-lg bg-slate-900 text-white">
                            <div className="grid md:grid-cols-2 h-full">
                                <div className="p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-2">SET CRM</h3>
                                    <p className="text-slate-300 text-sm mb-4">Advanced CRM for automation, workflows, and analytics.</p>
                                    <ul className="space-y-1 mb-6">
                                        <li className="flex items-center gap-2 text-xs text-slate-300">
                                            <CheckCircle className="h-3 w-3 text-primary" /> Automation Workflows
                                        </li>
                                        <li className="flex items-center gap-2 text-xs text-slate-300">
                                            <CheckCircle className="h-3 w-3 text-primary" /> Customer Management
                                        </li>
                                    </ul>
                                    <Button size="sm" className="w-fit" asChild>
                                        <Link to="/products/set-crm">Explore CRM</Link>
                                    </Button>
                                </div>
                                <div className="bg-slate-800/50 relative min-h-[180px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                        alt="SET CRM"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                                    />
                                </div>
                            </div>
                        </Card>

                        <Card className="overflow-hidden border-0 shadow-lg bg-orange-900 text-white">
                            <div className="grid md:grid-cols-2 h-full">
                                <div className="p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold mb-2">CXB</h3>
                                    <p className="text-orange-100 text-sm mb-4">Communication and experience-based platform for modern businesses.</p>
                                    <ul className="space-y-1 mb-6">
                                        <li className="flex items-center gap-2 text-xs text-orange-100">
                                            <CheckCircle className="h-3 w-3 text-white" /> Unified Dashboard
                                        </li>
                                        <li className="flex items-center gap-2 text-xs text-orange-100">
                                            <CheckCircle className="h-3 w-3 text-white" /> Smart Integrations
                                        </li>
                                    </ul>
                                    <Button variant="secondary" size="sm" className="w-fit" asChild>
                                        <Link to="/products/cxb">Explore CXB</Link>
                                    </Button>
                                </div>
                                <div className="bg-orange-800/50 relative min-h-[180px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                        alt="CXB"
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Projects Preview */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <Badge variant="outline" className="mb-2">Case Studies</Badge>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-3">Featured Projects</h2>
                        <p className="text-base text-muted-foreground">
                            See how we've helped other businesses achieve their goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Link to="/projects/fresh-basket" className="group">
                            <div className="relative overflow-hidden rounded-xl aspect-video mb-3">
                                <img
                                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                                    alt="Fresh Basket"
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-medium px-4 py-2 border border-white rounded-full text-sm">View Case Study</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Fresh Basket</h3>
                            <p className="text-sm text-muted-foreground">Custom e-commerce solution with real-time inventory management.</p>
                        </Link>

                        <Link to="/projects/applynext-crm" className="group">
                            <div className="relative overflow-hidden rounded-xl aspect-video mb-3">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                    alt="ApplyNext CRM"
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-medium px-4 py-2 border border-white rounded-full text-sm">View Case Study</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">ApplyNext CRM</h3>
                            <p className="text-sm text-muted-foreground">Comprehensive customer success CRM for higher education.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Integrations Preview */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="bg-primary/5 rounded-2xl p-6 text-center">
                        <h2 className="text-2xl font-bold mb-3">Seamless Integrations</h2>
                        <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-4">
                            We connect your favorite tools to create powerful automated workflows.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mb-4">
                            {["n8n", "Zapier", "Make.com", "Slack", "Salesforce"].map((tool) => (
                                <div key={tool} className="bg-background px-4 py-1.5 rounded-full shadow-sm text-sm font-semibold text-foreground">
                                    {tool}
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                            <Link to="/integrations">Explore Integrations</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <h2 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="bg-background border-none shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex gap-1 mb-3">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        "SE TECH transformed our business operations with their custom software. The team is professional, responsive, and highly skilled."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">
                                            JD
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">John Doe</div>
                                            <div className="text-xs text-muted-foreground">CEO, TechCorp</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12">
                <div className="container-width">
                    <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                            <p className="text-primary-foreground/90 text-base mb-6">
                                Let's discuss how our technology solutions can help you achieve your goals.
                            </p>
                            <Button size="lg" variant="secondary" className="rounded-full px-6 h-10 text-sm" asChild>
                                <Link to="/contact">Get Started Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
