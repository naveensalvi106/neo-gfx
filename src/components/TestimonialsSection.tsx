import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "GEN",
    subs: "586K Subscribers",
    text: "Very professional, organized, and clear communication. I've worked with a lot of designers and I'm always wary about working with agencies due to quality issues, but these guys are very responsive and know their stuff",
  },
  {
    name: "Spacedust",
    subs: "51.2K Subscribers",
    text: "Boostraft has created fantastic thumbnails for my channel. Their creativity, great communication, and quick delivery have made them my go-to agency for thumbnail designs. Highly recommend!",
  },
  {
    name: "Hip-Hop Daily",
    subs: "1.44M Subscribers",
    text: "Thanks, it turned out great!",
  },
  {
    name: "Invisible People",
    subs: "1.16M Subscribers",
    text: "We've worked with many thumbnail designers, and Boostraft is by far the best. They bring real expertise, communicate clearly, deliver on time, and blend their creative ideas with our feedback to produce outstanding results. Highly recommended.",
  },
  {
    name: "Grace For Purpose",
    subs: "3.89M Subscribers",
    text: "They create really great thumbnails!",
  },
  {
    name: "Motech",
    subs: "238K Subscribers",
    text: "They consistently impressed us with their creativity and attention to detail. The Boostraft team excelled at producing high-quality thumbnails that aligned perfectly with our brand and helped boost engagement.",
  },
  {
    name: "Next Up With Adam Breneman",
    subs: "38.3K Subscribers",
    text: "The thumbnails are really cool. Love the service overall!",
  },
  {
    name: "Dinodust",
    subs: "80.1K Subscribers",
    text: "I'm happy with these! Thank you!",
  },
];

const TestimonialsSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 bg-card relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div ref={revealRef} className="max-w-6xl mx-auto relative z-10">
        <p className="reveal text-sm font-semibold text-primary text-center mb-2">62+ YouTubers Trust Boostraft</p>
        <h2 className="reveal text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-12" style={{ transitionDelay: "0.1s" }}>
          From 50K to 12M+ subscribers, creators love our work
        </h2>

        {/* Marquee testimonials */}
        <div className="space-y-6 overflow-hidden">
          <div className="overflow-hidden">
            <div className="flex gap-6 marquee">
              {[...testimonials.slice(0, 4), ...testimonials.slice(0, 4)].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-6 marquee-reverse">
              {[...testimonials.slice(4), ...testimonials.slice(4)].map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, subs, text }: { name: string; subs: string; text: string }) => (
  <div className="w-[380px] shrink-0 rounded-2xl border border-border bg-background p-6 card-3d hover:border-primary/20 transition-colors duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{subs}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
  </div>
);

export default TestimonialsSection;
