
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ExternalLink, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface ShortenedUrlDisplayProps {
  shortenedUrl: string;
}

export function ShortenedUrlDisplay({ shortenedUrl }: ShortenedUrlDisplayProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      toast.success("Copiado para a área de transferência!");
      
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      toast.error("Falha ao copiar para a área de transferência");
    }
  };

  return (
    <div className="mt-6 animate-slide-up">
      <div className="bg-muted rounded-lg p-4">
        <Label className="text-sm font-medium mb-2 block">
          Sua URL encurtada
        </Label>
        <div className="flex items-center">
          <div className="flex-1 font-medium text-v4-purple overflow-hidden overflow-ellipsis">
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              {shortenedUrl}
              <ExternalLink className="h-3.5 w-3.5 ml-1 inline-block" />
            </a>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="ml-2 flex items-center animate-hover"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                <span>Copiar</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
