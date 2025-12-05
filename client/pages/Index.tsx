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
  CheckCircle,
  Contact,
  Copy,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
  Zap,
  Menu,
  X,
  ChevronRight,
  Code2,
  Cpu,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";
import { StructuredData } from "@/components/StructuredData";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Index() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      if (!navigator.clipboard) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } else {
        await navigator.clipboard.writeText(text);
      }
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy to clipboard. Please copy manually.");
    }
  };

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
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <StructuredData />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="SE TECH Logo"
                className="h-10 w-auto"
              />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {["Services", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button className="hidden lg:flex rounded-full px-6" asChild>
                <a href="#contact">Get Started</a>
              </Button>

              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {["Services", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full rounded-full py-6 text-lg" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen flex items-center pt-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-primary bg-primary/10">
                <Rocket className="mr-2 h-4 w-4" />
                Innovating the Future
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                Technology Solutions <br />
                <span className="text-gradient">That Drive Success</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                We craft digital experiences that transform businesses. From custom software to enterprise solutions, we are your partner in innovation.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 h-12 text-base" asChild>
                  <a href="#services">Explore Services <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base" asChild>
                  <a href="#products">View Products</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-8 border-t">
                <div>
                  <div className="text-3xl font-bold text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Engineers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity, scale }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background/50 backdrop-blur-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5f2388b0663a4797867ae69c9bd81b84%2F3fa2ea4df9cd4283a2956641b31cf7c6?format=webp&width=800"
                  alt="Dashboard Preview"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 p-4 glass rounded-2xl z-20"
              >
                <BarChart3 className="h-8 w-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 p-4 glass rounded-2xl z-20"
              >
                <Zap className="h-8 w-8 text-yellow-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Services</h2>
            <p className="text-xl text-muted-foreground">
              We deliver end-to-end technology solutions tailored to your unique business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Resource Outsourcing",
                desc: "Scale your team instantly with our vetted top-tier developers and technical experts."
              },
              {
                icon: <Code2 className="h-6 w-6" />,
                title: "Custom Development",
                desc: "Bespoke software solutions built with modern architectures to fit your exact needs."
              },
              {
                icon: <Cpu className="h-6 w-6" />,
                title: "Tech Consulting",
                desc: "Strategic guidance to navigate digital transformation and optimize your tech stack."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{service.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="mb-4">Our Products</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Powerful platforms designed to streamline operations and accelerate growth.
            </p>
          </div>

          <div className="space-y-20">
            {/* SetCRM */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5f2388b0663a4797867ae69c9bd81b84%2F3fa2ea4df9cd4283a2956641b31cf7c6?format=webp&width=800"
                    alt="SetCRM Interface"
                    className="relative rounded-2xl shadow-2xl border border-border"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-3xl font-bold mb-6">SetCRM Platform</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  A unified platform for customer relationship management. Track leads, manage sales pipelines, and automate workflows with AI-driven insights.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Advanced Lead Scoring & Tracking",
                    "Automated Sales Workflows",
                    "Real-time Analytics Dashboard"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="rounded-full">
                      Try Demo <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Access SetCRM Demo</DialogTitle>
                      <DialogDescription>
                        Use the credentials below to explore the platform.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="p-4 bg-muted rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Username:</span>
                          <div className="flex items-center gap-2">
                            <code className="bg-background px-2 py-1 rounded">demo</code>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard("demo", "u")}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Password:</span>
                          <div className="flex items-center gap-2">
                            <code className="bg-background px-2 py-1 rounded">demo</code>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard("demo", "p")}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <a href="https://dev.crm-setech.cloud" target="_blank" rel="noopener noreferrer">
                          Launch Demo
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </div>

            {/* Custom Solutions */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold mb-6">Custom Engineering</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't just write code; we engineer solutions. Our team builds scalable, secure, and high-performance applications tailored to your specific requirements.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <Code2 className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Full-Stack</h4>
                    <p className="text-sm text-muted-foreground">End-to-end development using modern frameworks.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Secure</h4>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security and compliance.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-primary to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5f2388b0663a4797867ae69c9bd81b84%2Fa6b9bc42abcb4e0281f41547afb94cd8?format=webp&width=800"
                  alt="Development Workflow"
                  className="relative rounded-2xl shadow-2xl border border-border"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">About SE TECH</h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                We are a global technology partner dedicated to empowering businesses through innovation. With a presence in Pakistan and Dubai, we bridge the gap between complex challenges and elegant digital solutions.
              </p>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  <span className="font-medium">Global Presence</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  <span className="font-medium">Trusted Partner</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Uptime", value: "99.9%" },
                { label: "Support", value: "24/7" },
                { label: "Clients", value: "Global" },
                { label: "Growth", value: "200%" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-secondary/30 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="text-center max-w-2xl mx-auto relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Let's discuss how we can help you achieve your business goals with our technology solutions.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
                <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">info@setech.pk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">+92 300 1234567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Office</h4>
                    <p className="text-sm text-muted-foreground">Pakistan & Dubai</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="rounded-full px-12 h-14 text-lg" asChild>
                <a href="https://calendly.com/muhammad-sadiq-setech/30min" target="_blank" rel="noopener noreferrer">
                  <Contact className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src="/logo.png" alt="SE TECH" className="h-10 w-auto brightness-0 invert mb-6" />
              <p className="text-muted-foreground max-w-sm">
                Empowering businesses with cutting-edge technology solutions. Your partner in digital transformation.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SE TECH Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
