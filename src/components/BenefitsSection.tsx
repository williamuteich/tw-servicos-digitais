import { Zap, Shield, Eye, Cpu } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Velocidade de Entrega",
      description: "Prazos realistas e cumpridos. Seu projeto no ar mais rápido do que imagina.",
      features: ["Metodologia ágil", "Entregas incrementais", "Comunicação constante"],
    },
    {
      icon: Shield,
      title: "Suporte Dedicado",
      description: "Estamos sempre disponíveis para ajudar, tirar dúvidas e resolver problemas.",
      features: ["Atendimento rápido", "Suporte técnico especializado", "Manutenção inclusa"],
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Você acompanha cada etapa do desenvolvimento e sabe exatamente onde está seu investimento.",
      features: ["Relatórios periódicos", "Acesso ao progresso", "Sem custos ocultos"],
    },
    {
      icon: Cpu,
      title: "Tecnologia Moderna",
      description: "Utilizamos as ferramentas mais atuais do mercado para garantir performance e segurança.",
      features: ["Stack atualizado", "Código limpo", "Escalabilidade garantida"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent blur-3xl"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-purple-500/8 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-lg shadow-primary/5">
                Por Que Escolher a TW
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Benefícios que Fazem a
                <span className="text-gradient-primary"> Diferença</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Não somos apenas desenvolvedores. Somos parceiros estratégicos no seu crescimento digital.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div
                  className="group bg-gradient-to-br from-card/90 via-card/75 to-secondary/20 backdrop-blur-md border-2 border-border/60 rounded-2xl p-7 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/12 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-primary/6 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/12 to-primary/6 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/6">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-base text-foreground/80 leading-relaxed mb-5">{benefit.description}</p>

                    <ul className="space-y-3">
                      {benefit.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-foreground/70 group-hover:text-foreground/80 transition-colors">
                          <div className="w-1.5 h-1.5 bg-primary/90 rounded-full flex-shrink-0 shadow-lg shadow-primary/30"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
