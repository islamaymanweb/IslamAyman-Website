 
// ===== Dark Mode Functionality =====
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update theme icon
  const themeIcon = document.getElementById("themeIcon");
  if (newTheme === "dark") {
    themeIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
  } else {
    themeIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
  }
}

// ===== Translation System =====
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    services: "Services",
    contact: "Contact",

    // Footer
    quickLinks: "Quick Links",
    aboutMe: "About Me",
    getInTouch: "Get in Touch",
    followMe: "Follow Me",
    email: "Email",
    phone: "Phone",
    location: "Location",
    craftedWith: "Crafted with",
    usingTech: "using .NET Core & Angular",

    // Footer Description
    footerDescription:
      "Passionate Full Stack Developer specializing in building exceptional digital experiences. Transforming ideas into elegant, scalable solutions using cutting-edge technologies.",
    followDescription:
      "Let's connect and build something amazing together!",

    // Contact Info
    emailValue: "islamwebdevelopment@gmail.com",
    phoneValue: "+20 1032811214",
    locationValue: "Mansoura, Egypt",

    // Copyright
    copyright: "All rights reserved.",

    // Demo Sections
    homeSection: "Home Section",
    aboutSection: "About Section",
    skillsSection: "Skills Section",
    projectsSection: "Projects Section",
    servicesSection: "Services Section",
    contactSection: "Contact Section",

    // Hero Section
    hiIm: "Hi, I'm",
    availableForProjects: "Available for new projects",
    heroDescription:
      "Passionate about building <span class='highlight'>scalable, secure web applications</span> using <span class='tech-highlight'>.NET Core</span> and <span class='tech-highlight'>Angular</span>. Transforming ideas into exceptional digital experiences.",
    downloadCV: "Open CV or Download CV",
    viewProjects: "View Projects",
    projectsDone: "Projects Done",
    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    scrollDown: "Scroll Down",

    // Typing Texts
    typingTexts: [
      "Full Stack Developer",
      ".NET Core Specialist",
      "Angular Expert",
      "Problem Solver",
      "Tech Enthusiast",
    ],
     // About Section
    aboutTitle: "About Me",
    aboutGreeting: "👨‍💻 About Me",
    aboutIntro: "I'm Islam Ayman, a passionate and detail-oriented Full Stack Web Developer specialized in building scalable, secure, and business-driven web applications using .NET Core and Angular.",
    aboutMission: "I focus on transforming complex business requirements into efficient, modern, and maintainable software solutions that optimize operations, reduce costs, and enhance user experience.",
    valueTitle: "🧠 How I Add Real Business Value",
    backendTitle: "⚙️ Robust Backend Engineering",
    backendPoint1: "Expert in C#, .NET Core, Entity Framework Core, and SQL-based systems",
    backendPoint2: "Experience building modular, maintainable, and high-performance RESTful APIs",
    backendPoint3: "Skilled in API optimization, caching strategies, and performance tuning",
    frontendTitle: "🌐 Modern & Scalable Frontend Development",
    frontendPoint1: "Advanced in Angular, TypeScript, RxJS, and Angular Material",
    frontendPoint2: "Building responsive, mobile-first, and interactive UI/UX",
    frontendPoint3: "Strong grasp of design systems, accessibility, and frontend performance",
    securityTitle: "🔐 Security & Business Integration",
    securityPoint1: "Implemented secure JWT-based authentication, role-based authorization",
    securityPoint2: "Integrated online payments (Stripe, PayPal), email notifications, and admin dashboards",
    securityPoint3: "Follow clean architecture & repository patterns for long-term scalability",
    projectsCompleted: "Projects Completed",
    yearsExperience: "Years Experience",
    happyClients: "Happy Clients",
    successRate: "Success Rate %",
    educationTitle: "EDUCATION",
    educationDegree: "Bachelor of Commerce – Economics",
    educationSpecialization: "(Banking & Financial Markets)",
   // Skills Section
    skillsTitle: "Tech Stack & Tools",
    skillsSubtitle: "Technologies I work with to deliver exceptional results",
    technicalSkills: "Technical Skills",
    backendTitle: "Backend",
    frontendTitle: "Frontend", 
    databaseCloudTitle: "Database & Cloud",
    architectureTitle: "Architecture & Patterns",
    skillsDistribution: "Skills Distribution",
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    architecture: "Architecture",
    servicesTitle: "My Services",
