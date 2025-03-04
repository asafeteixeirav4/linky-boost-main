
import { Link } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link className="h-5 w-5 text-v4-purple" />
          <span className="font-medium text-lg">V4 Links</span>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-v4-purple transition-colors"
          >
            Início
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-v4-purple transition-colors"
          >
            Recursos
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-v4-purple transition-colors"
          >
            Como Funciona
          </a>
        </nav>
      </div>
    </header>
  );
}
