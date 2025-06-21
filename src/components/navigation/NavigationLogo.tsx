
import { Link } from "react-router-dom";

interface NavigationLogoProps {
  shouldUseLightTheme: boolean;
  shouldUseDarkTheme: boolean;
}

export const NavigationLogo = ({ shouldUseLightTheme, shouldUseDarkTheme }: NavigationLogoProps) => {
  // Logo selection - WHITE logo for dark sections, BLACK logo for light sections
  const logoSrc = shouldUseLightTheme 
    ? "/lovable-uploads/5784c7ea-6bb1-4c87-9e44-3ee9c685fdcd.png" // white logo for dark sections
    : (shouldUseDarkTheme 
      ? "/lovable-uploads/0b0cda8c-3cea-4a3c-a500-fa72d70591be.png" // black logo for light sections
      : "/lovable-uploads/5784c7ea-6bb1-4c87-9e44-3ee9c685fdcd.png"); // white logo for hero

  return (
    <div className="flex items-center">
      <Link to="/">
        <img 
          src={logoSrc}
          alt="Cinque Monti Ventures" 
          className="h-8 w-auto transition-opacity duration-300"
        />
      </Link>
    </div>
  );
};
