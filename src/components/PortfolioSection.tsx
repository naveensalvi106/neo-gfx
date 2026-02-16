import { useState } from "react";
import thumb6 from "@/assets/thumb-6.png";
import thumb8 from "@/assets/thumb-8.png";
import thumb9 from "@/assets/thumb-9.png";
import thumb10 from "@/assets/thumb-10.png";
import thumb15 from "@/assets/thumb-15.png";
import thumb16 from "@/assets/thumb-16.png";
import thumb19 from "@/assets/thumb-19.png";
import thumb20 from "@/assets/thumb-20.png";
import thumb23 from "@/assets/thumb-23.png";

const categories = ["Business", "Celebrity", "Mystery", "Space", "Business Stories", "3D"];

const allThumbnails = [thumb6, thumb9, thumb8, thumb10, thumb19, thumb20, thumb15, thumb16, thumb23];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("Business");

  return (
    <section id="work" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground text-center leading-tight">
          Ready to see our <span className="text-primary">work?</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto text-sm mt-4 mb-2">
          Of course, with over 4100 thumbnails created, we can't showcase them all, but here are a few we've created recently:
        </p>
        <div className="flex justify-center mt-2 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-card text-foreground border-border hover:border-foreground/30"
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
          {allThumbnails.map((thumb, i) => (
            <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src={thumb}
                alt={`Portfolio thumbnail ${i + 1}`}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
