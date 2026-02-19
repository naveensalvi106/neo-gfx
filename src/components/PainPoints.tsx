import { HelpCircle, Users } from "lucide-react";
import { useState } from "react";
import thumb11 from "@/assets/thumb-11.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt3D } from "@/hooks/useTilt3D";

const marqueeWords = [
  ["Writing The Perfect Brief", "Managing Freelancers", "Chasing Endless Revisions", "Tracking CTR", "Finding Good References"],
  ["Doing A/B Tests Manually", "Scaling What Works", "Implementing the idea", "Brainstorming", "Writing The Perfect Brief"],
  ["Managing Freelancers", "Tracking CTR", "Finding Good References", "Chasing Endless Revisions", "Doing A/B Tests Manually"],
  ["Scaling What Works", "Brainstorming", "Implementing the idea", "Writing The Perfect Brief", "Managing Freelancers"],
  ["Chasing Endless Revisions", "Doing A/B Tests Manually", "Tracking CTR", "Scaling What Works", "Finding Good References"],
];

const Card3D = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const tilt = useTilt3D(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`card-3d ${className}`}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      {children}
    </div>
  );
};

const PainPoints = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const revealRef = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-4 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={revealRef} className="max-w-5xl mx-auto relative z-10">
        <h2 className="reveal text-3xl md:text-5xl font-extrabold text-center tracking-tight">
          Does This Sound Like <span className="text-gradient-premium">You?</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Card 1: Ghost You */}
          <Card3D className="reveal rounded-2xl border border-border bg-card p-7 overflow-hidden" >
            <div
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-lg font-bold text-foreground mb-2">Freelance Thumbnail Designers Ghost You</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Tired of hiring and dealing with unreliable and unprofessional designers?
              </p>
              <div className="relative h-36 rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden">
                <img
                  src={thumb11}
                  alt="Blurred thumbnail"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl blur-sm opacity-60"
                />
                <div className="relative flex items-center gap-3">
                  <HelpCircle
                    className={`h-10 w-10 text-primary/80 transition-all duration-500 ${
                      hoveredCard === 0 ? "translate-x-2 scale-110" : "translate-x-6 opacity-50"
                    }`}
                  />
                  <Users
                    className={`h-10 w-10 text-primary/80 transition-all duration-500 ${
                      hoveredCard === 0 ? "-translate-x-2 scale-110" : "-translate-x-6 opacity-50"
                    }`}
                  />
                </div>
              </div>
            </div>
          </Card3D>

          {/* Card 2: Boring Thumbnails */}
          <Card3D className="reveal rounded-2xl border border-border bg-card p-7 overflow-hidden" >
            <div
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="text-lg font-bold text-foreground mb-2">Have Boring Thumbnails That Just Don't Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Tired of boring thumbnails that always get lost in the YouTube feed
              </p>
              <div className="relative h-36 rounded-xl bg-muted/30 overflow-hidden">
                <div
                  className={`absolute inset-0 transition-transform duration-500 ease-out ${
                    hoveredCard === 1 ? "-translate-y-8" : "translate-y-0"
                  }`}
                >
                  <img
                    src={thumb11}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 flex justify-center gap-4 pb-2 transition-all duration-500 ${
                    hoveredCard === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-xs font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full backdrop-blur-sm">Low Clicks</span>
                  <span className="text-xs font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full backdrop-blur-sm">Less Interesting</span>
                </div>
              </div>
            </div>
          </Card3D>

          {/* Card 3: Managing It All */}
          <Card3D className="reveal rounded-2xl border border-border bg-card p-7 overflow-hidden" >
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Tired of Managing It All Yourself</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Have no systems in place and producing every thumbnail is a hassle
              </p>
              <div className="relative h-36 rounded-xl overflow-hidden">
                {marqueeWords.map((row, rowIdx) => (
                  <div key={rowIdx} className="overflow-hidden whitespace-nowrap mb-1">
                    <div
                      className={`inline-flex gap-3 ${
                        rowIdx % 2 === 0 ? "animate-marquee-left" : "animate-marquee-right"
                      }`}
                    >
                      {[...row, ...row].map((word, i) => (
                        <span
                          key={i}
                          className="inline-block text-xs font-medium text-muted-foreground bg-muted/60 px-3 py-1 rounded-full shrink-0 backdrop-blur-sm"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
