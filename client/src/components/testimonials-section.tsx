import React, { useState } from 'react';

const initialTestimonials = [
  {
    name: "alex.gaming",
    role: "Server Owner",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    content: "Flenzo transformed our server completely. The moderation features saved us hours of work, and the music quality is incredible!"
  },
  {
    name: "sarah.streams",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    content: "Best multipurpose bot out there. Never crashes, always responsive. My community loves the game features!"
  },
  {
    name: "mike.esports",
    role: "Esports Team Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    content: "Flenzo handles everything our competitive team needs. Moderation, scheduling, music - it's all perfect. 10/10!"
  },
  {
    name: "luna.dev",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    content: "Finally a Discord bot that doesn't randomly crash or go offline. Reliable and feature-packed!"
  },
  {
    name: "jay.community",
    role: "Community Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    content: "Amazing features and the support team is incredibly responsive. Best investment for our Discord server!"
  },
  {
    name: "kai.streamer",
    role: "Twitch Streamer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face",
    content: "Flenzo keeps my stream chat engaged with awesome games and music. My viewers absolutely love it!"
  }
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade opacity-0 translate-y-8 transition-all duration-700 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-testimonials-title">What Our Community Says</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-description">
            Trusted by growing Discord communities who care about premium-quality automation and smooth performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-gradient p-6 rounded-xl hover-glow scroll-fade opacity-0 translate-y-8 transition-all duration-700 discord-embed">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} Avatar`} 
                  className="w-10 h-10 rounded-full" 
                  data-testid={`img-testimonial-avatar-${index}`}
                />
                <div>
                  <div className="font-medium text-white" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</div>
                  <div className="text-sm text-blue-200" data-testid={`text-testimonial-role-${index}`}>{testimonial.role}</div>
                </div>
              </div>
              <p className="text-white leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {/* Add Review Section */}
        <div className="mt-16 text-center scroll-fade opacity-0 translate-y-8 transition-all duration-700">
          <div className="max-w-2xl mx-auto card-gradient p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4" data-testid="text-review-title">Share Your Experience</h3>
            <p className="text-muted-foreground mb-6" data-testid="text-review-description">
              Love using Flenzo? Share your experience with our community!
            </p>
            
            <form className="space-y-4" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const newReview = {
                name: formData.get('name') as string,
                role: formData.get('role') as string,
                content: formData.get('content') as string,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&face"
              };
              
              // Add new review to the list
              setTestimonials(prev => [...prev, newReview]);
              
              // Show success message
              const successMsg = document.createElement('div');
              successMsg.className = 'bg-primary/20 border border-primary text-primary p-4 rounded-xl mt-4';
              successMsg.textContent = 'Thank you for your review! It has been published.';
              form.appendChild(successMsg);
              
              // Reset form
              form.reset();
              
              // Remove success message after 5 seconds
              setTimeout(() => successMsg.remove(), 5000);
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Discord Username"
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  data-testid="input-review-name"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role (e.g., Server Owner)"
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  data-testid="input-review-role"
                />
              </div>
              <textarea
                name="content"
                placeholder="Tell us about your experience with Flenzo..."
                required
                rows={4}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                data-testid="textarea-review-content"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all hover-glow flex items-center justify-center mx-auto"
                data-testid="button-submit-review"
              >
                <i className="fas fa-star mr-2"></i>
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
