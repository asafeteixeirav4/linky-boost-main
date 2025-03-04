
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BasicUrlFormProps {
  originalUrl: string;
  isLoading: boolean;
  onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function BasicUrlForm({ originalUrl, isLoading, onUrlChange, onSubmit }: BasicUrlFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url">Digite sua URL</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="url"
            type="url"
            placeholder="https://exemplo.com/url-muito-longa-que-precisa-ser-encurtada"
            value={originalUrl}
            onChange={onUrlChange}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="animate-hover bg-v4-purple hover:bg-v4-dark-purple"
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="h-4 w-4 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                <span>Encurtando...</span>
              </div>
            ) : (
              <span>Encurtar</span>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
