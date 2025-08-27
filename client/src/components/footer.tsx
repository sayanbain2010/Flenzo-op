import { Link } from "wouter";
import flenzoLogo from "@assets/e0b1db8bc8343ce736c4f871b6225069_1756259193247.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={flenzoLogo} alt="Flenzo Logo" className="w-8 h-8 rounded-full" data-testid="img-footer-logo" />
              <span className="text-xl font-bold text-primary" data-testid="text-footer-brand">Flenzo</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-description">
              The ultimate Discord multipurpose bot for communities who demand the best in automation and engagement.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-features-heading">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-moderation">Moderation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-music">Music Player</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-games">Games & Fun</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-utilities">Utilities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-support-heading">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-documentation">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-discord-server">Discord Server</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-premium">Premium</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-status">Status Page</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="text-connect-heading">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-discord-social">
                <i className="fab fa-discord text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-github">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p data-testid="text-copyright">&copy; 2025 Flenzo Bot. All rights reserved. Built with ❤️ for Discord communities.</p>
              <p className="text-xs mt-1" data-testid="text-developer-credit">Developed by sayan_xd</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="hover:text-foreground transition-colors" data-testid="link-terms">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
