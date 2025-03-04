
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Link } from "lucide-react";
import { isValidUrl, shortenUrl } from "@/lib/url-utils";
import { UTMParams, addUTMParamsToUrl } from "@/lib/url-utils";
import { BasicUrlForm } from "./BasicUrlForm";
import { AdvancedUrlForm } from "./AdvancedUrlForm";
import { ShortenedUrlDisplay } from "./ShortenedUrlDisplay";

export function UrlForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOriginalUrl(e.target.value);
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomSlug(e.target.value);
  };

  const handleUtmChange = (params: UTMParams) => {
    setUtmParams(params);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!originalUrl) {
      toast.error("Por favor, insira uma URL");
      return;
    }
    
    if (!isValidUrl(originalUrl)) {
      toast.error("Por favor, insira uma URL válida");
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Adiciona parâmetros UTM se algum for fornecido
      let urlToShorten = originalUrl;
      const hasUtmParams = Object.values(utmParams).some(val => val && val.trim() !== '');
      
      if (hasUtmParams) {
        urlToShorten = addUTMParamsToUrl(originalUrl, utmParams);
      }
      
      // Chama a função de encurtamento
      const shortened = await shortenUrl(urlToShorten, customSlug);
      setShortenedUrl(shortened);
      
      toast.success("URL encurtada com sucesso!");
    } catch (error) {
      toast.error("Falha ao encurtar URL. Por favor, tente novamente.");
      console.error("Erro ao encurtar URL:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="shadow-lg border-0 overflow-hidden glass-morphism">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-center text-v4-purple mb-2">
            <Link className="w-6 h-6 mr-2" />
          </div>
          <h2 className="text-2xl font-medium text-center">Encurte sua URL</h2>
          <p className="text-muted-foreground text-center mt-1">
            Crie links encurtados com parâmetros UTM opcionais
          </p>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="basic">Básico</TabsTrigger>
              <TabsTrigger value="advanced">Avançado</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="mt-0 animate-slide-up">
              <BasicUrlForm
                originalUrl={originalUrl}
                isLoading={isLoading}
                onUrlChange={handleUrlChange}
                onSubmit={handleSubmit}
              />
            </TabsContent>
            
            <TabsContent value="advanced" className="mt-0 animate-slide-up">
              <AdvancedUrlForm
                originalUrl={originalUrl}
                customSlug={customSlug}
                isLoading={isLoading}
                utmParams={utmParams}
                onUrlChange={handleUrlChange}
                onSlugChange={handleSlugChange}
                onUtmChange={handleUtmChange}
                onSubmit={handleSubmit}
              />
            </TabsContent>
          </Tabs>
          
          {shortenedUrl && <ShortenedUrlDisplay shortenedUrl={shortenedUrl} />}
        </CardContent>
      </Card>
    </div>
  );
}
