import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, BarChart3, Building2, CheckCircle, Contact, Copy, Globe, Mail, MapPin, Phone, Shield, Star, Users, Zap } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SE TECH</h1>
                <p className="text-xs text-muted-foreground">Pvt Ltd</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Leading CRM Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Streamline Your Business with
            <span className="text-primary"> SetCRM</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A results-driven company dedicated to helping clients achieve their goals through innovative software solutions. 
            Transform your customer relationships and boost productivity with our flagship CRM platform.
          </p>
          <div className="flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 py-6">
                  Try SetCRM Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Demo Login Credentials</DialogTitle>
                  <DialogDescription>
                    Use these credentials to access the SetCRM demo environment
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Username</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm">demo</div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard('demo', 'username')}
                      >
                        <Copy className="h-4 w-4" />
                        {copiedField === 'username' ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm">demo</div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard('demo', 'password')}
                      >
                        <Copy className="h-4 w-4" />
                        {copiedField === 'password' ? 'Copied!' : 'Copy'}
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    asChild
                  >
                    <a href="https://crm-setech.cloud" target="_blank" rel="noopener noreferrer">
                      Open SetCRM Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose SetCRM?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to enhance efficiency and productivity for businesses of all sizes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Contact Management</CardTitle>
              <CardDescription>
                Centralize and organize all customer information, communication history, and interactions in one place
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Sales Pipeline</CardTitle>
              <CardDescription>
                Track leads, manage opportunities, and monitor sales performance with advanced analytics and forecasting
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Automation</CardTitle>
              <CardDescription>
                Automate marketing campaigns, workflow processes, and customer support to save time and resources
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* SetCRM Features */}
      <section id="products" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SetCRM Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive CRM solution built for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Lead Management</h3>
              <p className="text-sm text-muted-foreground">Capture, qualify, and nurture leads through your sales funnel</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-sm text-muted-foreground">Manage support tickets and provide exceptional customer service</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Analytics & Reporting</h3>
              <p className="text-sm text-muted-foreground">Real-time insights and detailed reports to drive decisions</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Mobile Access</h3>
              <p className="text-sm text-muted-foreground">Access your CRM data anywhere with our mobile-responsive platform</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Marketing Automation</h3>
              <p className="text-sm text-muted-foreground">Create and execute targeted marketing campaigns automatically</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Workflow Management</h3>
              <p className="text-sm text-muted-foreground">Streamline business processes with customizable workflows</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Data Security</h3>
              <p className="text-sm text-muted-foreground">Enterprise-grade security to protect your sensitive business data</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Integration Ready</h3>
              <p className="text-sm text-muted-foreground">Seamlessly integrate with your existing business tools and systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About SE TECH Pvt Ltd
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              SE Technology is a results-driven company dedicated to helping clients achieve their goals through innovative software solutions. 
              We specialize in developing cutting-edge CRM systems that streamline customer relationship management and enhance business efficiency.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our flagship product, SetCRM, is designed to enhance efficiency and productivity for businesses across various industries. 
              We're committed to providing exceptional service and support to our clients worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Global Reach</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business? Contact us today to learn more about SetCRM
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@setech.pk</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">Available 24/7</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">Pakistan & Dubai</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Contact className="mr-2 h-5 w-5" />
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">SE TECH</h3>
                  <p className="text-xs text-muted-foreground">Pvt Ltd</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Innovative software solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">SetCRM</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <Globe className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SE TECH Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
