import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "You'll reach out to us and subscribe to one of our plans",
  },
  {
    number: 2,
    title: "We'll get you onboarded on Trello and Discord",
  },
  {
    number: 3,
    title: "You'll start adding thumbnail requests",
  },
  {
    number: 4,
    title: "We'll start designing them one by one",
  },
  {
    number: 5,
    title: "You'll start receiving high-CTR, psychology-backed thumbnails",
  },
];

const Step1Card = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        perspective: "1200px",
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Front - default state */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 backface-hidden"
        style={{
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <Star className="h-8 w-8 text-foreground mb-2" strokeWidth={1} />
        <p className="text-sm font-medium text-foreground mb-8">Most Popular</p>
        <div className="bg-foreground text-background rounded-2xl p-5 w-56">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-4 w-4 fill-background" />
            <span className="font-bold text-sm">Limitless Plus</span>
          </div>
          <div className="bg-background text-foreground rounded-lg px-4 py-2.5 text-sm text-center">
            We'll reach out soon :)
          </div>
        </div>
      </div>

      {/* Back - hovered state */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500 backface-hidden"
        style={{
          transform: hovered ? "rotateY(0deg)" : "rotateY(-180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="relative w-72 h-80">
          {/* Limitless card (white, behind) */}
          <div className="absolute left-0 top-0 bg-card border border-border rounded-2xl p-5 w-52 shadow-lg -rotate-3">
            <h4 className="font-bold text-foreground text-base mb-4">Limitless</h4>
            <div className="space-y-2.5">
              {["Unlimited thumbnail Requests", "One request at a time", "24 to 48 hour turnaround time", "24/7 direct communication"].map((f) => (
                <div key={f} className="bg-muted rounded-lg px-3 py-2 text-xs text-foreground">{f}</div>
              ))}
            </div>
            <div className="mt-4 bg-muted rounded-lg px-3 py-2 text-xs font-semibold text-foreground">Get Started</div>
          </div>

          {/* Limitless Plus card (dark, front) */}
          <div className="absolute right-0 top-6 bg-foreground text-background rounded-2xl p-5 w-52 shadow-2xl rotate-3 z-10">
            <div className="flex items-center gap-2 mb-1">
              <Star className="h-4 w-4 fill-background" />
              <span className="font-bold text-sm">Limitless Plus</span>
            </div>
            <div className="space-y-2.5 mt-4">
              {["Unlimited thumbnail Requests", "Two request at a time", "24 to 48 hour turnaround time", "Auto Testing and Rehashing"].map((f) => (
                <div key={f} className="bg-muted-foreground/20 rounded-lg px-3 py-2 text-xs">{f}</div>
              ))}
            </div>
            <div className="mt-4 bg-background text-foreground rounded-lg px-3 py-2.5 text-xs font-semibold text-center">Get Started</div>
          </div>

          {/* "You" cursor badge */}
          <div className="absolute bottom-2 right-4 z-20 flex flex-col items-center">
            <div className="text-primary">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor">
                <path d="M0 0L16 12L8 12L12 20L8 18L4 12L0 16V0Z" />
              </svg>
            </div>
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mt-0.5">You</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Steps */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 transition-all ${
                  i === 0 ? "bg-muted/60 border border-border" : ""
                }`}
              >
                <p className="text-sm text-muted-foreground mb-1">Step {step.number}</p>
                <h3 className="font-bold text-foreground text-base leading-snug">{step.title}</h3>
              </div>
            ))}
          </div>

          {/* Right - Interactive Card */}
          <div className="h-[500px] sticky top-24">
            <Step1Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