servicesSubtitle: "Comprehensive solutions to bring your digital vision to life",
service1Title: "Custom Web Applications",
service1Description: "Design and development of professional custom web applications that precisely meet your business needs, using .NET Core and Angular to deliver high performance, strong security, and smooth user experience.",
service1Result: "Result: A smart system that helps you manage your business efficiently and develop your internal operations.",
service2Title: "E-commerce & Business Platforms", 
service2Description: "Creation of complete e-commerce stores and business management systems with modern interfaces and secure electronic payment (Stripe / PayPal), with an easy control panel for managing products and sales.",
service2Result: "Result: Increased sales and building a strong digital presence for your brand.",
service3Title: "API & System Integration",
service3Description: "Development of secure and fast APIs to connect your company's different systems or integrate external services such as payment, email, and performance analytics.",
service3Result: "Result: Greater flexibility and effective connection between your tools and services.",
ctaTitle: "Ready to Start Your Project?",
ctaDescription: "Let's discuss how we can transform your ideas into powerful digital solutions.",
ctaButton: "Get In Touch",
contactTitle: "Get In Touch",
contactSubtitle: "Let's discuss your next project and bring your ideas to life",
infoTitle: "Let's Talk",
infoDescription: "I'm always interested in new challenges and opportunities. Whether you have a project in mind or just want to say hello, I'd love to hear from you!",
emailTitle: "Email",
phoneTitle: "Phone", 
locationTitle: "Location",
locationValue: "Mansoura, Egypt",
followTitle: "Follow Me",
sendMessage: "Send Message",
  },
 
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "عني",
    skills: "المهارات",
    projects: "المشاريع",
    services: "الخدمات",
    contact: "اتصل بي",

    // Footer
    quickLinks: "روابط سريعة",
    aboutMe: "عني",
    getInTouch: "تواصل معي",
    followMe: "تابعني",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    craftedWith: "مصنوع بـ",
    usingTech: "NET Core & Angular",

    // Footer Description
    footerDescription:
      "مطور Full Stack شغوف متخصص في بناء تجارب رقمية استثنائية. أحول الأفكار إلى حلول أنيقة وقابلة للتطوير باستخدام أحدث التقنيات.",
    followDescription: "لنتواصل ونبني شيئاً مذهلاً معاً!",

    // Contact Info
    emailValue: "islamwebdevelopment@gamil.com",
    phoneValue: "+20 1032811214",
    locationValue: "المنصورة، مصر",

    // Copyright
    copyright: "جميع الحقوق محفوظة.",

    // Demo Sections
    homeSection: "قسم الرئيسية",
    aboutSection: "قسم عني",
    skillsSection: "قسم المهارات",
    projectsSection: "قسم المشاريع",
    servicesSection: "قسم الخدمات",
    contactSection: "قسم اتصل بي",

    // Hero Section
    hiIm: "مرحباً، أنا",
    availableForProjects: "متاح للمشاريع الجديدة",
    heroDescription:
      "شغوف ببناء <span class='highlight'>تطبيقات ويب قابلة للتطوير وآمنة</span> باستخدام <span class='tech-highlight'>.NET Core</span> و <span class='tech-highlight'>Angular</span>. أحول الأفكار إلى تجارب رقمية استثنائية.",
    downloadCV: "تحميل السيرة الذاتية",
    viewProjects: "عرض المشاريع",
    projectsDone: "مشروع مكتمل",
    yearsExperience: "سنوات خبرة",
    happyClients: "عميل سعيد",
    scrollDown: "انتقل للأسفل",

    // Typing Texts
    typingTexts: [
      "مطور Full Stack",
      "متخصص .NET Core",
      "خبير Angular",
      "حلال المشاكل",
      "مهوس تكنولوجيا",
    ],
     // About Section
    aboutTitle: "عني",
    aboutGreeting: "عني",
    aboutIntro: "أنا إسلام أيمن، مطور ويب Full Stack شغوف واهتمامي بالتفاصيل، متخصص في بناء تطبيقات ويب قابلة للتطوير وآمنة ومدفوعة بالاحتياجات التجارية باستخدام .NET Core و Angular.",
    aboutMission: "أركز على تحويل المتطلبات التجارية المعقدة إلى حلول برمجية فعالة وحديثة وقابلة للصيانة تعمل على تحسين العمليات وتقليل التكاليف وتعزيز تجربة المستخدم.",
    valueTitle: "🧠 كيف أضيف قيمة حقيقية للعمل",
    backendTitle: "⚙️ هندسة Backend قوية",
    backendPoint1: "خبير في C#، .NET Core، Entity Framework Core، وأنظمة SQL",
    backendPoint2: "خبرة في بناء واجهات برمجة تطبيقات RESTful معيارية وقابلة للصيانة وعالية الأداء",
    backendPoint3: "ماهر في تحسين واجهات برمجة التطبيقات واستراتيجيات التخزين المؤقت وضبط الأداء",
    frontendTitle: "🌐 تطوير Frontend حديث وقابل للتطوير",
    frontendPoint1: "متقدم في Angular، TypeScript، RxJS، و Angular Material",
    frontendPoint2: "بناء واجهات مستخدم متجاوبة وتركز على الهاتف المحمول وتفاعلية",
    frontendPoint3: "فهم قوي لأنظمة التصميم وسهولة الوصول وأداء الواجهة الأمامية",
    securityTitle: "🔐 الأمان والتكامل التجاري",
    securityPoint1: "تنفيذ مصادقة آمنة قائمة على JWT والتفويض القائم على الأدوار",
    securityPoint2: "دمج المدفوعات عبر الإنترنت (Stripe، PayPal)، وإشعارات البريد الإلكتروني، ولوحات التحكم الإدارية",
    securityPoint3: "اتباع أنماط الهندسة النظيفة وأنماط المستودع للتوسع طويل الأجل",
    projectsCompleted: "مشروع مكتمل",
    yearsExperience: "سنوات خبرة",
    happyClients: "عميل سعيد",
    successRate: "معدل النجاح %",
    educationTitle: "التعليم",
    educationDegree: "بكالوريوس تجارة – اقتصاد",
    educationSpecialization: "(الأسواق المصرفية والمالية)",
 
  // Skills Section
    skillsTitle: "المهارات التقنية والأدوات",
    skillsSubtitle: "التقنيات التي أعمل بها لتقديم نتائج استثنائية",
    technicalSkills: "المهارات التقنية",
    backendTitle: "الواجهة الخلفيه",
    frontendTitle: "الواجهة الأماميه",
    databaseCloudTitle: "قواعد البيانات والسحابة",
    architectureTitle: "الهندسة المعمارية والأنماط",
    skillsDistribution: "توزيع المهارات",
    backend: "الواجهات الخلفيه",
    frontend: "الواجهات الاماميه", 
    database: "قواعد البيانات",
    architecture: "الهندسة المعمارية",
      servicesTitle: "خدماتي",
  servicesSubtitle: "حلول شاملة لتحويل رؤيتك الرقمية إلى واقع ملموس",
  service1Title: "تطبيقات ويب مخصصة",
  service1Description: "تصميم وتطوير تطبيقات ويب احترافية مخصصة تلبي احتياجات عملك بدقة، باستخدام .NET Core وAngular لتقديم أداء عالي، أمان قوي، وتجربة مستخدم سلسة.",
  service1Result: " النتيجة: نظام ذكي يساعدك في إدارة أعمالك بكفاءة وتطوير عملياتك الداخلية.",
  service2Title: "منصات التجارة الإلكترونية والأعمال",
  service2Description: "إنشاء متاجر إلكترونية وأنظمة إدارة أعمال متكاملة بواجهات عصرية ودفع إلكتروني آمن (Stripe / PayPal)، مع لوحة تحكم سهلة لإدارة المنتجات والمبيعات.",
  service2Result: "النتيجة: زيادة المبيعات وبناء حضور رقمي قوي لعلامتك التجارية.",
  service3Title: "واجهات برمجة التطبيقات والتكامل",
  service3Description: "تطوير واجهات برمجية (APIs) آمنة وسريعة لربط أنظمة شركتك المختلفة أو دمج خدمات خارجية مثل الدفع، البريد الإلكتروني، وتحليلات الأداء.",
  service3Result: " النتيجة: مرونة أكبر وربط فعال بين أدواتك وخدماتك.",
  ctaTitle: "مستعد لبدء مشروعك؟",
  ctaDescription: "لنتناقش حول كيفية تحويل أفكارك إلى حلول رقمية قوية.",
  ctaButton: "تواصل معي",
    contactTitle: "تواصل معي",
  contactSubtitle: "لنتناقش حول مشروعك القادم ونحول أفكارك إلى واقع",
  infoTitle: "لنتحدث",
  infoDescription: "أنا دائمًا مهتم بالتحديات والفرص الجديدة. سواء كان لديك مشروع في ذهنك أو تريد فقط أن تقول مرحبًا، يسعدني أن أسمع منك!",
  emailTitle: "البريد الإلكتروني",
  phoneTitle: "الهاتف",
  locationTitle: "الموقع", 
  locationValue: "المنصورة، مصر",
  followTitle: "تابعني",
  sendMessage: "إرسال الرسالة"
  }
};

