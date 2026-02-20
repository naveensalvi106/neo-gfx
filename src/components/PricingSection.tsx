import { Mail, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt3D } from "@/hooks/useTilt3D";

const WHATSAPP_URL = "https://wa.me/919358935758";

const ContactCard = ({ children, href, ...props }: { children: React.ReactNode; href: string; target?: string; rel?: string }) => {
  const tilt = useTilt3D(12);
  return (
    <a
      href={href}
      {...props}
      ref={tilt.ref as any}
      onMouseMove={tilt.onMouseMove as any}
      onMouseLeave={tilt.onMouseLeave as any}
      className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center gap-3 card-3d-intense hover:border-primary/40 transition-all duration-300 group gradient-border inner-glow shine-sweep"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </a>
  );
};

const PricingSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={revealRef} className="max-w-4xl mx-auto text-center relative z-10">
        <div id="contact" className="mt-20">
          <h3 className="reveal text-2xl md:text-3xl font-extrabold text-foreground mb-2">Contact Us</h3>
          <p className="reveal text-sm text-muted-foreground mb-8" style={{ transitionDelay: "0.1s" }}>Reach out through any of the channels below</p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <ContactCard href="mailto:naveensalviai@gmail.com">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Email</span>
                <span className="text-xs text-muted-foreground">naveensalviai@gmail.com</span>
              </ContactCard>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.3s" }}>
              <ContactCard href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">WhatsApp</span>
                <span className="text-xs text-muted-foreground">+91 9358935758</span>
              </ContactCard>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.4s" }}>
              <ContactCard href="https://discord.com/users/neothumbnail" target="_blank" rel="noopener noreferrer">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(var(--primary))">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-foreground">Discord</span>
                <span className="text-xs text-muted-foreground">neothumbnail</span>
              </ContactCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
