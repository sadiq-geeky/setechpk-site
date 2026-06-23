import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    CheckCircle2,
    Shield,
    Zap,
    Users,
    ArrowRight,
    Activity,
    Info,
    LayoutGrid
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";

interface CRMSlide {
    id: string;
    title: string;
    subtitle: string;
    imagePath: string;
    category: string;
    description: string;
    keyPoints: string[];
}

export default function SetCrm() {
    const slides: CRMSlide[] = [
        {
            id: "dashboard-main",
            title: "Operations Command Center",
            subtitle: "Unified Dashboard",
            imagePath: "/crm/Dashboard .png",
            category: "Dashboard & KPIs",
            description: "An overview of live operations, task status counters, active requests, and SLA performance charts in real-time.",
            keyPoints: [
                "Real-time SLA status counters & warning indicators",
                "Department-wide ticket volume charting",
                "Actionable 'My Tasks' task lists",
                "High-priority issue highlighting"
            ]
        },
        {
            id: "dashboard-widget",
            title: "Modular Workspace Builder",
            subtitle: "Widget Customization",
            imagePath: "/crm/Dashboard - Add new widget.png",
            category: "Dashboard & KPIs",
            description: "Empower agents to tailor their dashboards. Add, remove, or rearrange real-time analytical modules with drag-and-drop ease.",
            keyPoints: [
                "Drag-and-drop module layout customization",
                "Diverse visualization options (radial, line, bar charts)",
                "Role-based template defaults",
                "Instant live data feed configurations"
            ]
        },
        {
            id: "kyc-directory",
            title: "Onboarding & Compliance Portal",
            subtitle: "KYC Compliance Hub",
            imagePath: "/crm/Customers - KYC.png",
            category: "KYC & Directory",
            description: "Directly manage customer compliance. Keep track of tiered onboarding approvals, verify documents, and review safety scores.",
            keyPoints: [
                "Multi-tiered KYC compliance verification tags",
                "Quick filtering for pending, approved, or flagged profiles",
                "Audit-trail compliance referencing",
                "Integrated identity score indicators"
            ]
        },
        {
            id: "customer-dossier",
            title: "Complete Client 360° Profile",
            subtitle: "Customer Profile",
            imagePath: "/crm/Customer - Full Details.png",
            category: "KYC & Directory",
            description: "A comprehensive view of active status, KYC progress, communication timeline, risk profiles, and active tags.",
            keyPoints: [
                "Consolidated personal dossier & contact links",
                "Risk and relationship level badges",
                "Integrated client activity logs",
                "Dynamic tag assignment tools"
            ]
        },
        {
            id: "customer-balances",
            title: "Direct Account Reconciliation",
            subtitle: "Accounts Workspace",
            imagePath: "/crm/Customer - Accounts.png",
            category: "Financial Control",
            description: "Monitor linked checking, savings, and credit accounts. Review real-time balances, pending amounts, and block accounts instantly.",
            keyPoints: [
                "Live checking and ledger balance streams",
                "Reconciliation history log",
                "Pending transaction holding queue",
                "Direct limit adjustments interface"
            ]
        },
        {
            id: "customer-cards",
            title: "Card Lifecycle Operations",
            subtitle: "Cards Management",
            imagePath: "/crm/Customer - Cards.png",
            category: "Financial Control",
            description: "Track card token status, card details, spending parameters, and trigger freezes or re-orders.",
            keyPoints: [
                "Tokenized digital card state viewer",
                "One-click freeze, block, and replace actions",
                "Spend categories and limit management",
                "Linked card transactions timeline"
            ]
        },
        {
            id: "customer-linked-tickets",
            title: "Customer Support History Tracker",
            subtitle: "Linked Tickets",
            imagePath: "/crm/Customer - Linked Complaints.png",
            category: "Service Desk",
            description: "Correlate customer complaints, open tickets, and ticket history directly inside the client profile.",
            keyPoints: [
                "Direct support ticket history logs",
                "SLA timelines and active deadlines indicators",
                "Responsible team and assignment notes",
                "Resolution timeline status indicators"
            ]
        },
        {
            id: "ticket-create",
            title: "Accelerated Case Registration",
            subtitle: "Ticket Creation",
            imagePath: "/crm/Complaint - Creation.png",
            category: "Service Desk",
            description: "Standardized templates to register complaints, auto-associating client info to reduce onboarding response times.",
            keyPoints: [
                "Pre-populated customer identifiers",
                "Contextual severity and priority matrices",
                "Internal notes and attachment drop zones",
                "Automated triage group assignments"
            ]
        },
        {
            id: "ticket-details",
            title: "Structured Issue Workspace",
            subtitle: "Ticket Investigation",
            imagePath: "/crm/Complaint - Details.png",
            category: "Service Desk",
            description: "An workspace for troubleshooting issues, updating case logs, posting internal team comments, and monitoring resolution progress.",
            keyPoints: [
                "Historical activity log audit stream",
                "Internal chat notes for collaboration",
                "Flexible status control buttons",
                "SLA countdown timeline banner"
            ]
        },
        {
            id: "workflow-canvas",
            title: "No-Code Automation Canvas",
            subtitle: "Workflow Orchestrator",
            imagePath: "/crm/workflow creator.png",
            category: "Automation",
            description: "Visually construct conditional automation logic, triggers, delays, and action nodes to orchestrate system processes.",
            keyPoints: [
                "No-code visual trigger-action builder",
                "Conditional branch logic routing",
                "System event and external API integrations",
                "Automatic assignment and email alert components"
            ]
        },
        {
            id: "session-replay",
            title: "Security Auditing & Session Replay",
            subtitle: "Audit Playback",
            imagePath: "/crm/User - Session Recording for audit.png",
            category: "Compliance & Security",
            description: "Review complete agent actions via secure recordings to ensure audit compliance, check customer details accuracy, and track bugs.",
            keyPoints: [
                "High-fidelity visual screen recording playback",
                "Synchronized browser event log list",
                "Masked credentials for strict compliance",
                "Precise search indices for user behavior"
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const SLIDE_DURATION = 6000; // 6 seconds per slide

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let startTime = Date.now();
        let animationFrame: number;

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const percentage = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
            setProgress(percentage);

            if (percentage >= 100) {
                handleNext();
            } else {
                animationFrame = requestAnimationFrame(updateProgress);
            }
        };

        if (isPlaying) {
            animationFrame = requestAnimationFrame(updateProgress);
        }

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [currentIndex, isPlaying]);

    const handleNext = () => {
        setProgress(0);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setProgress(0);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleDotClick = (index: number) => {
        setProgress(0);
        setCurrentIndex(index);
    };

    const activeSlide = slides[currentIndex];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
            <SEO
                title="SetCRM Showcase - Interactive Slide Presentation"
                description="Take an informative visual journey through SetCRM. Step-by-step breakdown of dashboards, KYC identity portals, financial operations, support tracking, and security session auditories."
            />

            {/* Header / Hero Introduction */}
            <section className="relative pt-24 pb-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/5 px-3 py-1 text-xs tracking-wider uppercase font-semibold">
                            Interactive Guided Tour
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                            Explore SetCRM capabilities
                        </h1>
                        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                            Take a step-by-step visual tour of the interface, automated compliance features, service desks, workflows, and transaction platforms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Slide Presentation Section */}
            <section className="pb-24 pt-6 container mx-auto px-4 max-w-7xl relative z-10">
                {/* Main Slideshow Container */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Visual Slide Mockup Frame (8 Columns) */}
                    <div className="lg:col-span-8 flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 rounded-3xl p-4 md:p-6 backdrop-blur-md shadow-2xl relative">
                        
                        {/* Browser Topbar Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <span className="ml-2 text-xs text-slate-500 font-semibold tracking-wide bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                                    {activeSlide.category}
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Slide counter */}
                                <span className="text-xs text-slate-500 font-bold bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
                                    {currentIndex + 1} / {slides.length}
                                </span>
                                {/* Play/Pause Toggle */}
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                                    title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                                >
                                    {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                                </button>
                            </div>
                        </div>

                        {/* Image Viewer with transitions */}
                        <div className="relative aspect-[16/10] bg-slate-950/95 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-850">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSlide.id}
                                    initial={{ opacity: 0, scale: 0.98, x: 10 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.98, x: -10 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="w-full h-full p-2 flex items-center justify-center"
                                >
                                    <img
                                        src={activeSlide.imagePath}
                                        alt={activeSlide.title}
                                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation controls underneath image */}
                        <div className="flex items-center justify-between pt-6">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrev}
                                className="rounded-full border-slate-800 hover:bg-slate-800/80 text-slate-300"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>

                            {/* Dots / Indicators */}
                            <div className="flex items-center gap-1.5 max-w-[50%] overflow-x-auto py-1 px-2 no-scrollbar">
                                {slides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleDotClick(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            idx === currentIndex 
                                                ? "w-6 bg-primary" 
                                                : "w-2 bg-slate-800 hover:bg-slate-700"
                                        }`}
                                    />
                                ))}
                            </div>

                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                className="rounded-full border-slate-800 hover:bg-slate-800/80 text-slate-300"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Progress Bar indicator (displays slideshow timing) */}
                        {isPlaying && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 overflow-hidden rounded-b-3xl">
                                <div
                                    className="h-full bg-primary transition-all duration-75 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Explanatory Data Pane (4 Columns) */}
                    <div className="lg:col-span-4 flex flex-col justify-between gap-6">
                        {/* Slide content description */}
                        <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-md shadow-xl flex-grow flex flex-col justify-between">
                            <div>
                                <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-1">
                                    {activeSlide.subtitle}
                                </span>
                                <h3 className="text-2xl font-extrabold text-slate-100 tracking-tight mb-4">
                                    {activeSlide.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {activeSlide.description}
                                </p>

                                <div className="border-t border-slate-800/60 pt-6">
                                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                                        <Info className="h-3.5 w-3.5 text-primary" /> Key Capabilities
                                    </h4>
                                    <ul className="space-y-3">
                                        {activeSlide.keyPoints.map((pt, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                                                <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Shortcut panel of other slide modules */}
                            <div className="mt-8 pt-4 border-t border-slate-800/60">
                                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">QUICK CATEGORY INDEX</span>
                                <div className="grid grid-cols-2 gap-1.5">
                                    {Array.from(new Set(slides.map(s => s.category))).map((cat) => {
                                        const sampleIdx = slides.findIndex(s => s.category === cat);
                                        const isCatActive = activeSlide.category === cat;
                                        return (
                                            <button
                                                key={cat}
                                                onClick={() => handleDotClick(sampleIdx)}
                                                className={`text-[10px] text-left px-2 py-1.5 rounded-lg border transition-all ${
                                                    isCatActive
                                                        ? "bg-primary/10 border-primary/30 text-primary font-bold"
                                                        : "border-slate-800 hover:border-slate-700 text-slate-400"
                                                }`}
                                            >
                                                {cat}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Interactive prompt button */}
                        <div className="bg-slate-900/40 border border-slate-800/50 rounded-3xl p-5 text-center">
                            <h4 className="text-xs font-bold text-slate-300 mb-1">Want to customize components?</h4>
                            <p className="text-[11px] text-slate-500 mb-3">Request sandbox credentials to design modules manually.</p>
                            <Button size="sm" className="w-full rounded-full bg-slate-850 hover:bg-slate-800 border border-slate-850 text-slate-200 text-xs font-medium" asChild>
                                <Link to="/contact">Book Sandbox Demo <ArrowRight className="ml-1.5 h-3 w-3" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capability Cards */}
            <section className="py-20 border-t border-slate-900 bg-slate-950/50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Complete Compliance & Automations</h2>
                        <p className="text-slate-400 text-sm">
                            Explore why leading fintech platforms, digital banks, and customer services use SetCRM to scale workflows.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300">
                            <div className="p-3 bg-primary/10 w-fit rounded-2xl mb-4 text-primary">
                                <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-100">Identity verification & KYC</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Review user credentials, run AML threat assessment checklists, verify addresses, and connect card ledger balances securely.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300">
                            <div className="p-3 bg-primary/10 w-fit rounded-2xl mb-4 text-primary">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-100">Visual automation creator</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Dispatch immediate emails, assign tasks, log status escalations, and send system updates without writing code.
                            </p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300">
                            <div className="p-3 bg-primary/10 w-fit rounded-2xl mb-4 text-primary">
                                <Activity className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-100">Session replay audits</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Track representative workflow behaviors to ensure compliance, troubleshoot complaints, and audit operational activity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conversational FAQ Section for AI SEO & GEO */}
            <section className="py-20 border-t border-slate-900 bg-slate-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5 px-3 py-1 text-xs">
                            Frequently Asked Questions
                        </Badge>
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 mb-4">
                            SetCRM Capabilities & Operations FAQ
                        </h2>
                        <p className="text-slate-400 text-sm max-w-lg mx-auto">
                            Direct answers to common questions about platform integration, compliance architecture, and automation nodes.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "What is SetCRM?",
                                answer: "SetCRM is an enterprise Customer Relationship Management system designed specifically for digital banking platforms, financial services, and compliance-driven operations. It unifies customer profiles, accounts, cards, and automation rules in a secure control workspace."
                            },
                            {
                                question: "How does SetCRM assist with customer KYC onboarding?",
                                answer: "The platform contains a dedicated KYC Hub where verification teams can monitor compliance levels, inspect customer records, assign risk categories, and perform AML validations directly inside client files."
                            },
                            {
                                question: "Does SetCRM integrate with credit cards and bank ledgers?",
                                answer: "Yes. Agents can inspect balances, pending deposits, spend thresholds, and perform lifecycle actions (such as freezing/blocking cards or triggering replacements) immediately via the customer dashboard."
                            },
                            {
                                question: "What audit tools are available for compliance checks?",
                                answer: "SetCRM logs all customer support tickets and includes high-fidelity Session Replay. Compliance officers can search timelines and replay exact agent sessions to ensure strict adherence to GDPR and internal security guidelines."
                            },
                            {
                                question: "Can we build workflow automations visually?",
                                answer: "SetCRM features a drag-and-drop Workflow Creator. Operations teams can visually connect events (like SLA breaches or balance drops) with trigger nodes, conditional splits, and action modules (like alerts or notifications) with zero code."
                            }
                        ].map((faq, idx) => {
                            const isOpen = faqOpen === idx;
                            return (
                                <div
                                    key={idx}
                                    className="bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setFaqOpen(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/80 transition-colors"
                                    >
                                        <span className="font-bold text-slate-200 text-base">{faq.question}</span>
                                        <span className={`text-primary font-bold text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                                            +
                                        </span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="border-t border-slate-800/60"
                                            >
                                                <div className="p-6 text-sm text-slate-400 leading-relaxed bg-slate-900/20">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Local FAQ Page JSON-LD schema for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is SetCRM?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "SetCRM is an enterprise Customer Relationship Management system designed specifically for digital banking platforms, financial services, and compliance-driven operations. It unifies customer profiles, accounts, cards, and automation rules in a secure control workspace."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does SetCRM assist with customer KYC onboarding?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The platform contains a dedicated KYC Hub where verification teams can monitor compliance levels, inspect customer records, assign risk categories, and perform AML validations directly inside client files."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does SetCRM integrate with credit cards and bank ledgers?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Agents can inspect balances, pending deposits, spend thresholds, and perform lifecycle actions (such as freezing/blocking cards or triggering replacements) immediately via the customer dashboard."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What audit tools are available for compliance checks?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "SetCRM logs all customer support tickets and includes high-fidelity Session Replay. Compliance officers can search timelines and replay exact agent sessions to ensure strict adherence to GDPR and internal security guidelines."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can we build workflow automations visually?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "SetCRM features a drag-and-drop Workflow Creator. Operations teams can visually connect events (like SLA breaches or balance drops) with trigger nodes, conditional splits, and action modules (like alerts or notifications) with zero code."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* CTA Section */}
            <section className="py-20 border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-gradient-to-r from-primary/20 via-slate-900 to-slate-900 border border-slate-800/80 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Experience SetCRM in Action</h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                                Ready to integrate this system into your business operations? Request a private sandbox demo today.
                            </p>
                            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/95 text-white" asChild>
                                <Link to="/contact">Request Sandbox Access</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
