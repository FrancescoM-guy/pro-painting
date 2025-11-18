import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import guttersCleaned1 from "@/assets/gutters-cleaned-1.jpg";
import guttersCleaned2 from "@/assets/gutters-cleaned-2.jpg";

const GutterCleaning = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // EDITABLE: Main service details
  const serviceTitle = "Gutter Cleaning Services";
  const serviceDescription = "Protect your home from water damage with professional gutter cleaning and maintenance services.";
  
  // EDITABLE: What we offer list
  const offerings = [
    "Complete gutter cleaning",
    "Downspout clearing",
    "Debris removal",
    "Gutter inspection",
    "Minor gutter repairs",
    "Gutter guard installation",
  ];

  // EDITABLE: Process steps
  const process = [
    {
      title: "Inspection",
      description: "Check gutters and downspouts for damage and identify problem areas.",
    },
    {
      title: "Debris Removal",
      description: "Remove leaves, twigs, and buildup from gutters and downspouts.",
    },
    {
      title: "Flushing",
      description: "Flush gutters and test downspouts to ensure proper water flow.",
    },
    {
      title: "Final Check",
      description: "Complete inspection and cleanup of all debris from property.",
    },
  ];

  // EDITABLE: Why choose us points
  const benefits = [
    "Prevents water damage",
    "Protects foundation",
    "Extends gutter lifespan",
    "Prevents pest infestations",
    "Safety-first approach",
    "Seasonal maintenance plans",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceTitle}</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              {serviceDescription}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
              className="text-lg"
            >
              Request Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <Tabs defaultValue="quality" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="quality">Quality Work</TabsTrigger>
              <TabsTrigger value="service">Great Service</TabsTrigger>
              <TabsTrigger value="perfection">Touch-ups & Perfection</TabsTrigger>
            </TabsList>
            <TabsContent value="quality" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Quality Work</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We pride ourselves on delivering exceptional quality in every project. Our experienced team uses professional-grade equipment and proven techniques to ensure outstanding results. From thorough inspections to complete debris removal, we maintain the highest standards of workmanship throughout the entire gutter cleaning process.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Great Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Customer satisfaction is at the heart of everything we do. We provide clear communication, arrive on time, and respect your property. Our team is professional, courteous, and dedicated to making your gutter cleaning experience stress-free. We listen to your needs and work efficiently to minimize disruption to your daily routine.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="perfection" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Touch-ups & Perfection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't consider a job complete until it's perfect. After the main cleaning is finished, we conduct thorough inspections and address any issues to ensure every gutter and downspout meets our exacting standards. Your satisfaction is guaranteed, and we'll make sure everything is done to absolute perfection.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={guttersCleaned1} alt="Clean white gutters after professional cleaning service" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={guttersCleaned2} alt="Pristine gutters with clear water flow after maintenance" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Provide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {offerings.map((offering, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{offering}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Gutter Cleaning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default GutterCleaning;
