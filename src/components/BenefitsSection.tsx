import { useState } from "react";
import { Infinity as InfinityIcon, Users, RefreshCw, Trophy, TrendingUp, MessageSquare, MonitorCheck, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt3D } from "@/hooks/useTilt3D";
import heroThumb1 from "@/assets/hero-thumb-1.jpg";
import heroThumb2 from "@/assets/hero-thumb-2.jpg";
import heroThumb3 from "@/assets/hero-thumb-3.jpg";
import heroThumb4 from "@/assets/hero-thumb-4.jpg";
import heroThumb5 from "@/assets/hero-thumb-5.jpg";
import heroThumb6 from "@/assets/hero-thumb-6.jpg";
import row2Thumb1 from "@/assets/row2-thumb-1.avif";
import row2Thumb2 from "@/assets/row2-thumb-2.avif";
import row2Thumb3 from "@/assets/row2-thumb-3.avif";
import row2Thumb4 from "@/assets/row2-thumb-4.avif";
import row2Thumb5 from "@/assets/row2-thumb-5.avif";
import row2Thumb6 from "@/assets/row2-thumb-6.avif";
import row3Thumb1 from "@/assets/row3-thumb-1.avif";
import row3Thumb2 from "@/assets/row3-thumb-2.avif";
import row3Thumb3 from "@/assets/row3-thumb-3.avif";
import row3Thumb4 from "@/assets/row3-thumb-4.avif";
import row3Thumb5 from "@/assets/row3-thumb-5.avif";
import row3Thumb6 from "@/assets/row3-thumb-6.avif";
import row3Thumb7 from "@/assets/row3-thumb-7.avif";

const row1 = [heroThumb1, heroThumb2, heroThumb3, heroThumb4, heroThumb5, heroThumb6];
const row2 = [row2Thumb1, row2Thumb2, row2Thumb3, row2Thumb4, row2Thumb5, row2Thumb6];
const row3 = [row3Thumb1, row3Thumb2, row3Thumb3, row3Thumb4, row3Thumb5, row3Thumb6, row3Thumb7];

const BlurredRow = ({ images, direction = "left", duration = 25 }: { images: string[]; direction?: "left" | "right"; duration?: number }) => {
  const animName = direction === "left" ? "scroll-left" : "scroll-right";
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-3 w-max blur-[2px] opacity-70"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {images.map((thumb, i) => (
          <img key={`a-${i}`} src={thumb} alt="" className="h-24 md:h-28 rounded-lg object-cover shrink-0 aspect-video" />
        ))}
        {images.map((thumb, i) => (
          <img key={`b-${i}`} src={thumb} alt="" className="h-24 md:h-28 rounded-lg object-cover shrink-0 aspect-video" />
        ))}
      </div>
    </div>
  );
};

