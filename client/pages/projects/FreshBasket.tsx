import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Code2, Database, Layout, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function FreshBasket() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="bg-green-50 py-12 lg:py-20">
                <div className="container-width">
                    <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors text-sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex gap-2 mb-4">
                            <Badge className="bg-green-600 hover:bg-green-700">E-Commerce</Badge>
                            <Badge variant="outline">Mobile App</Badge>
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-green-950">Fresh Basket</h1>
                        <p className="text-lg text-green-800 leading-relaxed max-w-2xl">
                            Revolutionizing fresh produce delivery with a custom-built e-commerce platform and logistics management system.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Image */}
            <section className="-mt-12 pb-12">
                <div className="container-width">
                    <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                            alt="Fresh Basket App"
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
                            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                            <p className="text-base text-muted-foreground mb-4">
                                Fresh Basket, a growing grocery delivery startup, was struggling with off-the-shelf e-commerce platforms that couldn't handle the complexities of fresh produce inventory (perishability, weight variations) and efficient last-mile delivery routing.
                            </p>
                            <p className="text-base text-muted-foreground">
                                They needed a solution that could manage real-time stock updates, optimize delivery routes for drivers, and provide a seamless ordering experience for customers.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                            <p className="text-base text-muted-foreground mb-4">
                                SE TECH developed a fully custom ecosystem comprising:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Customer Mobile App:</strong> Native iOS and Android apps for easy ordering and tracking.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Inventory Management System:</strong> Real-time tracking with spoilage alerts and batch management.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <span className="text-sm"><strong>Driver App & Routing:</strong> AI-powered route optimization to ensure timely deliveries.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding bg-secondary/30">
                <div className="container-width">
                    <h2 className="text-2xl font-bold mb-8 text-center">Technologies Used</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <Smartphone className="h-6 w-6" />, name: "React Native" },
                            { icon: <Code2 className="h-6 w-6" />, name: "Node.js" },
                            { icon: <Database className="h-6 w-6" />, name: "PostgreSQL" },
                            { icon: <Layout className="h-6 w-6" />, name: "AWS" }
                        ].map((tech, i) => (
                            <Card key={i} className="text-center hover:border-green-500 transition-colors">
                                <CardContent className="pt-6 pb-4">
                                    <div className="mx-auto w-fit mb-3 text-green-600">{tech.icon}</div>
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
                    <h2 className="text-2xl font-bold mb-8 text-center">Key Outcomes</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { value: "40%", label: "Increase in Orders" },
                            { value: "30%", label: "Reduction in Delivery Time" },
                            { value: "99.9%", label: "Inventory Accuracy" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-6 bg-green-50 rounded-xl">
                                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                                <div className="text-green-800 font-medium text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-green-900 text-white">
                <div className="container-width text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Build Your Success Story?</h2>
                    <Button size="lg" className="rounded-full px-6 bg-white text-green-900 hover:bg-green-50" asChild>
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
