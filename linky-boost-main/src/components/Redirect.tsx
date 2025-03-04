
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Loader2 } from "lucide-react";
import { getOriginalUrl } from "@/lib/url-utils";

export function Redirect() {
  const { shortCode } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveShortUrl = async () => {
      try {
        console.log(`Resolvendo código encurtado: ${shortCode}`);
        
        if (!shortCode) {
          throw new Error("Código de URL encurtada não fornecido");
        }
        
        // Obter a URL original do armazenamento
        const originalUrl = getOriginalUrl(shortCode);
        console.log("URL original recuperada:", originalUrl);
        
        if (!originalUrl) {
          throw new Error("URL original não encontrada");
        }
        
        console.log(`Redirecionando para: ${originalUrl}`);
        
        // Verificar se a URL começa com http:// ou https://
        let finalUrl = originalUrl;
        if (!originalUrl.startsWith('http://') && !originalUrl.startsWith('https://')) {
          finalUrl = 'https://' + originalUrl;
          console.log(`URL ajustada para: ${finalUrl}`);
        }
        
        // Redirecionamento para a URL original
        window.location.href = finalUrl;
      } catch (err) {
        console.error("Erro ao resolver URL encurtada:", err);
        setError("Não foi possível encontrar a URL original para este código.");
      }
    };

    if (shortCode) {
      resolveShortUrl();
    } else {
      navigate("/");
    }
  }, [shortCode, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          {error ? (
            <div>
              <h1 className="text-2xl font-bold mb-4 text-destructive">Erro ao Redirecionar</h1>
              <p className="text-muted-foreground mb-4">{error}</p>
              <button 
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-e50914 hover:bg-red-700 text-white rounded-md"
              >
                Voltar para o Início
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Loader2 className="h-10 w-10 text-e50914 animate-spin mb-4" />
              <p className="text-lg text-muted-foreground">Redirecionando...</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
