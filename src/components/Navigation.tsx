import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PaintBucket } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Interior Painting", path: "/interior-painting" },
  { name: "Exterior Painting", path: "/exterior-painting" },
  { name: "Power Washing", path: "/power-washing" },
  { name: "Gutter Cleaning", path: "/gutter-cleaning" },
  { name: "Carpentry", path: "/carpentry" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border border-b-2 border-b-accent sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
            <PaintBucket className="h-6 w-6" />
            <span>Pro Painting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button onClick={scrollToContact} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
