
import { useLocation } from "react-router-dom";

export const useNavigationTheme = (isScrolledPastHero: boolean, isOverDarkSection: boolean) => {
  const location = useLocation();

  // For non-home pages, always use dark theme. For home page, use dynamic theme based on scroll and section
  const isNotHomePage = location.pathname !== '/';
  const shouldUseDarkTheme = isNotHomePage || (isScrolledPastHero && !isOverDarkSection);
  const shouldUseLightTheme = location.pathname === '/' && isOverDarkSection;

  // Dynamic text colors based on page, scroll position, and section
  const textColor = shouldUseLightTheme ? 'text-gray-200' : (shouldUseDarkTheme ? 'text-gray-600' : 'text-gray-200');
  const hoverColor = shouldUseLightTheme ? 'hover:text-white' : (shouldUseDarkTheme ? 'hover:text-black' : 'hover:text-white');
  const activeColor = shouldUseLightTheme ? 'text-white' : (shouldUseDarkTheme ? 'text-black' : 'text-white');

  return {
    shouldUseDarkTheme,
    shouldUseLightTheme,
    textColor,
    hoverColor,
    activeColor
  };
};
