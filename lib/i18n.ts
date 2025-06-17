export type Language = "en" | "fa";

export interface Translations {
  nav: {
    services: string;
    works: string;
    skills: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    contactMe: string;
    downloadCV: string;
  };
  services: {
    title: string;
    subtitle: string;
    websiteDesign: {
      title: string;
      description: string;
    };
    uiuxDesign: {
      title: string;
      description: string;
    };
    webDevelopment: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    featured: string;
    viewMore: string;
    viewGithub: string;
    dashStack: {
      title: string;
      description: string;
    };
    tarkhineh: {
      title: string;
      description: string;
    };
    foodking: {
      title: string;
      description: string;
    };
    concepto: {
      title: string;
      description: string;
    };
    cvBuilder: {
      title: string;
      description: string;
    };
    cryptoTrading: {
      title: string;
      description: string;
    };
    crashCoinCapital: {
      title: string;
      description: string;
    };
  };
  skills: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    client1: {
      text: string;
      name: string;
      position: string;
    };
    client2: {
      text: string;
      name: string;
      position: string;
    };
    client3: {
      text: string;
      name: string;
      position: string;
    };
    client4: {
      text: string;
      name: string;
      position: string;
    };
    client5: {
      text: string;
      name: string;
      position: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    firstName: string;
    lastName: string;
    emailPlaceholder: string;
    message: string;
    sendMessage: string;
  };
  footer: {
    description: string;
    company: string;
    about: string;
    blog: string;
    contactUs: string;
    services: string;
    webDevelopment: string;
    uiuxDesign: string;
    mobileDevelopment: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      works: "Works",
      skills: "Skills",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      name: "I am Mahdi Baghri",
      title: "Frontend Developer",
      subtitle: "React & Next.js Specialist",
      description:
        "Frontend developer with over 2 year of experience in designing and developing attractive and user-friendly websites. Specialized in React and Next.js with attention to detail and commitment to quality.",
      contactMe: "Contact Me",
      downloadCV: "Download CV",
    },
    services: {
      title: "What I Do",
      subtitle:
        "I offer a wide range of frontend development services to help businesses create impactful digital experiences. Here's how I can help you succeed.",
      websiteDesign: {
        title: "Website Design",
        description:
          "I craft custom stunning, user-friendly, and responsive designs tailored to your needs.",
      },
      uiuxDesign: {
        title: "UI/UX Design",
        description:
          "Creating intuitive and engaging user experiences that delight your users.",
      },
      webDevelopment: {
        title: "Frontend Development",
        description:
          "Building fast, responsive, and modern web applications using React, Next.js, and TypeScript.",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Explore my latest frontend development projects. Each project demonstrates my commitment to creating innovative and user-friendly digital solutions.",
      demo: "Demo",
      code: "Code",
      featured: "Featured",
      viewMore: "View More",
      viewGithub: "View on GitHub",
      dashStack: {
        title: "DashStack Dashboard",
        description:
          "Modern admin dashboard with advanced analytics and data visualization components.",
      },
      tarkhineh: {
        title: "Tarkhineh Restaurant",
        description:
          "Restaurant website with online ordering system and modern design.",
      },
      foodking: {
        title: "atrin",
        description:
          "Platform selling clothing by implementing a structure like Instagram",
      },
      concepto: {
        title: "Concepto Portfolio",
        description:
          "Creative portfolio website with modern animations and responsive design.",
      },
      cvBuilder: {
        title: "Dashboard",
        description:
          "Professional Dashboard application with multiple templates and export options.",
      },
      cryptoTrading: {
        title: "Crypto Trading Platform",
        description:
          "Cryptocurrency trading platform with real-t  ime data and advanced charts.",
      },
      crashCoinCapital: {
        title: "Crash Coin Capital",
        description:
          "A professional cryptocurrency investment company website with modern design and comprehensive financial services.",
      },
    },
    skills: {
      title: "My Skills",
      subtitle:
        "I've spent years honing my skills in frontend development. Here's an overview of my technical expertise and proficiency levels.",
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle:
        "Don't just take my word for it. Here's what my clients have to say about their experiences working with me.",
      client1: {
        text: "Working with Mahdi was an absolute pleasure. His attention to detail and creative solutions made our project a success.",
        name: "Ahmad Rezaei",
        position: "CEO at TechStart",
      },
      client2: {
        text: "Exceptional work! Mahdi delivered beyond our expectations and was always responsive to our needs.",
        name: "Sara Mohammadi",
        position: "Product Manager",
      },
      client3: {
        text: "Mahdi's technical expertise and problem-solving skills are outstanding. He transformed our vision into reality perfectly.",
        name: "Ali Mohammadi",
        position: "Technical Lead",
      },
      client4: {
        text: "Professional, reliable, and incredibly talented. Mahdi exceeded all our expectations with his innovative approach.",
        name: "Fateme Ahmadi",
        position: "UI/UX Designer",
      },
      client5: {
        text: "Working with Mahdi was seamless. His attention to detail and commitment to quality made our project a huge success.",
        name: "Reza Karimi",
        position: "Startup Founder",
      },
    },
    contact: {
      title: "Let's Get In Touch",
      subtitle:
        "Have a project in mind or want to discuss potential opportunities? I'm just a message away.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      firstName: "First Name",
      lastName: "Last Name",
      emailPlaceholder: "Email",
      message: "Message",
      sendMessage: "Send Message",
    },
    footer: {
      description:
        "Frontend Developer based in Isfahan, Iran. Available for freelance work and team projects.",
      company: "Company",
      about: "About",
      blog: "Blog",
      contactUs: "Contact Us",
      services: "Services",
      webDevelopment: "Frontend Development",
      uiuxDesign: "UI/UX Design",
      mobileDevelopment: "React Native",
      copyright: "© 2024 Mahdi Baghri. All rights reserved.",
    },
  },
  fa: {
    nav: {
      services: "خدمات",
      works: "نمونه کارها",
      skills: "مهارت‌ها",
      testimonials: "نظرات",
      contact: "تماس",
    },
    hero: {
      name: "من مهدی باقری هستم",
      title: "توسعه‌دهنده فرانت‌اند",
      subtitle: "متخصص React و Next.js",
      description:
        "توسعه‌دهنده فرانت‌اند با بیش از 2 سال تجربه در طراحی و توسعه وب‌سایت‌های جذاب و کاربرپسند. متخصص در React و Next.js با دقت به جزئیات و تعهد به کیفیت.",
      contactMe: "تماس با من",
      downloadCV: "دانلود رزومه",
    },
    services: {
      title: "آنچه انجام می‌دهم",
      subtitle:
        "من طیف گسترده‌ای از خدمات توسعه فرانت‌اند را برای کمک به کسب‌وکارها در ایجاد تجربیات دیجیتال تأثیرگذار ارائه می‌دهم.",
      websiteDesign: {
        title: "طراحی وب‌سایت",
        description:
          "من طراحی‌های سفارشی خیره‌کننده، کاربرپسند و واکنش‌گرا متناسب با نیازهای شما ایجاد می‌کنم.",
      },
      uiuxDesign: {
        title: "طراحی UI/UX",
        description:
          "ایجاد تجربیات کاربری شهودی و جذاب که کاربران شما را خوشحال می‌کند.",
      },
      webDevelopment: {
        title: "توسعه فرانت‌اند",
        description:
          "ساخت اپلیکیشن‌های وب سریع، واکنش‌گرا و مدرن با استفاده از React، Next.js و TypeScript.",
      },
    },
    projects: {
      title: "پروژه‌های ویژه",
      subtitle:
        "پروژه‌های جدید توسعه فرانت‌اند من را کاوش کنید. هر پروژه تعهد من به ایجاد راه‌حل‌های دیجیتال نوآورانه و کاربرپسند را نشان می‌دهد.",
      demo: "نمایش",
      code: "کد",
      featured: "ویژه",
      viewMore: "مشاهده بیشتر",
      viewGithub: "مشاهده در گیت‌هاب",
      dashStack: {
        title: "داشبورد DashStack",
        description:
          "داشبورد مدیریتی مدرن با کامپوننت‌های پیشرفته تجزیه و تحلیل و تجسم داده.",
      },
      tarkhineh: {
        title: "رستوران ترخینه",
        description: "وب‌سایت رستوران با سیستم سفارش آنلاین و طراحی مدرن.",
      },
      foodking: {
        title: "atrin",
        description: "پلت فرم فروش لباس با اجرای ساختاری مانند اینستاگرام",
      },
      concepto: {
        title: "نمونه کار Concepto",
        description:
          "وب‌سایت نمونه کار خلاقانه با انیمیشن‌های مدرن و طراحی واکنش‌گرا.",
      },
      cvBuilder: {
        title: "سازنده رزومه",
        description:
          "اپلیکیشن ساخت رزومه حرفه‌ای با قالب‌های متعدد و گزینه‌های خروجی.",
      },
      cryptoTrading: {
        title: "پلتفرم معاملات ارز دیجیتال",
        description:
          "پلتفرم معاملات ارز دیجیتال با داده‌های زمان واقعی و نمودارهای پیشرفته.",
      },
      crashCoinCapital: {
        title: "Crash Coin Capital",
        description:
          "وب‌سایت حرفه‌ای شرکت سرمایه‌گذاری ارزهای دیجیتال با طراحی مدرن و خدمات مالی جامع.",
      },
    },
    skills: {
      title: "مهارت‌های من",
      subtitle:
        "سال‌ها صرف تقویت مهارت‌هایم در توسعه فرانت‌اند کرده‌ام. در اینجا نمای کلی از تخصص فنی و سطح مهارت من آمده است.",
    },
    testimonials: {
      title: "نظرات مشتریان",
      subtitle:
        "فقط حرف من را قبول نکنید. در اینجا آنچه مشتریان من در مورد تجربیات کار با من می‌گویند.",
      client1: {
        text: "کار با مهدی لذت مطلق بود. توجه به جزئیات و راه‌حل‌های خلاقانه‌اش پروژه ما را موفق کرد.",
        name: "احمد رضایی",
        position: "مدیرعامل TechStart",
      },
      client2: {
        text: "کار استثنایی! مهدی فراتر از انتظارات ما تحویل داد و همیشه به نیازهای ما پاسخگو بود.",
        name: "سارا محمدی",
        position: "مدیر محصول",
      },
      client3: {
        text: "تخصص فنی و مهارت‌های حل مسئله مهدی فوق‌العاده است. او دیدگاه ما را به طور کامل به واقعیت تبدیل کرد.",
        name: "علی محمدی",
        position: "رهبر فنی",
      },
      client4: {
        text: "حرفه‌ای، قابل اعتماد و فوق‌العاده با استعداد. مهدی با رویکرد نوآورانه‌اش فراتر از انتظارات ما عمل کرد.",
        name: "فاطمه احمدی",
        position: "طراح UI/UX",
      },
      client5: {
        text: "کار با مهدی بدون مشکل بود. توجه به جزئیات و تعهد او به کیفیت، پروژه ما را به موفقیت بزرگی تبدیل کرد.",
        name: "رضا کریمی",
        position: "بنیان‌گذار استارتاپ",
      },
    },
    contact: {
      title: "بیایید در تماس باشیم",
      subtitle:
        "پروژه‌ای در ذهن دارید یا می‌خواهید در مورد فرصت‌های بالقوه صحبت کنید؟ من فقط یک پیام فاصله دارم.",
      phone: "تلفن",
      email: "ایمیل",
      address: "آدرس",
      firstName: "نام",
      lastName: "نام خانوادگی",
      emailPlaceholder: "ایمیل",
      message: "پیام",
      sendMessage: "ارسال پیام",
    },
    footer: {
      description:
        "توسعه‌دهنده فرانت‌اند مستقر در اصفهان، ایران. برای کار آزاد و پروژه‌های تیمی در دسترس.",
      company: "شرکت",
      about: "درباره",
      blog: "بلاگ",
      contactUs: "تماس با ما",
      services: "خدمات",
      webDevelopment: "توسعه فرانت‌اند",
      uiuxDesign: "طراحی UI/UX",
      mobileDevelopment: "React Native",
      copyright: "© ۱۴۰۳ مهدی باقری. تمام حقوق محفوظ است.",
    },
  },
};
