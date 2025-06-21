
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
    'footer.madeWith': 'made with AI✨',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights, Trends und praktische Tipps aus der Welt des Venture Building',
    'blog.readMore': 'Ansehen',
    'blog.delete': 'Löschen',
    'blog.noPosts': 'Noch keine Blog-Posts vorhanden.',
    'blog.adminHint': 'Erstellen Sie Ihren ersten Blog-Post!',
    'blog.login': 'Admin Login',
    'blog.createPost': 'Neuen Post erstellen',
    
    // Case Studies
    'caseStudies.title': 'Case Studies',
    'caseStudies.subtitle': 'Erfolgreiche Ventures, die wir von der Idee bis zur Marktreife begleitet haben',
    'caseStudies.viewCase': 'Case Study ansehen',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Nehmen Sie Kontakt mit uns auf'
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
    'footer.madeWith': 'made with AI✨',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights, trends and practical tips from the world of venture building',
    'blog.readMore': 'Read More',
    'blog.delete': 'Delete',
    'blog.noPosts': 'No blog posts available yet.',
    'blog.adminHint': 'Create your first blog post!',
    'blog.login': 'Admin Login',
    'blog.createPost': 'Create New Post',
    
    // Case Studies
    'caseStudies.title': 'Case Studies',
    'caseStudies.subtitle': 'Successful ventures we have guided from idea to market readiness',
    'caseStudies.viewCase': 'View Case Study',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us'
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
    'footer.madeWith': 'hecho con IA✨',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights, tendencias y consejos prácticos del mundo del venture building',
    'blog.readMore': 'Leer Más',
    'blog.delete': 'Eliminar',
    'blog.noPosts': 'Aún no hay publicaciones de blog disponibles.',
    'blog.adminHint': '¡Crea tu primera publicación de blog!',
    'blog.login': 'Login Admin',
    'blog.createPost': 'Crear Nueva Publicación',
    
    // Case Studies
    'caseStudies.title': 'Casos de Estudio',
    'caseStudies.subtitle': 'Ventures exitosos que hemos guiado desde la idea hasta la preparación para el mercado',
    'caseStudies.viewCase': 'Ver Caso de Estudio',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': 'Ponte en contacto con nosotros'
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
    'footer.madeWith': 'fatto con IA✨',
    
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Insights, tendenze e consigli pratici dal mondo del venture building',
    'blog.readMore': 'Leggi di Più',
    'blog.delete': 'Elimina',
    'blog.noPosts': 'Nessun post del blog ancora disponibile.',
    'blog.adminHint': 'Crea il tuo primo post del blog!',
    'blog.login': 'Login Admin',
    'blog.createPost': 'Crea Nuovo Post',
    
    // Case Studies
    'caseStudies.title': 'Casi Studio',
    'caseStudies.subtitle': 'Ventures di successo che abbiamo guidato dall\'idea alla preparazione del mercato',
    'caseStudies.viewCase': 'Visualizza Caso Studio',
    
    // Contact
    'contact.title': 'Contatto',
    'contact.subtitle': 'Mettiti in contatto con noi'
  }
};

// Function to detect browser language
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('it')) return 'it';
  
  // Default to English for all other languages
  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      return savedLanguage;
    }
    // Otherwise detect from browser
    return detectBrowserLanguage();
  });

  // Save language preference when changed
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

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