let currentLanguage = "en";

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";
  updateLanguage();

  // Update button text
  const langText = document.getElementById("langText");
  const mobileLangText = document.getElementById("mobileLangText");
  langText.textContent = currentLanguage === "en" ? "AR" : "EN";
  mobileLangText.textContent = currentLanguage === "en" ? "AR" : "EN";

  // Save to localStorage
  localStorage.setItem("language", currentLanguage);
}

function updateLanguage() {
  const t = translations[currentLanguage];

  // Update navigation links
  document
    .querySelectorAll(".nav-link, .mobile-nav-link")
    .forEach((link, index) => {
      const keys = [
        "home",
        "about",
        "skills",
        "projects",
        "services",
        "contact",
      ];
      if (keys[index]) {
        link.textContent = t[keys[index]];
        if (link.querySelector("span")) {
          link.querySelector("span").textContent = t[keys[index]];
        }
      }
    });
      document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      element.textContent = t[key];
    }
  });

  // Update footer sections
  const footerTitles = document.querySelectorAll(".footer-title");
  footerTitles.forEach((title, index) => {
    const keys = ["quickLinks", "getInTouch", "followMe"];
    if (keys[index]) {
      title.textContent = t[keys[index]];
    }
  });

  // Update footer links
  const footerLinks = document.querySelectorAll(".footer-link-list a");
  footerLinks.forEach((link, index) => {
    const keys = [
      "home",
      "aboutMe",
      "skills",
      "projects",
      "services",
      "contact",
    ];
    if (keys[index]) {
      link.textContent = t[keys[index]];
    }
  });
 document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      element.textContent = t[key];
    }
  });
  // Update footer descriptions
  const footerDescription = document.querySelector(".footer-description");
  if (footerDescription) {
    footerDescription.textContent = t.footerDescription;
  }

  const followDescription = document.querySelector(
    ".footer-social .footer-description"
  );
  if (followDescription) {
    followDescription.textContent = t.followDescription;
  }

  // Update contact info labels
  const contactLabels = document.querySelectorAll(
    ".contact-item div div:first-child"
  );
  const keys = ["email", "phone", "location"];
  contactLabels.forEach((label, index) => {
    if (keys[index]) {
      label.textContent = t[keys[index]];
    }
  });

  // Update contact info values
  const contactValues = document.querySelectorAll(
    ".contact-item div div:last-child"
  );
  const valueKeys = ["emailValue", "phoneValue", "locationValue"];
  contactValues.forEach((value, index) => {
    if (valueKeys[index]) {
      value.textContent = t[valueKeys[index]];
    }
  });

  // Update copyright
  const copyright = document.querySelector(".footer-copyright");
  if (copyright) {
    copyright.innerHTML = `&copy; 2025 <strong>Islam Ayman</strong>. ${t.copyright}`;
  }

  // Update made with text
  const madeWith = document.querySelector(".footer-made-with");
  if (madeWith) {
    madeWith.innerHTML = `${t.craftedWith} <span class="heart-icon">❤</span> ${t.usingTech}`;
  }

  // Update demo sections
  const demoSections = document.querySelectorAll(".demo-section");
  const sectionKeys = ["homeSection", "aboutSection", "skillsSection", "projectsSection", "servicesSection", "contactSection"];
  demoSections.forEach((section, index) => {
    if (sectionKeys[index]) {
      section.textContent = t[sectionKeys[index]];
    }
  });

  // Update Hero Section
  const heroBadge = document.querySelector(".hero-badge");
  if (heroBadge) {
    heroBadge.innerHTML = `<span class="badge-dot"></span>${t.availableForProjects}`;
  }

  const heroTitle = document.querySelector(
    ".hero-title .title-line:first-child"
  );
  if (heroTitle) {
    heroTitle.innerHTML = `${t.hiIm} <span class="name-gradient">Islam Ayman</span>`;
  }

  const heroDescription = document.querySelector(".hero-description");
  if (heroDescription) {
    heroDescription.innerHTML = t.heroDescription;
  }

  const downloadBtn = document.querySelector(".btn-primary .btn-content");
  if (downloadBtn) {
    downloadBtn.innerHTML = `
      <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      ${t.downloadCV}
    `;
  }

  const viewProjectsBtn = document.querySelector(
    ".btn-secondary .btn-content"
  );
  if (viewProjectsBtn) {
    viewProjectsBtn.innerHTML = `
      <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      ${t.viewProjects}
    `;
  }

  // Update Stats Labels
  const statLabels = document.querySelectorAll(".stat-label");
  const statKeys = ["projectsDone", "yearsExperience", "happyClients"];
  statLabels.forEach((label, index) => {
    if (statKeys[index]) {
      label.textContent = t[statKeys[index]];
    }
  });

  // Update Scroll Indicator
  const scrollIndicator = document.querySelector(".scroll-indicator span");
  if (scrollIndicator) {
    scrollIndicator.textContent = t.scrollDown;
  }

  // Update typing texts array for animation
  if (window.typingTexts) {
    window.typingTexts = t.typingTexts;
  }

  // Update RTL/LTR
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLanguage;
}

