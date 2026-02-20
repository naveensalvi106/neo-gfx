import { ArrowRight, ArrowDown } from "lucide-react";
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
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WHATSAPP_URL = "https://wa.me/919358935758";

const trustedBy = [
  { name: "Eternal Passenger", subs: "703K Subscribers" },
  { name: "TFC Basketball", subs: "14.2K Subscribers" },
  { name: "TFC Stadiums", subs: "264K Subscribers" },
  { name: "Razvan Paraschiv", subs: "57K Subscribers" },
  { name: "GEN", subs: "617K Subscribers" },
  { name: "Spacedust", subs: "69K Subscribers" },
  { name: "JoBlo Originals", subs: "944K Subscribers" },
  { name: "Hip-Hop Daily", subs: "1.46M Subscribers" },
  { name: "Make Money Matt", subs: "875K Subscribers" },
];

const row1 = [heroThumb1, heroThumb2, heroThumb3, heroThumb4, heroThumb5, heroThumb6];
const row2 = [row2Thumb1, row2Thumb2, row2Thumb3, row2Thumb4, row2Thumb5, row2Thumb6];
const row3 = [row3Thumb1, row3Thumb2, row3Thumb3, row3Thumb4, row3Thumb5, row3Thumb6, row3Thumb7];

const ThumbImg = ({ src }: { src: string }) => (
  <div className="relative group shrink-0">
    <img
      src={src}
      alt="YouTube thumbnail"
      className="h-32 md:h-40 rounded-xl object-cover aspect-video transition-all duration-500 group-hover:scale-110 group-hover:z-10"
      style={{ transformStyle: "preserve-3d" }}
    />
    {/* 3D shadow on hover */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-primary/20 pointer-events-none" />
    {/* Shine overlay */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
  </div>
);

const InfiniteRow = ({ images, direction = "left", duration = 20 }: { images: string[]; direction?: "left" | "right"; duration?: number }) => {
  const animName = direction === "left" ? "scroll-left" : "scroll-right";
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-4 w-max"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {images.map((thumb, i) => <ThumbImg key={`a-${i}`} src={thumb} />)}
        {images.map((thumb, i) => <ThumbImg key={`b-${i}`} src={thumb} />)}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="hero-gradient pt-32 pb-0 overflow-hidden relative">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-breathe" />
      <div className="absolute top-40 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px] pointer-events-none animate-breathe" style={{ animationDelay: "2s" }} />
      {/* Orbiting particle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-primary/30 animate-orbit" />
      </div>

      <div ref={revealRef} className="max-w-4xl mx-auto text-center px-4 relative z-10">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary">Trusted by 62+ YouTubers</span>
        </div>

        <p className="reveal text-sm md:text-base text-muted-foreground italic mb-4" style={{ transitionDelay: "0.1s" }}>
          if they never click, they'll never watch it
        </p>
        <h1 className="reveal text-4xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-foreground" style={{ transitionDelay: "0.2s" }}>
          Get Unlimited YouTube Thumbnails
          <br />
          That Actually Get <span className="text-gradient-premium">Clicks</span>
        </h1>
        <p className="reveal mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: "0.3s" }}>
          Join 62+ successful YouTubers who've boosted their CTR by up to 6.8% with our psychology-based,
          unlimited thumbnails — all under one simple monthly subscription.
        </p>
        <div className="reveal mt-8 flex items-center justify-center gap-4 flex-wrap" style={{ transitionDelay: "0.4s" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 animate-glow-ring"
          >
            Start Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition-all duration-300 hover:gap-3"
          >
            View Portfolio
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Trusted By Marquee */}
      <div className="mt-10 text-center relative z-10">
        <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase mb-4">Trusted by:</p>
        <div className="overflow-hidden">
          <div className="flex marquee whitespace-nowrap">
            {[...trustedBy, ...trustedBy].map((client, i) => (
              <div key={i} className="inline-flex items-center gap-2.5 mx-5 shrink-0 group">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
                  {client.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{client.name}</p>
                  <p className="text-xs text-muted-foreground">{client.subs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail Carousel - 3 Rows - Full Width */}
      <div className="mt-8 space-y-4 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none" />
        <InfiniteRow images={row1} direction="left" duration={20} />
        <InfiniteRow images={row2} direction="right" duration={20} />
        <InfiniteRow images={row3} direction="left" duration={20} />
      </div>
    </section>
  );
};

export default HeroSection;
