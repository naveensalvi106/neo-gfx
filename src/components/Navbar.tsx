import logo from "@/assets/boostraft-logo.png";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919358935758";

const navLinks = [
  { label: "Portfolio", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Benefits", href: "#benefits" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="flex items-center gap-1 rounded-full glass px-2 py-2 shadow-lg shadow-foreground/5 animate-pulse-glow">
        <a href="#" className="px-3 font-extrabold text-foreground text-sm tracking-tight">
          NEO THUMBNAIL
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20 hover:scale-105 active:scale-95"
        >
          Get Started
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