function initializeLanguage() {
  const savedLanguage = localStorage.getItem("language") || "en";
  currentLanguage = savedLanguage;
  updateLanguage();

  // Update button text
  const langText = document.getElementById("langText");
  const mobileLangText = document.getElementById("mobileLangText");
  langText.textContent = currentLanguage === "en" ? "AR" : "EN";
  mobileLangText.textContent = currentLanguage === "en" ? "AR" : "EN";
}

// ===== Mobile Menu Functionality =====
function toggleMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";
}

// ===== Scroll to Top Function =====
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ===== Initialize Theme from Local Storage =====
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // Set correct icon based on saved theme
  const themeIcon = document.getElementById("themeIcon");
  if (savedTheme === "dark") {
    themeIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
  }
}

// ===== Navbar Scroll Effect =====
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar");
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// ===== Scroll to Top Button Visibility =====
function handleScrollTopButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 300) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
}

// ===== Active Link Highlighting =====
function setActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// ===== Particles.js Initialization =====
function initParticles() {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-footer", {
      particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: "#06b6d4" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#2563eb",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }
}

// ===== GSAP Animations for Footer =====
function animateFooter() {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils
      .toArray(
        ".footer-about, .footer-links, .footer-contact, .footer-social"
      )
      .forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
  }
}

