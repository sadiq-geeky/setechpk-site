import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Contact,
  Copy,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SE TECH</h1>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#products"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Company
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Partners
              </a>
            </div>
            <div className="flex items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium">
                    Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Demo Login Credentials</DialogTitle>
                    <DialogDescription>
                      Use these credentials to access the SetCRM demo
                      environment
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username</label>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm">
                          demo
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard("demo", "username")}
                        >
                          <Copy className="h-4 w-4" />
                          {copiedField === "username" ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm">
                          demo
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard("demo", "password")}
                        >
                          <Copy className="h-4 w-4" />
                          {copiedField === "password" ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a
                        href="https://crm-setech.cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open SetCRM Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-100/20 to-indigo-100/30"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Introducing
                  <br />
                  <span className="text-primary">SetCRM</span>
                  <br />
                  Business Platform
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  Complete customer relationship management with powerful
                  analytics, lead tracking, and sales intelligence
                </p>
              </div>
              <div className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg font-medium">
                      Try Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Demo Login Credentials</DialogTitle>
                      <DialogDescription>
                        Use these credentials to access the SetCRM demo
                        environment
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Username</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm">
                            demo
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard("demo", "username")}
                          >
                            <Copy className="h-4 w-4" />
                            {copiedField === "username" ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 p-3 bg-muted rounded-md font-mono text-sm">
                            demo
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard("demo", "password")}
                          >
                            <Copy className="h-4 w-4" />
                            {copiedField === "password" ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <a
                          href="https://crm-setech.cloud"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open SetCRM Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F391ed68dbec64477baa9f3cd25e706c0%2Fe52572f62b09401ba319e06ee1d7d47b?format=webp&width=800"
                    alt="SetCRM Dashboard showing sales metrics, lead analytics, and user performance charts"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-indigo-400 to-primary opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose SetCRM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to enhance efficiency and productivity
              for businesses of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Contact Management
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Centralize and organize all customer information,
                  communication history, and interactions in one intelligent
                  platform
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Sales Pipeline
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Track leads, manage opportunities, and monitor sales
                  performance with advanced analytics and forecasting
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Smart Automation
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Automate marketing campaigns, workflow processes, and customer
                  support with intelligent automation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* SetCRM Features */}
      <section
        id="products"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SetCRM Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CRM solution built for modern businesses with
              powerful analytics and automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Lead Management
              </h3>
              <p className="text-gray-600">
                Capture, qualify, and nurture leads through your intelligent
                sales funnel
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Customer Support
              </h3>
              <p className="text-gray-600">
                Manage support tickets and provide exceptional customer service
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                Real-time insights and comprehensive analytics to drive business
                decisions
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Mobile Access
              </h3>
              <p className="text-gray-600">
                Access your CRM data anywhere with our mobile-responsive
                platform
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Marketing Automation
              </h3>
              <p className="text-gray-600">
                Create and execute targeted marketing campaigns automatically
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Workflow Management
              </h3>
              <p className="text-gray-600">
                Streamline business processes with customizable automated
                workflows
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Data Security
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with advanced threat detection and
                prevention
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Integration Hub
              </h3>
              <p className="text-gray-600">
                Connect with hundreds of business tools through our integration
                platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                About SE TECH Pvt Ltd
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SE Technology is a results-driven company dedicated to helping
                clients achieve their goals through innovative AI-powered
                software solutions. We specialize in developing cutting-edge CRM
                systems that revolutionize customer relationship management.
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our flagship product, SetCRM, combines traditional CRM
                functionality with advanced AI capabilities to enhance
                efficiency and productivity for businesses across various
                industries. We're committed to delivering exceptional service
                and support to our global clientele.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    AI-Powered & Secure
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    Global Reach
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-blue-50 to-indigo-50 rounded-3xl p-12">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-3">
                      99.9%
                    </div>
                    <div className="text-gray-600 font-medium">
                      Uptime Guarantee
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-3">
                      24/7
                    </div>
                    <div className="text-gray-600 font-medium">Support</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-primary opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of SetCRM and see how it can revolutionize
              your customer relationships
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Email Us
                </h3>
                <p className="text-gray-600 text-lg">info@setech.pk</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Call Us
                </h3>
                <p className="text-gray-600 text-lg">24/7 Support Available</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  Visit Us
                </h3>
                <p className="text-gray-600 text-lg">Pakistan & Dubai</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-full font-medium"
              asChild
            >
              <a
                href="https://calendly.com/muhammad-sadiq-setech/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Contact className="mr-3 h-6 w-6" />
                Schedule a Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SE TECH</h3>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Innovative AI-powered software solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    SetCRM Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    AI Studio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary/20">
                    <Globe className="h-5 w-5" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SE TECH Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
