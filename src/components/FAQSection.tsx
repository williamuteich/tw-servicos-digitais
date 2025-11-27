import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "./ScrollAnimation";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O prazo varia conforme a complexidade. Uma landing page simples pode ficar pronta em 1-2 semanas, enquanto um e-commerce completo pode levar de 4-8 semanas. Trabalhamos com cronogramas realistas e sempre mantemos você informado sobre o progresso.",
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "Cada projeto é único e possui seu próprio orçamento. Oferecemos soluções para diferentes tamanhos de negócio. Entre em contato conosco para receber um orçamento personalizado baseado nas suas necessidades específicas.",
    },
    {
      question: "Vocês oferecem suporte após a entrega?",
      answer: "Sim! Todos os nossos projetos incluem período de garantia e suporte técnico. Também oferecemos planos de manutenção contínua para garantir que seu site ou sistema esteja sempre atualizado e funcionando perfeitamente.",
    },
    {
      question: "Preciso ter conhecimento técnico para usar o sistema?",
      answer: "Não! Desenvolvemos interfaces intuitivas e fáceis de usar. Além disso, fornecemos treinamento completo e documentação para que você e sua equipe possam gerenciar o sistema com facilidade.",
    },
    {
      question: "Meu site será responsivo para mobile?",
      answer: "Com certeza! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização e funcionamento em smartphones, tablets e computadores. Mobile-first é nossa prioridade.",
    },
    {
      question: "Vocês trabalham com SEO?",
      answer: "Sim! Implementamos as melhores práticas de SEO em todos os projetos, incluindo otimização de performance, meta tags, estrutura semântica e conteúdo otimizado para melhorar seu posicionamento nos motores de busca.",
    },
    {
      question: "Posso fazer alterações no site depois de pronto?",
      answer: "Claro! Desenvolvemos sistemas com painéis administrativos quando necessário, permitindo que você faça atualizações de conteúdo. Para mudanças mais complexas, nossa equipe está sempre disponível para ajudar.",
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com pagamento parcelado: 50% no início do projeto e 50% na entrega. Para projetos maiores, podemos negociar condições especiais. Aceitamos diversas formas de pagamento para sua comodidade.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-primary/8 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/8 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 shadow-lg shadow-primary/5">
                FAQ
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Perguntas
                <span className="text-gradient-primary"> Frequentes</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Tire suas dúvidas sobre nossos serviços e processo de trabalho
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Accordion type="single" collapsible className="space-y-5">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-br from-card/90 via-card/80 to-secondary/20 backdrop-blur-md border-2 border-border/60 rounded-2xl px-7 hover:border-primary/40 transition-all duration-500 data-[state=open]:border-primary/60 data-[state=open]:shadow-md data-[state=open]:shadow-primary/8 data-[state=open]:bg-gradient-to-br data-[state=open]:from-card/95 data-[state=open]:via-card/90 data-[state=open]:to-primary/2 overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-primary/2 to-transparent opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-20 -right-20 w-32 h-32 bg-primary/8 rounded-full blur-3xl opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-700"></div>

                  <AccordionTrigger className="text-left text-foreground hover:text-primary text-base lg:text-lg font-semibold py-7 hover:no-underline relative z-10 transition-all duration-300 data-[state=open]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed pb-7 text-base relative z-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="mt-16 text-center">
              <div className="inline-block p-8 bg-gradient-to-br from-card/90 via-card/80 to-secondary/30 backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>

                <p className="text-foreground/80 mb-5 text-lg relative z-10">Não encontrou sua dúvida?</p>
                <button
                  onClick={() => window.open("https://wa.me/5551981302801?text=Olá! Tenho uma dúvida sobre os serviços.", "_blank")}
                  className="text-primary hover:text-primary/80 font-bold text-lg underline underline-offset-4 transition-all duration-300 hover:scale-105 inline-block relative z-10"
                >
                  Fale conosco no WhatsApp →
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
