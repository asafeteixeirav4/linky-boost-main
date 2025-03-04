
import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Insira sua URL",
      description: "Cole sua URL longa no campo de entrada na nossa página inicial."
    },
    {
      number: "02",
      title: "Adicione parâmetros UTM (opcional)",
      description: "Inclua parâmetros de rastreamento para monitorar suas campanhas de marketing e fontes de tráfego."
    },
    {
      number: "03",
      title: "Obtenha seu link encurtado",
      description: "Receba instantaneamente sua URL encurtada pronta para ser compartilhada em qualquer lugar."
    },
    {
      number: "04",
      title: "Compartilhe e rastreie",
      description: "Compartilhe seu link e analise seu desempenho com nosso painel de análise."
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Como Funciona</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O V4 Links torna simples a criação de URLs encurtadas com apenas alguns cliques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-v4-purple/10 flex items-center justify-center mb-4">
                <span className="text-v4-purple font-bold">{step.number}</span>
              </div>
              
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full transform -translate-x-1/2">
                  <ArrowRight className="text-muted-foreground h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
