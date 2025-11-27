import { ArrowRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { Button } from "./ui/button";

const CasesSection = () => {
  const cases = [
    {
      client: "Bazar Elegance",
      category: "E-Commerce",
      image: "/elegance.PNG",
      result: "Vendas",
      description: "E-commerce completo com sistema de catálogo de produtos, carrinho de compras e integração de pagamentos.",
    },
    {
      client: "Clínica Odontológica",
      category: "Sistema Web + CMS",
      image: "/clinicaOdontologica.PNG",
      result: "Agendamentos",
      description: "Site institucional com CMS para agendamento de clientes, permitindo gestão eficiente de consultas odontológicas.",
    },
    {
      client: "Canil Zannine",
      category: "Sistema CMS",
      image: "/canilzannine.PNG",
      result: "Gestão de Conteúdo",
      description: "Sistema CMS completo para cadastro e gerenciamento de conteúdo do site, incluindo filhotes, galeria e informações.",
    },
  ];

  return (
    <section id="cases" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Cases de Sucesso
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Resultados Reais
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl mx-auto">
              Veja como ajudamos empresas a crescerem no digital.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <div className="group relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-secondary/30 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.client}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>

                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                  <p className="text-white/90 text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    Ver Case Completo <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start transition-opacity duration-300 group-hover:opacity-0">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full mb-3">
                    {item.result}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.client}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Gostaria de ver mais cases.", "_blank")}
            >
              Ver Mais Cases
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CasesSection;

