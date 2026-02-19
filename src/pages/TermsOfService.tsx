import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import pLogo from "@/assets/p-logo.jpeg";

const TermsOfService = () => {
  const handleDownload = () => {
    const content = document.getElementById("tos-content")?.innerText || "";
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Playy_Terms_of_Service.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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
      <main className="container mx-auto px-6 py-12 max-w-3xl" id="tos-content">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Effective Date: February 13, 2026</p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-muted-foreground">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the Playy mobile application, website, and related services (collectively, the "Services") provided by Playy, a company based in Dubai, United Arab Emirates ("Playy," "we," "us," or "our").
          </p>
          <p>
            By accessing or using the Services, you agree to be bound by these Terms and our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated by reference. If you do not agree, you must not use the Services.
          </p>
          <p>
            These Terms are provided in English. Where required by applicable UAE law, an Arabic translation will be made available upon request. In the event of any inconsistency and where required by law, the Arabic version shall prevail.
          </p>
          <p>Contact: <a href="mailto:support@joinplayy.com" className="text-primary hover:underline">support@joinplayy.com</a></p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Eligibility and Age Requirements</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">1.1 Minimum Age</h3>
            <p>You must be at least 13 years old to use the Services.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">1.2 Users Under 18</h3>
            <p>If you are under 18 years old, you represent that you have the consent of a parent or legal guardian to use the Services and enter into these Terms. Parents or legal guardians are responsible for supervising minors' use of the Services. Playy does not assume responsibility for supervising minors' offline interactions.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">1.3 Age Based Interaction Restrictions</h3>
            <p className="mb-2">To promote safety:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Users under 18 may only interact with other users under 18.</li>
              <li>Users 18 and over cannot view, search for, message, or interact with minors.</li>
              <li>We may suspend accounts that attempt to circumvent these restrictions.</li>
            </ul>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">1.4 Accurate Information</h3>
            <p>You agree to provide accurate information, including your date of birth, and not misrepresent your identity or age.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">1.5 Right to Restrict Access</h3>
            <p>We may refuse registration, restrict access, or terminate accounts at our discretion to protect safety or comply with law.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Nature of the Platform</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">2.1 Technology Platform</h3>
            <p>Community Sessions are organised solely by users and enable users to discover, connect with, and arrange sports games, sessions, and events with other users ("Community Sessions"). Playy does not organise, host, supervise, or control Community Sessions.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">2.2 Official Events</h3>
            <p>Playy may, at its discretion, organise and host events directly ("Official Events"). Official Events will be clearly identified within the Services and may be governed by separate event specific terms presented at registration.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">2.3 Distinction</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Community Sessions are entirely user created and user managed. Participation is at your own risk.</li>
              <li>Official Events are organised by Playy and may require separate acceptance of additional terms, digital waivers, or event specific conditions.</li>
            </ul>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">2.4 No Identity Verification for Community Sessions</h3>
            <p>For Community Sessions, Playy does not verify user identities, background, character, or qualifications beyond account creation safeguards.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">2.5 No Agency Relationship</h3>
            <p>No partnership, employment, joint venture, or agency relationship exists between Playy and users in connection with Community Sessions.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Assumption of Risk and Safety</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">3.1 Inherent Risk</h3>
            <p>Sports and physical activities involve inherent risks of injury, illness, property damage, or death.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">3.2 Community Sessions</h3>
            <p className="mb-2">For Community Sessions:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You voluntarily assume all risks.</li>
              <li>You are responsible for assessing safety and compliance with venue rules and local laws.</li>
              <li>Playy bears no responsibility for injuries, disputes, or incidents arising from Community Sessions.</li>
            </ul>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">3.3 Official Events</h3>
            <p>Official Events may require separate registration, digital waiver execution, and acceptance of event specific terms. Those terms will govern participation in that event.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">3.4 Release for Community Sessions</h3>
            <p>To the maximum extent permitted by law, you release Playy from all claims arising from Community Sessions or user interactions, except where liability cannot legally be excluded, including fraud or gross negligence.</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Playy Verified Status</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">4.1 Eligibility</h3>
            <p className="mb-2">Playy Verified requires:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Participation in at least 5 Community Sessions or Official Events</li>
              <li>Minimum reliability rating of 4.2</li>
              <li>Account age of at least 14 days</li>
              <li>No pending or active misconduct reports</li>
            </ul>
            <p className="mt-2">Approval is manual and discretionary.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">4.2 No Guarantee</h3>
            <p>Playy Verified is a discretionary community designation based solely on internal platform metrics and manual review. It does not involve background checks, criminal screening, identity document verification, or independent safety assessment. It does not constitute endorsement, certification, or guarantee of any user's character, identity, or safety.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">4.3 Revocation</h3>
            <p>Playy may revoke Playy Verified status at any time.</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. User Conduct</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Impersonate another person</li>
              <li>Provide false information</li>
              <li>Harass, threaten, or discriminate</li>
              <li>Endanger minors</li>
              <li>Manipulate ratings or create duplicate accounts</li>
              <li>Organise unlawful or unsafe Community Sessions</li>
              <li>Violate applicable laws</li>
            </ul>
            <p className="mt-2">Violations may result in suspension or termination.</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. User Content and Intellectual Property</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">6.1 Ownership and Licence</h3>
            <p>You retain ownership of content you submit. You grant Playy a worldwide, non exclusive, royalty free, transferable and sublicensable licence, solely in connection with operating, maintaining, improving, or promoting the Services, to use, host, display, modify for technical purposes, reproduce, distribute, and promote your content.</p>
            <p className="mt-2">This licence survives account deletion for a commercially reasonable period necessary for backups, legal compliance, or enforcement.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">6.2 Prohibited Content</h3>
            <p>You may not post illegal, infringing, violent, hateful, or exploitative content.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">6.3 Our Intellectual Property</h3>
            <p>The Services, branding, and software are owned by Playy. You are granted a limited licence for personal use only.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">6.4 IP Complaints</h3>
            <p>To report copyright infringement or unlawful content, email <a href="mailto:support@playy.app" className="text-primary hover:underline">support@playy.app</a> with specific details. We may remove content and terminate repeat infringers.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Account Security</h2>
            <p>You are responsible for all activity under your account, whether authorized by you or not. You must:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Maintain the confidentiality of your credentials</li>
              <li>Notify us immediately of any unauthorized access or use of your account</li>
              <li>Keep your account information current and accurate</li>
            </ul>
            <p className="mt-2 font-medium text-foreground">Playy shall not be liable for any loss or damage arising from your failure to comply with these obligations.</p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Reporting and Enforcement</h2>
            <p className="mb-2">Playy is not obligated to monitor user activity or content but may do so at its discretion. Users may report misconduct through in-app tools.</p>
            <p className="mb-2">We may:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Remove content or Community Sessions</li>
              <li>Suspend or terminate accounts</li>
              <li>Revoke Playy Verified status</li>
              <li>Prevent re-registration</li>
              <li>Cooperate with authorities</li>
            </ul>
            <p className="mt-2">All enforcement decisions are at Playy's discretion.</p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Fees and Future Services</h2>
            <p>Community Sessions are currently free to use.</p>
            <p className="mt-2">Official Events may require entry fees. Pricing, refund policies, and event specific conditions will be disclosed at registration and governed by separate terms.</p>
            <p className="mt-2">Playy reserves the right to introduce paid features or services in the future.</p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Privacy and Data Protection</h2>
            <p>Use of the Services is governed by the <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
            <p className="mt-2">We implement reasonable security measures, but no system is completely secure.</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Disclaimers</h2>
            <p>Community Sessions are provided on an "as is" basis without warranties.</p>
            <p className="mt-2">We do not guarantee availability, safety, or suitability of any user or session.</p>
            <p className="mt-2">You acknowledge that you have not relied on any representations or statements not expressly set out in these Terms.</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Limitation of Liability</h2>
            <p className="mb-2">To the maximum extent permitted by UAE law:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Playy is not liable for indirect, incidental, or consequential damages.</li>
              <li>Playy is not liable for user conduct or injuries arising from Community Sessions.</li>
            </ul>
            <p className="mt-2 font-medium text-foreground">Playy's total liability for Community Sessions shall not exceed the greater of: (a) the total amount paid by you to Playy in the 12 months preceding the claim, or (b) AED 1,000. This limitation applies in aggregate to all claims arising out of or relating to the Services.</p>
            <p className="mt-2">Liability for Official Events shall be governed by the event specific terms applicable to that event, including any applicable liability limitations stated therein.</p>
            <p className="mt-2">This does not limit liability that cannot legally be excluded, including fraud or gross negligence.</p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Indemnification</h2>
            <p className="mb-2">To the fullest extent permitted by applicable law, you agree to indemnify and hold harmless Playy, its affiliates, and personnel from claims arising from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use of the Services</li>
              <li>Your participation in Community Sessions</li>
              <li>Your content</li>
              <li>Your violation of these Terms or any law</li>
            </ul>
            <p className="mt-2">Playy reserves the right to assume exclusive defense and control of any matter subject to indemnification.</p>
            <p className="mt-2">This obligation survives termination.</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">14. Governing Law and Disputes</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">14.1 Governing Law</h3>
            <p>These Terms shall be governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">14.2 Jurisdiction</h3>
            <p>Subject to your mandatory consumer rights, disputes shall be resolved exclusively in the onshore courts of Dubai.</p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">15. Changes and Termination</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">15.1 Updates</h3>
            <p>We may update these Terms with notice. Continued use of the Services after updated Terms take effect constitutes acceptance of the updated Terms.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">15.2 Termination Rights</h3>
            <p>You may stop using the Services at any time. We may suspend or terminate accounts for violations of these Terms, for safety reasons, or where required by law.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">15.3 Effect of Termination</h3>
            <p>Sections 6, 11, 12, 13, and 14 survive termination.</p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">16. Force Majeure</h2>
            <p>Playy is not liable for delays or failures caused by events beyond its reasonable control.</p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">17. Entire Agreement</h2>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">17.1 Entire Agreement</h3>
            <p>These Terms, the Privacy Policy, and any event specific terms constitute the entire agreement between you and Playy.</p>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">17.2 Severability</h3>
            <p>If any provision is found invalid or unenforceable, it shall be modified to the minimum extent necessary or severed, and the remaining provisions shall remain in full force.</p>
          </section>

          <p className="text-xs text-muted-foreground pt-4 border-t border-border">Last Updated: February 13, 2026</p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
