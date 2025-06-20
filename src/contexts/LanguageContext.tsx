
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en' | 'es' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.principles': 'Prinzipien',
    'nav.advantages': 'Vorteile',
    'nav.aitools': 'AI-Tools',
    'nav.traction': 'Traction',
    'nav.booking': 'Beratung buchen',
    
    // Hero
    'hero.title': 'Venture Building mit KI',
    'hero.subtitle': 'Von der Idee zum erfolgreichen Unternehmen – systematisch, datengetrieben und mit modernster Technologie',
    'hero.cta': 'Jetzt Beratungstermin buchen',
    
    // Footer
    'footer.title': 'Beratungstermin buchen',
    'footer.description': 'Lassen Sie uns gemeinsam Ihr nächstes Venture starten – jetzt Beratungstermin sichern!',
    'footer.additional': 'Erhalten Sie noch in ihrer ersten Beratung fundierte Handlungsempfehlungen.',
    'footer.cta': 'Jetzt Termin buchen',
    'footer.madeWith': 'made with AI✨'
  },
  en: {
    // Navigation
    'nav.principles': 'Principles',
    'nav.advantages': 'Advantages',
    'nav.aitools': 'AI-Tools',
    'nav.traction': 'Traction',
    'nav.booking': 'Book Consultation',
    
    // Hero
    'hero.title': 'AI-Powered Venture Building',
    'hero.subtitle': 'From idea to successful company – systematic, data-driven and with cutting-edge technology',
    'hero.cta': 'Book Consultation Now',
    
    // Footer
    'footer.title': 'Book Consultation',
    'footer.description': 'Let us start your next venture together – secure your consultation now!',
    'footer.additional': 'Get solid action recommendations in your first consultation.',
    'footer.cta': 'Book Now',
    'footer.madeWith': 'made with AI✨'
  },
  es: {
    // Navigation
    'nav.principles': 'Principios',
    'nav.advantages': 'Ventajas',
    'nav.aitools': 'Herramientas IA',
    'nav.traction': 'Tracción',
    'nav.booking': 'Reservar Consulta',
    
    // Hero
    'hero.title': 'Creación de Ventures con IA',
    'hero.subtitle': 'De la idea a la empresa exitosa – sistemático, basado en datos y con tecnología de vanguardia',
    'hero.cta': 'Reservar Consulta Ahora',
    
    // Footer
    'footer.title': 'Reservar Consulta',
    'footer.description': '¡Iniciemos juntos tu próximo venture – asegura tu consulta ahora!',
    'footer.additional': 'Obtén recomendaciones sólidas en tu primera consulta.',
    'footer.cta': 'Reservar Ahora',
    'footer.madeWith': 'hecho con IA✨'
  },
  it: {
    // Navigation
    'nav.principles': 'Principi',
    'nav.advantages': 'Vantaggi',
    'nav.aitools': 'Strumenti IA',
    'nav.traction': 'Trazione',
    'nav.booking': 'Prenota Consulenza',
    
    // Hero
    'hero.title': 'Venture Building con IA',
    'hero.subtitle': "Dall'idea all'azienda di successo – sistematico, basato sui dati e con tecnologia all'avanguardia",
    'hero.cta': 'Prenota Consulenza Ora',
    
    // Footer
    'footer.title': 'Prenota Consulenza',
    'footer.description': 'Iniziamo insieme il tuo prossimo venture – assicurati la tua consulenza ora!',
    'footer.additional': 'Ricevi raccomandazioni concrete nella tua prima consulenza.',
    'footer.cta': 'Prenota Ora',
    'footer.madeWith': 'fatto con IA✨'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
