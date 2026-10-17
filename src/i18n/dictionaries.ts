export type Lang = 'sv' | 'en'

export const LANGS: Lang[] = ['sv', 'en']
export const DEFAULT_LANG: Lang = 'sv'

export interface ProjectText {
  description: string
  fullDescription: string[]
  keyFeatures?: string
  challenges?: string
}

export interface Dict {
  meta: {
    title: string
    description: string
  }
  nav: {
    home: string
    projects: string
    about: string
    resume: string // aria-label for the CV/résumé link
    switchTo: string // label for the other language
  }
  hero: {
    greeting: string
    subtitle: string
  }
  github: {
    locale: string
    contributions: string
  }
  bento: {
    mainTitle: { dark: string; light: string }
    basedInLabel: string
    basedInValue: string
    codingSinceLabel: string
    codingSinceValue: string
    whatIDoPill: string
    whatIDoTitle: { dark: string; light: string }
    learningPill: string
    learningExploring: string
    learningTopic: string
  }
  projects: {
    label: string
    title: string
    viewGithub: string
    readMore: string
    techStack: string
    keyFeatures: string
    challenges: string
    visitLive: string
    viewCode: string
    typeLabel: string
    stackLabel: string
    subtitles: string[]
    items: ProjectText[]
  }
  skills: {
    label: string
    title: string
    categories: string[] // Frontend, Backend, Tools & DevOps, Design & Workflow
    descriptions: Record<string, string> // by skill name
  }
  achievements: {
    label: string
    title: string
    cards: { value: string; caption: string }[]
  }
  experience: {
    label: string
    title: string
    items: { role: string; company: string; tag: string }[]
  }
  about: {
    label: string
    title: string
    cards: { title: string; role: string; text: string }[]
  }
  footer: {
    label: string
    title: string
    startProject: string
    downloadCv: string
    emailMe: string
    whatsapp: string
    linkCv: string
    aboutLine1: string
    aboutLine2: string
    menuTitle: string
    followTitle: string
    exploreTitle: string
    linkHome: string
    linkWorks: string
    linkAbout: string
    linkSkills: string
    linkFocus: string
    backToTop: string
  }
}

