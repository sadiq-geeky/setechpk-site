import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function About() {
    return (
        <div className="overflow-hidden">
            <SEO
                title="About SE TECH - Empowering Businesses Through Innovation"
                description="Learn about SE TECH, a global technology partner with presence in Pakistan and Dubai. Our mission is to deliver high-quality, scalable software solutions that drive business growth. International standards, expert team, 24/7 support."
                keywords="about SE TECH, software company Pakistan, software company Dubai, technology solutions, global IT services, software development team, mission vision values, international quality standards"
            />
            {/* Hero */}
            <section className="bg-secondary/30 py-12 lg:py-20">
                <div className="container-width text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-3">About SE TECH</Badge>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Empowering Businesses Through Innovation</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We are a global technology partner dedicated to bridging the gap between complex business challenges and elegant digital solutions. With a presence in Pakistan and Dubai, we serve clients worldwide.
                    </p>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-primary/5 border-none">
                            <CardContent className="pt-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                                <p className="text-sm text-muted-foreground">
                                    To deliver high-quality, scalable, and innovative software solutions that drive business growth and efficiency.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/5 border-none">
                            <CardContent className="pt-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                                    <Lightbulb className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                                <p className="text-sm text-muted-foreground">
                                    To be a globally recognized leader in technology services, known for excellence, integrity, and customer success.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-primary/5 border-none">
                            <CardContent className="pt-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Our Values</h3>
                                <p className="text-sm text-muted-foreground">
                                    Innovation, Integrity, Collaboration, and Customer-Centricity are at the core of everything we do.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="outline" className="mb-3">Why Choose Us</Badge>
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">What Makes SE TECH Unique?</h2>
                            <p className="text-base text-muted-foreground mb-6">
                                We don't just write code; we build partnerships. Our approach is rooted in understanding your business deeply and delivering solutions that matter.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: <Globe className="h-5 w-5 text-primary" />,
                                        title: "Global Standards",
                                        desc: "International quality standards with local expertise."
                                    },
                                    {
                                        icon: <Users className="h-5 w-5 text-primary" />,
                                        title: "Expert Team",
                                        desc: "Vetted developers and domain experts."
                                    },
                                    {
                                        icon: <Shield className="h-5 w-5 text-primary" />,
                                        title: "Reliable Support",
                                        desc: "24/7 support and maintenance for your peace of mind."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-base">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team Collaboration"
                                className="relative rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="section-padding">
                <div className="container-width text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-8">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Fintech", "Healthcare", "E-Commerce", "Education", "Real Estate", "Logistics", "Manufacturing", "SaaS"].map((industry) => (
                            <div key={industry} className="p-4 border rounded-lg hover:border-primary hover:text-primary transition-colors cursor-default">
                                <span className="font-semibold text-base">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
                    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                        Whether you need a custom solution or a dedicated team, we are here to help you succeed.
                    </p>
                    <Button size="lg" variant="secondary" className="rounded-full px-6" asChild>
                        <Link to="/contact">Work With Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
