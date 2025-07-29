// Translations for the MEDSS Import & Export website
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services", 
      products: "Products",
      contact: "Contact"
    },
    hero: {
      title: "MEDSS Import & Export",
      subtitle: "Your trusted partner for global trade solutions",
      cta: "Get Started"
    },
    about: {
      title: "About MEDSS Import & Export",
      description: "MEDSS Import & Export is a leading company specializing in international trade solutions. We provide comprehensive import and export services to businesses worldwide."
    },
    services: {
      title: "Our Services",
      import: "Import Services",
      export: "Export Services", 
      logistics: "Logistics Solutions",
      consulting: "Trade Consulting"
    },
    products: {
      title: "Our Products",
      description: "We deal with a wide range of products for international trade"
    },
    contact: {
      title: "Contact Us",
      address: "Address",
      phone: "Phone",
      email: "Email"
    },
    footer: {
      brand: "MEDSS Import & Export",
      description: "MEDSS Import & Export - Your trusted partner for global trade solutions. We specialize in comprehensive import and export services worldwide.",
      copyright_year: new Date().getFullYear(),
      copyright: "All rights reserved.",
      company_name: "MEDSS Import & Export"
    },
    featured: {
      title: "Featured Services",
      description: "MEDSS Import & Export offers comprehensive trade solutions including import services, export services, logistics, and consulting to help your business succeed globally."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      products: "Productos", 
      contact: "Contacto"
    },
    hero: {
      title: "MEDSS Import & Export",
      subtitle: "Su socio de confianza para soluciones comerciales globales",
      cta: "Comenzar"
    },
    about: {
      title: "Acerca de MEDSS Import & Export",
      description: "MEDSS Import & Export es una empresa líder especializada en soluciones de comercio internacional. Brindamos servicios integrales de importación y exportación a empresas de todo el mundo."
    },
    services: {
      title: "Nuestros Servicios",
      import: "Servicios de Importación",
      export: "Servicios de Exportación",
      logistics: "Soluciones Logísticas",
      consulting: "Consultoría Comercial"
    },
    products: {
      title: "Nuestros Productos",
      description: "Trabajamos con una amplia gama de productos para el comercio internacional"
    },
    contact: {
      title: "Contáctanos",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo"
    },
    footer: {
      brand: "MEDSS Import & Export",
      description: "MEDSS Import & Export - Su socio de confianza para soluciones comerciales globales. Nos especializamos en servicios integrales de importación y exportación en todo el mundo.",
      copyright_year: new Date().getFullYear(),
      copyright: "Todos los derechos reservados.",
      company_name: "MEDSS Import & Export"
    },
    featured: {
      title: "Servicios Destacados",
      description: "MEDSS Import & Export ofrece soluciones comerciales integrales que incluyen servicios de importación, servicios de exportación, logística y consultoría para ayudar a su empresa a tener éxito a nivel mundial."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      products: "Produits",
      contact: "Contact"
    },
    hero: {
      title: "MEDSS Import & Export",
      subtitle: "Votre partenaire de confiance pour les solutions commerciales mondiales",
      cta: "Commencer"
    },
    about: {
      title: "À propos de MEDSS Import & Export",
      description: "MEDSS Import & Export est une entreprise leader spécialisée dans les solutions de commerce international. Nous fournissons des services complets d'importation et d'exportation aux entreprises du monde entier."
    },
    services: {
      title: "Nos Services",
      import: "Services d'Importation",
      export: "Services d'Exportation",
      logistics: "Solutions Logistiques", 
      consulting: "Conseil Commercial"
    },
    products: {
      title: "Nos Produits",
      description: "Nous traitons avec une large gamme de produits pour le commerce international"
    },
    contact: {
      title: "Nous Contacter",
      address: "Adresse",
      phone: "Téléphone",
      email: "Email"
    },
    footer: {
      brand: "MEDSS Import & Export",
      description: "MEDSS Import & Export - Votre partenaire de confiance pour les solutions commerciales mondiales. Nous nous spécialisons dans les services complets d'importation et d'exportation dans le monde entier.",
      copyright_year: new Date().getFullYear(),
      copyright: "Tous droits réservés.",
      company_name: "MEDSS Import & Export"
    },
    featured: {
      title: "Services en Vedette",
      description: "MEDSS Import & Export offre des solutions commerciales complètes comprenant des services d'importation, des services d'exportation, de la logistique et du conseil pour aider votre entreprise à réussir à l'échelle mondiale."
    }
  }
};

// Helper function to get current language from URL or default to 'en'
export function getCurrentLanguage() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/es/')) return 'es';
    if (path.startsWith('/fr/')) return 'fr';
  }
  return 'en';
}

// Helper function to get translation by key
export function getTranslation(key, lang = null) {
  const currentLang = lang || getCurrentLanguage();
  const keys = key.split('.');
  let value = translations[currentLang];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return value || key;
}
