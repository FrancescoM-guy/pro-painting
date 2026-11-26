import { Link } from "react-router-dom";
import { PaintBucket, Home, Droplets, Wrench, Hammer } from "lucide-react";

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
    description: "Weather-resistant paint that protects your home's outside.",
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
    description: "Clear gutters so water flows away from your home.",
    link: "/gutter-cleaning",
  },
  {
    icon: Hammer,
    title: "Carpentry Work",
    description: "Board replacements, deck repairs, and trim fixes.",
    link: "/carpentry",
  },
];

export const Services = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-muted-foreground mt-2">
            Pick a service to see what's included.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.link}
                to={service.link}
                className="block h-full rounded-lg border border-border bg-card p-6 hover:border-primary"
              >
                <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
