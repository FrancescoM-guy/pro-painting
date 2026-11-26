import { Check } from "lucide-react";

const benefits = [
  "Licensed & Insured",
  "Free Quotes",
  "Quality Materials",
  "Attention to Detail",
  "Clean, Efficient Work",
  "Satisfaction Guaranteed",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Years of painting and home improvement experience, and we treat your
              home like it's our own.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-primary text-primary-foreground p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold text-accent mb-2">15+</div>
            <div className="text-xl font-semibold">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