// ===== Hero Section Animations =====
function initHeroAnimations() {
  // Typing Animation - Use translated texts
  const typingText = document.getElementById("typingText");
  const texts = window.typingTexts || [
    "Full Stack Developer",
    ".NET Core Specialist", 
    "Angular Expert",
    "Problem Solver",
    "Tech Enthusiast"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing animation
  setTimeout(type, 1000);

  // Counter Animation for Stats
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }

    function updateCount() {
      const count = +counter.innerText;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    }
  });

  // Initialize Particles.js for Hero
  if (typeof particlesJS !== "undefined") {
    particlesJS("hero-particles", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#06b6d4" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#2563eb",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        }
      },
      retina_detect: true
    });
  }
}

// ===== Hero Section Functions =====
function downloadCV() {
  // Simulate download
  const link = document.createElement("a");
  link.href = "https://drive.google.com/file/d/15uiZKgUTTz30iKXV4vYXAUaDW4iixT3c/view?usp=sharing";
  link.download = "lam Ayman Full Stack .NET Angular CV.pdf";
  link.click();
  
  // Add download animation
  const btn = event.currentTarget;
  btn.classList.add("downloading");
  setTimeout(() => btn.classList.remove("downloading"), 1000);
}

function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Event Listeners =====
document.addEventListener("DOMContentLoaded", function () {
  // Initialize everything
  initializeTheme();
  initializeLanguage();
  initParticles();
  animateFooter();
  
  // Set initial typing texts
  window.typingTexts = translations[currentLanguage].typingTexts;
  
  // Initialize hero animations after language is set
  setTimeout(initHeroAnimations, 500);

  // Event listeners for buttons
  document
    .getElementById("themeToggle")
    .addEventListener("click", toggleTheme);
  document
    .getElementById("langToggle")
    .addEventListener("click", toggleLanguage);
  document
    .getElementById("mobileMenuBtn")
    .addEventListener("click", toggleMobileMenu);
  document
    .getElementById("scrollTopBtn")
    .addEventListener("click", scrollToTop);

  // Close mobile menu when clicking on links
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu();
    });
  });

  // Scroll events
  window.addEventListener("scroll", function () {
    handleNavbarScroll();
    handleScrollTopButton();
    setActiveLink();
  });

  // Initial calls
  handleNavbarScroll();
  handleScrollTopButton();
  setActiveLink();
});