const sv: Dict = {
  meta: {
    title: 'Alexander Gerhard – Fullstack-utvecklare',
    description:
      'Alexander Gerhard – fullstack-utvecklare i Stockholm specialiserad på React, TypeScript och Node.js/NestJS. Bygger skalbara webblösningar.',
  },
  nav: {
    home: 'Hem',
    projects: 'Projekt',
    about: 'Om mig',
    resume: 'Ladda ner CV',
    switchTo: 'English',
  },
  hero: {
    greeting: 'Hej, jag heter Alexander Gerhard.',
    subtitle: 'Förvandlar idéer till skalbara\nwebblösningar.',
  },
  github: {
    locale: 'sv-SE',
    contributions: 'bidrag senaste året',
  },
  bento: {
    mainTitle: {
      dark: 'Fullstack-utvecklare',
      light: 'med kärlek till rent gränssnitt och snabba appar',
    },
    basedInLabel: 'Bor i',
    basedInValue: 'Stockholm, Sverige',
    codingSinceLabel: 'Kodar sedan',
    codingSinceValue: 'Juni 2015',
    whatIDoPill: 'Vad jag gör',
    whatIDoTitle: {
      dark: 'Fokus på snabba byggen, ren kod',
      light: 'och smart design',
    },
    learningPill: 'Alltid lärande',
    learningExploring: 'Utforskar',
    learningTopic: 'Next.js & Rust',
  },
  projects: {
    label: 'PROJEKT',
    title: 'Senaste arbeten',
    viewGithub: 'Visa GitHub',
    readMore: 'Läs mer',
    techStack: 'Teknikstack',
    keyFeatures: 'Nyckelfunktioner',
    challenges: 'Utmaningar & Lösningar',
    visitLive: 'Besök webbplatsen →',
    viewCode: 'Visa kod →',
    typeLabel: 'Typ',
    stackLabel: 'Stack',
    subtitles: [
      'Live SaaS-plattform',
      'Adminpanel i realtid',
      'Plattformsoberoende app',
      'Prefab-armering, leads',
      'Betongplattor, leads',
      'Takläggare, lokal SEO',
      'Hälsoinfo & app',
      'SEO för byggmarknad',
      'WordPress-redesign',
      'E-handelsbutik',
      'Backend-tjänst',
      'Backend-tjänst',
    ],
    items: [
      {
        description:
          'Presentationswebbplats för ByggExp – en plattform för tidsrapportering, projektstyrning och fakturering. Integrerad med mobilapp och adminpanel.',
        fullDescription: [
          'Utvecklade en landningssida som fungerar som ingång till en mobilapp och adminpanel för tidsrapportering och projektstyrning.',
          'Implementerade användarregistrering med autentisering och datalagring (MongoDB).',
          'Fokuserade på responsiv design, prestanda och fullstack-funktionalitet.',
        ],
        keyFeatures: 'Produktpresentation, användarregistrering och inloggning',
        challenges: 'Skalbar och modulär frontendarkitektur',
      },
      {
        description:
          'Adminpanel för ByggExp – hantering av projekt, uppgifter, dokumentation och personal i realtid. Integrerad med mobilapp och backend.',
        fullDescription: [
          'Central kontrollpanel för byggföretag integrerad med mobilapp, backend, databas samt ekonomisystem som Visma och Fortnox.',
          'Samlar projekt, personal och verksamhetsdata i ett gemensamt system för effektiv administration och uppföljning.',
        ],
        keyFeatures:
          'Automatisk tidsrapportering, uppgifter med påminnelser, personalöversikt i realtid, fotodokumentation kopplad till projekt, projekt- och personalplanering, fakturor och offerter.',
      },
      {
        description:
          'Mobilapp för tidsrapportering, uppgiftshantering och projektstyrning. Integrerad med ByggExps adminpanel och backend.',
        fullDescription: [
          'Mobilapplikation utvecklad för byggföretag med fokus på enkel rapportering och uppföljning direkt från arbetsplatsen.',
          'Integrerad med ByggExps adminpanel, backend och databas för synkronisering av projekt-, personal- och verksamhetsdata i realtid.',
        ],
      },
      {
        description:
          'Svensk webbplats för AGRY OÜ som tillverkar prefab-armering i Estland – byggd för offertförfrågningar från hela Sverige.',
        fullDescription: [
          'Snabb statisk Next.js-sajt med offertformulär i hero där kunden kan bifoga ritning eller bockningslista (PHP-mailhanterare).',
          'Armeringskalkylator, 10 produktsidor, 12 stadssidor och 24 guider med strukturerad data och en SEO-driven innehållsplan.',
          'Automatisk deploy till webbhotell via GitHub Actions (FTPS). Live med 56 indexerbara sidor.',
        ],
        keyFeatures: 'Offertformulär med filuppladdning, armeringskalkylator, stads- och produktsidor',
        challenges: 'Nå kunder i hela Sverige med en statisk sajt och lokal SEO',
      },
      {
        description:
          'Leadsajt för Agry Entreprenad AB som gjuter betongplattor och grunder i Stockholm och Dalarna.',
        fullDescription: [
          'Statisk Next.js-sajt med offertformulär (uppladdning av ritningar) och tre pris- och mängdkalkylatorer.',
          '8 tjänstesidor, 4 prissidor, 36 lokala områdessidor och 42 bloggartiklar med schema markup och internlänkning.',
          'CI/CD med GitHub Actions till webbhotell. Live med 103 sidor i sitemap.',
        ],
        keyFeatures: 'Offertformulär, priskalkylatorer, lokala sidor och blogg',
        challenges: 'Skala upp lokala sidor utan duplicerat innehåll',
      },
      {
        description:
          'Webbplats för Geal Entreprenad AB – takbyte och takrenovering för villor i Stockholm och Dalarna.',
        fullDescription: [
          'Snabb statisk HTML/CSS/JavaScript-sajt med tjänstesidor, artiklar och en kalkylator för takbyte.',
          '37 lokala sidor ”takläggare i [område]” som hålls unika och valideras före varje deploy.',
          'Offertformulär i PHP som loggar varje lead. Deploy via GitHub Actions. Live med 89 sidor i sitemap.',
        ],
        keyFeatures: 'Takbyteskalkylator, lokala sidor, offertformulär med leadlogg',
        challenges: 'Unika lokala sidor i stor skala',
      },
      {
        description:
          'Informationssajt som hjälper svenskar med högt kolesterol att förstå sina värden och sänka LDL – plus landningssida för en iPhone-app.',
        fullDescription: [
          'Statisk Next.js-sajt med pillar/cluster-struktur: högt kolesterol, LDL-värden, symtom, kost och sänkning utan medicin.',
          'Alla fakta kopplade till källor (1177, Livsmedelsverket, ESC/EAS) och märkta med MedicalWebPage-schema.',
          'Deploy med GitHub Actions över SSH/rsync. Live sedan oktober 2026.',
        ],
        keyFeatures: 'Pillar/cluster-innehåll, app-landningssida, ljust och mörkt tema',
        challenges: 'Medicinskt innehåll som är korrekt och källhänvisat',
      },
      {
        description:
          'SEO för Byggtorg – en marknadsplats där husägare i Stockholm får offerter från hantverkare.',
        fullDescription: [
          'SEO-arkitektur och innehåll för en WordPress-sajt: tjänstesidor, prisguider, ROT-kalkylator och lokala sidor per stadsdel.',
          'Egna Python-skript mot WordPress REST API för att generera, granska och publicera sidor i batchar med backup.',
          'Teknisk audit i Search Console, sitemap, redirects och noindex för tunna sidor. Fakta kontrollerade mot Boverket och Skatteverket.',
        ],
        keyFeatures: 'Lokala landningssidor, prisguider, ROT-kalkylator, partnerformulär',
        challenges: 'Många lokala sidor utan att bli doorway-sidor',
      },
      {
        description:
          'Redesignkoncept för en modellfotografs webbplats i Stockholm – testuppdrag för en svensk webbyrå.',
        fullDescription: [
          'Child theme till WordPress-temat Powder; 12 sidor ombyggda med originalinnehåll i ett nytt designsystem.',
          'Helskärmsvideo i hero, bildkarusell, masonry-galleri med lightbox, priskort och ny mobilmeny.',
          'Alla sidor byggda med Gutenberg-block så att kunden själv kan ändra text och bilder.',
        ],
        keyFeatures: 'Videohero, galleri med lightbox, priskort, redigerbart i Gutenberg',
        challenges: 'Nytt designsystem utan att tappa originalinnehållet',
      },
      {
        description:
          'Webbshop för prefabricerade armeringsprodukter med användarautentisering och responsiv design.',
        fullDescription: [
          'Webbshop utvecklad för försäljning av prefabricerade armeringsprodukter för grundläggningsprojekt i Sverige.',
          'Implementerade produktkatalog, användarautentisering och administrationsfunktioner.',
        ],
        keyFeatures:
          'Produktkatalog, användarregistrering, inloggning, adminfunktioner och responsiv design.',
        challenges:
          'Skalbar frontendarkitektur med återanvändbara komponenter och tydlig struktur.',
      },
      {
        description: 'REST API för hantering av användare, inlägg och kommentarer.',
        fullDescription: [
          'Utvecklade ett REST API med autentisering, användare, inlägg och kommentarer.',
          'Implementerade JWT-autentisering, CRUD-operationer, validering och API-dokumentation.',
        ],
        keyFeatures:
          'JWT-autentisering, CRUD-operationer, användare, inlägg, kommentarer och Swagger-dokumentation.',
        challenges:
          'Modulär arkitektur och tydlig separation av ansvar mellan API-komponenter.',
      },
      {
        description: 'REST API byggt med Express och TypeScript.',
        fullDescription: [
          'Utvecklade ett REST API med fokus på routing, middleware och datavalidering.',
          'Arbetade med typning, CRUD-operationer och strukturering av backendlogik.',
        ],
        keyFeatures:
          'Arbetade med CRUD-operationer, datavalidering och typsäker backendutveckling.',
      },
    ],
  },
  skills: {
    label: 'TEKNIKSTACK',
    title: 'Vad jag använder',
    categories: ['Frontend', 'Backend', 'Verktyg & DevOps', 'Design & Arbetsflöde'],
    descriptions: {
      React: 'För snabba, interaktiva gränssnitt',
      'Next.js': 'SEO-vänliga webbappar med SSR',
      'React Native': 'Mobilappar för iOS och Android',
      TypeScript: 'Typad JavaScript för säkrare kod',
      JavaScript: 'Kärnlogik för webben & DOM-hantering',
      HTML5: 'Semantisk markup & tillgänglighet',
      'CSS3 / SCSS': 'Responsiv styling & layouter',
      'Node.js': 'JavaScript-runtime för servrar',
      NestJS: 'Skalbara applikationer på serversidan',
      Express: 'Minimalt ramverk för API:er',
      MongoDB: 'Flexibel NoSQL-databas',
      'Git & GitHub': 'Versionshantering och samarbete',
      Docker: 'Containrar för isolerade miljöer',
      Postman: 'API-testning och dokumentation',
      Figma: 'Vektorgrafik och prototyper',
      Notion: 'Planering och dokumentation på ett ställe',
    },
  },
  achievements: {
    label: 'PORTFÖLJFAKTA',
    title: 'Professionellt fokus',
    cards: [
      { value: '2015', caption: 'Kodar sedan' },
      { value: 'Live', caption: 'SaaS i produktion (ByggExp)' },
      { value: '3', caption: 'Integrerade appar: webb · admin · mobil' },
    ],
  },
  experience: {
    label: 'EXPERTIS',
    title: 'Fördjupade färdigheter',
    items: [
      {
        role: 'Mjukvaruarkitektur',
        company:
          'SOLID-principer, Clean Architecture, CQRS, separation av ansvar, Dependency Injection',
        tag: 'Skalbar design',
      },
      {
        role: 'Backend-utveckling',
        company:
          'REST API-design, JWT-autentisering, DTO & validering, Repository-mönster, Guards, Pipes, Interceptors',
        tag: 'Säker & robust',
      },
      {
        role: 'Frontend-gränssnitt',
        company:
          'Komponentbaserad arkitektur, separation av UI/logik/data, återanvändbara UI-komponenter',
        tag: 'Interaktiv',
      },
      {
        role: 'Webbstandarder & kvalitet',
        company:
          'Semantisk HTML & tillgänglighet (a11y), felhantering & loggning, grundläggande prestandahänsyn',
        tag: 'Hög kvalitet',
      },
    ],
  },
  about: {
    label: 'INFO',
    title: 'Allmän information',
    cards: [
      {
        title: 'Öppen för samarbete',
        role: 'Fullstack-utvecklare',
        text: 'Vill du samarbeta? Jag är tillgänglig för att diskutera roller inom backend, frontend och fullstack, samt frilansuppdrag. Mitt fokus ligger alltid på kodkvalitet, skalbar arkitektur och att hitta rätt lösning på komplexa problem.',
      },
      {
        title: 'Tekniskt fokus',
        role: 'Kärnprinciper',
        text: 'Den här portföljen visar mitt engagemang för moderna webbstandarder:\n- Semantisk & tillgänglig HTML\n- Modulär CSS/SCSS-arkitektur\n- Ren, underhållbar TypeScript-kod\n- Användarcentrerad UI/UX-design',
      },
    ],
  },
  footer: {
    label: 'Hör av dig',
    title: 'Låt oss ta kontakt',
    startProject: 'Starta projekt',
    downloadCv: 'Ladda ner CV',
    emailMe: 'Mejla mig',
    whatsapp: 'WhatsApp',
    linkCv: 'CV',
    aboutLine1: 'Hej, jag är Alexander.',
    aboutLine2: 'Jag trycker på knappar och\ngränssnitt uppstår.',
    menuTitle: 'Meny',
    followTitle: 'Följ',
    exploreTitle: 'Utforska',
    linkHome: 'Hem',
    linkWorks: 'Arbeten',
    linkAbout: 'Om mig',
    linkSkills: 'Färdigheter',
    linkFocus: 'Fokus',
    backToTop: 'Till toppen',
  },
}

