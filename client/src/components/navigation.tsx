import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import flenzoLogo from "@assets/e0b1db8bc8343ce736c4f871b6225069_1756259193247.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home-logo">
            <img src={flenzoLogo} alt="Flenzo Logo" className="w-8 h-8 rounded-full" data-testid="img-logo" />
            <span className="text-xl font-bold text-primary" data-testid="text-brand-name">Flenzo</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-home">
              Home
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-testimonials">
              Reviews
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-faq">
              FAQ
            </a>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg font-medium transition-all hover-glow"
              data-testid="button-add-to-discord-nav"
              onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands', '_blank')}
            >
              Add to Discord
            </Button>
          </div>
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors" 
                data-testid="link-home-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#features" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors" 
                data-testid="link-features-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors" 
                data-testid="link-testimonials-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#faq" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors" 
                data-testid="link-faq-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg font-medium transition-all hover-glow"
                  data-testid="button-add-to-discord-mobile"
                  onClick={() => {
                    window.open('https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&permissions=8&scope=bot%20applications.commands', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Add to Discord
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