// ===== Smooth Scrolling for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// جعل typing texts متاح globally للترجمة
window.typingTexts = null;
///////////////////////////////////////////////////////////////////
// أضف هذه الدوال في ملف script.js:

// About Section Animations
function initAboutAnimations() {
  // Initialize counters
  initCounters();
  
  // Initialize scroll animations
  initScrollAnimations();
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start counter when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(counter);
  });
}

function initScrollAnimations() {
  const aboutElements = document.querySelectorAll(
    '.about-title, .about-main-card, .value-section, .stats-section, .education-section'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('about-element-visible');
        
        if (entry.target.classList.contains('about-title')) {
          setTimeout(() => {
            document.querySelector('.title-underline').classList.add('title-underline-visible');
          }, 300);
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  aboutElements.forEach(element => {
    observer.observe(element);
  });
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // ... الكود الحالي ...
  
  initAboutAnimations(); // Add this line
});

// أضف هذه الدوال في ملف script.js:

// Skills Section Animations
function initSkillsAnimations() {
  // Initialize progress bars
  initProgressBars();
  
  // Initialize scroll animations
  initSkillsScrollAnimations();
  
  // Initialize skill hover effects
  initSkillHoverEffects();
}

function initProgressBars() {
  const progressBars = document.querySelectorAll('.chart-progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.getAttribute('data-width');
        
        setTimeout(() => {
          progressBar.style.width = width + '%';
        }, 300);
        
        observer.unobserve(progressBar);
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}

function initSkillsScrollAnimations() {
  const skillsElements = document.querySelectorAll(
    '.skills-title, .skills-subtitle, .skills-category, .skills-visualization'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('skills-element-visible');
        
        if (entry.target.classList.contains('skills-title')) {
          setTimeout(() => {
            document.querySelector('.skills-subtitle').classList.add('skills-element-visible');
          }, 300);
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  skillsElements.forEach(element => {
    observer.observe(element);
  });
}

function initSkillHoverEffects() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const skillName = this.getAttribute('data-skill');
      // يمكنك إضافة تأثيرات إضافية هنا
    });
    
    item.addEventListener('mouseleave', function() {
      // إعادة التعيين إذا لزم الأمر
    });
  });
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // ... الكود الحالي ...
  
  initSkillsAnimations(); // Add this line
});
//////////////////////////////////////////////////////////////////////////////////////////
// Projects Section Functionality
 // Projects Section Functionality
