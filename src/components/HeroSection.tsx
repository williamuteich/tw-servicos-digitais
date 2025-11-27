import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 geometric-pattern opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 pt-10 pb-6">

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-down">
            Transforme Seu Negócio com
            <span className="text-gradient-primary block mt-2 p-4">Soluções Digitais</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            Sites, sistemas e automação para alavancar sua empresa.
            Agende uma <span className="font-semibold text-primary">consultoria gratuita</span> e descubra as melhores soluções para você.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Quero agendar uma consultoria gratuita.", "_blank")}
              className="w-full sm:w-auto"
            >
              Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline-primary"
              size="xl"
              onClick={() => scrollToSection("servicos")}
              className="w-full sm:w-auto"
            >
              Ver Soluções
            </Button>
          </div>

          {/* Professional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-2">Desenvolvimento Web</h3>
              <p className="text-sm text-foreground/70">Sites de alta performance e sistemas web sob medida para seu negócio.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-2">Automação Inteligente</h3>
              <p className="text-sm text-foreground/70">Otimize processos e reduza custos com soluções automatizadas.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-colors animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
              <h3 className="text-lg font-semibold text-foreground mb-2">Consultoria Digital</h3>
              <p className="text-sm text-foreground/70">Estratégias personalizadas para acelerar sua transformação digital.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
