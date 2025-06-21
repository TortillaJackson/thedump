
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  isScrolledPastHero: boolean;
}

export const LanguageSelector = ({ isScrolledPastHero }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  // Dynamic colors based on scroll position
  const textColor = isScrolledPastHero ? 'text-gray-600' : 'text-gray-200';
  const hoverColor = isScrolledPastHero ? 'hover:text-black' : 'hover:text-white';

  return (
    <div className="relative group">
      <button className={`flex items-center space-x-1 ${textColor} ${hoverColor} transition-colors text-sm font-light`}>
        <Globe className="h-4 w-4" />
        <span>{languages.find(l => l.code === language)?.flag}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-md border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2 min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code as any)}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2 ${
                language === lang.code ? 'bg-gray-50 font-medium' : 'font-light'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
