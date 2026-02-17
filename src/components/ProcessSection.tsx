import { useState } from "react";
import { Star } from "lucide-react";
import heroThumb1 from "@/assets/hero-thumb-1.jpg";

const steps = [
  { number: 1, title: "You'll reach out to us and subscribe to one of our plans" },
  { number: 2, title: "We'll get you onboarded on Trello and Discord" },
  { number: 3, title: "You'll start adding thumbnail requests" },
  { number: 4, title: "We'll start designing them one by one" },
  { number: 5, title: "You'll start receiving high-CTR, psychology-backed thumbnails" },
];

const gridBg = {
  backgroundImage:
    "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
};

/* ───── Step 1 Card ───── */
const Step1Card = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: "1200px", ...gridBg }}
    >
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500"
        style={{ transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)", backfaceVisibility: "hidden" }}
      >
        <Star className="h-8 w-8 text-foreground mb-2" strokeWidth={1} />
        <p className="text-sm font-medium text-foreground mb-8">Most Popular</p>
        <div className="bg-foreground text-background rounded-2xl p-5 w-56">
          <div className="flex items-center gap-2 mb-3">
            <Star className="h-4 w-4 fill-background" />
            <span className="font-bold text-sm">Limitless Plus</span>
          </div>
          <div className="bg-background text-foreground rounded-lg px-4 py-2.5 text-sm text-center">We'll reach out soon :)</div>
        </div>
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-500"
        style={{ transform: hovered ? "rotateY(0deg)" : "rotateY(-180deg)", backfaceVisibility: "hidden" }}
      >
        <div className="relative w-72 h-80">
          <div className="absolute left-0 top-0 bg-card border border-border rounded-2xl p-5 w-52 shadow-lg -rotate-3">
            <h4 className="font-bold text-foreground text-base mb-4">Limitless</h4>
            <div className="space-y-2.5">
              {["Unlimited thumbnail Requests", "One request at a time", "24 to 48 hour turnaround time", "24/7 direct communication"].map((f) => (
                <div key={f} className="bg-muted rounded-lg px-3 py-2 text-xs text-foreground">{f}</div>
              ))}
            </div>
            <div className="mt-4 bg-muted rounded-lg px-3 py-2 text-xs font-semibold text-foreground">Get Started</div>
          </div>
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
          <div className="absolute bottom-2 right-4 z-20 flex flex-col items-center">
            <div className="text-primary">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"><path d="M0 0L16 12L8 12L12 20L8 18L4 12L0 16V0Z" /></svg>
            </div>
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mt-0.5">You</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───── Step 2 Card ───── */
const Step2Card = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={gridBg}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Three icons: Discord, User, Trello */}
        <div className="flex items-center gap-3">
          {/* Discord */}
          <div className={`w-20 h-20 rounded-2xl bg-primary border-2 border-primary flex items-center justify-center shadow-lg transition-all duration-500 ${hovered ? "scale-110" : ""}`}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </div>

          {/* Connection lines */}
          <div className="flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-border" />
            <div className="w-6 h-0.5 bg-border" />
            <div className="w-6 h-0.5 bg-border" />
          </div>

          {/* User icon */}
          <div className={`w-20 h-20 rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-md transition-all duration-500 delay-100 ${hovered ? "scale-110" : ""}`}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="hsl(var(--primary))">
              <circle cx="12" cy="8" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>

          {/* Connection lines */}
          <div className="flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-border" />
            <div className="w-6 h-0.5 bg-border" />
            <div className="w-6 h-0.5 bg-border" />
          </div>

          {/* Trello */}
          <div className={`w-20 h-20 rounded-2xl bg-primary border-2 border-primary flex items-center justify-center shadow-lg transition-all duration-500 delay-200 ${hovered ? "scale-110" : ""}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="white" strokeWidth="2" />
              <rect x="6" y="6" width="4" height="10" rx="1" fill="white" />
              <rect x="14" y="6" width="4" height="6" rx="1" fill="white" />
            </svg>
          </div>
        </div>

        {/* "You" cursor on hover */}
        <div className={`absolute bottom-12 right-12 flex flex-col items-center transition-all duration-500 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="text-primary">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"><path d="M0 0L16 12L8 12L12 20L8 18L4 12L0 16V0Z" /></svg>
          </div>
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mt-0.5">You</span>
        </div>
      </div>
    </div>
  );
};

/* ───── Step 3 Card ───── */
const Step3Card = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={gridBg}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
        {/* Top card - Request form */}
        <div className="bg-card rounded-2xl border border-border shadow-lg p-5 w-72 relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">✦</span>
              <span className="font-semibold text-foreground text-sm">Request new thumbnail</span>
            </div>
            <div className="w-5 h-5 rounded bg-primary/10" />
          </div>

          {/* Form fields placeholder */}
          <div className={`transition-all duration-500 overflow-hidden ${hovered ? "max-h-40 opacity-100" : "max-h-24 opacity-100"}`}>
            {!hovered ? (
              <>
                <div className="h-3 bg-primary/20 rounded w-3/4 mb-2" />
                <div className="flex items-center justify-end mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="h-3 bg-primary/10 rounded w-1/2 mb-3" />
                <div className="h-3 bg-primary/10 rounded w-1/3 mb-4" />
                <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 text-center font-semibold text-sm">
                  Create a request
                </div>
              </>
            ) : (
              <div className="bg-primary rounded-xl px-4 py-12 text-center transition-all duration-500">
                <span className="text-primary-foreground font-semibold text-base">Request has been submitted</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom card - submitted state preview */}
        <div className="bg-card rounded-2xl border border-border shadow-sm p-5 w-72">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-primary text-lg">✦</span>
            <span className="font-semibold text-foreground text-sm">Request new thumbnail</span>
            <div className="ml-auto w-5 h-5 rounded bg-primary/10" />
          </div>
          <div className="border-t border-border pt-3 space-y-2">
            <div className="h-3 bg-accent/30 rounded w-3/4" />
            <div className="h-3 bg-accent/30 rounded w-full" />
            <div className="h-3 bg-accent/30 rounded w-2/3" />
          </div>
        </div>

        {/* Cursor */}
        <div className={`absolute bottom-6 right-6 flex flex-col items-center transition-all duration-500 ${hovered ? "opacity-0" : "opacity-60"}`}>
          <svg width="20" height="24" viewBox="0 0 16 20" fill="hsl(var(--foreground))" opacity="0.4"><path d="M0 0L16 12L8 12L12 20L8 18L4 12L0 16V0Z" /></svg>
        </div>
      </div>
    </div>
  );
};

