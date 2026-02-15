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
  <img src={src} alt="YouTube thumbnail" className="h-32 md:h-40 rounded-xl object-cover shrink-0 aspect-video" />
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
  return (
    <section className="hero-gradient pt-32 pb-0 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-sm md:text-base text-muted-foreground italic mb-4">
          if they never click, they'll never watch it
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
          Get Unlimited YouTube Thumbnails
          <br />
          That Actually Get Clicks
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join 62+ successful YouTubers who've boosted their CTR by up to 6.8% with our psychology-based,
          unlimited thumbnails — all under one simple monthly subscription.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Start Now
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View Portfolio
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Trusted By Marquee */}
      <div className="mt-10 text-center">
        <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase mb-4">Trusted by:</p>
        <div className="overflow-hidden">
          <div className="flex marquee whitespace-nowrap">
            {[...trustedBy, ...trustedBy].map((client, i) => (
              <div key={i} className="inline-flex items-center gap-2.5 mx-5 shrink-0">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
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

      {/* Thumbnail Carousel - 3 Rows */}
      <div className="mt-8 relative">
        <div className="overflow-hidden rounded-3xl mx-4 md:mx-12 lg:mx-20 bg-card/50 backdrop-blur-sm border border-border p-4 md:p-6 space-y-4">
          <InfiniteRow images={row1} direction="left" duration={20} />
          <InfiniteRow images={row2} direction="right" duration={20} />
          <InfiniteRow images={row3} direction="left" duration={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
