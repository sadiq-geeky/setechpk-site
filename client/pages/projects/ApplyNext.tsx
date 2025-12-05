import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Code2, Database, Globe, Server } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApplyNext() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="bg-blue-50 py-12 lg:py-20">
                <div className="container-width">
                    <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors text-sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex gap-2 mb-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700">EdTech</Badge>
                            <Badge variant="outline">SaaS Product</Badge>
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-blue-950">ApplyNext CRM</h1>
                        <p className="text-lg text-blue-800 leading-relaxed max-w-2xl">
                            A comprehensive customer success and application management CRM designed specifically for higher education institutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Image */}
            <section className="-mt-12 pb-12">
                <div className="container-width">
                    <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="ApplyNext Dashboard"
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="section-padding">
                <div className="container-width">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                            <p className="text-base text-muted-foreground mb-4">
                                Universities and colleges were struggling with fragmented systems for managing student inquiries, applications, and enrollments. Data was siloed, communication was manual, and conversion rates were suffering due to slow response times.
                            </p>
                            <p className="text-base text-muted-foreground">
                                They needed a unified platform to track the entire student lifecycle from prospect to alumni.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                            <p className="text-base text-muted-foreground mb-4">
                                We engineered ApplyNext, a cloud-native CRM tailored for education. Key modules include:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Application Portal:</strong> Self-service portal for students to submit and track applications.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Admissions Workflow:</strong> Automated document verification and review stages.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Communication Hub:</strong> Integrated email and SMS for personalized outreach.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <Code2 className="h-6 w-6" />, name: "React" },
                            { icon: <Server className="h-6 w-6" />, name: "NestJS" },
                            { icon: <Database className="h-6 w-6" />, name: "MongoDB" },
                            { icon: <Globe className="h-6 w-6" />, name: "Docker" }
                        ].map((tech, i) => (
                            <Card key={i} className="text-center hover:border-blue-500 transition-colors">
                                <CardContent className="pt-6 pb-4">
                                    <div className="mx-auto w-fit mb-3 text-blue-600">{tech.icon}</div>
                                    <h3 className="font-semibold text-sm">{tech.name}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="section-padding">
                <div className="container-width">
                    <h2 className="text-2xl font-bold mb-8 text-center">Impact</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { value: "2x", label: "Faster Application Processing" },
                            { value: "25%", label: "Increase in Enrollment" },
                            { value: "100%", label: "Paperless Operations" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-blue-50 rounded-xl">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-blue-800 font-medium text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-4">Transform Your Admissions Process</h2>
                    <Button size="lg" className="rounded-full px-6 bg-white text-blue-900 hover:bg-blue-50" asChild>
                        <Link to="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
