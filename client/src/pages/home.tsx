import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";
import FinalCtaSection from "@/components/final-cta-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Scroll fade animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-fade').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      
      {/* Community Stats */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="scroll-fade opacity-0 translate-y-8 transition-all duration-700">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" data-testid="text-community-title">
                Trusted by Gaming Communities Worldwide
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto" data-testid="text-community-description">
                From small friend groups to massive gaming guilds, Flenzo powers communities of all sizes with reliable, feature-rich Discord automation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2" data-testid="text-servers-count">10,000+</div>
                  <div className="text-muted-foreground" data-testid="text-servers-label">Active Servers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2" data-testid="text-users-count">500K+</div>
                  <div className="text-muted-foreground" data-testid="text-users-label">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2" data-testid="text-uptime-count">99.9%</div>
                  <div className="text-muted-foreground" data-testid="text-uptime-label">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />


      <FaqSection />


      <FinalCtaSection />
      <Footer />
    </div>
  );
}
