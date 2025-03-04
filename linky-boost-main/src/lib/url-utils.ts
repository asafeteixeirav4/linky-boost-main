
/**
 * URL Utilities for the V4 Links application
 */

// Simple in-memory store for shortened URLs (in a real app, this would be a database)
const urlStore: Record<string, string> = {};

// Load stored URLs from localStorage on module initialization
try {
  const storedData = localStorage.getItem('v4links_urlstore');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    Object.assign(urlStore, parsedData);
    console.log("URLs carregadas do localStorage na inicialização:", urlStore);
  }
} catch (err) {
  console.error('Erro ao carregar URLs do localStorage na inicialização:', err);
}

// Validates if a URL is in the correct format
export function isValidUrl(url: string): boolean {
  try {
    // Check if URL has protocol, if not add https://
    const urlToCheck = url.startsWith('http://') || url.startsWith('https://') ? 
      url : 
      'https://' + url;
    
    new URL(urlToCheck);
    return true;
  } catch (e) {
    return false;
  }
}

// UTM Parameter types
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

// Validate UTM parameters
export function validateUTMParams(params: UTMParams): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Check for required parameters
  if (params.utm_source && params.utm_source.trim() === '') {
    errors.push('UTM Source cannot be empty if provided');
  }
  
  if (params.utm_medium && params.utm_medium.trim() === '') {
    errors.push('UTM Medium cannot be empty if provided');
  }
  
  if (params.utm_campaign && params.utm_campaign.trim() === '') {
    errors.push('UTM Campaign cannot be empty if provided');
  }
  
  // Return validation result
  return {
    valid: errors.length === 0,
    errors
  };
}

// Add UTM parameters to a URL
export function addUTMParamsToUrl(url: string, params: UTMParams): string {
  try {
    // Ensure URL has protocol
    const urlWithProtocol = url.startsWith('http://') || url.startsWith('https://') ? 
      url : 
      'https://' + url;
      
    const urlObj = new URL(urlWithProtocol);
    
    // Add each UTM parameter that has a value
    Object.entries(params).forEach(([key, value]) => {
      if (value && value.trim() !== '') {
        urlObj.searchParams.set(key, value);
      }
    });
    
    return urlObj.toString();
  } catch (e) {
    console.error("Erro ao adicionar parâmetros UTM:", e);
    // If URL is invalid, return original
    return url;
  }
}

// Generate a random short code
export function generateShortCode(length: number = 6): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
}

// Store a mapping between short code and original URL
export function storeUrl(shortCode: string, originalUrl: string): void {
  console.log(`Armazenando URL: código=${shortCode}, url=${originalUrl}`);
  urlStore[shortCode] = originalUrl;
  
  // Para depuração, exibe todas as URLs armazenadas
  console.log("URLStore atual:", urlStore);
  
  // Persistir no localStorage para manter os dados entre recarregamentos de página
  try {
    const storedUrls = JSON.stringify(urlStore);
    localStorage.setItem('v4links_urlstore', storedUrls);
    console.log("URLs salvas no localStorage com sucesso");
  } catch (err) {
    console.error('Erro ao salvar URLs no localStorage:', err);
  }
}

// Retrieve original URL from short code
export function getOriginalUrl(shortCode: string): string | null {
  console.log(`Buscando URL para código: ${shortCode}`);
  
  // Recarregar dados do localStorage para garantir dados atualizados
  try {
    const storedData = localStorage.getItem('v4links_urlstore');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Mesclar com o urlStore atual
      Object.assign(urlStore, parsedData);
      console.log("Dados recarregados do localStorage");
    }
  } catch (err) {
    console.error('Erro ao carregar URLs do localStorage:', err);
  }
  
  console.log("URLStore disponível:", urlStore);
  
  const url = urlStore[shortCode];
  console.log(`URL encontrada para código ${shortCode}: ${url || "nenhuma"}`);
  
  return url || null;
}

// Mock function for shortening URLs (would connect to backend in production)
export async function shortenUrl(originalUrl: string, customSlug?: string): Promise<string> {
  // In a real app, this would make an API call to the backend
  // For demo purposes, we're just returning a mock shortened URL
  
  const baseUrl = window.location.origin;
  const shortCode = customSlug || generateShortCode();
  
  // Ensure URL has protocol before storing
  let urlToStore = originalUrl;
  if (!urlToStore.startsWith('http://') && !urlToStore.startsWith('https://')) {
    // We'll add the protocol when redirecting, but store the original
    console.log(`URL sem protocolo detectada: ${urlToStore}`);
  }
  
  // Store the mapping between shortCode and originalUrl
  storeUrl(shortCode, urlToStore);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return `${baseUrl}/${shortCode}`;
}
