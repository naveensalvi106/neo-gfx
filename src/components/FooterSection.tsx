import logo from "@/assets/boostraft-logo.png";
import { ArrowRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Get Thumbnails That Actually Get Clicks?
        </h2>
        <p className="text-sm opacity-60 mb-8 max-w-lg mx-auto">
          Join 62+ YouTubers who trust Boostraft for their thumbnail needs. Start today and see the difference.
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
        >
          Get Started Now
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Boostraft" className="h-5 brightness-0 invert" />
          <p className="text-xs opacity-40">© 2025 Boostraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
