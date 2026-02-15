import logo from "@/assets/boostraft-logo.png";
import { ArrowUpRight } from "lucide-react";

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
      <div className="flex items-center gap-1 rounded-full border border-border bg-card/85 backdrop-blur-xl px-2 py-2 shadow-sm">
        <a href="#" className="px-3">
          <img src={logo} alt="Boostraft" className="h-5" />
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#pricing"
          className="ml-1 flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get Started
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
