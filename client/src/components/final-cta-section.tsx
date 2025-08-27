import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="scroll-fade opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-final-cta-title">
            Ready to Transform Your Server?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="text-final-cta-description">
            Join the growing wave of communities choosing Flenzo for a better Discord experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all hover-glow flex items-center justify-center group" 
              data-testid="button-add-to-discord-final"
              onClick={() => window.open('https://discord.com/api/oauth2/authorize?client_id=998547879201349693&permissions=8&scope=bot%20applications.commands', '_blank')}
            >
              <i className="fab fa-discord mr-3 sm:mr-4 text-xl sm:text-2xl group-hover:scale-110 transition-transform"></i>
              Add to Discord Now
            </Button>
            <Button 
              className="w-full sm:w-auto bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all hover-glow flex items-center justify-center group" 
              data-testid="button-join-community"
              onClick={() => window.open('https://discord.gg/C86nD33WBr', '_blank')}
            >
              <i className="fas fa-users mr-3 sm:mr-4 text-lg sm:text-xl group-hover:scale-110 transition-transform"></i>
              Join Community
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-muted-foreground">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-primary mr-2"></i>
              <span className="text-sm" data-testid="text-benefit-free">Free Forever</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-primary mr-2"></i>
              <span className="text-sm" data-testid="text-benefit-setup">No Setup Required</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-primary mr-2"></i>
              <span className="text-sm" data-testid="text-benefit-support">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
