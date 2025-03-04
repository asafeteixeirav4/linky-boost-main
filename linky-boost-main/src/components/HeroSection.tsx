
import { UrlForm } from "./UrlForm";

export function HeroSection() {
  return (
    <section className="pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-v4-purple to-v4-light-purple">
            Simplifique seus Links
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme URLs longos em links curtos e rastreáveis com suporte avançado a UTMs
          </p>
        </div>
        
        <UrlForm />
      </div>
    </section>
  );
}
