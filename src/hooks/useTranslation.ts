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
        "You don't need to be an expert or have a fortune. All you need is: a smart decision and a bold first step.",
      investmentDetails: {
        title: "Let me explain with simple numbers:",
        propertyPrice: "Property Price: $270,000",
        downPayment: "Down Payment: $50,000",
        monthlyInstallment: "Monthly Payment: $2,000",
        delivery: "Delivery: After 3 years",
        tenantCoverage: "Tenant covers the remaining (40%) from rent",
      },
      ctaText: "Register your information and start your investment journey today",
      contactMe: "Contact Me",
      viewServices: "View Services",
    },
    about: {
      title: "Who is Hussein?",
      name: "Hussein Housh",
      description1:
        "I am Hussein Housh, your real estate consultant in Dubai, and my goal is to be your real partner in reaching your real estate dream with confidence and clear steps.",
      description2:
        "I don't treat you as just a client, but as an investor with ambition, and I'm here to help you achieve it with calculated steps, regardless of your experience, job, or budget. I'm with you from the first consultation... until you hold the key to your home in your hand.",
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
        name: "Limona Al-Saleh",
        role: "Syrian Media Professional",
        content:
          "Thank you Hussein for your kind treatment and clear explanations to all my inquiries. Within just 24 hours, I decided to register for a property through you. As a media professional, I can recognize professional and honest people, and you are truly one of them. I recommended many of my friends to work with you because you are a reliable real estate consultant who doesn't leave anyone halfway. You continue to follow up and communicate with an open heart. I wish you all the best and may God bless you with even better things in your future.",
      },
      client2: {
        name: "Amer Al-Sabbagh",
        role: "Entrepreneur",
        content:
          "Peace be upon you brother Hussein... I wanted to thank you for your efforts that enabled my sister and me to purchase two apartments in the Ben Gatti Sky Rise project. Thank God, thanks to your follow-up, quick response, and excellent service, we got excellent options within the proposed project. Thank you very much.",
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
        sending: "Sending...",
        successMessage: "Thank you! Your message has been sent successfully.",
        errorMessage: "Something went wrong. Please try again.",
        networkError: "Network error. Please check your connection and try again.",
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
        "ما بتحتاج تكون خبير، ولا تملك ثروة. كل يلي بتحتاجه هو: قرار ذكي وخطوة أولى جريئة.",
      investmentDetails: {
        title: "خليني أشرحلك بأرقام بسيطة:",
        propertyPrice: "سعر العقار: 270,000 دولار",
        downPayment: "الدفعة الأولى: 50,000 دولار",
        monthlyInstallment: "قسط شهري: 2,000 دولار",
        delivery: "الاستلام: بعد 3 سنوات",
        tenantCoverage: "المستأجر بيكملك الباقي (40%) من الإيجار",
      },
      ctaText: "سجّل معلوماتك وابدأ رحلتك الاستثمارية اليوم",
      contactMe: "اتصل بي",
      viewServices: "عرض الخدمات",
    },
    about: {
      title: "مين حسين؟",
      name: "حسين حوش",
      description1:
        "أنا حسين حوش، مستشارك العقاري في دبي، وهدفي أكون شريكك الحقيقي للوصول لحلمك العقاري بثقة وخطوات واضحة.",
      description2:
        "ما بتعامل معك كمجرد عميل، بل كمستثمر عنده طموح وأنا موجود لساعدك تحققه بخطوات مدروسة، مهما كانت خبرتك أو وظيفتك أو ميزانيتك. أنا معك من أول استشارة… لحد ما تمسك مفتاح بيتك بيدك.",
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
        name: "ليمونة الصالح",
        role: "إعلامية سورية",
        content:
          "يسعد أوقاتك استاذ حسين حابة اتشكرك على تعاملك اللطيف معي والإيضاحات يلي وضحتها لكل استفساراتي حتى لدرجة خلال 24 ساعة فقط قررت سجل على عقار عن طريقك ،واليوم أنا كإعلامية بقدر اكتشف الأشخاص المهنيين والصادقين وانت حقيقة منهم ونصحت كتار من أصدقائي بالتعامل معك لأنك مستشار عقاري يُعتمد عليه وما بتترك حدا بنص الطريق على العكس بتبقى متابع والتواصل معك بكل رحابة صدر ،بدي اتمنالك الخير والرب يرزقك وللأفضل في كل شيء لمستقبلك القادم ان شاء الله",
      },
      client2: {
        name: "عامر الصباغ",
        role: "رائد أعمال",
        content:
          "السلام عليكم أخ حسين......حبيت اتشكرك على جهودك يلي مكنتنا من شراء شقتين أنا و أختي بمشروع بن غاطي سكاي رايز. الحمد لله بفضل متابعتك و سرعة الاستجابة و الخدمة الممتازة كانت النتيجة انه حصلنا على خيارات ممتازة ضمن المشروع المطروح. شكرا جزيلا",
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
        sending: "جاري الإرسال...",
        successMessage: "شكراً لك! تم إرسال رسالتك بنجاح.",
        errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        networkError: "خطأ في الشبكة. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
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

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];
    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in (value as Record<string, unknown>)) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };

  return { t, language, switchLanguage };
};
