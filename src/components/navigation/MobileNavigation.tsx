
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface MobileNavigationProps {
  textColor: string;
  hoverColor: string;
  shouldUseDarkTheme: boolean;
  shouldUseLightTheme: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onSmoothScroll: (targetId: string) => void;
}

export const MobileNavigation = ({
  textColor,
  hoverColor,
  shouldUseDarkTheme,
  shouldUseLightTheme,
  mobileMenuOpen,
  setMobileMenuOpen,
  onSmoothScroll
}: MobileNavigationProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`${textColor} ${hoverColor} transition-colors`}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg mx-4">
          <div className="p-6 space-y-4">
            <button 
              onClick={() => onSmoothScroll('prinzipien')}
              className="block w-full text-left text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              {t('nav.principles')}
            </button>
            <button 
              onClick={() => onSmoothScroll('vorteile')}
              className="block w-full text-left text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              {t('nav.advantages')}
            </button>
            <button 
              onClick={() => onSmoothScroll('ai-tools')}
              className="block w-full text-left text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              {t('nav.aitools')}
            </button>
            <button 
              onClick={() => onSmoothScroll('partner')}
              className="block w-full text-left text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              Beratung
            </button>
            <button 
              onClick={() => onSmoothScroll('traction')}
              className="block w-full text-left text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              {t('nav.traction')}
            </button>
            <Link 
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              Case Studies
            </Link>
            <Link 
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              Blog
            </Link>
            <Link 
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-800 hover:text-[#f0511e] transition-colors text-base font-medium py-2"
            >
              Kontakt
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Button 
                className="w-full bg-[#f0511e] text-white hover:bg-[#d4430f] text-base font-medium px-6 py-3 rounded-full transition-all duration-300"
                onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
              >
                {t('nav.booking')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
