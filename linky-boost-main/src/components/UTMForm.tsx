
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UTMParams } from "@/lib/url-utils";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface UTMFormProps {
  onChange: (params: UTMParams) => void;
}

export function UTMForm({ onChange }: UTMFormProps) {
  const [params, setParams] = useState<UTMParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    param: keyof UTMParams
  ) => {
    const newParams = {
      ...params,
      [param]: e.target.value,
    };
    
    setParams(newParams);
    onChange(newParams);
  };

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible defaultValue="utmparams">
        <AccordionItem value="utmparams" className="border-none">
          <AccordionTrigger className="py-2 px-0">
            <span className="text-sm font-medium">Parâmetros UTM</span>
          </AccordionTrigger>
          <AccordionContent className="animate-slide-down pt-2">
            <div className="space-y-4 rounded-md border p-4 bg-muted/50">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="utm_source" className="text-xs">
                    Fonte <span className="text-muted-foreground">(De onde vem o tráfego?)</span>
                  </Label>
                  <Input
                    id="utm_source"
                    placeholder="google, facebook, newsletter"
                    value={params.utm_source}
                    onChange={(e) => handleChange(e, "utm_source")}
                    className="h-9"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="utm_medium" className="text-xs">
                    Meio <span className="text-muted-foreground">(Como o tráfego está chegando?)</span>
                  </Label>
                  <Input
                    id="utm_medium"
                    placeholder="cpc, email, social"
                    value={params.utm_medium}
                    onChange={(e) => handleChange(e, "utm_medium")}
                    className="h-9"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="utm_campaign" className="text-xs">
                    Campanha <span className="text-muted-foreground">(Por que o tráfego está chegando?)</span>
                  </Label>
                  <Input
                    id="utm_campaign"
                    placeholder="promocao_verao, lancamento_produto"
                    value={params.utm_campaign}
                    onChange={(e) => handleChange(e, "utm_campaign")}
                    className="h-9"
                  />
                </div>

                <Separator className="my-1" />

                <div className="space-y-2">
                  <Label htmlFor="utm_term" className="text-xs">
                    Termo <span className="text-muted-foreground">(Identifique palavras-chave pagas)</span>
                  </Label>
                  <Input
                    id="utm_term"
                    placeholder="tenis+corrida, dicas+marketing"
                    value={params.utm_term}
                    onChange={(e) => handleChange(e, "utm_term")}
                    className="h-9"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="utm_content" className="text-xs">
                    Conteúdo <span className="text-muted-foreground">(Diferencie conteúdos semelhantes)</span>
                  </Label>
                  <Input
                    id="utm_content"
                    placeholder="link_logo, link_texto"
                    value={params.utm_content}
                    onChange={(e) => handleChange(e, "utm_content")}
                    className="h-9"
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
