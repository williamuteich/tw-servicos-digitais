import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="bg-gradient-to-br from-card via-card to-secondary/30 border border-border rounded-2xl p-8 lg:p-10 text-center shadow-xl shadow-black/5">
              <div className="max-w-2xl mx-auto space-y-6">

                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-3">
                    Vamos iniciar seu projeto?
                  </h2>
                  <p className="text-base text-foreground/80 max-w-xl mx-auto leading-relaxed">
                    Agende uma <span className="font-semibold text-primary">consultoria gratuita</span> e descubra a melhor solução para o seu negócio.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Quero agendar minha consultoria gratuita.", "_blank")}
                    className="w-full sm:w-auto"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Agendar Consultoria Gratuita
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-foreground/60">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Resposta rápida</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Sem compromisso</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

