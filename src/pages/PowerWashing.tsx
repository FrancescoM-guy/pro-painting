import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import drivewayBeforeAfter1 from "@/assets/driveway-before-after-1.jpg";
import drivewayBeforeAfter2 from "@/assets/driveway-before-after-2.jpg";

const PowerWashing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // EDITABLE: Main service details
  const serviceTitle = "Power Washing Services";
  const serviceDescription = "Deep clean your property with professional power washing that removes years of dirt, grime, and buildup.";
  
  // EDITABLE: What we offer list
  const offerings = [
    "House siding and brick",
    "Driveways and walkways",
    "Decks and patios",
    "Fences and railings",
    "Concrete and stone surfaces",
    "Gutters and downspouts",
  ];

  // EDITABLE: Process steps
  const process = [
    {
      title: "Assessment",
      description: "We evaluate surface types and determine the right pressure and cleaning solution.",
    },
    {
      title: "Preparation",
      description: "Protect plants, cover electrical outlets, and prepare the work area.",
    },
    {
      title: "Power Washing",
      description: "Professional cleaning with appropriate pressure for each surface type.",
    },
    {
      title: "Final Rinse",
      description: "Complete rinse and inspection to ensure spotless results.",
    },
  ];

  // EDITABLE: Why choose us points
  const benefits = [
    "Professional-grade equipment",
    "Eco-friendly cleaning solutions",
    "Surface-specific pressure settings",
    "Prevents mold and mildew",
    "Extends surface lifespan",
    "Improves curb appeal instantly",
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
                    We really take pride in making your place look its best. Our team knows their stuff when it comes to power washing—we've got the right equipment and we know exactly how much pressure each surface needs. You'll see the difference when we're done, and that clean will last.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Great Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're easy to work with—plain and simple. We'll show up when we say we will, treat your property like it's our own, and keep you in the loop the whole time. Got questions? Just ask. We're here to make this easy for you, not stressful.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="perfection" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Touch-ups & Perfection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not the type to cut corners. Before we pack up, we walk around and make sure everything looks right. If we spot something that needs a little extra attention, we take care of it. We want you happy with the results—that's what matters to us.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={drivewayBeforeAfter1} alt="Driveway before and after power washing transformation" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src={drivewayBeforeAfter2} alt="Asphalt driveway cleaning before and after comparison" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Clean
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
            Why Choose Our Power Washing
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

export default PowerWashing;
