import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SEO } from "@/components/SEO";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Message sent successfully!");
        }, 1500);
    };

    return (
        <div className="overflow-hidden">
            <SEO
                title="Contact Us - Get in Touch with SE TECH"
                description="Contact SE TECH for software development, CRM/ERP solutions, and technology consulting. Located in Pakistan & Dubai. Email: info@setech.pk | Phone: +92 300 1234567. Schedule a consultation today."
                keywords="contact SE TECH, software development inquiry, CRM consultation, technology consultation, Pakistan software company, Dubai software company, get in touch, schedule consultation"
            />
            {/* Hero */}
            <section className="bg-secondary/30 py-12 lg:py-20">
                <div className="container-width text-center max-w-4xl mx-auto">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Have a project in mind or want to learn more about our services? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-width">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                <p className="text-muted-foreground mb-6">
                                    Fill out the form or reach us directly via email or phone. Our team is ready to assist you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Card className="border-none shadow-md">
                                    <CardContent className="flex items-start gap-4 p-4">
                                        <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-1">Email Us</h3>
                                            <p className="text-sm text-muted-foreground">info@setech.pk</p>
                                            <p className="text-sm text-muted-foreground">support@setech.pk</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md">
                                    <CardContent className="flex items-start gap-4 p-4">
                                        <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-1">Call Us</h3>
                                            <p className="text-sm text-muted-foreground">+92 300 1234567</p>
                                            <p className="text-xs text-muted-foreground mt-1">Mon-Fri from 9am to 6pm</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-none shadow-md">
                                    <CardContent className="flex items-start gap-4 p-4">
                                        <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-1">Visit Us</h3>
                                            <p className="text-sm text-muted-foreground">
                                                123 Tech Avenue, Innovation Park<br />
                                                Lahore, Pakistan
                                            </p>
                                            <div className="mt-3 pt-3 border-t">
                                                <p className="font-semibold mb-1 text-sm">Dubai Office:</p>
                                                <p className="text-sm text-muted-foreground">
                                                    456 Business Bay, Dubai, UAE
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-background rounded-2xl shadow-xl border p-6 lg:p-8">
                            <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="Project Inquiry" required />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        className="min-h-[120px]"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full h-10 text-base" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : (
                                        <>
                                            Send Message <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[300px] bg-slate-100 w-full relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                        <MapPin className="h-10 w-10 mx-auto mb-3 opacity-50" />
                        <p className="text-lg font-medium">Map Integration Placeholder</p>
                        <p className="text-sm">Google Maps Embed would go here</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
