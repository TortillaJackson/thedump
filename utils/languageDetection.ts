
import { Language } from '@/locales';

export const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('it')) return 'it';
  
  // Default to English for all other languages
  return 'en';
};
