import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient p-8 md:p-12 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" data-testid="text-privacy-title">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8 text-center" data-testid="text-privacy-intro">
                Last updated: January 27, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-info-collection-title">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-info-collection-content">
                  When you use Flenzo, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Discord server IDs and basic server information</li>
                  <li>User IDs and usernames for command usage</li>
                  <li>Message content when interacting with bot commands</li>
                  <li>Usage statistics and command logs</li>
                  <li>Server configuration settings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-info-usage-title">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-info-usage-content">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide and maintain bot functionality</li>
                  <li>Process commands and deliver responses</li>
                  <li>Improve our services and develop new features</li>
                  <li>Prevent abuse and ensure service security</li>
                  <li>Provide customer support</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-data-sharing-title">3. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-data-sharing-content">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only when required by law or to protect our rights and the safety of our users.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-data-retention-title">4. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-data-retention-content">
                  We retain your information only as long as necessary to provide our services. Server configurations are kept while the bot is active in your server. Command logs may be retained for up to 30 days for debugging purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-data-security-title">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-data-security-content">
                  We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-user-rights-title">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-user-rights-content">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Request information about data we have collected</li>
                  <li>Request deletion of your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Remove the bot from your server at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-changes-title">7. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-changes-content">
                  We may update this Privacy Policy from time to time. We will notify users of any significant changes through our Discord server or website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-contact-privacy-title">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-contact-privacy-content">
                  If you have any questions about this Privacy Policy, please contact us through our Discord server or support channels.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}