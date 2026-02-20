import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/919358935758";

const FooterSection = () => {
  const revealRef = useScrollReveal();

  return (
    <footer className="bg-foreground text-background py-16 px-4 relative overflow-hidden">
      {/* Multiple ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-breathe" />

      <div ref={revealRef} className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="reveal text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Get Thumbnails That Actually Get Clicks?
        </h2>
        <p className="reveal text-sm opacity-60 mb-8 max-w-lg mx-auto" style={{ transitionDelay: "0.1s" }}>
          Join 62+ YouTubers who trust Neo Thumbnail for their thumbnail needs. Start today and see the difference.
        </p>
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 animate-glow-ring"
          >
            Get Started Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-extrabold text-background text-sm tracking-tight">NEO THUMBNAIL</span>
          <p className="text-xs opacity-40">© 2025 Neo Thumbnail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
