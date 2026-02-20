import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt3D } from "@/hooks/useTilt3D";
import thumb6 from "@/assets/thumb-6.png";
import thumb8 from "@/assets/thumb-8.png";
import thumb9 from "@/assets/thumb-9.png";
import thumb10 from "@/assets/thumb-10.png";
import thumb15 from "@/assets/thumb-15.png";
import thumb16 from "@/assets/thumb-16.png";
import thumb19 from "@/assets/thumb-19.png";
import thumb20 from "@/assets/thumb-20.png";
import thumb23 from "@/assets/thumb-23.png";
import thumb1 from "@/assets/thumb-1.png";
import thumb2 from "@/assets/thumb-2.png";
import thumb3 from "@/assets/thumb-3.png";
import thumb4 from "@/assets/thumb-4.png";
import thumb5 from "@/assets/thumb-5.png";
import thumb7 from "@/assets/thumb-7.png";
import thumb11 from "@/assets/thumb-11.png";
import thumb12 from "@/assets/thumb-12.png";
import thumb13 from "@/assets/thumb-13.png";
import thumb14 from "@/assets/thumb-14.png";
import thumb17 from "@/assets/thumb-17.png";
import thumb18 from "@/assets/thumb-18.png";
import thumb21 from "@/assets/thumb-21.png";
import thumb22 from "@/assets/thumb-22.png";
import celeb1 from "@/assets/celeb-1.avif";
import celeb2 from "@/assets/celeb-2.avif";
import celeb3 from "@/assets/celeb-3.avif";
import celeb4 from "@/assets/celeb-4.avif";
import celeb5 from "@/assets/celeb-5.avif";
import celeb6 from "@/assets/celeb-6.avif";
import celeb7 from "@/assets/celeb-7.avif";
import celeb8 from "@/assets/celeb-8.avif";
import celeb9 from "@/assets/celeb-9.avif";

const categories = ["Business", "Celebrity", "Mystery", "Space", "Business Stories", "3D"];

const categoryThumbnails: Record<string, string[]> = {
  "Business": [thumb6, thumb9, thumb8, thumb10, thumb19, thumb20, thumb15, thumb16, thumb23],
  "Celebrity": [celeb9, celeb8, celeb7, celeb6, celeb5, celeb4, celeb3, celeb2, celeb1, thumb14, thumb17, thumb18],
  "Mystery": [thumb14, thumb17, thumb18, thumb21, thumb22, thumb6, thumb8, thumb9, thumb10],
  "Space": [thumb3, thumb5, thumb7, thumb11, thumb13, thumb15, thumb17, thumb19, thumb21],
  "Business Stories": [thumb2, thumb4, thumb12, thumb14, thumb16, thumb18, thumb20, thumb22, thumb23],
  "3D": [thumb1, thumb6, thumb10, thumb15, thumb20, thumb3, thumb8, thumb13, thumb18],
};

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Business");
  const thumbnails = categoryThumbnails[activeCategory] || categoryThumbnails["Business"];
  const revealRef = useScrollReveal();

  return (
    <section id="work" className="py-20 md:py-28 px-4 relative">
      {/* Multiple ambient glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-breathe" />

      <div ref={revealRef} className="max-w-6xl mx-auto relative z-10">
        <h2 className="reveal text-3xl md:text-5xl font-extrabold tracking-tight text-foreground text-center leading-tight">
          Ready to see our <span className="text-gradient-premium">work?</span>
        </h2>
        <p className="reveal text-center text-muted-foreground max-w-xl mx-auto text-sm mt-4 mb-2" style={{ transitionDelay: "0.1s" }}>
          Of course, with over 4100 thumbnails created, we can't showcase them all, but here are a few we've created recently:
        </p>
        <div className="flex justify-center mt-2 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse-glow" />
        </div>

        {/* Category Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 mb-10" style={{ transitionDelay: "0.2s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border relative overflow-hidden ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground shadow-lg shadow-foreground/20 scale-105"
                  : "bg-card text-foreground border-border hover:border-foreground/30 hover:shadow-md hover:scale-[1.02] active:scale-95 shine-sweep"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="px-5 py-2.5 rounded-full text-sm font-medium bg-card text-foreground border border-border">
            +6 more
          </span>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {thumbnails.map((thumb, i) => (
            <ThumbnailCard key={`${activeCategory}-${i}`} src={thumb} alt={`${activeCategory} thumbnail ${i + 1}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ThumbnailCard = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const tilt = useTilt3D(8);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="rounded-2xl overflow-hidden group cursor-pointer card-3d-intense"
      style={{
        transformStyle: "preserve-3d",
        animation: `slide-up-fade 0.5s ease-out ${index * 0.06}s both`,
      }}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110"
        />
        {/* Multi-layer hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        {/* Border glow */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/30 transition-all duration-500" />
      </div>
    </div>
  );
};

export default PortfolioSection;
