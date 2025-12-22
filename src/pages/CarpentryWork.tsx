import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import deckFixed1 from "@/assets/deck-fixed-1.jpg";
import doorFixed1 from "@/assets/door-fixed-1.jpg";

const CarpentryWork = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // EDITABLE: Main service details
  const serviceTitle = "Basic Carpentry Repairs";
  const serviceDescription = "Simple, reliable repairs for decks, boards, and basic wood fixes around your home.";
  
  // EDITABLE: What we offer list
  const offerings = [
    "Deck board replacements",
    "Deck railing repairs",
    "Rotted board replacement",
    "Loose board repairs",
    "Step and stair fixes",
    "Basic wood patching",
  ];

  // EDITABLE: Process steps
  const process = [
    {
      title: "Assessment",
      description: "We inspect the damaged boards or deck areas that need repair.",
    },
    {
      title: "Quote",
      description: "Get a straightforward price for the repair work needed.",
    },
    {
      title: "Repair",
      description: "We replace or fix the damaged boards quickly and efficiently.",
    },
    {
      title: "Cleanup",
      description: "We clean up and leave your space looking great.",
    },
  ];

  // EDITABLE: Why choose us points
  const benefits = [
    "Fast turnaround",
    "Honest pricing",
    "Quality repairs",
    "Local & reliable",
    "No job too small",
    "Clean work area",
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
              <TabsTrigger value="quality">Quality Repairs</TabsTrigger>
              <TabsTrigger value="service">Easy Process</TabsTrigger>
              <TabsTrigger value="perfection">Clean Finish</TabsTrigger>
            </TabsList>
            <TabsContent value="quality" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Quality Repairs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We focus on doing simple repairs right. Whether it's a few rotted deck boards or a loose step, we use quality materials and make sure the fix lasts. No fancy upsells—just solid, reliable work.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Easy to Work With</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We show up on time, give you a straight answer on pricing, and get the job done without hassle. Simple repairs shouldn't be complicated—we make it easy.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="perfection" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Clean Finish</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We clean up after ourselves and make sure the repaired area looks good. No mess left behind—just a solid repair you can count on.
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
              <img src={deckFixed1} alt="Repaired deck boards with new lumber installed" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={doorFixed1} alt="Fixed deck step and railing repair" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Fix
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
            Why Choose Us
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

export default CarpentryWork;