const en: Dict = {
  meta: {
    title: 'Alexander Gerhard – Full-Stack Developer',
    description:
      'Alexander Gerhard – full-stack developer in Stockholm specialising in React, TypeScript and Node.js/NestJS. Building scalable web solutions.',
  },
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    resume: 'Download CV',
    switchTo: 'Svenska',
  },
  hero: {
    greeting: "Hi, I'm Alexander Gerhard.",
    subtitle: 'Turning ideas into scalable\nweb solutions.',
  },
  github: {
    locale: 'en-US',
    contributions: 'contributions in the last year',
  },
  bento: {
    mainTitle: {
      dark: 'Full-stack developer',
      light: 'with a love for clean UI and fast apps',
    },
    basedInLabel: 'Based In',
    basedInValue: 'Stockholm, Sweden',
    codingSinceLabel: 'Coding Since',
    codingSinceValue: 'June 2015',
    whatIDoPill: 'What I Do',
    whatIDoTitle: {
      dark: 'Focused on fast builds, clean code,',
      light: 'and smart design',
    },
    learningPill: 'Always Learning',
    learningExploring: 'Exploring',
    learningTopic: 'Next.js & Rust',
  },
  projects: {
    label: 'PROJECTS',
    title: 'Latest Works',
    viewGithub: 'View GitHub',
    readMore: 'Read more',
    techStack: 'Tech Stack',
    keyFeatures: 'Key Features',
    challenges: 'Challenges & Solutions',
    visitLive: 'Visit Live Website →',
    viewCode: 'View code →',
    typeLabel: 'Type',
    stackLabel: 'Stack',
    subtitles: [
      'Live SaaS platform',
      'Real-time admin panel',
      'Cross-platform app',
      'Prefab rebar, lead-gen',
      'Concrete slabs, lead-gen',
      'Roofing, local SEO',
      'Health info & app',
      'SEO for a contractor marketplace',
      'WordPress redesign',
      'E-commerce shop',
      'Backend service',
      'Backend service',
    ],
    items: [
      {
        description:
          'Presentation website for ByggExp – a platform for time reporting, project management and invoicing. Integrated with a mobile app and admin panel.',
        fullDescription: [
          'Built a landing page that serves as the entry point to a mobile app and admin panel for time reporting and project management.',
          'Implemented user registration with authentication and data storage (MongoDB).',
          'Focused on responsive design, performance and full-stack functionality.',
        ],
        keyFeatures: 'Product presentation, user registration and login',
        challenges: 'Scalable and modular frontend architecture',
      },
      {
        description:
          'Admin panel for ByggExp – managing projects, tasks, documentation and staff in real time. Integrated with the mobile app and backend.',
        fullDescription: [
          'Central control panel for construction companies, integrated with the mobile app, backend, database and accounting systems such as Visma and Fortnox.',
          'Brings projects, staff and operational data into one shared system for efficient administration and follow-up.',
        ],
        keyFeatures:
          'Automatic time reporting, tasks with reminders, real-time staff overview, photo documentation linked to projects, project and staff planning, invoices and quotes.',
      },
      {
        description:
          "Mobile app for time reporting, task management and project control. Integrated with ByggExp's admin panel and backend.",
        fullDescription: [
          'Mobile application built for construction companies with a focus on easy reporting and follow-up directly from the job site.',
          "Integrated with ByggExp's admin panel, backend and database to synchronise project, staff and operational data in real time.",
        ],
      },
      {
        description:
          'Swedish website for AGRY OÜ, a prefab reinforcement producer in Estonia – built to bring quote requests from all of Sweden.',
        fullDescription: [
          'Fast static Next.js site with a hero quote form where customers can upload a drawing or bending schedule (PHP mail handler).',
          'Rebar calculator, 10 product pages, 12 city pages and 24 guides with structured data and an SEO-driven content plan.',
          'Deployed automatically to shared hosting via GitHub Actions (FTPS). Live with 56 indexable pages.',
        ],
        keyFeatures: 'Quote form with file upload, rebar calculator, city and product pages',
        challenges: 'Reaching customers across Sweden with a static site and local SEO',
      },
      {
        description:
          'Lead-gen website for Agry Entreprenad AB, which casts concrete slabs and foundations in Stockholm and Dalarna.',
        fullDescription: [
          'Static Next.js site with a quote form (drawing upload) and three price and quantity calculators.',
          '8 service pages, 4 price pages, 36 local area pages and 42 blog articles with schema markup and internal linking.',
          'CI/CD with GitHub Actions to shared hosting. Live with 103 pages in the sitemap.',
        ],
        keyFeatures: 'Quote form, price calculators, local pages and blog',
        challenges: 'Scaling local pages without duplicate content',
      },
      {
        description:
          'Website for Geal Entreprenad AB – roof replacement and renovation for houses in Stockholm and Dalarna.',
        fullDescription: [
          'Fast static HTML/CSS/JavaScript site with service pages, articles and a roof replacement calculator.',
          '37 local “roofer in [area]” pages, kept unique and validated before each deploy.',
          'PHP quote form that logs every lead. Deployed via GitHub Actions. Live with 89 pages in the sitemap.',
        ],
        keyFeatures: 'Roof replacement calculator, local pages, quote form with lead log',
        challenges: 'Unique local pages at scale',
      },
      {
        description:
          'Health info site that helps Swedes with high cholesterol understand their values and lower LDL – plus a landing page for an iPhone app.',
        fullDescription: [
          'Static Next.js site with a pillar/cluster structure: high cholesterol, LDL values, symptoms, diet and lowering without medication.',
          'All facts tied to cited sources (1177, Livsmedelsverket, ESC/EAS) and marked up with MedicalWebPage schema.',
          'Deployed with GitHub Actions over SSH/rsync. Live since October 2026.',
        ],
        keyFeatures: 'Pillar/cluster content, app landing page, light and dark theme',
        challenges: 'Medical content that is accurate and sourced',
      },
      {
        description:
          'SEO for Byggtorg – a marketplace where homeowners in Stockholm get quotes from contractors.',
        fullDescription: [
          'SEO architecture and content for a WordPress site: service pages, price guides, a ROT calculator and local pages per district.',
          'Custom Python scripts on the WordPress REST API to generate, review and publish pages in batches with backups.',
          'Technical audit in Search Console, sitemap, redirects and noindex for thin pages. Facts checked against Boverket and Skatteverket.',
        ],
        keyFeatures: 'Local landing pages, price guides, ROT calculator, partner form',
        challenges: 'Many local pages without turning into doorway pages',
      },
      {
        description:
          "Redesign concept of a Stockholm model photographer's website – a test assignment for a Swedish web agency.",
        fullDescription: [
          'Child theme for the Powder WordPress theme; 12 pages rebuilt with the original content in a new design system.',
          'Full-screen video hero, image carousel, masonry gallery with lightbox, price cards and a new mobile menu.',
          'All pages use standard Gutenberg blocks, so the client can edit text and photos in the editor.',
        ],
        keyFeatures: 'Video hero, gallery with lightbox, price cards, editable in Gutenberg',
        challenges: 'A new design system without losing the original content',
      },
      {
        description:
          'Webshop for prefabricated reinforcement products with user authentication and responsive design.',
        fullDescription: [
          'Webshop built for selling prefabricated reinforcement products for foundation projects in Sweden.',
          'Implemented a product catalogue, user authentication and administration features.',
        ],
        keyFeatures:
          'Product catalogue, user registration, login, admin features and responsive design.',
        challenges:
          'Scalable frontend architecture with reusable components and a clear structure.',
      },
      {
        description: 'REST API for managing users, posts and comments.',
        fullDescription: [
          'Built a REST API with authentication, users, posts and comments.',
          'Implemented JWT authentication, CRUD operations, validation and API documentation.',
        ],
        keyFeatures:
          'JWT authentication, CRUD operations, users, posts, comments and Swagger documentation.',
        challenges:
          'Modular architecture and clear separation of concerns between API components.',
      },
      {
        description: 'REST API built with Express and TypeScript.',
        fullDescription: [
          'Built a REST API focused on routing, middleware and data validation.',
          'Worked with typing, CRUD operations and structuring backend logic.',
        ],
        keyFeatures:
          'Worked with CRUD operations, data validation and type-safe backend development.',
      },
    ],
  },
  skills: {
    label: 'TECH STACK',
    title: 'What I Use',
    categories: ['Frontend', 'Backend', 'Tools & DevOps', 'Design & Workflow'],
    descriptions: {
      React: 'For building fast, interactive UIs',
      'Next.js': 'SEO-friendly web apps with SSR',
      'React Native': 'Mobile apps for iOS and Android',
      TypeScript: 'Typed JavaScript for safer code',
      JavaScript: 'Core web logic & DOM manipulation',
      HTML5: 'Semantic markup & accessibility',
      'CSS3 / SCSS': 'Responsive styling & layouts',
      'Node.js': 'JavaScript runtime for servers',
      NestJS: 'Scalable server-side applications',
      Express: 'Minimal framework for APIs',
      MongoDB: 'Flexible NoSQL database system',
      'Git & GitHub': 'Version control and collaboration',
      Docker: 'Containers for isolated environments',
      Postman: 'API testing and documentation',
      Figma: 'Vector graphics and prototyping',
      Notion: 'Planning and docs in one place',
    },
  },
  achievements: {
    label: 'PORTFOLIO FACTS',
    title: 'Professional Focus',
    cards: [
      { value: '2015', caption: 'Coding since' },
      { value: 'Live', caption: 'SaaS in production (ByggExp)' },
      { value: '3', caption: 'Integrated apps: web · admin · mobile' },
    ],
  },
  experience: {
    label: 'EXPERTISE',
    title: 'Deep Dive Skills',
    items: [
      {
        role: 'Software Architecture',
        company:
          'SOLID principles, Clean Architecture, CQRS, Separation of concerns, Dependency Injection',
        tag: 'Scalable Design',
      },
      {
        role: 'Backend Engineering',
        company:
          'REST API design, JWT Auth, DTO & input validation, Repository pattern, Guards, Pipes, Interceptors',
        tag: 'Secure & Robust',
      },
      {
        role: 'Frontend Interfaces',
        company:
          'Component-based architecture, UI / logic / data separation, Reusable UI components',
        tag: 'Interactive',
      },
      {
        role: 'Web Standards & Quality',
        company:
          'Semantic HTML & accessibility (a11y), Error handling & logging, Basic performance considerations',
        tag: 'High Quality',
      },
    ],
  },
  about: {
    label: 'INFO',
    title: 'General Information',
    cards: [
      {
        title: 'Open for Cooperation',
        role: 'Fullstack Developer',
        text: "Interested in working together? I'm available to discuss backend, frontend, and full-stack roles, as well as freelance projects. My focus is always on code quality, scalable architecture, and finding the right solution for complex problems.",
      },
      {
        title: 'Technical Focus',
        role: 'Core Principles',
        text: 'This portfolio demonstrates my commitment to modern web standards:\n- Semantic & Accessible HTML\n- Modular CSS/SCSS Architecture\n- Clean, Maintainable TypeScript Code\n- User-Centric UI/UX Design',
      },
    ],
  },
  footer: {
    label: 'Get in Touch',
    title: "Let's Connect",
    startProject: 'Start Project',
    downloadCv: 'Download CV',
    emailMe: 'Email Me',
    whatsapp: 'WhatsApp',
    linkCv: 'CV',
    aboutLine1: "Hi, I'm Alexander.",
    aboutLine2: 'I press buttons and\ninterfaces happen.',
    menuTitle: 'Menu',
    followTitle: 'Follow',
    exploreTitle: 'Explore',
    linkHome: 'Home',
    linkWorks: 'Works',
    linkAbout: 'About',
    linkSkills: 'Skills',
    linkFocus: 'Focus',
    backToTop: 'Back to Top',
  },
}

export const dictionaries: Record<Lang, Dict> = { sv, en }

export function getDict(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[DEFAULT_LANG]
}
