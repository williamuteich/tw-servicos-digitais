import { MessageSquare, Mail, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicos: [
      { label: "Landing Pages", href: "#servicos" },
      { label: "E-Commerce", href: "#servicos" },
      { label: "Sistemas Web", href: "#servicos" },
      { label: "Consultoria Digital", href: "#servicos" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Cases de Sucesso", href: "#cases" },
      { label: "Processo", href: "#processo" },
      { label: "FAQ", href: "#faq" },
    ],
  };

  const socialLinks = [
    { icon: MessageSquare, href: "https://wa.me/5551981302801", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/twsolucoes", label: "Instagram" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gradient-dark border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-primary-sm">
                  <span className="text-background font-bold text-xl">TW</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-bold text-base leading-tight">TW Soluções</span>
                  <span className="text-primary text-sm font-medium leading-tight">Digitais</span>
                </div>
              </div>
              <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
                Transformando negócios através de soluções digitais inovadoras. Desenvolvimento web, automação e consultoria especializada para impulsionar seu sucesso online.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contatotwservicos@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                  contatotwservicos@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <a href="https://wa.me/5551981302801" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  (51) 98130-2801
                </a>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <MessageSquare className="w-5 h-5 text-primary" />
                <a href="https://wa.me/5551981302801" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  (51) 99661-5024
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-foreground font-bold text-lg mb-6">Serviços</h3>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-bold text-lg mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-foreground/60 text-sm text-center md:text-left">
              © {currentYear} TW Soluções Digitais. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 hover:rounded-sm hover:bg-primary/20  flex items-center justify-center text-gray-500 hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
