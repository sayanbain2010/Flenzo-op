import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import flenzoLogo from "@assets/e0b1db8bc8343ce736c4f871b6225069_1756259193247.png";

const statistics = [
  { value: "2.8K", label: "Servers" },
  { value: "485K", label: "Users" },
  { value: "1.2M", label: "Commands Used" },
  { value: "24/7", label: "Uptime" }
];

export default function HeroSection() {
  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated) {
            setCountersAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('statistics');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  return (
    <section className="relative pt-24 pb-20 hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 pulse-animation">
            <i className="fas fa-star mr-2"></i>
            <span data-testid="text-promo-banner">Limited Time: Free Premium for First 500 Users!</span>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <img src={flenzoLogo} alt="Flenzo Logo" className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full" data-testid="img-hero-logo" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            <span data-testid="text-hero-title-line1">The Ultimate</span><br/>
            <span className="text-primary" data-testid="text-hero-title-line2">Discord Multipurpose</span><br/>
            <span data-testid="text-hero-title-line3">Experience</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed px-4" data-testid="text-hero-description">
            Moderation, music, games, utilities, and more. Flenzo is built for communities who demand the best in Discord automation and management.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
            <Button 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover-glow flex items-center justify-center" 
              data-testid="button-add-to-discord"
              onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands', '_blank')}
            >
              <i className="fab fa-discord mr-3 text-lg sm:text-xl"></i>
              Add to Discord
            </Button>
            <Button 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all hover-glow flex items-center justify-center" 
              data-testid="button-go-premium"
              onClick={() => window.open('https://discord.gg/flenzo-premium', '_blank')}
            >
              <i className="fas fa-crown mr-3"></i>
              Go Premium
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div id="statistics" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center card-gradient p-6 rounded-xl hover-glow">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
