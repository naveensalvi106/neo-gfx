import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What do you mean by \"unlimited\" requests?",
    answer: "You can add as many thumbnail requests as you want to the queue. We work on them one (or two, depending on your plan) at a time and deliver within 24-48 hours each.",
  },
  {
    question: "How fast will I get my thumbnails?",
    answer: "Most thumbnails are delivered within 24 to 48 hours. Complex requests may take a bit longer, but we always keep you updated.",
  },
  {
    question: "What if I don't like the thumbnail?",
    answer: "We offer unlimited revisions! If a thumbnail isn't quite right, just let us know and we'll refine it until you're 100% satisfied.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! There are no long-term contracts. You can pause, cancel, or change your plan at any time without penalties.",
  },
  {
    question: "Who designs the thumbnails?",
    answer: "You'll get a dedicated team of trained designers and strategists who specialize in YouTube thumbnails and understand psychology-based design principles.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Due to the nature of the service, we don't offer refunds. However, you can pause or cancel your subscription at any time.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
