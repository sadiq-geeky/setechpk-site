import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-200 pt-12 pb-6">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src="/logo.png"
                                alt="SE TECH Logo"
                                className="h-8 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering businesses with cutting-edge technology solutions. We specialize in custom software, cloud integrations, and digital transformation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
                            <li><Link to="/projects" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/services" className="hover:text-primary transition-colors">Custom Development</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/integrations" className="hover:text-primary transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <span>info@setech.pk</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <span>+92 333 2413454</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 text-primary shrink-0" />
                                <span>Pakistan & UAE</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {currentYear} SE TECH Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
