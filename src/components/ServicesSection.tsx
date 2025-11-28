import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, ShoppingCart, MessageSquare, BarChart3, Palette } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Criação de Sites & Landing Pages",
      description: "Presença digital profissional para seu negócio."
    },
    {
      icon: ShoppingCart,
      title: "Criação de Loja Virtual (E-Commerce)",
      description: "Loja virtual completa e integrada."
    },
    {
      icon: Smartphone,
      title: "Sistemas Personalizados",
      description: "Soluções sob medida para sua empresa."
    },
    {
      icon: MessageSquare,
      title: "Automação & Integrações",
      description: "WhatsApp, APIs e processos automatizados."
    },
    {
      icon: BarChart3,
      title: "Consultoria Digital",
      description: "Performance, SEO e otimização de conversão."
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      description: "Branding e design profissional."
    }
  ];

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              O Que <span className="text-gradient-primary">Fazemos</span>
            </h2>
            <p className="text-base text-foreground/70">
              Transformamos ideias em soluções digitais que impulsionam seu negócio.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card
                  className="bg-gradient-to-br from-card/80 via-card/60 to-secondary/10 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 p-5 group hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex flex-col h-full relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
        <ScrollAnimation delay={0.4}>
          <div className="text-center">
            <div className="inline-block bg-gradient-to-br from-card/80 to-secondary/20 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg max-w-lg">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Não sabe por onde começar?
              </h3>
              <p className="text-foreground/70 mb-5 text-sm">
                Agende uma <span className="font-semibold text-primary">consultoria gratuita</span> e descubra a melhor solução.
              </p>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Quero agendar uma consultoria gratuita.", "_blank")}
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Agendar Consultoria Gratuita
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ServicesSection;
