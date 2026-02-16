import { ArrowRight, FileText, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          And the best part?
          <br />
          Everything at a single monthly <span className="text-primary">subscription!</span>
        </h2>
        <div className="flex justify-center mt-3 mb-10">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>

        {/* Cards Container with lavender bg */}
        <div className="rounded-3xl bg-primary/10 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-5">
            {/* No Long-Term Contracts */}
            <div className="bg-card rounded-2xl p-7 text-left">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-5">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">No Long-Term Contracts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agencies often tie you down with long contracts. With us, you can pause, cancel or adjust your plan anytime.
              </p>
            </div>

            {/* No Lack of Flexibility */}
            <div className="bg-card rounded-2xl p-7 text-left">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-5">
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
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Start Getting Unlimited Thumbnails
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
