import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import exteriorHouseCorner from "@/assets/exterior-house-corner-1.jpg";
import exteriorHouseDetail from "@/assets/exterior-house-detail-1.jpg";
import exteriorHouseSide from "@/assets/exterior-house-side-1.jpg";

const ExteriorPainting = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // EDITABLE: Main service details
  const serviceTitle = "Exterior Painting Services";
  const serviceDescription = "Protect and beautify your home's exterior with durable, weather-resistant painting that lasts for years.";
  
  // EDITABLE: What we offer list
  const offerings = [
    "House siding and trim",
    "Decks and porches",
    "Fences and gates",
    "Garage doors",
    "Shutters and accents",
    "Stucco and masonry",
  ];

  // EDITABLE: Process steps
  const process = [
    {
      title: "Inspection",
      description: "Thorough assessment of surfaces and existing paint condition.",
    },
    {
      title: "Pressure Washing",
      description: "Deep cleaning to remove dirt, mildew, and loose paint.",
    },
    {
      title: "Repairs & Prep",
      description: "Wood repairs, caulking, and surface preparation for optimal adhesion.",
    },
    {
      title: "Premium Painting",
      description: "Application of high-quality exterior paints designed for durability.",
    },
  ];

  // EDITABLE: Why choose us points
  const benefits = [
    "Weather-resistant premium paints",
    "Expert surface preparation",
    "Color matching and consultation",
    "Protection from the elements",
    "Increased home value",
    "Multi-year warranty available",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-1.5 w-16 bg-accent rounded-full mb-6 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceTitle}</h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              {serviceDescription}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
              className="text-lg bg-accent text-accent-foreground hover:bg-accent/90"
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
              <TabsTrigger value="quality">Quality Painting</TabsTrigger>
              <TabsTrigger value="service">Great Service</TabsTrigger>
              <TabsTrigger value="perfection">Check-ups & Perfection</TabsTrigger>
            </TabsList>
            <TabsContent value="quality" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Quality Painting</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your home's exterior takes a beating from Michigan weather, so we use paints that can handle it. We prep surfaces the right way and apply coats that'll hold up for years. When we're done, your house will look great and be protected from the elements.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="service" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Great Service</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We treat your home like we'd treat our own. We show up when we say we will, communicate clearly about what we're doing, and respect your property throughout the project. No surprises, no headaches—just honest work from friendly folks.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="perfection" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Check-ups & Perfection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We like to circle back and make sure everything looks perfect. We'll walk around with you, check all the details, and touch up anything that needs it. Your curb appeal matters to us, and we want you to be proud of your home's new look.
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg border border-border">
              <img src={exteriorHouseCorner} alt="Corner view of two-story house with white siding and navy blue trim" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img src={exteriorHouseDetail} alt="Close-up of freshly painted window trim and siding detail" className="w-full h-64 object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img src={exteriorHouseSide} alt="Side angle view of ranch home with beige paint and brown shutters" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Paint
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
              <Card key={index} className="border border-border">
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
            Why Choose Our Exterior Painting
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-border">
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

export default ExteriorPainting;
