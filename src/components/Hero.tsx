import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-painting.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="h-1.5 w-16 bg-accent rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Transform Your Home with Professional Painting
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Interior &amp; exterior painting, power washing, gutter cleaning, and carpentry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="text-base bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={scrollToContact}
              >
                Get Free Quote
              </Button>
              <a
                href="tel:7342915619"
                className="inline-flex items-center justify-center h-12 px-6 rounded-md border border-primary-foreground/40 text-primary-foreground text-base font-medium hover:bg-primary-foreground/10"
              >
                Call 734-291-5619
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border-4 border-accent">
            <img
              src={heroImage}
              alt="Freshly painted home exterior"
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
