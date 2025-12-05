import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "Projects", href: "/projects" },
        { name: "Integrations", href: "/integrations" },
        { name: "About", href: "/about" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container-width">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src="/logo.png"
                            alt="SE TECH Logo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button className="hidden lg:flex rounded-full px-6" asChild>
                            <Link to="/contact">
                                Get Started <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <button
                            className="lg:hidden p-2 text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background border-b"
                    >
                        <div className="container-width py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-lg font-medium transition-colors ${location.pathname === link.href
                                        ? "text-primary"
                                        : "text-foreground"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full rounded-full mt-4" asChild>
                                <Link to="/contact">Get Started</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
