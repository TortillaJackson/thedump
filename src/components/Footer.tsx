import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2025 Cinque Monti Ltd. Alle Rechte vorbehalten.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};