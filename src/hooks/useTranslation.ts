import { useState, useEffect } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
      getInTouch: "Get In Touch",
    },
    hero: {
      name: "Hussein Housh",
      title: "Premier Real Estate Agent in Dubai",
      description:
        "Transforming dreams into reality with unparalleled expertise in Dubai's luxury real estate market. Your trusted partner in finding the perfect property in the heart of the UAE.",
      contactMe: "Contact Me",
      viewServices: "View Services",
    },
    about: {
      title: "About",
      name: "Hussein Housh",
      description1:
        "With over 15 years of experience in Dubai's dynamic real estate market, I have established myself as a trusted advisor for discerning clients seeking exceptional properties in the world's most vibrant city.",
      description2:
        "My deep understanding of Dubai's neighborhoods, market trends, and luxury developments ensures that every client receives personalized service and achieves their real estate goals.",
      achievements: {
        propertiesSold: "Properties Sold",
        yearsExperience: "Years Experience",
        clientSatisfaction: "Client Satisfaction",
        salesVolume: "Sales Volume",
      },
    },
    services: {
      title: "My Services",
      subtitle:
        "Comprehensive real estate solutions tailored to meet your unique needs in Dubai's competitive market.",
      luxuryHomes: {
        title: "Luxury Home Sales",
        description:
          "Exclusive access to Dubai's most prestigious properties and luxury developments.",
      },
      propertyManagement: {
        title: "Property Management",
        description: "Comprehensive property management services for your real estate investments.",
      },
      investmentConsulting: {
        title: "Investment Consulting",
        description:
          "Expert guidance on Dubai's real estate market trends and investment opportunities.",
      },
      commercialRealEstate: {
        title: "Commercial Real Estate",
        description:
          "Specialized services for commercial properties and business real estate needs.",
      },
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "Don't just take my word for it. Here's what my satisfied clients have to say.",
      client1: {
        name: "Sarah Al-Mansouri",
        role: "Property Investor",
        content:
          "Hussein helped me find the perfect investment property in Downtown Dubai. His expertise and dedication are unmatched.",
      },
      client2: {
        name: "Michael Johnson",
        role: "Homebuyer",
        content:
          "Professional, knowledgeable, and always available. Hussein made our home buying process seamless and stress-free.",
      },
      client3: {
        name: "Fatima Hassan",
        role: "Seller",
        content:
          "Sold my property above asking price within two weeks. Hussein's market knowledge is exceptional.",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Ready to make your real estate dreams come true? Let's discuss how I can help you find the perfect property in Dubai.",
      form: {
        title: "Send Me a Message",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Tell me about your real estate needs...",
        submit: "Send Message",
      },
      info: {
        phone: "Phone",
        email: "Email",
        location: "Location",
        available: "Available",
        availableText: "7 Days a Week",
      },
    },
    footer: {
      name: "Hussein Housh",
      title: "Premier Real Estate Agent in Dubai",
      copyright: "© 2025 Hussein Housh. All rights reserved. | Licensed Real Estate Professional",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      services: "الخدمات",
      testimonials: "آراء العملاء",
      contact: "اتصل بنا",
      getInTouch: "تواصل معنا",
    },
    hero: {
      name: "حسين حوش",
      title: "وكيل عقارات متميز في دبي",
      description:
        "نحول الأحلام إلى حقيقة بخبرة لا مثيل لها في سوق العقارات الفاخرة في دبي. شريكك الموثوق في العثور على العقار المثالي في قلب دولة الإمارات العربية المتحدة.",
      contactMe: "اتصل بي",
      viewServices: "عرض الخدمات",
    },
    about: {
      title: "عن",
      name: "حسين حوش",
      description1:
        "بخبرة تزيد عن 15 عامًا في سوق العقارات الديناميكي في دبي، ترسخت مكانتي كمستشار موثوق للعملاء المميزين الذين يبحثون عن عقارات استثنائية في أكثر مدن العالم حيوية.",
      description2:
        "فهمي العميق لأحياء دبي واتجاهات السوق والتطوير الفاخر يضمن حصول كل عميل على خدمة شخصية وتحقيق أهدافه العقارية.",
      achievements: {
        propertiesSold: "عقار مباع",
        yearsExperience: "سنة خبرة",
        clientSatisfaction: "رضا العملاء",
        salesVolume: "حجم المبيعات",
      },
    },
    services: {
      title: "خدماتي",
      subtitle: "حلول عقارية شاملة مصممة خصيصًا لتلبية احتياجاتك الفريدة في السوق التنافسي في دبي.",
      luxuryHomes: {
        title: "مبيعات المنازل الفاخرة",
        description: "وصول حصري إلى أرقى العقارات والتطويرات الفاخرة في دبي.",
      },
      propertyManagement: {
        title: "إدارة العقارات",
        description: "خدمات إدارة عقارات شاملة لاستثماراتك العقارية.",
      },
      investmentConsulting: {
        title: "استشارات الاستثمار",
        description: "إرشادات خبيرة حول اتجاهات سوق العقارات في دبي وفرص الاستثمار.",
      },
      commercialRealEstate: {
        title: "العقارات التجارية",
        description: "خدمات متخصصة للعقارات التجارية واحتياجات العقارات التجارية.",
      },
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "لا تأخذ كلامي فقط. إليك ما يقوله عملائي الراضون.",
      client1: {
        name: "سارة المنصوري",
        role: "مستثمرة عقارية",
        content:
          "ساعدني حسين في العثور على عقار الاستثمار المثالي في وسط دبي. خبرته وتفانيه لا مثيل لهما.",
      },
      client2: {
        name: "مايكل جونسون",
        role: "مشتري منزل",
        content:
          "مهني ومعرفة واسعة ومتاح دائمًا. جعل حسين عملية شراء منزلنا سلسة وخالية من التوتر.",
      },
      client3: {
        name: "فاطمة حسن",
        role: "بائعة",
        content: "بيع عقاري بأكثر من السعر المطلوب خلال أسبوعين. معرفة حسين بالسوق استثنائية.",
      },
    },
    contact: {
      title: "تواصل معنا",
      subtitle:
        "مستعد لتحويل أحلامك العقارية إلى حقيقة؟ دعنا نناقش كيف يمكنني مساعدتك في العثور على العقار المثالي في دبي.",
      form: {
        title: "أرسل لي رسالة",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "عنوان البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "أخبرني عن احتياجاتك العقارية...",
        submit: "إرسال الرسالة",
      },
      info: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        location: "الموقع",
        available: "متاح",
        availableText: "7 أيام في الأسبوع",
      },
    },
    footer: {
      name: "حسين حوش",
      title: "وكيل عقارات متميز في دبي",
      copyright: "© 2025 حسين حوش. جميع الحقوق محفوظة. | وكيل عقارات مرخص",
    },
  },
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "ar";
    if (savedLanguage) {
      setLanguage(savedLanguage);
      updateBodyClass(savedLanguage);
    }
  }, []);

  const updateBodyClass = (lang: "en" | "ar") => {
    if (lang === "ar") {
      document.body.classList.add("arabic");
    } else {
      document.body.classList.remove("arabic");
    }
  };

  const switchLanguage = (lang: "en" | "ar") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    updateBodyClass(lang);
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return { t, language, switchLanguage };
};
