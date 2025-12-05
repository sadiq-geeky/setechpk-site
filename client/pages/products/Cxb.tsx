import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, BarChart2, CheckCircle, Globe, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cxb() {
    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-teal-950 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-teal-950 to-teal-950"></div>
                <div className="container-width relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-teal-500 hover:bg-teal-600 text-white">CXB Platform</Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Elevate Your <br />
                            <span className="text-teal-400">Customer Experience</span>
                        </h1>
                        <p className="text-lg text-teal-100 mb-8 leading-relaxed">
                            A unified platform for communication, feedback, and experience management. Connect with your customers on a deeper level.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button size="lg" className="rounded-full px-6 h-10 text-base bg-teal-500 hover:bg-teal-600 text-white" asChild>
                                <Link to="/contact">Get Started</Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-6 h-10 text-base border-teal-700 text-teal-100 hover:bg-teal-900 hover:text-white" asChild>
                                <a href="#features">Learn More</a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="container-width mt-12 relative z-10">
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-teal-800 bg-teal-900">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                            alt="CXB Dashboard"
                            className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                        />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="section-padding">
                <div className="container-width">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Designed for Engagement</h2>
                        <p className="text-base text-muted-foreground">
                            Tools that help you listen, understand, and respond to your customers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <MessageSquare className="h-6 w-6 text-teal-600" />,
                                title: "Omnichannel Support",
                                desc: "Manage conversations from email, chat, and social media in one unified inbox."
                            },
                            {
                                icon: <Activity className="h-6 w-6 text-teal-600" />,
                                title: "Journey Tracking",
                                desc: "Visualize and analyze the entire customer journey from awareness to loyalty."
                            },
                            {
                                icon: <BarChart2 className="h-6 w-6 text-teal-600" />,
                                title: "Feedback Analytics",
                                desc: "Collect and analyze customer feedback to identify trends and areas for improvement."
                            },
                            {
                                icon: <Globe className="h-6 w-6 text-teal-600" />,
                                title: "Global Reach",
                                desc: "Multi-language support to connect with customers around the world."
                            },
                            {
                                icon: <Share2 className="h-6 w-6 text-teal-600" />,
                                title: "Seamless Integrations",
                                desc: "Connect with your CRM, helpdesk, and other tools for a smooth workflow."
                            },
                            {
                                icon: <CheckCircle className="h-6 w-6 text-teal-600" />,
                                title: "Automated Responses",
                                desc: "Use AI-powered bots to handle common queries and improve response times."
                            }
                        ].map((feature, i) => (
                            <Card key={i} className="hover:shadow-lg transition-all border-teal-100">
                                <CardContent className="pt-6">
                                    <div className="mb-3 bg-teal-50 w-fit p-2.5 rounded-xl">
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

            {/* Use Cases */}
            <section className="section-padding bg-teal-50/50">
                <div className="container-width">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">Use Cases</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
                            <h3 className="text-xl font-bold mb-3 text-teal-900">Customer Support</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Empower your support team with a unified view of customer interactions, reducing resolution times and increasing satisfaction.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm font-medium text-teal-800">
                                    <CheckCircle className="h-4 w-4" /> Ticket Management
                                </li>
                                <li className="flex items-center gap-2 text-sm font-medium text-teal-800">
                                    <CheckCircle className="h-4 w-4" /> Live Chat
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100">
                            <h3 className="text-xl font-bold mb-3 text-teal-900">Product Feedback</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Gather valuable insights directly from your users to inform your product roadmap and feature development.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm font-medium text-teal-800">
                                    <CheckCircle className="h-4 w-4" /> Surveys & Polls
                                </li>
                                <li className="flex items-center gap-2 text-sm font-medium text-teal-800">
                                    <CheckCircle className="h-4 w-4" /> Feature Requests
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="container-width">
                    <div className="bg-teal-900 rounded-2xl p-10 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Start Delivering Exceptional Experiences</h2>
                            <p className="text-teal-100 text-lg mb-6">
                                See how CXB can transform your customer relationships.
                            </p>
                            <Button size="lg" className="rounded-full px-6 bg-white text-teal-900 hover:bg-teal-50" asChild>
                                <Link to="/contact">Schedule a Demo</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
