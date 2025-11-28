import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Serviços", id: "servicos" },
    { label: "Cases", id: "cases" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
            <img
              src="/logo.jpg"
              alt="TW Serviços Digitais"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              variant="whatsapp"
              size="default"
              onClick={() => window.open("https://wa.me/5551981302801", "_blank")}
            >
              Fale Conosco
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40 bg-background h-[calc(100vh-4rem)] animate-fade-in flex flex-col border-t border-border/50 overflow-y-auto">
            <div className="absolute inset-0 geometric-pattern opacity-5 pointer-events-none"></div>
            <nav className="flex flex-col items-center justify-center h-full gap-8 relative z-10 p-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-primary text-xl font-bold transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="whatsapp"
                size="lg"
                className="mt-4 w-full max-w-xs"
                onClick={() => window.open("https://wa.me/5551981302801", "_blank")}
              >
                Fale Conosco no WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
