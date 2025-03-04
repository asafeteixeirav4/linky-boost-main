
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erro 404: Usuário tentou acessar uma rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="inline-flex items-center justify-center p-6 bg-muted rounded-full mb-6">
            <Link className="h-10 w-10 text-v4-purple" />
          </div>
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Não conseguimos encontrar a página que você está procurando
          </p>
          <Button asChild size="lg" className="animate-hover bg-v4-purple hover:bg-v4-dark-purple">
            <a href="/">Voltar para o Início</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
