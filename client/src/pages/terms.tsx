import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-gradient p-8 md:p-12 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" data-testid="text-terms-title">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-8 text-center" data-testid="text-terms-intro">
                Last updated: January 27, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-acceptance-title">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-acceptance-content">
                  By adding Flenzo to your Discord server or using any of our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-description-title">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-description-content">
                  Flenzo is a Discord bot that provides moderation, music, gaming, utility, and other features for Discord servers. Our services include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Server moderation tools and auto-moderation</li>
                  <li>Music streaming and audio features</li>
                  <li>Games, entertainment, and economy systems</li>
                  <li>Utility commands and server management tools</li>
                  <li>Custom commands and automation features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-usage-title">3. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-usage-content">
                  You agree to use Flenzo responsibly and in accordance with Discord's Terms of Service. Prohibited uses include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Using the bot for spam, harassment, or malicious activities</li>
                  <li>Attempting to exploit, hack, or reverse engineer the bot</li>
                  <li>Using the bot in violation of any applicable laws</li>
                  <li>Circumventing rate limits or usage restrictions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-termination-title">4. Termination</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-termination-content">
                  We reserve the right to terminate or suspend your access to Flenzo at any time, without prior notice, for any reason, including violation of these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-disclaimer-title">5. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-disclaimer-content">
                  Flenzo is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or that the bot will meet all your requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary" data-testid="text-contact-title">6. Contact</h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-contact-content">
                  If you have any questions about these Terms of Service, please contact us through our Discord server or support channels.
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