const TrelloBoard = ({ hovered }: { hovered: boolean }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 mt-4 text-xs shadow-sm">
      <div className="flex items-center justify-end mb-3">
        <span className="font-bold text-foreground text-sm">📋 Trello</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-sm shadow-green-500/50"></span>
            <span className="font-semibold text-foreground">Thumbnail Ideas</span>
          </div>
          <div className="space-y-2">
            <div className="bg-secondary rounded-lg p-2 h-10 transition-all duration-300 hover:shadow-sm">
              <div className="h-2 w-full bg-primary/30 rounded"></div>
              <div className="h-2 w-3/4 bg-primary/20 rounded mt-1"></div>
            </div>
            <div className="bg-secondary rounded-lg p-2 h-10">
              <div className="h-2 w-full bg-primary/30 rounded"></div>
              <div className="h-2 w-1/2 bg-primary/20 rounded mt-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50"></span>
            <span className="font-semibold text-foreground">In Progress</span>
          </div>
          <div className="space-y-2">
            <div className={`bg-secondary rounded-lg p-2 transition-all duration-500 ${hovered ? "h-10" : "h-16"}`}>
              {!hovered && <div className="w-full h-8 bg-primary/20 rounded mb-1"></div>}
              <div className="h-2 w-full bg-primary/30 rounded"></div>
              <div className="h-2 w-2/3 bg-primary/20 rounded mt-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span>
            <span className="font-semibold text-foreground">Ready for Review</span>
          </div>
          <div className="space-y-2">
            <div className={`bg-secondary rounded-lg p-2 transition-all duration-500 ${hovered ? "h-16 shadow-sm shadow-primary/10" : "h-10"}`}>
              {hovered && <div className="w-full h-8 bg-primary/20 rounded mb-1 animate-fade-in"></div>}
              <div className="h-2 w-full bg-primary/30 rounded"></div>
              <div className="h-2 w-1/2 bg-primary/20 rounded mt-1"></div>
            </div>
            <div className="bg-secondary rounded-lg p-2 h-10">
              <div className="h-2 w-full bg-primary/30 rounded"></div>
              <div className="h-2 w-3/4 bg-primary/20 rounded mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard3D = ({ children, className = "", onMouseEnter, onMouseLeave }: { children: React.ReactNode; className?: string; onMouseEnter?: () => void; onMouseLeave?: () => void }) => {
  const tilt = useTilt3D(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={() => { tilt.onMouseLeave(); onMouseLeave?.(); }}
      onMouseEnter={onMouseEnter}
      className={`card-3d-intense gradient-border inner-glow ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const revealRef = useScrollReveal();

  return (
    <section id="benefits" className="py-20 md:py-28 px-4 relative">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-breathe" />

      <div ref={revealRef} className="max-w-6xl mx-auto relative z-10">
        <h2 className="reveal text-3xl md:text-5xl font-extrabold text-center tracking-tight mb-4">
          Well, at Boostraft, you get everything you need to <span className="text-gradient-premium">win</span>
        </h2>

        <div className="mt-14 space-y-6">
          {/* Row 1: Truly Unlimited */}
          <div className="reveal rounded-2xl border border-border bg-card p-7 pb-0 overflow-hidden relative card-3d hover:border-primary/20 transition-colors duration-300 inner-glow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
              <InfinityIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Truly Unlimited Thumbnail Requests</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Request as many thumbnails and revisions as you want without paying extra. Perfect if you have multiple channels or doing heavy A/B testing
            </p>
            <div className="-mx-7 space-y-3 relative pb-6">
              <BlurredRow images={row1} direction="left" duration={25} />
              <BlurredRow images={row2} direction="right" duration={22} />
              <BlurredRow images={row3} direction="left" duration={28} />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="#pricing"
                  className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all z-10 animate-glow-ring"
                >
                  Request Thumbnails
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard3D
              className="reveal rounded-2xl border border-border bg-card p-7 overflow-hidden"
              onMouseEnter={() => setHoveredCard("team")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm transition-all duration-500" style={{ transform: hoveredCard === "team" ? "translateZ(20px)" : "translateZ(0)" }}>
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Dedicated Expert Team 24/7</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Get your own dedicated team of trained designers and strategists who learn your brand and style.
              </p>
              <div className={`transition-all duration-500 ${hoveredCard === "team" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <div className="bg-foreground rounded-t-lg p-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50"></span>
                  </div>
                  <div className="flex gap-2 ml-2">
                    <span className="text-[10px] text-muted px-1.5 py-0.5 rounded bg-muted/20">Ps</span>
                    <span className="text-[10px] text-primary-foreground px-1.5 py-0.5 rounded bg-primary">🎨</span>
                    <span className="text-[10px] text-muted px-1.5 py-0.5 rounded bg-muted/20">□</span>
                    <span className="text-[10px] text-muted px-1.5 py-0.5 rounded bg-muted/20">T</span>
                  </div>
                </div>
                <div className="bg-secondary rounded-b-lg p-6 h-40 relative">
                  <div className="absolute bottom-0 right-12 w-20 h-28 bg-muted-foreground/30 rounded-t-full"></div>
                  <div className="absolute left-10 top-10 w-12 h-16 border-2 border-primary border-dashed rounded">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-sm"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-sm"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-sm"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary rounded-sm"></div>
                  </div>
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[10px] font-semibold text-primary-foreground bg-primary px-2 py-1 rounded-full shadow-sm shadow-primary/30">Taylor</span>
                  </div>
                  <div className="absolute bottom-8 right-8">
                    <span className="text-[10px] font-semibold text-primary-foreground bg-orange-500 px-2 py-1 rounded-full shadow-sm shadow-orange-500/30">Jamie</span>
                  </div>
                </div>
              </div>
            </BenefitCard3D>

            <div className="flex flex-col gap-6">
              <BenefitCard3D className="reveal rounded-2xl border border-border bg-card p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Boost Your CTR up to 6.8%</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our clients have seen an average 6.8% boost in CTR with our psychology-driven thumbnails.
                </p>
              </BenefitCard3D>
              <BenefitCard3D className="reveal rounded-2xl border border-border bg-card p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Direct Communication & Smooth Workflows</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unlike traditional agencies, there are no middlemen, which enables you to communicate directly with the designers and strategists
                </p>
              </BenefitCard3D>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <BenefitCard3D className="reveal rounded-2xl border border-border bg-card p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Auto Rehashing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team of vigilant strategists constantly monitors your CTR and rehashes the thumbnails that aren't performing on autopilot, so you can focus on scaling.
                </p>
              </BenefitCard3D>
              <BenefitCard3D className="reveal rounded-2xl border border-border bg-card p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No.1 in YouTube Thumbnails</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The highest quality thumbnails, top-tier workflows and the most convenient pricing ever. That's how we have earned and maintained our top spot.
                </p>
              </BenefitCard3D>
            </div>

            <BenefitCard3D
              className="reveal rounded-2xl border border-border bg-card p-7 overflow-hidden"
              onMouseEnter={() => setHoveredCard("monitor")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shadow-sm transition-all duration-500" style={{ transform: hoveredCard === "monitor" ? "translateZ(20px)" : "translateZ(0)" }}>
                <MonitorCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Live Monitoring</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You get an organized board to easily monitor your thumbnail progress, ask for revisions, and request new ones.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Getting thumbnails has never been this easy!
              </p>
              <TrelloBoard hovered={hoveredCard === "monitor"} />
            </BenefitCard3D>
          </div>
        </div>

        {/* Subscription Benefits */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            And the best part?<br />
            Everything at a single monthly subscription!
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <BenefitCard3D className="rounded-2xl border border-border bg-card p-7 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">No Long-Term Contracts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agencies often tie you down with long contracts. With us, you can pause, cancel or adjust your plan anytime.
              </p>
            </BenefitCard3D>
            <BenefitCard3D className="rounded-2xl border border-border bg-card p-7 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">No Lack of Flexibility</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With us, you can get instant updates and changes with your subscription, no more wasting time on contract modifications.
              </p>
            </BenefitCard3D>
          </div>
          <a
            href="#pricing"
            className="btn-premium mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
          >
            Start Getting Unlimited Thumbnails
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
