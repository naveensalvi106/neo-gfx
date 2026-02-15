import { Infinity, Users, RefreshCw, Trophy, TrendingUp, MessageSquare } from "lucide-react";
import thumb11 from "@/assets/thumb-11.png";
import thumb2 from "@/assets/thumb-2.png";
import thumb4 from "@/assets/thumb-4.png";
import thumb5 from "@/assets/thumb-5.png";

const thumbnailRow = [thumb11, thumb2, thumb4, thumb5];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight mb-4">
          Well, at Boostraft, you get everything you need to win
        </h2>

        {/* Bento Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Unlimited Requests */}
          <div className="rounded-2xl border border-border bg-card p-7 overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <Infinity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Truly Unlimited Thumbnail Requests</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Request as many thumbnails and revisions as you want without paying extra. Perfect if you have multiple channels or doing heavy A/B testing
            </p>
            <div className="overflow-hidden rounded-xl">
              <div className="flex gap-3 thumbnail-carousel">
                {[...thumbnailRow, ...thumbnailRow, ...thumbnailRow, ...thumbnailRow].map((t, i) => (
                  <img key={i} src={t} alt="Thumbnail" className="h-28 rounded-lg object-cover shrink-0" />
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Team */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Dedicated Expert Team 24/7</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get your own dedicated team of trained designers and strategists who learn your brand and style. And if your designer is ever unavailable, we'll make sure you get a smooth, seamless replacement right away
            </p>
          </div>

          {/* Auto Rehashing */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Auto Rehashing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team of vigilant strategists constantly monitors your CTR and rehashes the thumbnails that aren't performing on autopilot, so you can focus on scaling.
            </p>
          </div>

          {/* No.1 */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">No.1 in YouTube Thumbnails</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The highest quality thumbnails, top-tier workflows and the most convenient pricing ever. That's how we have earned and maintained our top spot.
            </p>
          </div>

          {/* CTR Boost */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Boost Your CTR up to 6.8%</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our clients have seen an average 6.8% boost in CTR with our psychology-driven thumbnails.
            </p>
          </div>

          {/* Direct Communication */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Direct Communication & Smooth Workflows</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unlike traditional agencies, there are no middlemen, which enables you to communicate directly with the designers and strategists
            </p>
          </div>
        </div>

        {/* Subscription Benefits */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            And the best part?<br />
            Everything at a single monthly subscription!
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-7 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">No Long-Term Contracts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Agencies often tie you down with long contracts. With us, you can pause, cancel or adjust your plan anytime.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 text-left">
              <h3 className="text-lg font-bold text-foreground mb-2">No Lack of Flexibility</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With us, you can get instant updates and changes with your subscription, no more wasting time on contract modifications.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
          >
            Start Getting Unlimited Thumbnails
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
