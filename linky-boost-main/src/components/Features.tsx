
import { 
  Link, 
  BarChart2, 
  Zap, 
  Shield, 
  Smartphone 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: Link,
      title: "Encurtamento Simples",
      description: "Transforme URLs longos e complexos em links curtos e limpos, fáceis de compartilhar em qualquer lugar."
    },
    {
      icon: Zap,
      title: "Suporte a UTM",
      description: "Adicione parâmetros de rastreamento aos seus links para medir campanhas de marketing e fontes de tráfego."
    },
    {
      icon: BarChart2,
      title: "Análise de Links",
      description: "Acompanhe o desempenho dos links com métricas abrangentes de cliques e dados geográficos."
    },
    {
      icon: Shield,
      title: "Seguro e Confiável",
      description: "Todos os links são criados e mantidos com segurança, com 99,9% de disponibilidade e confiabilidade."
    },
    {
      icon: Smartphone,
      title: "Compatível com Dispositivos Móveis",
      description: "Crie e gerencie seus links encurtados a partir de qualquer dispositivo com nossa interface responsiva."
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Recursos Poderosos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra todas as ferramentas que o V4 Links oferece para ajudar você a criar, rastrear e otimizar seus links
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm neo-morphism animate-hover">
              <CardHeader className="pb-2">
                <div className="bg-v4-purple/10 w-10 h-10 rounded-full flex items-center justify-center mb-2">
                  <feature.icon className="h-5 w-5 text-v4-purple" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
