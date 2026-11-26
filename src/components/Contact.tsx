import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const details = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["734-291-5619"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["Hikid1330@gmail.com"],
  },
  {
    icon: MapPin,
    label: "Service Area",
    lines: ["Washtenaw County, Michigan", "Ann Arbor, Ypsilanti, Saline & surrounding areas"],
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your message!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get Your Free Quote
          </h2>
          <p className="text-muted-foreground mt-2">
            Tell us about your project and we'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-11"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-11"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="h-11"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[130px] resize-none"
            />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Request Free Quote
            </Button>
          </form>

          <div className="space-y-6">
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{detail.label}</h3>
                    {detail.lines.map((line) => (
                      <p key={line} className="text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