/* ───── Step 4 Card ───── */
const Step4Card = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={gridBg}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* Photoshop-like toolbar */}
        <div className={`bg-foreground rounded-2xl px-4 py-2.5 flex items-center gap-3 mb-4 transition-all duration-500 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <span className="text-background text-xs font-bold border border-muted-foreground/30 rounded px-1.5 py-0.5">Ps</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--background))" strokeWidth="2"><path d="M5 3l14 9-14 9V3z" /></svg>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">+</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--background))" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--background))" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          <span className="text-background text-xs font-bold">T</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--background))" strokeWidth="2"><polygon points="5,3 19,12 5,21" /></svg>
        </div>

        {/* Canvas area */}
        <div className="relative bg-primary/10 rounded-2xl w-72 h-56 border border-primary/20 overflow-hidden">
          {/* Content bars */}
          <div className={`absolute top-4 left-4 space-y-2 transition-all duration-500 delay-100 ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <div className="h-3 bg-primary/20 rounded w-32" />
            <div className="h-3 bg-primary/20 rounded w-24" />
          </div>

          {/* Character silhouette */}
          <div className={`absolute right-6 bottom-0 transition-all duration-700 delay-200 ${hovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"}`}>
            <div className="relative">
              {/* Selection box */}
              <div className="absolute -inset-2 border border-blue-400 border-dashed">
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border border-blue-400 bg-card rounded-sm" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border border-blue-400 bg-card rounded-sm" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-blue-400 bg-card rounded-sm" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border border-blue-400 bg-card rounded-sm" />
              </div>
              {/* Head */}
              <div className="w-20 h-20 bg-muted-foreground/30 rounded-full mx-auto" />
              {/* Body */}
              <div className="w-28 h-16 bg-muted-foreground/30 rounded-t-3xl mx-auto -mt-2" />
            </div>
          </div>

          {/* "Taylor" cursor */}
          <div className={`absolute bottom-12 left-6 transition-all duration-500 delay-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
            <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Taylor</span>
          </div>

          {/* "Jamie" cursor */}
          <div className={`absolute top-16 right-2 transition-all duration-500 delay-400 ${hovered ? "opacity-100" : "opacity-0"}`}>
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Jamie</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ───── Step 5 Card ───── */
const Step5Card = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-full rounded-2xl bg-muted/50 border border-border overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={gridBg}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5">
        {/* 3 YouTube-like feed cards */}
        {[0, 1, 2].map((i) => (
          <div key={i} className="bg-card rounded-xl border border-border shadow-sm p-3 w-72 flex gap-3 relative overflow-hidden">
            {/* Thumbnail placeholder */}
            <div className={`w-24 h-16 rounded-lg flex-shrink-0 relative overflow-hidden transition-all duration-700 ${i === 1 && hovered ? "" : "bg-muted-foreground/10"}`}>
              {i === 1 && (
                <img
                  src={heroThumb1}
                  alt="Thumbnail"
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-700 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                />
              )}
            </div>
            {/* Text lines */}
            <div className="flex-1 space-y-1.5 py-1">
              <div className="h-2.5 bg-muted-foreground/20 rounded w-full" />
              <div className="flex items-center gap-2">
                <div className="h-2 bg-muted-foreground/10 rounded w-8" />
                <div className="h-2 bg-muted-foreground/10 rounded w-6" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted-foreground/20 rounded-full" />
                <div className="h-2 bg-muted-foreground/10 rounded w-16" />
              </div>
              <div className="h-2 bg-muted-foreground/10 rounded w-full" />
              <div className="h-2 bg-muted-foreground/10 rounded w-3/4" />
            </div>
          </div>
        ))}

        {/* "Viewer" cursor */}
        <div className={`absolute bottom-16 right-4 flex flex-col items-center transition-all duration-500 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="text-primary">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"><path d="M0 0L16 12L8 12L12 20L8 18L4 12L0 16V0Z" /></svg>
          </div>
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mt-0.5">Viewer</span>
        </div>
      </div>
    </div>
  );
};

const stepCards = [Step1Card, Step2Card, Step3Card, Step4Card, Step5Card];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Steps */}
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 transition-all cursor-pointer ${
                  activeStep === i ? "bg-muted/60 border border-border" : "hover:bg-muted/30"
                }`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <p className="text-sm text-muted-foreground mb-1">Step {step.number}</p>
                <h3 className="font-bold text-foreground text-base leading-snug">{step.title}</h3>
              </div>
            ))}
          </div>

          {/* Right - Interactive Card */}
          <div className="h-[500px] sticky top-24 relative">
            {stepCards.map((Card, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeStep === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Card />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
