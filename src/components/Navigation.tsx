import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PaintBucket } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const goToSection = (id: "services" | "contact" | "referral") => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <PaintBucket className="h-6 w-6" />
            <span>Pro Painting</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <button onClick={() => goToSection("services")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Services
            </button>
            <button onClick={() => goToSection("referral")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Refer a Friend
            </button>
            <Link to="/help" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname.startsWith("/help") ? "text-primary" : "text-muted-foreground"}`}>
              AI Help
            </Link>
            <Button onClick={() => goToSection("contact")}>Get Quote</Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground">
              Home
            </Link>
            <button onClick={() => goToSection("services")} className="block py-2 text-sm font-medium text-muted-foreground">
              Services
            </button>
            <button onClick={() => goToSection("referral")} className="block py-2 text-sm font-medium text-muted-foreground">
              Refer a Friend
            </button>
            <Link to="/help" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground">
              AI Help
            </Link>
            <Button onClick={() => goToSection("contact")} className="w-full">Get Quote</Button>
          </div>
        )}
      </div>
    </nav>
  );
};