function initProjects() {
  initProjectsFilter();
  initProjectsAnimation();
  initProjectModals();
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

function initProjectsAnimation() {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  projectCards.forEach(card => {
    observer.observe(card);
  });
}

function initProjectModals() {
  // Modal content templates
  window.projectModals = {
    'smart-store': {
      title: 'Smart Store',
      description: 'A comprehensive e-commerce platform built with .NET Core MVC featuring inventory management, customer analytics, order processing, and payment integration.',
      features: [
        'Product catalog with categories and search',
        'Shopping cart and wishlist functionality',
        'Customer management system',
        'Order processing and tracking',
        'Admin dashboard for analytics'
      ],
      technologies: ['.NET Core', 'MVC', 'SQL Server', 'Entity Framework', 'Bootstrap', 'JavaScript'],
      demoLink: 'https://youtu.be/_wnARJr9ryA?si=c0wEWdegxt-yf73B'
    },
    'markets-economics': {
      title: 'Markets Economics',
      description: 'Financial markets analysis platform providing real-time data, charts, and economic indicators for traders and investors.',
      features: [
        'Real-time market data integration',
        'Interactive charts and graphs',
        'Economic indicators dashboard',
        'Portfolio management tools',
        'News and analysis feeds'
      ],
      technologies: ['.NET Core', 'Angular', 'Web API', 'TypeScript', 'RxJS', 'SQL Server'],
      demoLink: 'https://youtu.be/8rrD-P4fI4U?si=Qn9r7n6GWlzMM8iF'
    },
    'dar-elite': {
      title: 'Dar Elite',
      description: 'Modern furniture e-commerce platform with responsive design, secure payment integration, and advanced product management.',
      features: [
        'Modern responsive design',
        'Product customization options',
        'Secure payment gateway integration',
        'Order tracking system',
        'Customer reviews and ratings'
      ],
      technologies: ['.NET Core', 'Angular', 'Web API', 'Entity Framework', 'SQL Server', 'SCSS'],
      demoLink: '#',
      githubLink: 'https://github.com/islamaymanweb/DarElite-API'
    },
    'elite-haven': {
      title: 'Elite Haven',
      description: 'Real estate platform connecting buyers and sellers with advanced property search, virtual tours, and management tools.',
      features: [
        'Advanced property search with filters',
        'Virtual tour integration',
        'Property management dashboard',
        'Agent and client portals',
        'Document management system'
      ],
      technologies: ['.NET Core', 'MVC', 'SQL Server', 'JavaScript', 'Bootstrap', 'jQuery'],
      demoLink: 'https://youtu.be/dzzbOT7eqWc?si=CuBKxj2eZ3IyqjCP'
    },
    'book-store': {
      title: 'Book Store',
      description: 'Online bookstore with comprehensive inventory management, order processing, and customer relationship management.',
      features: [
        'Book catalog with advanced search',
        'Shopping cart and checkout process',
        'Inventory management system',
        'Order tracking and history',
        'Customer reviews and recommendations'
      ],
      technologies: ['.NET Core', 'MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'JavaScript'],
      demoLink: 'https://youtu.be/xeJFAqHtSyY?si=oGibHnkDqJVZRkn8'
    }
  };
}

function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const modalBody = modal.querySelector('.modal-body');
  const project = window.projectModals[projectId];
  
  if (project) {
    modalBody.innerHTML = `
      <div class="modal-project">
        <h2>${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        
        <div class="modal-features">
          <h3>Key Features</h3>
          <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        
        <div class="modal-tech">
          <h3>Technologies Used</h3>
          <div class="tech-tags">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
        
        <div class="modal-actions">
          ${project.demoLink && project.demoLink !== '#' ? 
            `<a href="${project.demoLink}" target="_blank" class="project-link demo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Live Demo
            </a>` : ''
          }
          ${project.githubLink ? 
            `<a href="${project.githubLink}" target="_blank" class="project-link code">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
              Source Code
            </a>` : ''
          }
        </div>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // ... الكود الحالي ...
  
  initProjects(); // Add this line
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  const modal = document.getElementById('project-modal');
  if (e.target === modal) {
    closeProjectModal();
  }
});
// Services Section Animations
function initServicesAnimations() {
  const servicesElements = document.querySelectorAll(
    '.services-title, .services-subtitle, .service-card, .services-cta'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('services-element-visible');
        }, index * 200);
        
        if (entry.target.classList.contains('services-title')) {
          setTimeout(() => {
            document.querySelector('.services-subtitle').classList.add('services-element-visible');
          }, 300);
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  servicesElements.forEach(element => {
    observer.observe(element);
  });
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // ... الكود الحالي ...
  
  initServicesAnimations(); // Add this line
});

// Scroll to Contact function
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}
// Contact Section Animations
function initContactAnimations() {
  const contactElements = document.querySelectorAll(
    '.contact-title, .contact-subtitle, .info-card, .contact-form'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('contact-element-visible');
        }, index * 200);
        
        if (entry.target.classList.contains('contact-title')) {
          setTimeout(() => {
            document.querySelector('.contact-subtitle').classList.add('contact-element-visible');
          }, 300);
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  contactElements.forEach(element => {
    observer.observe(element);
  });
}

// Form Validation and Submission
function initContactForm() {
  const contactForm = document.querySelector('.contact-form');
  const submitBtn = contactForm.querySelector('.submit-btn');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form validation
    if (!validateForm()) {
      return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    
    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      
      // Update button text
      const btnText = submitBtn.querySelector('.btn-text');
      btnText.textContent = 'Message Sent!';
      
      // Reset form
      contactForm.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.classList.remove('success');
        btnText.textContent = getTranslation('sendMessage');
      }, 3000);
      
    }, 2000);
  });
  
  // Real-time validation
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    input.addEventListener('input', function() {
      clearFieldError(this);
    });
  });
}

function validateForm() {
  const form = document.querySelector('.contact-form');
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });
  
  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  
  // Clear previous error
  clearFieldError(field);
  
  // Required field validation
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'This field is required');
    isValid = false;
  }
  
  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Please enter a valid email address');
      isValid = false;
    }
  }
  
  // Name validation (minimum 2 characters)
  if (field.name === 'name' && value && value.length < 2) {
    showFieldError(field, 'Name must be at least 2 characters long');
    isValid = false;
  }
  
  // Message validation (minimum 10 characters)
  if (field.name === 'message' && value && value.length < 10) {
    showFieldError(field, 'Message must be at least 10 characters long');
    isValid = false;
  }
  
  if (isValid) {
    field.style.borderColor = 'var(--success-color)';
  }
  
  return isValid;
}

function showFieldError(field, message) {
  field.style.borderColor = 'var(--error-color)';
  
  // Create error message element
  let errorElement = field.parentNode.querySelector('.error-message');
  if (!errorElement) {
    errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    field.parentNode.appendChild(errorElement);
  }
  
  errorElement.textContent = message;
  errorElement.style.color = 'var(--error-color)';
  errorElement.style.fontSize = '0.875rem';
  errorElement.style.marginTop = '0.5rem';
  errorElement.style.fontWeight = '600';
}

function clearFieldError(field) {
  field.style.borderColor = '';
  
  const errorElement = field.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.remove();
  }
}

// Helper function to get translation
function getTranslation(key) {
  const t = translations[currentLanguage];
  return t[key] || key;
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // ... الكود الحالي ...
  
  initContactAnimations();
  initContactForm();
});