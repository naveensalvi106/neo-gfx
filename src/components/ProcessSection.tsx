import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "You'll reach out to us and subscribe to one of our plans",
    description: "Choose the plan that fits your needs and sign up. It only takes a few minutes to get started.",
  },
  {
    number: 2,
    title: "We'll get you onboarded on Trello and Discord",
    description: "We'll set up your workspace so you can easily manage requests and communicate with your team.",
  },
  {
    number: 3,
    title: "You'll start adding thumbnail requests",
    description: "Simply add your video ideas, reference images, and any preferences. It's that easy.",
  },
  {
    number: 4,
    title: "We'll start designing them one by one",
    description: "Our expert designers get to work immediately, creating psychology-backed thumbnails that convert.",
  },
  {
    number: 5,
    title: "You'll start receiving high-CTR, psychology-backed thumbnails",
    description: "Get your thumbnails delivered within 24-48 hours, ready to upload and watch your CTR soar.",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-primary text-center mb-2">Impressed? Here's how it works</p>

        <div className="mt-10 space-y-3">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`w-full text-left rounded-2xl border p-6 transition-all ${
                activeStep === i
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeStep === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  {activeStep === i && (
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
