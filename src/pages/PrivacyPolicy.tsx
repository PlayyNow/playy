import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import pLogo from "@/assets/p-logo.jpeg";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  const handleDownload = () => {
    const content = document.getElementById("policy-content")?.innerText || "";
    const blob = new Blob([content], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Playy_Privacy_Policy.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Privacy Policy | Playy"
        description="How Playy collects, uses, and safeguards your information when you use our Dubai padel community app and related services."
        canonical="https://joinplayy.com/privacy"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <img src={pLogo} alt="Playy" className="w-7 h-7 rounded-lg" />
            <span className="text-lg font-bold text-gradient">Playy</span>
          </Link>
          <Button size="sm" variant="outline" className="gap-2 rounded-xl" onClick={handleDownload}>
            <Download className="w-4 h-4" /> Download
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl" id="policy-content">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Effective Date: February 13, 2026</p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-muted-foreground">
          <p>
            Playy, a company based in Dubai, United Arab Emirates ("Playy," "we," "us," or "our"), respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (the "Services").
          </p>
          <p>Contact: <a href="mailto:support@joinplayy.com" className="text-primary hover:underline">support@joinplayy.com</a></p>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="mb-3">Personal data may include identifiers, contact information, location data, device data, usage data, and safety-related records.</p>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">1.1 Information You Provide</h3>
            <p className="mb-2">When you create an account or use the Services, you may provide:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account information: name, email address, phone number, date of birth, profile photo</li>
              <li>Profile information: playing level, preferences, ratings, reviews</li>
              <li>Location information that you choose to share</li>
              <li>Communications: messages, session participation, feedback</li>
              <li>Safety reports and dispute information</li>
              <li>Support communications</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">1.2 Precise Location Data</h3>
            <p className="mb-2">With your permission, we collect precise GPS location data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enable nearby Community Session discovery</li>
              <li>Improve matching accuracy</li>
              <li>Enforce age-based geographic restrictions</li>
            </ul>
            <p className="mt-2">Other users do not see your precise GPS location. Users may see only an approximate location, such as general area or distance in kilometers (for example, "Motor City" or distance from session).</p>
            <p className="mt-2">Location collection may occur while using the app and does not occur in the background unless explicitly enabled by you.</p>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">1.3 Information Collected Automatically</h3>
            <p className="mb-2">We may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information: IP address, device type, operating system</li>
              <li>Usage data: features used, time spent, interactions</li>
              <li>Log data: access times, crash logs</li>
              <li>Cookies and similar technologies for analytics and functionality</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-6 mb-2">1.4 Information from Third Parties</h3>
            <p className="mb-2">We may receive information from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Social login providers (if used)</li>
              <li>Payment processors (for Official Events)</li>
              <li>Service providers assisting with analytics, hosting, or support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Legal Basis for Processing</h2>
            <p className="mb-2">Under applicable UAE Personal Data Protection Law and other relevant regulations, we process personal data based on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performance of a contract (providing the Services to you)</li>
              <li>Legitimate interests (maintaining platform safety, enforcing our Terms of Service, preventing fraud, and improving service functionality)</li>
              <li>Legal compliance obligations</li>
              <li>Consent where required</li>
            </ul>
            <p className="mt-2">Where consent is required, you may withdraw it subject to legal and contractual limitations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="mb-2">We use personal data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage your account</li>
              <li>Enable Community Sessions and Official Events</li>
              <li>Enforce age restrictions and safety controls</li>
              <li>Calculate reliability ratings and Playy Verified eligibility</li>
              <li>Respond to reports and moderate content</li>
              <li>Prevent fraud, abuse, and misconduct</li>
              <li>Communicate updates and safety alerts</li>
              <li>Process Official Event registrations and payments</li>
              <li>Improve platform performance and analytics</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Moderation, Safety, and Reliability Data</h2>
            <p className="mb-2">To maintain community safety, we collect and maintain:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reports submitted by users</li>
              <li>Reliability ratings and session attendance history</li>
              <li>Account restrictions or suspensions</li>
              <li>Playy Verified application records</li>
            </ul>
            <p className="mt-2">This information may be retained for safety, fraud prevention, regulatory compliance, or the establishment, exercise, or defense of legal claims, even after account deletion, subject to retention limits described below.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Automated Processing</h2>
            <p className="mb-2">We may use automated systems to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enforce age-based interaction restrictions</li>
              <li>Detect suspicious activity</li>
              <li>Calculate reliability scores</li>
              <li>Flag potential policy violations</li>
            </ul>
            <p className="mt-2">Automated systems assist moderation, but significant enforcement decisions may involve human review.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Age Specific Data Practices</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">6.1 Children Under 13</h3>
            <p>The Services are not directed to children under 13. If we become aware that a user under 13 has registered, we will delete their account and associated data.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">6.2 Users Under 18</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Minors may only interact with other minors</li>
              <li>Parents or guardians are responsible for supervising minors</li>
              <li>We limit public visibility of minors in accordance with platform restrictions</li>
              <li>We do not conduct behavioral advertising targeting minors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">How We Share Information</h2>
            <p className="mb-4">We do not sell personal data.</p>
            <p className="mb-2">We may share information:</p>

            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">7.1 With Other Users</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Profile information necessary for Community Sessions</li>
              <li>Approximate location only, not precise GPS</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">7.2 With Service Providers</h3>
            <p className="mb-2">Trusted providers assisting with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cloud hosting</li>
              <li>Analytics</li>
              <li>Customer support</li>
              <li>Payment processing</li>
            </ul>
            <p className="mt-2">Service providers are required to process data securely and only as instructed.</p>

            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">7.3 Legal Requirements</h3>
            <p className="mb-2">We may disclose information where required to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Comply with UAE law</li>
              <li>Respond to lawful government requests</li>
              <li>Protect safety or prevent harm</li>
              <li>Enforce our Terms of Service</li>
            </ul>

            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">7.4 Business Transfers</h3>
            <p>In the event of merger, acquisition, restructuring, or asset sale, personal data may be transferred subject to confidentiality obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Data Retention</h2>
            <p className="mb-2">We retain personal data only as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account data: while active and up to 30 days after deletion</li>
              <li>Safety and moderation records: up to 12 months after deletion</li>
              <li>Legal defense, fraud prevention, or regulatory compliance records: longer where required by law or necessary for the establishment, exercise, or defense of legal claims</li>
            </ul>
            <p className="mt-2">We may retain anonymized or aggregated data indefinitely.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">International Data Transfers</h2>
            <p>Playy operates from Dubai. Data may be transferred to service providers in other jurisdictions where appropriate safeguards are in place to protect personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Security</h2>
            <p>We implement reasonable technical and organizational safeguards designed to protect personal data. However, no system is completely secure.</p>
            <p className="mt-2">Users are responsible for maintaining account credential confidentiality.</p>
            <p className="mt-2">In the event of a material data security incident, we will notify affected users where required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p className="mb-2">Subject to UAE PDPL and applicable law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Restrict or object to certain processing</li>
              <li>Request data portability</li>
            </ul>
            <p className="mt-2">Requests may be submitted to <a href="mailto:support@joinplayy.com" className="text-primary hover:underline">support@joinplayy.com</a> with the subject line "Data Protection Request." We respond within 30 days where applicable. Responses are free of charge unless requests are manifestly unfounded or excessive.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies for analytics and functionality. You may manage cookie preferences through device settings. Some cookies are essential for Service operation.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Updated versions will be posted with a revised Effective Date. Continued use of the Services constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p>This Privacy Policy is governed by the laws of the United Arab Emirates as applied in Dubai.</p>
          </section>

          <p className="text-xs text-muted-foreground pt-4 border-t border-border">Last Updated: February 13, 2026</p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
