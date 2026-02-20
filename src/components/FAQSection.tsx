import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt3D } from "@/hooks/useTilt3D";

const faqs = [
  { question: "What do you mean by \"unlimited\" requests?", answer: "You can add as many thumbnail requests as you want to the queue. We work on them one (or two, depending on your plan) at a time and deliver within 24-48 hours each." },
  { question: "How fast will I get my thumbnails?", answer: "Most thumbnails are delivered within 24 to 48 hours. Complex requests may take a bit longer, but we always keep you updated." },
  { question: "What if I don't like the thumbnail?", answer: "We offer unlimited revisions! If a thumbnail isn't quite right, just let us know and we'll refine it until you're 100% satisfied." },
  { question: "Can I cancel anytime?", answer: "Yes! There are no long-term contracts. You can pause, cancel, or change your plan at any time without penalties." },
  { question: "Who designs the thumbnails?", answer: "You'll get a dedicated team of trained designers and strategists who specialize in YouTube thumbnails and understand psychology-based design principles." },
  { question: "Do you offer refunds?", answer: "Due to the nature of the service, we don't offer refunds. However, you can pause or cancel your subscription at any time." },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: { faq: typeof faqs[0]; index: number; isOpen: boolean; onToggle: () => void }) => {
  const tilt = useTilt3D(4);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="reveal rounded-2xl border border-border bg-card overflow-hidden card-3d hover:border-primary/20 transition-all duration-300 gradient-border inner-glow"
      style={{ transitionDelay: `${index * 0.05}s`, transformStyle: "preserve-3d" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <span className="text-sm font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">{faq.question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-primary/10 rotate-180" : "bg-muted"}`}>
          <ChevronDown className={`h-4 w-4 transition-all duration-300 ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-5 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const revealRef = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-4 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={revealRef} className="max-w-3xl mx-auto relative z-10">
        <h2 className="reveal text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-12">
          Frequently Asked <span className="text-gradient-premium">Questions</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
