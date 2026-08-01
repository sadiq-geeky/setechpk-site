import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  FileText, 
  Database, 
  CheckCircle2, 
  Lock, 
  Share2, 
  Linkedin, 
  Clock, 
  Trash2, 
  UserCheck, 
  Mail, 
  Globe, 
  RefreshCw,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden min-h-screen bg-slate-50/50 dark:bg-slate-950/50 pb-16">
      <SEO
        title="Privacy Policy - SE TECH"
        description="SE TECH Privacy Policy explaining how we handle information obtained through LinkedIn APIs and related services, data storage, retention, user rights, and contact details."
        keywords="Privacy Policy, SE TECH privacy, LinkedIn API, data protection, data privacy, user rights"
      />

      {/* Hero Banner */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container-width text-center max-w-4xl mx-auto relative z-10">
          <Badge variant="outline" className="mb-4 border-orange-500/40 text-orange-400 bg-orange-500/10 px-3 py-1">
            Legal & Privacy
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-300 text-sm lg:text-base max-w-2xl mx-auto">
            Last Updated: <span className="font-semibold text-white">August 2026</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-width max-w-4xl mx-auto pt-10 px-4 sm:px-6">
        <div className="space-y-8">
          
          {/* Introduction Card */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <h2 id="introduction" className="text-xl font-bold tracking-tight">Introduction</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                <strong className="font-semibold">SE TECH</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                This Privacy Policy explains how our application uses information obtained through LinkedIn APIs and related services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <h2 id="information-we-collect" className="text-xl font-bold tracking-tight">Information We Collect</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                When you authorize our application through LinkedIn, we may access:
              </p>
              <ul className="grid gap-2.5 pt-1">
                {[
                  "Basic LinkedIn profile information",
                  "LinkedIn member ID",
                  "Company Page information you administer",
                  "Posts and comments created through the application",
                  "Engagement data related to content managed through the application"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 dark:text-slate-400 text-sm italic pt-2 border-t border-slate-100 dark:border-slate-800">
                We only access information that is explicitly authorized by you and permitted by LinkedIn.
              </p>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 id="how-we-use-information" className="text-xl font-bold tracking-tight">How We Use Information</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                We use the information solely for:
              </p>
              <ul className="grid gap-2.5 pt-1">
                {[
                  "Managing LinkedIn Company Pages",
                  "Publishing content to LinkedIn",
                  "Retrieving and displaying Page content",
                  "Community engagement and moderation",
                  "Improving our services"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-slate-700 dark:text-slate-300">
                    <ArrowRight className="h-4 w-4 text-orange-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Data Storage */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Lock className="h-5 w-5" />
                </div>
                <h2 id="data-storage" className="text-xl font-bold tracking-tight">Data Storage</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                Information may be stored temporarily to provide application functionality.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                We implement reasonable technical and organizational safeguards to protect stored information from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Share2 className="h-5 w-5" />
                </div>
                <h2 id="information-sharing" className="text-xl font-bold tracking-tight">Information Sharing</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm lg:text-base">
                We do not sell, rent, or trade your personal information.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                Information may be shared only:
              </p>
              <ul className="grid gap-2.5 pt-1">
                {[
                  "When required by law",
                  "To comply with legal obligations",
                  "To protect our rights and services",
                  "With service providers supporting our infrastructure under confidentiality obligations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* LinkedIn Data */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Linkedin className="h-5 w-5" />
                </div>
                <h2 id="linkedin-data" className="text-xl font-bold tracking-tight">LinkedIn Data</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                Our application&apos;s use and transfer of information received from LinkedIn APIs adheres to LinkedIn&apos;s API Terms of Use and Developer Agreement.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <h2 id="data-retention" className="text-xl font-bold tracking-tight">Data Retention</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                We retain information only for as long as necessary to provide the services described in this policy or as required by applicable laws.
              </p>
            </CardContent>
          </Card>

          {/* Data Deletion */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Trash2 className="h-5 w-5" />
                </div>
                <h2 id="data-deletion" className="text-xl font-bold tracking-tight">Data Deletion</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                Users may request deletion of their data at any time by contacting us.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                Upon verification of the request, we will delete applicable stored information within a reasonable time unless retention is required by law.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h2 id="your-rights" className="text-xl font-bold tracking-tight">Your Rights</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                You may:
              </p>
              <ul className="grid gap-2.5 pt-1">
                {[
                  "Revoke LinkedIn authorization at any time through LinkedIn settings",
                  "Request access to your data",
                  "Request correction of inaccurate information",
                  "Request deletion of your data"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-border/60 shadow-sm bg-orange-500/5">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <h2 id="contact-information" className="text-xl font-bold tracking-tight">Contact Information</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                For privacy-related inquiries, contact:
              </p>
              <div className="bg-background rounded-lg p-4 border border-border/80 space-y-2 text-sm lg:text-base">
                <p className="font-semibold text-slate-900 dark:text-slate-100">SE TECH</p>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Mail className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>Email: </span>
                  <a 
                    id="privacy-contact-email" 
                    href="mailto:privacy@setech.pk" 
                    className="text-orange-600 hover:underline font-medium"
                  >
                    privacy@setech.pk
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Globe className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>Website: </span>
                  <a 
                    id="privacy-contact-website" 
                    href="https://setech.pk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-orange-600 hover:underline font-medium"
                  >
                    https://setech.pk
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to this Policy */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <h2 id="changes-to-this-policy" className="text-xl font-bold tracking-tight">Changes to this Policy</h2>
              </div>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800" />
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                We may update this Privacy Policy periodically. Updated versions will be posted on this page with a revised effective date.
              </p>
            </CardContent>
          </Card>

          {/* Bottom navigation link */}
          <div className="text-center pt-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline">
              &larr; Back to Home
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
