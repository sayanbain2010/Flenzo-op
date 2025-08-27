import React, { useState } from 'react';

const initialTestimonials = [
  {
    name: "alex.gaming",
    role: "Server Owner",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&h=60&face",
    content: "Flenzo transformed our server completely. The moderation features saved us hours of work, and the music quality is incredible!"
  },
  {
    name: "sarah.streams",
    role: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=60&h=60&face",
    content: "Best multipurpose bot out there. Never crashes, always responsive. My community loves the game features!"
  }
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  // Discord webhook URL (replace with your actual webhook)
  const WEBHOOK_URL = "https://discord.com/api/webhooks/1390140740239229109/PDn1_1qKvsUtjTxLFxSFOY3BVd1-lE3ukTUSr6RLe_9FJQPExrTM1Shdc8o2JEufCaDR";

  const sendToWebhook = async (review: any) => {
    const embed = {
      username: "Flenzo Reviews",
      avatar_url: review.avatar,
      embeds: [
        {
          title: `⭐ New Review from ${review.name}`,
          color: 0x5865F2, // Discord blurple
          fields: [
            { name: "User", value: review.name, inline: true },
            { name: "Role", value: review.role, inline: true },
            { name: "Review", value: review.content }
          ],
          thumbnail: { url: review.avatar },
          footer: { text: "New community review submitted!" },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(embed)
      });
    } catch (err) {
      console.error("Webhook error:", err);
    }
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 scroll-fade opacity-0 translate-y-8 transition-all duration-700 px-4">
          <h2 className="text-4xl font-bold mb-6">What Our Community Says</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by growing Discord communities who care about premium-quality automation and smooth performance.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-gradient p-6 rounded-xl hover-glow discord-embed">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} Avatar`} 
                  className="w-10 h-10 rounded-full" 
                />
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-200">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-white leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* Add Review Section */}
        <div className="mt-16 text-center scroll-fade opacity-0 translate-y-8 transition-all duration-700">
          <div className="max-w-2xl mx-auto card-gradient p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-muted-foreground mb-6">
              Love using Flenzo? Share your experience with our community!
            </p>
            
            <form
              className="space-y-4"
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const newReview = {
                  name: formData.get('name') as string,
                  role: formData.get('role') as string,
                  content: formData.get('content') as string,
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=60&h=60&face"
                };

                // Add review to UI
                setTestimonials(prev => [...prev, newReview]);

                // Send to Discord webhook
                await sendToWebhook(newReview);

                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'bg-primary/20 border border-primary text-primary p-4 rounded-xl mt-4';
                successMsg.textContent = '✅ Thank you for your review! It has been sent.';
                form.appendChild(successMsg);

                // Reset form
                form.reset();

                // Remove success message after 5 seconds
                setTimeout(() => successMsg.remove(), 5000);
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Discord Username"
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl"
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role (e.g., Server Owner)"
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl"
                />
              </div>
              <textarea
                name="content"
                placeholder="Tell us about your experience with Flenzo..."
                required
                rows={4}
                className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all hover-glow flex items-center justify-center mx-auto"
              >
                ⭐ Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
