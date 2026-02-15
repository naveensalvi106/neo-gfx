import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Limitless",
    popular: false,
    features: [
      "Unlimited thumbnail Requests",
      "One request at a time",
      "24 to 48 hour turnaround time",
      "24/7 direct communication",
    ],
  },
  {
    name: "Limitless Plus",
    popular: true,
    features: [
      "Unlimited thumbnail Requests",
      "Two requests at a time",
      "24 to 48 hour turnaround time",
      "Auto Testing and Rehashing",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary bg-card shadow-xl shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-6">{plan.name}</h3>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
