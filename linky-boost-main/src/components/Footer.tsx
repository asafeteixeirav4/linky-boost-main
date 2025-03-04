
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 border-t mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-sm text-muted-foreground flex items-center mb-1">
            Feito com <Heart className="h-4 w-4 mx-1 text-v4-red" /> usando tecnologias web modernas
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} V4 Links. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
