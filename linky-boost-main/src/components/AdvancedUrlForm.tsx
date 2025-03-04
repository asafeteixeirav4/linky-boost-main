
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UTMForm } from "./UTMForm";
import { UTMParams } from "@/lib/url-utils";

interface AdvancedUrlFormProps {
  originalUrl: string;
  customSlug: string;
  isLoading: boolean;
  utmParams: UTMParams;
  onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSlugChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUtmChange: (params: UTMParams) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function AdvancedUrlForm({
  originalUrl,
  customSlug,
  isLoading,
  utmParams,
  onUrlChange,
  onSlugChange,
  onUtmChange,
  onSubmit,
}: AdvancedUrlFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="advanced-url">Digite sua URL</Label>
        <Input
          id="advanced-url"
          type="url"
          placeholder="https://exemplo.com/url-muito-longa-que-precisa-ser-encurtada"
          value={originalUrl}
          onChange={onUrlChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="custom-slug">
          Slug personalizado (opcional)
        </Label>
        <Input
          id="custom-slug"
          placeholder="meu-link-personalizado"
          value={customSlug}
          onChange={onSlugChange}
        />
        <p className="text-sm text-muted-foreground">
          Deixe em branco para gerar um código aleatório
        </p>
      </div>
      
      <UTMForm onChange={onUtmChange} />
      
      <Button type="submit" disabled={isLoading} className="w-full animate-hover bg-v4-purple hover:bg-v4-dark-purple">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
            <span>Encurtando...</span>
          </div>
        ) : (
          <span>Encurtar URL</span>
        )}
      </Button>
    </form>
  );
}
