
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
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <div className="space-y-3">
            <button 
              onClick={() => onSmoothScroll('prinzipien')}
              className={`block w-full text-left ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              {t('nav.principles')}
            </button>
            <button 
              onClick={() => onSmoothScroll('vorteile')}
              className={`block w-full text-left ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              {t('nav.advantages')}
            </button>
            <button 
              onClick={() => onSmoothScroll('ai-tools')}
              className={`block w-full text-left ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              {t('nav.aitools')}
            </button>
            <button 
              onClick={() => onSmoothScroll('partner')}
              className={`block w-full text-left ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              Beratung
            </button>
            <button 
              onClick={() => onSmoothScroll('traction')}
              className={`block w-full text-left ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              {t('nav.traction')}
            </button>
            <Link 
              to="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className={`block ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              Case Studies
            </Link>
            <Link 
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              Blog
            </Link>
            <Link 
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className={`block ${textColor} ${hoverColor} transition-colors text-sm font-light py-2`}
            >
              Kontakt
            </Link>
            <Button 
              className="w-full bg-[#f0511e] text-white hover:bg-[#d4430f] text-sm font-light px-6 rounded-full transition-all duration-300"
              onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
            >
              {t('nav.booking')}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
