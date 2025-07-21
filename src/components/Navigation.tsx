
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationLogo } from "./navigation/NavigationLogo";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { useNavigationTheme } from "./navigation/NavigationTheme";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section'); // First section is the hero
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolledPastHero(window.scrollY > heroBottom - 100);
      }

      // Check if we're over a dark section
      if (location.pathname === '/') {
        const scrollY = window.scrollY + 100; // Add offset for navigation height
        
        // Get all dark sections by their IDs
        const darkSections = [
          document.querySelector('#vorteile'), // WhyVentureBuilding section
          document.querySelector('#partner'), // AboutAdvisor section
          document.querySelector('#kunden') // CustomerQuotes section
        ].filter(Boolean);

        let overDarkSection = false;
        darkSections.forEach(section => {
          if (section) {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = sectionTop + rect.height;
            
            if (scrollY >= sectionTop && scrollY <= sectionBottom) {
              overDarkSection = true;
            }
          }
        });
        
        setIsOverDarkSection(overDarkSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleSmoothScroll = (targetId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${targetId}`;
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMobileMenuOpen(false);
  };

  const {
    shouldUseDarkTheme,
    shouldUseLightTheme,
    textColor,
    hoverColor,
    activeColor
  } = useNavigationTheme(isScrolledPastHero, isOverDarkSection);

  return (
    <nav className="fixed top-6 left-8 right-8 z-50 bg-white/20 backdrop-blur-md border border-white/10 rounded-[4rem] shadow-lg max-w-7xl mx-auto">
      <div className="px-10 py-4">
        <div className="flex items-center justify-between">
          <NavigationLogo 
            shouldUseLightTheme={shouldUseLightTheme}
            shouldUseDarkTheme={shouldUseDarkTheme}
          />
          
          <DesktopNavigation
            textColor={textColor}
            hoverColor={hoverColor}
            activeColor={activeColor}
            shouldUseDarkTheme={shouldUseDarkTheme}
            shouldUseLightTheme={shouldUseLightTheme}
            onSmoothScroll={handleSmoothScroll}
          />

          <MobileNavigation
            textColor={textColor}
            hoverColor={hoverColor}
            shouldUseDarkTheme={shouldUseDarkTheme}
            shouldUseLightTheme={shouldUseLightTheme}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            onSmoothScroll={handleSmoothScroll}
          />
        </div>
      </div>
    </nav>
  );
};
