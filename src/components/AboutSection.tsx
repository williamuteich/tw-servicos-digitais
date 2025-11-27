import { CheckCircle2, Zap, Users, Award } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const AboutSection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Profissionalismo",
      description: "Padrões de excelência em cada projeto desenvolvido",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Entrega rápida sem comprometer a qualidade",
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Orientação estratégica para o crescimento digital",
    },
    {
      icon: Award,
      title: "Soluções Completas",
      description: "Do planejamento ao suporte contínuo",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 via-primary/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-purple-500/8 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-16">
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-lg shadow-primary/5">
                Sobre Nós
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Transformação Digital com
                <span className="text-gradient-primary"> Excelência</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                A <span className="text-primary font-semibold">TW Soluções Digitais</span> nasceu com o propósito de transformar a presença online de empresas, oferecendo soluções modernas, eficientes e alinhadas às necessidades do mercado digital.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 0.05} animation="fade-in">
                <div
                  className="group relative p-6 bg-gradient-to-br from-card/90 via-card/70 to-secondary/30 backdrop-blur-md border border-border/60 rounded-2xl hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute -top-20 -right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/10">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.4}>
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-br from-card/90 via-card/80 to-secondary/30 backdrop-blur-md border border-primary/20 rounded-2xl max-w-2xl shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>

                <p className="text-lg text-foreground/90 relative z-10 leading-relaxed">
                  <span className="font-bold text-primary text-xl">Nossa missão:</span> Tornar a tecnologia acessível e transformadora para negócios de todos os tamanhos.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
