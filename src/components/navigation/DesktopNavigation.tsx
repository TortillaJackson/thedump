
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { AboutDropdown } from "./AboutDropdown";

interface DesktopNavigationProps {
  textColor: string;
  hoverColor: string;
  activeColor: string;
  shouldUseDarkTheme: boolean;
  shouldUseLightTheme: boolean;
  onSmoothScroll: (targetId: string) => void;
}

export const DesktopNavigation = ({
  textColor,
  hoverColor,
  activeColor,
  shouldUseDarkTheme,
  shouldUseLightTheme,
  onSmoothScroll
}: DesktopNavigationProps) => {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden md:flex items-center space-x-8">
      <AboutDropdown 
        textColor={textColor}
        hoverColor={hoverColor}
        onSmoothScroll={onSmoothScroll}
      />
      
      <Link 
        to="/case-studies"
        className={`${textColor} ${hoverColor} transition-colors text-sm font-light cursor-pointer relative group ${isActive('/case-studies') ? activeColor : ''}`}
      >
        {t('nav.caseStudies')}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#f0511e] transition-transform duration-300 origin-left ${isActive('/case-studies') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
      </Link>
      
      <Link 
        to="/blog"
        className={`${textColor} ${hoverColor} transition-colors text-sm font-light cursor-pointer relative group ${isActive('/blog') ? activeColor : ''}`}
      >
        {t('nav.blog')}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#f0511e] transition-transform duration-300 origin-left ${isActive('/blog') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
      </Link>
      
      <Link 
        to="/kontakt"
        className={`${textColor} ${hoverColor} transition-colors text-sm font-light cursor-pointer relative group ${isActive('/kontakt') ? activeColor : ''}`}
      >
        {t('nav.contact')}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#f0511e] transition-transform duration-300 origin-left ${isActive('/kontakt') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
      </Link>
      
      <LanguageSelector 
        textColor={textColor}
        hoverColor={hoverColor}
      />
      <Button 
        className="bg-[#f0511e] text-white hover:bg-[#d4430f] text-sm font-light px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 shadow-orange-500/20"
        onClick={() => window.open('https://calendly.com/cinquemontiventures/cinquemontiventures', '_blank')}
      >
        {t('nav.booking')}
      </Button>
    </div>
  );
};
