import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigateAndScroll = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToSection: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const useWhiteText = location.pathname === '/' && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className={cn("text-2xl font-bold transition-colors duration-300", useWhiteText ? "text-white" : "text-primary")}>
          Haarstudio <span className="text-secondary">Hava Sarikaya</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleNavigateAndScroll('#about')} className={cn("transition-colors duration-300 hover:text-secondary", useWhiteText ? "text-white" : "text-foreground")}>Über Uns</button>
          <Link to="/leistungen" className={cn("transition-colors duration-300 hover:text-secondary", useWhiteText ? "text-white" : "text-foreground")}>Leistungen</Link>
          <button onClick={() => handleNavigateAndScroll('#gallery')} className={cn("transition-colors duration-300 hover:text-secondary", useWhiteText ? "text-white" : "text-foreground")}>Galerie</button>
          <button onClick={() => handleNavigateAndScroll('#testimonials')} className={cn("transition-colors duration-300 hover:text-secondary", useWhiteText ? "text-white" : "text-foreground")}>Kundenstimmen</button>
          <button onClick={() => handleNavigateAndScroll('#contact')} className={cn("transition-colors duration-300 hover:text-secondary", useWhiteText ? "text-white" : "text-foreground")}>Kontakt</button>
          <button onClick={() => handleNavigateAndScroll('#contact')}>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Jetzt Buchen
            </Button>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className={cn("md:hidden transition-colors duration-300", useWhiteText ? "text-white" : "text-foreground")} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed top-[72px] left-0 right-0 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        )}
      >
        <nav className="container-custom flex flex-col py-6 space-y-4">
          <button onClick={() => handleNavigateAndScroll('#about')} className={cn("text-left transition-colors duration-300 hover:text-secondary py-2", useWhiteText ? "text-white" : "text-foreground")}>Über Uns</button>
          <Link to="/leistungen" onClick={() => setIsMenuOpen(false)} className={cn("transition-colors duration-300 hover:text-secondary py-2", useWhiteText ? "text-white" : "text-foreground")}>Leistungen</Link>
          <button onClick={() => handleNavigateAndScroll('#gallery')} className={cn("text-left transition-colors duration-300 hover:text-secondary py-2", useWhiteText ? "text-white" : "text-foreground")}>Galerie</button>
          <button onClick={() => handleNavigateAndScroll('#testimonials')} className={cn("text-left transition-colors duration-300 hover:text-secondary py-2", useWhiteText ? "text-white" : "text-foreground")}>Kundenstimmen</button>
          <button onClick={() => handleNavigateAndScroll('#contact')} className={cn("text-left transition-colors duration-300 hover:text-secondary py-2", useWhiteText ? "text-white" : "text-foreground")}>Kontakt</button>
          <button onClick={() => handleNavigateAndScroll('#contact')}>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full mt-4">
              Jetzt Buchen
            </Button>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
