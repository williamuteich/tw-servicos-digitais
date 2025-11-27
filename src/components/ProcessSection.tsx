import { FileText, Code, FlaskConical, Rocket, Headphones } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Briefing",
      description: "Entendemos suas necessidades, objetivos e visão para o projeto",
    },
    {
      number: "02",
      icon: Code,
      title: "Desenvolvimento",
      description: "Criamos a solução com tecnologias modernas e melhores práticas",
    },
    {
      number: "03",
      icon: FlaskConical,
      title: "Testes",
      description: "Validamos cada funcionalidade para garantir qualidade total",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Entrega",
      description: "Publicamos seu projeto e garantimos que tudo funcione perfeitamente",
    },
    {
      number: "05",
      icon: Headphones,
      title: "Suporte",
      description: "Acompanhamento contínuo e manutenção quando você precisar",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Nosso Processo
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Do Planejamento à
                <span className="text-gradient-primary"> Entrega Perfeita</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Metodologia testada e aprovada para garantir resultados excepcionais em cada etapa
              </p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            <ScrollAnimation>
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-border/50 z-0">
                <div className="h-full w-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-line-glow"></div>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 items-stretch">
              {steps.map((step, index) => (
                <ScrollAnimation key={index} delay={index * 0.15} className="relative group h-full">
                  <div className="h-full">
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute left-1/2 top-20 w-1 h-full bg-gradient-to-b from-primary/40 to-transparent -ml-0.5 z-0"></div>
                    )}

                    <div className="relative bg-gradient-to-br from-card via-card to-secondary/20 border border-border rounded-2xl p-6 hover:border-border/60 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1 z-10 h-full flex flex-col">
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center font-bold text-background shadow-lg">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 text-center">{step.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed text-center">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
