
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

interface AboutDropdownProps {
  textColor: string;
  hoverColor: string;
  onSmoothScroll: (targetId: string) => void;
}

export const AboutDropdown = ({ textColor, hoverColor, onSmoothScroll }: AboutDropdownProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleUberUnsClick = () => {
    navigate('/');
    // Small delay to ensure we're on the home page before scrolling
    setTimeout(() => {
      onSmoothScroll('prinzipien');
    }, 100);
  };

  return (
    <div className="relative group">
      <button 
        onClick={handleUberUnsClick}
        className={`flex items-center space-x-1 ${textColor} ${hoverColor} transition-colors text-sm font-light cursor-pointer relative group outline-none`}
      >
        <span>Über uns</span>
        <ChevronDown className="h-4 w-4" />
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f0511e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-md border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2 min-w-[160px]">
          <button
            onClick={() => onSmoothScroll('prinzipien')}
            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors font-light text-gray-700"
          >
            {t('nav.principles')}
          </button>
          <button
            onClick={() => onSmoothScroll('vorteile')}
            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors font-light text-gray-700"
          >
            {t('nav.advantages')}
          </button>
          <button
            onClick={() => onSmoothScroll('ai-tools')}
            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors font-light text-gray-700"
          >
            {t('nav.aitools')}
          </button>
          <button
            onClick={() => onSmoothScroll('partner')}
            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors font-light text-gray-700"
          >
            Beratung
          </button>
          <button
            onClick={() => onSmoothScroll('traction')}
            className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 transition-colors font-light text-gray-700"
          >
            {t('nav.traction')}
          </button>
        </div>
      </div>
    </div>
  );
};
