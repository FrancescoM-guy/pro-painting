import { CheckCircle } from "lucide-react";

const benefits = [
  "Licensed & Insured Professionals",
  "Free, No-Obligation Quotes",
  "Quality Materials & Craftsmanship",
  "Attention to Detail",
  "Clean, Efficient Service",
  "Satisfaction Guaranteed",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in the painting and home improvement industry, 
              we bring expertise, reliability, and a commitment to excellence to every project.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary mb-4">15+</div>
                  <div className="text-xl md:text-2xl font-semibold text-foreground">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
