import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PaintBucket, Home, Droplets, Wrench, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: PaintBucket,
    title: "Interior Painting",
    description: "Rooms, trim, and ceilings with a smooth, lasting finish.",
    link: "/interior-painting",
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description: "Weather-resistant paint that protects and beautifies your home.",
    link: "/exterior-painting",
  },
  {
    icon: Droplets,
    title: "Power Washing",
    description: "Clean siding, driveways, decks, and patios.",
    link: "/power-washing",
  },
  {
    icon: Wrench,
    title: "Gutter Cleaning",
    description: "Clear gutters so water flows safely away from your home.",
    link: "/gutter-cleaning",
  },
  {
    icon: Hammer,
    title: "Carpentry Repairs",
    description: "Simple board replacements, deck repairs, and wood fixes.",
    link: "/carpentry",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything we offer, all in one place. Pick a service to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.link} to={service.link}>
                <Card
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full group"
                  style={{ boxShadow: "var(--card-shadow)" }}
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
