import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { SEO } from "@/components/SEO";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://portal.applynext.io/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    subject,
                    message,
                }),
            });

            if (response.ok) {
                toast.success("Message sent successfully!", {
                    description: "We'll get back to you as soon as possible.",
                });
                setFullname("");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                toast.error("Failed to send message", {
                    description: "Please try again later or contact us directly.",
                });
            }
        } catch (error) {
            console.error("Contact form error:", error);
            toast.error("Something went wrong", {
                description: "Please check your connection and try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="overflow-hidden">
            <SEO
                title="Contact Us - Get in Touch with SE TECH"
                description="Contact SE TECH for software development, CRM/ERP solutions, and technology consulting. Located in Pakistan & Dubai. Email: info@setech.pk | Phone: +92 333 241 3454. Schedule a consultation today."
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
                                            <p className="text-sm text-muted-foreground">+92 333 241 3454</p>
                                            <p className="text-xs text-muted-foreground mt-1">Mon-Fri from 9am to 6pm</p>
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
                                        <Label htmlFor="fullname">Full Name</Label>
                                        <Input
                                            id="fullname"
                                            placeholder="John Doe"
                                            value={fullname}
                                            onChange={(e) => setFullname(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Project Inquiry"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your project..."
                                        className="min-h-[120px]"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
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
        </div>
    );
}
