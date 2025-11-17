import { Card, CardContent } from "@/components/ui/card";
import { PaintBucket, Home, Droplets, Wrench, Hammer } from "lucide-react";

const services = [
  {
    icon: PaintBucket,
    title: "Interior Painting",
    description: "Transform your living spaces with beautiful, long-lasting interior paint finishes. Professional prep work and attention to detail.",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with weather-resistant paints and expert application techniques.",
  },
  {
    icon: Droplets,
    title: "Power Washing",
    description: "Remove dirt, grime, and mildew from siding, decks, driveways, and patios. Restore your property's original beauty.",
  },
  {
    icon: Wrench,
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely and protect your home from water damage with our thorough cleaning service.",
  },
  {
    icon: Hammer,
    title: "Carpentry Work",
    description: "Expert repair and installation of trim, doors, windows, and other woodwork to complete your project perfectly.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive home improvement solutions delivered with exceptional quality and care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
