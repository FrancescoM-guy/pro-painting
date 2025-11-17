import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PaintBucket, Home, Droplets, Wrench, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: PaintBucket,
    title: "Interior Painting",
    description: "Transform your living spaces with beautiful, long-lasting interior paint finishes. Professional prep work and attention to detail.",
    link: "/interior-painting",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with weather-resistant paints and expert application techniques.",
    link: "/exterior-painting",
  },
  {
    icon: Droplets,
    title: "Power Washing",
    description: "Remove dirt, grime, and mildew from siding, decks, driveways, and patios. Restore your property's original beauty.",
    link: "/power-washing",
  },
  {
    icon: Wrench,
    title: "Gutter Cleaning",
    description: "Keep your gutters flowing freely and protect your home from water damage with our thorough cleaning service.",
    link: "/gutter-cleaning",
  },
  {
    icon: Hammer,
    title: "Carpentry Work",
    description: "Expert repair and installation of trim, doors, windows, and other woodwork to complete your project perfectly.",
    link: "/carpentry",
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
              <Link key={index} to={service.link}>
                <Card 
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full group"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 flex items-center justify-between">
                      {service.title}
                      <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
