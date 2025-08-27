import { useState } from "react";

const faqs = [
  {
    question: "How can I claim the free premium trial?",
    answer: "Simply add Flenzo to your Discord server and use the command /premium claim. The first 500 servers get 30 days of premium features completely free!"
  },
  {
    question: "Is Flenzo free to use?",
    answer: "Yes! Flenzo offers a robust free tier with essential moderation, music, and utility features. Premium unlocks advanced features like custom commands, priority support, and enhanced audio quality."
  },
  {
    question: "How do I add Flenzo to my server?",
    answer: "Click the \"Add to Discord\" button, select your server, grant the necessary permissions, and you're ready to go! Flenzo will automatically set up basic configurations and send a welcome message."
  },
  {
    question: "What features are included?",
    answer: "Flenzo includes moderation tools, music streaming, games & economy, utility commands, custom welcome messages, server statistics, and much more. Premium adds advanced features and priority support."
  },
  {
    question: "Can I use Flenzo 24/7?",
    answer: "Absolutely! Flenzo maintains 99.9% uptime with dedicated servers and automatic failover systems. Your server automation runs continuously without interruption."
  },
  {
    question: "How many servers can use Flenzo?",
    answer: "There's no limit! Flenzo can be added to unlimited Discord servers. Each server gets its own independent configuration and data storage."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade opacity-0 translate-y-8 transition-all duration-700 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-faq-title">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground" data-testid="text-faq-description">
            Get answers to the most common questions about Flenzo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-gradient rounded-xl overflow-hidden scroll-fade opacity-0 translate-y-8 transition-all duration-700">
              <button 
                className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/5 transition-colors"
                onClick={() => toggleFaq(index)}
                data-testid={`button-faq-${index}`}
              >
                <span className="font-medium text-lg" data-testid={`text-faq-question-${index}`}>{faq.question}</span>
                <i 
                  className={`fas fa-chevron-down text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  data-testid={`icon-faq-chevron-${index}`}
                ></i>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
