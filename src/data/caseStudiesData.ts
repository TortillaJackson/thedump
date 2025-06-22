
import { useLanguage } from "@/contexts/LanguageContext";

export interface CaseStudy {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  impact: string;
  links?: { title: string; url: string }[];
  websiteUrl?: string;
}

export const getCaseStudies = (language: string): CaseStudy[] => {
  const translations = {
    de: {
      fjalla: {
        description: "Faire Künstlervergütung im Musik-Streaming. Diese Lösung hilft Künstlern dabei, 400% mehr zu verdienen und gleichzeitig eine engere Beziehung zu ihren Superfans aufzubauen. Dies hilft nicht nur erfolgreichen Künstlern mehr zu verdienen, sondern auch aufstrebenden Künstlern, das Musikerdasein zu einem rentableren Karriereweg zu machen.",
        impact: "Faire Vergütung für Künstler weltweit ermöglichen"
      },
      gcars: {
        description: "Frauen fahren Frauen. Ein Mobility Service in Berlin exklusiv für Frauen, der Frauen sicher an ihr Ziel bringt.",
        impact: "Sicherer Mobility-Service exklusiv für Frauen in Berlin"
      },
      databorg: {
        description: "Knowledge Management automatisiert die Umwandlung unstrukturierter Daten in strukturierte Daten und ganzheitliche Single-Source-of-Truth-Wissensgraphen. Dies hilft Unternehmen dabei, ihr proprietäres Wissen zu extrahieren und in KI-Systeme einzuspeisen.",
        impact: "Transformation des Enterprise Knowledge Managements"
      },
      gymcraft: {
        description: "Fitness-Gamification verwandelt echte Fitnessgeräte in Game-Controller und macht das Training zu ernsthaftem Spaß. Dies hilft nicht nur jungen Menschen dabei, gesunde Gewohnheiten zu entwickeln, sondern bietet auch eine motivierende Zuckerschicht für das Training.",
        impact: "Revolution der Fitness-Motivation durch Gamification"
      },
      kornerstone: {
        description: "Micro Services IoT Hub. Die dezentrale Zukunft der Ladeinfrastruktur intelligent und komfortabel gestalten.",
        impact: "Intelligente und komfortable dezentrale Ladeinfrastruktur"
      },
      thermalhalf: {
        description: "Das patentierte THP ist ein solares Wärmerohr-System, das bis zu 10x mehr Energie als aktuelle Solarpanels produziert. Die Systeme sind besonders geeignet für dampfbetriebene Produktionen wie Metall oder können für grüne Wasserstoffproduktion angewendet werden.",
        impact: "Revolutionäre Solarenergie-Technologie für industrielle Anwendungen"
      }
    },
    en: {
      fjalla: {
        description: "Tackling fair artist compensation in music streaming. This solution helps artists earning 400% more while building a closer relation to their superfans. This helps not only successful artists to earn more, but emerging artists to make being a musician a more feasible career path.",
        impact: "Enabling fair compensation for artists worldwide"
      },
      gcars: {
        description: "Women drive women. A mobility service in Berlin exclusively for women that brings women safely to their destination.",
        impact: "Safe mobility service exclusively for women in Berlin"
      },
      databorg: {
        description: "Knowledge Management automating turning unstructured data into structured data and holistic single source of truth knowledge graphs. This helps companies to extract and ingest their proprietary knowledge into AI systems.",
        impact: "Transforming enterprise knowledge management"
      },
      gymcraft: {
        description: "Fitness gamification turning real fitness equipment into gamecontrollers and turning workout into serious fun. This not only helps young people to build healthy habits, but also provides a sugar coating motivation for workout.",
        impact: "Revolutionizing fitness motivation through gamification"
      },
      kornerstone: {
        description: "Micro services IoT Hub. Making the decentralised future of charging infrastructure smart and convenient.",
        impact: "Smart and convenient decentralized charging infrastructure"
      },
      thermalhalf: {
        description: "The patented THP is a solar heat pipe system producing up to 10x more energy than current solar panes. The systems are particularly suitable for steam powered productions like metal or can be applied to green hydrogen productions.",
        impact: "Revolutionary solar energy technology for industrial applications"
      }
    },
    es: {
      fjalla: {
        description: "Abordando la compensación justa de artistas en streaming de música. Esta solución ayuda a los artistas a ganar 400% más mientras construye una relación más cercana con sus superfans. Esto ayuda no solo a artistas exitosos a ganar más, sino también a artistas emergentes a hacer que ser músico sea un camino profesional más viable.",
        impact: "Habilitando compensación justa para artistas mundialmente"
      },
      gcars: {
        description: "Mujeres conducen mujeres. Un servicio de movilidad en Berlín exclusivamente para mujeres que lleva a las mujeres de forma segura a su destino.",
        impact: "Servicio de movilidad seguro exclusivamente para mujeres en Berlín"
      },
      databorg: {
        description: "Gestión del conocimiento automatizando la conversión de datos no estructurados en datos estructurados y gráficos de conocimiento holísticos de fuente única de verdad. Esto ayuda a las empresas a extraer e ingerir su conocimiento propietario en sistemas de IA.",
        impact: "Transformando la gestión del conocimiento empresarial"
      },
      gymcraft: {
        description: "Gamificación del fitness convirtiendo equipos de fitness reales en controladores de juego y convirtiendo el entrenamiento en diversión seria. Esto no solo ayuda a los jóvenes a construir hábitos saludables, sino que también proporciona una motivación azucarada para el entrenamiento.",
        impact: "Revolucionando la motivación del fitness a través de la gamificación"
      },
      kornerstone: {
        description: "Hub IoT de microservicios. Haciendo el futuro descentralizado de la infraestructura de carga inteligente y conveniente.",
        impact: "Infraestructura de carga descentralizada inteligente y conveniente"
      },
      thermalhalf: {
        description: "El THP patentado es un sistema de tubería de calor solar que produce hasta 10x más energía que los paneles solares actuales. Los sistemas son particularmente adecuados para producciones de vapor como metal o pueden aplicarse a producciones de hidrógeno verde.",
        impact: "Tecnología solar revolucionaria para aplicaciones industriales"
      }
    },
    it: {
      fjalla: {
        description: "Affrontando la compensazione equa degli artisti nello streaming musicale. Questa soluzione aiuta gli artisti a guadagnare il 400% in più costruendo una relazione più stretta con i loro superfan. Questo aiuta non solo gli artisti di successo a guadagnare di più, ma anche gli artisti emergenti a rendere l'essere musicista un percorso professionale più fattibile.",
        impact: "Abilitando compensazione equa per artisti in tutto il mondo"
      },
      gcars: {
        description: "Le donne guidano le donne. Un servizio di mobilità a Berlino esclusivamente per donne che porta le donne in sicurezza alla loro destinazione.",
        impact: "Servizio di mobilità sicuro esclusivamente per donne a Berlino"
      },
      databorg: {
        description: "Gestione della conoscenza automatizzando la trasformazione di dati non strutturati in dati strutturati e grafi di conoscenza olistici single source of truth. Questo aiuta le aziende a estrarre e inserire la loro conoscenza proprietaria nei sistemi di IA.",
        impact: "Trasformando la gestione della conoscenza aziendale"
      },
      gymcraft: {
        description: "Gamificazione del fitness trasformando vere attrezzature fitness in controller di gioco e trasformando l'allenamento in divertimento serio. Questo non solo aiuta i giovani a costruire abitudini sane, ma fornisce anche una motivazione zuccherata per l'allenamento.",
        impact: "Rivoluzionando la motivazione del fitness attraverso la gamificazione"
      },
      kornerstone: {
        description: "Hub IoT di microservizi. Rendere il futuro decentralizzato dell'infrastruttura di ricarica intelligente e conveniente.",
        impact: "Infrastruttura di ricarica decentralizzata intelligente e conveniente"
      },
      thermalhalf: {
        description: "Il THP brevettato è un sistema di tubo di calore solare che produce fino a 10 volte più energia dei pannelli solari attuali. I sistemi sono particolarmente adatti per produzioni a vapore come il metallo o possono essere applicati alle produzioni di idrogeno verde.",
        impact: "Tecnologia solare rivoluzionaria per applicazioni industriali"
      }
    }
  };

  const currentTranslations = translations[language as keyof typeof translations] || translations.en;

  return [
    {
      id: "fjalla",
      name: "Fjalla",
      description: currentTranslations.fjalla.description,
      image: "/lovable-uploads/318cf5d0-5c36-4c83-8176-645878c9f31e.png",
      category: "MusicTech",
      impact: currentTranslations.fjalla.impact,
      links: [
        { title: "Case Study", url: "https://www.fjalla.net" }
      ]
    },
    {
      id: "g-cars",
      name: "G-Cars",
      description: currentTranslations.gcars.description,
      image: "/lovable-uploads/b5add874-0ef7-48e7-b7a9-fb320ec24ebe.png",
      category: "MobilityTech",
      impact: currentTranslations.gcars.impact,
      websiteUrl: "https://g-cars.co/",
      links: [
        { title: "Case Study", url: "https://g-cars.co/" }
      ]
    },
    {
      id: "databorg",
      name: "DataBorg",
      description: currentTranslations.databorg.description,
      image: "/lovable-uploads/0c2d0752-2325-4925-9d34-2b8878172d68.png",
      category: "AI & Data",
      impact: currentTranslations.databorg.impact,
      links: [
        { title: "Case Study", url: "https://www.youtube.com/watch?v=gNTSwkVgLas" }
      ]
    },
    {
      id: "gymcraft",
      name: "GymCraft",
      description: currentTranslations.gymcraft.description,
      image: "/lovable-uploads/d9617add-4f4f-4228-9aaa-8dec80a6e1af.png",
      category: "HealthTech",
      impact: currentTranslations.gymcraft.impact,
      websiteUrl: "https://www.gymcraft.es",
      links: [
        { title: "Case Study", url: "#" }
      ]
    },
    {
      id: "kornerstone",
      name: "Kornerstone",
      description: currentTranslations.kornerstone.description,
      image: "/lovable-uploads/8f9dd716-bf10-4954-b5d6-63864bc3ae7a.png",
      category: "IoT & Infrastructure",
      impact: currentTranslations.kornerstone.impact
    },
    {
      id: "thermalhalf",
      name: "Thermal Half Pipe",
      description: currentTranslations.thermalhalf.description,
      image: "/lovable-uploads/c0f16cb5-bba9-48f0-8703-ec5197d03bcd.png",
      category: "CleanTech",
      impact: currentTranslations.thermalhalf.impact,
      links: [
        { title: "Case Study", url: "#" }
      ]
    }
  ];
};
