import { ArrowRight, FileText, Clock, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919358935758";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Dot above heading */}
        <div className="flex justify-center mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          And the best part?
          <br />
          Everything at a single monthly <span className="text-primary">subscription!</span>
        </h2>
        <div className="h-10" />

        {/* Cards Container with lavender bg */}
        <div className="rounded-3xl bg-primary/10 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-5">
            {/* No Long-Term Contracts */}
            <div className="bg-card rounded-2xl p-7 text-left shadow-sm">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5 shadow-sm">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">No Long-Term Contracts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agencies often tie you down with long contracts. With us, you can pause, cancel or adjust your plan anytime.
              </p>
            </div>

            {/* No Lack of Flexibility */}
            <div className="bg-card rounded-2xl p-7 text-left shadow-sm">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5 shadow-sm">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">No Lack of Flexibility</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With us, you can get instant updates and changes with your subscription, no more wasting time on contract modifications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Let's Connect
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        {/* Contact Us Section */}
        <div id="contact" className="mt-20">
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">Contact Us</h3>
          <p className="text-sm text-muted-foreground mb-8">Reach out through any of the channels below</p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* Gmail */}
            <a
              href="mailto:naveensalviai@gmail.com"
              className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">Email</span>
              <span className="text-xs text-muted-foreground">naveensalviai@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">WhatsApp</span>
              <span className="text-xs text-muted-foreground">+91 9358935758</span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/neothumbnail"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(var(--primary))">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-foreground">Discord</span>
              <span className="text-xs text-muted-foreground">neothumbnail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
