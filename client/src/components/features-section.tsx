const features = [
  {
    icon: "fas fa-shield-alt",
    title: "Advanced Moderation",
    description: "Comprehensive moderation tools with auto-mod, anti-spam, role management, and detailed logging to keep your community safe."
  },
  {
    icon: "fas fa-music",
    title: "Premium Music",
    description: "Crystal clear 320kbps audio quality with 24/7 support, playlists, and 30+ audio filters for the perfect listening experience."
  },
  {
    icon: "fas fa-gamepad",
    title: "Fun & Games",
    description: "50+ entertaining commands including trivia, economy system, mini-games, and interactive activities to engage your community."
  },
  {
    icon: "fas fa-cogs",
    title: "Smart Utilities",
    description: "Helpful utilities like reminders, polls, server statistics, welcome messages, and custom commands for enhanced productivity."
  },
  {
    icon: "fas fa-bolt",
    title: "Lightning Fast",
    description: "Optimized for speed with instant command execution, minimal latency, and 99.9% uptime guarantee for reliable performance."
  },
  {
    icon: "fas fa-rocket",
    title: "Easy Setup",
    description: "Get started in seconds with our intuitive setup wizard, comprehensive documentation, and 24/7 support team."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade opacity-0 translate-y-8 transition-all duration-700 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-features-title">Why Choose Flenzo?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-description">
            Packed with cutting-edge features that make Discord server management effortless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-gradient p-6 sm:p-8 rounded-xl hover-glow scroll-fade opacity-0 translate-y-8 transition-all duration-700 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`${feature.icon} text-2xl text-white`} data-testid={`icon-feature-${index}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-4" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
