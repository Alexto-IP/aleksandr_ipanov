export type Lang = 'ru' | 'en'

export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface ExperienceEntry {
  period: string
  duration: string
  company: string
  location?: string
  logo?: string
  note?: string
  role: string
  summary: string
  highlights: string[]
}

export interface EducationEntry {
  year: string
  degree: string
  school: string
  faculty: string
  href?: string
  hrefLabel?: string
}

export interface Project {
  name: string
  description: string
  href?: string
  demoHref?: string
}

export interface CertificateEntry {
  name: string
  issuer: string
  date: string
  href: string
}

export interface StatItem {
  value: string
  unit: string
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface NavItem {
  label: string
  href: string
}

export interface ContentBundle {
  meta: { title: string; description: string }
  nav: NavItem[]
  profile: {
    name: string
    role: string
    status: string
    experienceYears: string
    availability: string
    avatarUrl: string
    summary: string
  }
  hero: {
    eyebrow: string
    statusLabel: string
    experienceLabel: string
    availabilityLabel: string
    contactCta: string
    projectsCta: string
  }
  stats: StatItem[]
  sections: {
    experience: { eyebrow: string; title: string }
    projects: { eyebrow: string; title: string }
    skills: { eyebrow: string; title: string }
    education: { eyebrow: string; title: string }
    certificates: { eyebrow: string; title: string }
    contact: { eyebrow: string; title: string; intro: string }
  }
  experience: ExperienceEntry[]
  education: EducationEntry[]
  certificates: CertificateEntry[]
  certificatesLabels: { issued: string; view: string }
  skillGroups: SkillGroup[]
  projects: Project[]
  contacts: ContactLink[]
  projectLabels: { repo: string; demo: string }
  educationDefaultLink: string
  themeLabels: { toLight: string; toDark: string }
  footer: { tagline: string }
}

const avatarUrl = 'https://avatars.githubusercontent.com/u/107483811?v=4'

export const content: Record<Lang, ContentBundle> = {
  ru: {
    meta: {
      title: 'Александр Ипанов',
      description: 'Портфолио и резюме Александра Ипанова, Web-разработчика (React, TypeScript, Vue)',
    },
    nav: [
      { label: 'Опыт', href: '#experience' },
      { label: 'Проекты', href: '#projects' },
      { label: 'Навыки', href: '#skills' },
      { label: 'Образование', href: '#education' },
      { label: 'Сертификаты', href: '#certificates' },
      { label: 'Контакты', href: '#contact' },
    ],
    profile: {
      name: 'Александр Ипанов',
      role: 'Web-разработчик',
      status: 'Магистрант ИТМО · Web-разработка',
      experienceYears: '3+ года коммерческого опыта',
      availability: 'Открыт к предложениям',
      avatarUrl,
      summary:
        'Web-разработчик с 3+ годами коммерческого опыта: специализируюсь на frontend (React, TypeScript, Vue), начинал с backend на Python и FastAPI. Довожу фичи до конца — от макетов в Figma до продакшн-интерфейса и интеграции с API для данных в реальном времени. Учусь в магистратуре ИТМО и всегда рад задачам на стыке frontend и backend.',
    },
    hero: {
      eyebrow: '// паспорт специалиста',
      statusLabel: 'СТАТУС',
      experienceLabel: 'ОПЫТ',
      availabilityLabel: 'ДОСТУПНОСТЬ',
      contactCta: 'Связаться',
      projectsCta: 'Смотреть проекты',
    },
    stats: [
      { value: '3+', unit: 'года', label: 'коммерческого опыта' },
      { value: '40', unit: '%', label: 'ускорение разработки новых экранов за счёт переиспользуемых компонентов' },
      { value: '10+', unit: 'устройств', label: 'стабильная работа приложения для управления оборудованием' },
      { value: '16', unit: '%', label: 'повышения продаж после внедрения ML рекомендаций' },
    ],
    sections: {
      experience: { eyebrow: '// компетенция', title: 'Опыт работы' },
      projects: { eyebrow: '// репозитории', title: 'Проекты' },
      skills: { eyebrow: '// стек', title: 'Навыки' },
      education: { eyebrow: '// образование', title: 'Образование и квалификация' },
      certificates: { eyebrow: '// сертификаты', title: 'Лицензии и сертификаты' },
      contact: { eyebrow: '// на связи', title: 'Контакты', intro: 'Открыт к предложениям' },
    },
    experience: [
      {
        period: 'Август 2024 — настоящее время',
        duration: '2+ года',
        company: 'ООО «Эмитех»',
        logo: 'logos/emitech.png',
        location: 'Удалённо',
        role: 'Web Software Engineer',
        summary:
          'Вырос внутри компании от поддержки Vue.js-фронтенда до руководства полной переписью приложения на React: брал всё более сложные задачи и всё больше ответственности. Работаю в команде примерно из 10 человек.',
        highlights: [
          'Веб-приложение для управления сканером стопы, помогающим подбирать обувь (Vue.js): интерактивный интерфейс без перезагрузок страницы, интеграция с backend API для управления оборудованием в реальном времени',
          'Перенёс приложение на React по макетам из Figma и собрал библиотеку переиспользуемых UI-компонентов на MUI — время разработки новых экранов сократилось на 40%',
          'Подключил фронтенд к API для обновления данных в реальном времени — стабильная работа на 10+ подключённых устройствах',
        ],
      },
      {
        period: 'Ноябрь 2023 — Август 2024',
        duration: '10 месяцев',
        company: 'Aventra',
        note: 'контрактная разработка',
        role: 'Web-разработчик',
        summary:
          'Разработал внутреннюю админ-панель для управления клиентами, заказами и обращениями в поддержку: адаптивный интерфейс на HTML и Jinja поверх FastAPI-бэкенда.',
        highlights: [
          'Спроектировал и реализовал 5 новых страниц панели',
          'Расширил backend: дописал недостающие API-маршруты, необходимые для работы панели',
          'Инструментом пользуются 80% команды — он упростил ежедневные процессы и сократил ручную работу с клиентами и заказами',
        ],
      },
      {
        period: 'Июнь 2023 — Ноябрь 2023',
        duration: '6 месяцев',
        company: 'FND',
        logo: 'logos/fnd.png',
        location: 'Санкт-Петербург',
        role: 'Python-разработчик',
        summary:
          'Разработал backend интернет-магазина на Python и FastAPI: REST API для пользовательских и административных функций, база данных и система ML-рекомендаций.',
        highlights: [
          'Спроектировал базу данных на SQLite с полным CRUD для товаров, заказов и пользователей',
          'Внедрил ML-систему рекомендаций, формирующую персональные подборки товаров на основе поведения пользователей',
          '156 активных пользователей и рост продаж на 16% после запуска рекомендаций',
        ],
      },
    ],
    education: [
      {
        year: '2027 (в процессе)',
        degree: 'Магистр',
        school: 'Университет ИТМО, Санкт-Петербург',
        faculty: 'Факультет программной инженерии и компьютерной техники, Веб-разработка',
        href: 'https://se.ifmo.ru/~s507218/',
        hrefLabel: 'Учебные проекты →',
      },
      {
        year: '2025',
        degree: 'Бакалавр',
        school: 'СПбГУПТД, Санкт-Петербург',
        faculty: 'Институт информационных технологий и автоматизации, Прикладная информатика',
      },
      {
        year: '2023',
        degree: 'Профессиональная переподготовка',
        school: 'СПбГУПТД',
        faculty: 'Администратор информационных систем',
      },
    ],
    certificates: [
      {
        name: 'Claude Code in action',
        issuer: 'Anthropic',
        date: 'Октябрь 2026',
        href: 'https://academy.claude.com/verify/057aea460bc530f4aceb36c5980efd93',
      },
      {
        name: 'CS302: Software Engineering',
        issuer: 'Saylor University',
        date: 'Сентябрь 2026',
        href: 'https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1790584383/0584225504AI.pdf',
      },
      {
        name: 'Elements of AI',
        issuer: 'Университет Хельсинки',
        date: 'Сентябрь 2026',
        href: 'https://certificates.mooc.fi/validate/72ljl38irsa',
      },
      {
        name: 'Web Designing Basics',
        issuer: 'Simplilearn',
        date: 'Сентябрь 2026',
        href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MjU3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTA3NjY0MTdfMTExMjkxMTFfMTc5MDA2MTYyMDE5MS5wbmciLCJ1c2VybmFtZSI6IkFsZWtzYW5kciBJcGFub3YifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F8248%2FWeb-Designing-Basics%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1645746743818324425&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD8kyjwqLqixyMUuyrytKTUstKsrMS49PKsovL04tsvXJzMtOTfHMAwA7M865QQAAAA%3D%3D',
      },
      {
        name: 'Progressive Web Apps (PWA)',
        issuer: 'Cursa',
        date: 'Октябрь 2025',
        href: 'https://cursacertificates.s3.amazonaws.com/cert_020882bb328061e293543347640e5c3d.png?time=1791216939',
      },
    ],
    skillGroups: [
      { title: 'Языки и фреймворки', items: ['JavaScript', 'TypeScript', 'React', 'Redux Toolkit', 'Vue', 'React Testing Library'] },
      { title: 'UI и вёрстка', items: ['HTML5', 'CSS3', 'MUI', 'Bootstrap', 'Jinja', 'Figma', 'Адаптивная вёрстка'] },
      { title: 'Backend и данные', items: ['Python', 'FastAPI', 'Node.js', 'Express', 'SQLite', 'REST API'] },
      { title: 'Инструменты', items: ['Git', 'GitLab', 'GitHub', 'GitHub Actions', 'CI/CD', 'npm', 'Vite', 'Docker'] },
    ],
    projects: [
      {
        name: 'PWA Performance & UX Research',
        description: 'Магистерская диссертация: исследование производительности и UX прогрессивных веб-приложений (PWA) в условиях ограниченной сети. Backend на Node.js/Express и React-фронтенд, созданные для исследования.',
      },
      {
        name: 'ITMO Portfolio',
        description: 'Лендинг с учебными проектами магистратуры',
        demoHref: 'https://se.ifmo.ru/~s507218/',
      },
      {
        name: 'quizmaster',
        description: 'Pet-проект платформы для веб-аналитики.',
        href: 'https://github.com/Alexto-IP/quizmaster',
        demoHref: 'https://alexto-ip.github.io/quizmaster',
      },
      {
        name: 'Moon courier crisis',
        description: 'Web-игра симулятор доставки на луне',
        href: 'https://github.com/Alexto-IP/Moon-Courier-Crisis',
        demoHref: 'https://alexto-ip.github.io/Moon-Courier-Crisis/',
      },
      {
        name: 'aspectus-web',
        description: 'Фронтенд веб-приложения Aspectus.',
        href: 'https://github.com/Alexto-IP/aspectus-web',
        demoHref: 'https://alexto-ip.github.io/aspectus-web',
      },
      {
        name: 'REST-api-with-rec',
        description: 'REST API с системой рекомендаций для пользователей на SQLite.',
        href: 'https://github.com/Alexto-IP/REST-api-with-rec',
      },
      {
        name: 'tgbot_shop_py',
        description: 'Telegram-бот для магазина одежды на python-telebot и SQLite.',
        href: 'https://github.com/Alexto-IP/tgbot_shop_py',
      },
    ],
    contacts: [
      { label: 'Email', value: 'alex.ipanov@icloud.com', href: 'mailto:alex.ipanov@icloud.com' },
      { label: 'Telegram', value: '@tired_sasha', href: 'https://t.me/tired_sasha' },
      { label: 'LinkedIn', value: 'linkedin.com/in/aleksandr-ipanov', href: 'https://www.linkedin.com/in/aleksandr-ipanov' },
      { label: 'GitHub', value: 'github.com/Alexto-IP', href: 'https://github.com/Alexto-IP' },
    ],
    projectLabels: { repo: 'Репозиторий', demo: 'Live-демо' },
    certificatesLabels: { issued: 'Выдан', view: 'Посмотреть сертификат' },
    educationDefaultLink: 'Подробнее →',
    themeLabels: { toLight: 'Включить светлую тему', toDark: 'Включить тёмную тему' },
    footer: { tagline: 'сделано на React + TypeScript + Tailwind' },
  },
  en: {
    meta: {
      title: 'Aleksandr Ipanov',
      description: 'Portfolio and resume of Aleksandr Ipanov, Web Software Engineer (React, TypeScript, Vue)',
    },
    nav: [
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Education', href: '#education' },
      { label: 'Certificates', href: '#certificates' },
      { label: 'Contact', href: '#contact' },
    ],
    profile: {
      name: 'Aleksandr Ipanov',
      role: 'Web Developer',
      status: "ITMO University — Master's student · Web Development",
      experienceYears: '3+ years of commercial experience',
      availability: 'Open to offers',
      avatarUrl,
      summary:
        'Web software engineer with 3+ years of commercial experience, specializing in frontend (React, TypeScript, Vue) after starting on the Python/FastAPI backend. I build complete features end to end — from turning Figma designs into production UI to integrating with backend APIs for real-time data. Pursuing a Master\'s at ITMO University and always on the lookout for interesting work at the intersection of frontend and backend.',
    },
    hero: {
      eyebrow: '// specialist profile',
      statusLabel: 'STATUS',
      experienceLabel: 'EXPERIENCE',
      availabilityLabel: 'AVAILABILITY',
      contactCta: 'Get in touch',
      projectsCta: 'View projects',
    },
    stats: [
      { value: '3+', unit: 'yrs', label: 'of commercial experience' },
      { value: '40', unit: '%', label: 'faster screen development thanks to reusable components' },
      { value: '10+', unit: 'devices', label: 'stable equipment-management app performance' },
      { value: '16', unit: '%', label: 'sales increase after shipping ML recommendations' },
    ],
    sections: {
      experience: { eyebrow: '// track record', title: 'Work Experience' },
      projects: { eyebrow: '// repositories', title: 'Projects' },
      skills: { eyebrow: '// stack', title: 'Skills' },
      education: { eyebrow: '// education', title: 'Education & Qualifications' },
      certificates: { eyebrow: '// certifications', title: 'Licenses & Certifications' },
      contact: { eyebrow: '// get in touch', title: 'Contact', intro: 'Open to offers' },
    },
    experience: [
      {
        period: 'August 2024 — Present',
        duration: '2+ years',
        company: 'Emitech LLC',
        logo: 'logos/emitech.png',
        location: 'Remote',
        role: 'Web Software Engineer',
        summary:
          'Grew within the company from supporting a Vue.js frontend to leading its full rebuild in React, taking on increasingly complex tasks and greater ownership over time. Working in a team of about 10 people.',
        highlights: [
          'Web app for a scanner that measures feet and helps select shoes (Vue.js): interactive UI without page reloads, backend API integration for real-time equipment control',
          'Rebuilt the app in React from Figma designs and assembled a reusable UI component library on MUI — cut new-screen development time by 40%',
          'Integrated the frontend with APIs for real-time data updates — stable performance across 10+ connected devices',
        ],
      },
      {
        period: 'November 2023 — August 2024',
        duration: '10 months',
        company: 'Aventra',
        note: 'contract development',
        role: 'Web Developer',
        summary:
          'Developed a responsive internal admin panel for managing clients, orders, and support requests, built with HTML and Jinja templates on a FastAPI backend.',
        highlights: [
          'Designed and implemented 5 new pages of the panel',
          'Extended the backend by building out the missing API routes the panel relied on',
          'Adopted by 80% of the team, streamlining day-to-day workflows and reducing manual effort in client and order management',
        ],
      },
      {
        period: 'June 2023 — November 2023',
        duration: '6 months',
        company: 'FND',
        logo: 'logos/fnd.png',
        location: 'Saint Petersburg',
        role: 'Python Developer',
        summary:
          'Built the backend of an online store with Python and FastAPI: REST API for customer and admin features, a database, and an ML recommendation system.',
        highlights: [
          'Designed an SQLite database with full CRUD for products, orders, and users',
          'Integrated an ML recommendation system generating personalized product suggestions from user behavior',
          '156 active users and a 16% sales increase after launching the recommendations',
        ],
      },
    ],
    education: [
      {
        year: '2027 (in progress)',
        degree: "Master's degree",
        school: 'ITMO University, Saint Petersburg',
        faculty: 'Faculty of Software Engineering and Computer Systems, Web Development',
        href: 'https://se.ifmo.ru/~s507218/',
        hrefLabel: 'Coursework projects →',
      },
      {
        year: '2025',
        degree: "Bachelor's degree",
        school: 'SPbSUITD, Saint Petersburg',
        faculty: 'Institute of Information Technologies and Automation, Applied Informatics',
      },
      {
        year: '2023',
        degree: 'Professional retraining diploma',
        school: 'SPbSUITD',
        faculty: 'Information Systems Administrator',
      },
    ],
    certificates: [
      {
        name: 'Claude Code in action',
        issuer: 'Anthropic',
        date: 'October 2026',
        href: 'https://academy.claude.com/verify/057aea460bc530f4aceb36c5980efd93',
      },
      {
        name: 'CS302: Software Engineering',
        issuer: 'Saylor University',
        date: 'September 2026',
        href: 'https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1790584383/0584225504AI.pdf',
      },
      {
        name: 'Elements of AI',
        issuer: 'University of Helsinki',
        date: 'September 2026',
        href: 'https://certificates.mooc.fi/validate/72ljl38irsa',
      },
      {
        name: 'Web Designing Basics',
        issuer: 'Simplilearn',
        date: 'September 2026',
        href: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MjU3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTA3NjY0MTdfMTExMjkxMTFfMTc5MDA2MTYyMDE5MS5wbmciLCJ1c2VybmFtZSI6IkFsZWtzYW5kciBJcGFub3YifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F8248%2FWeb-Designing-Basics%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1645746743818324425&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD8kyjwqLqixyMUuyrytKTUstKsrMS49PKsovL04tsvXJzMtOTfHMAwA7M865QQAAAA%3D%3D',
      },
      {
        name: 'Progressive Web Apps (PWA)',
        issuer: 'Cursa',
        date: 'October 2025',
        href: 'https://cursacertificates.s3.amazonaws.com/cert_020882bb328061e293543347640e5c3d.png?time=1791216939',
      },
    ],
    skillGroups: [
      { title: 'Languages & Frameworks', items: ['JavaScript', 'TypeScript', 'React', 'Redux Toolkit', 'Vue', 'React Testing Library'] },
      { title: 'UI & Markup', items: ['HTML5', 'CSS3', 'MUI', 'Bootstrap', 'Jinja', 'Figma', 'Responsive Design'] },
      { title: 'Backend & Data', items: ['Python', 'FastAPI', 'Node.js', 'Express', 'SQLite', 'REST API'] },
      { title: 'Tools', items: ['Git', 'GitLab', 'GitHub', 'GitHub Actions', 'CI/CD', 'npm', 'Vite', 'Docker'] },
    ],
    projects: [
      {
        name: 'PWA Performance & UX Research',
        description: "Master's thesis: research into the performance and UX of Progressive Web Apps (PWA) under constrained network conditions, with a Node.js/Express backend and a React frontend built for the study.",
      },
      {
        name: 'ITMO Portfolio',
        description: "Landing page with master's-program coursework projects",
        demoHref: 'https://se.ifmo.ru/~s507218/',
      },
      {
        name: 'quizmaster',
        description: 'Pet project — a web analytics quiz platform.',
        href: 'https://github.com/Alexto-IP/quizmaster',
        demoHref: 'https://alexto-ip.github.io/quizmaster',
      },
      {
        name: 'Moon courier crisis',
        description: 'Web-game simulator of Moon delivery',
        href: 'https://github.com/Alexto-IP/Moon-Courier-Crisis',
        demoHref: 'https://alexto-ip.github.io/Moon-Courier-Crisis/',
      },
      {
        name: 'aspectus-web',
        description: 'Frontend of the Aspectus web application.',
        href: 'https://github.com/Alexto-IP/aspectus-web',
        demoHref: 'https://alexto-ip.github.io/aspectus-web',
      },
      {
        name: 'REST-api-with-rec',
        description: 'REST API with a user recommendation system on SQLite.',
        href: 'https://github.com/Alexto-IP/REST-api-with-rec',
      },
      {
        name: 'tgbot_shop_py',
        description: 'Telegram bot for a clothing store built with python-telebot and SQLite.',
        href: 'https://github.com/Alexto-IP/tgbot_shop_py',
      },
    ],
    contacts: [
      { label: 'Email', value: 'alex.ipanov@icloud.com', href: 'mailto:alex.ipanov@icloud.com' },
      { label: 'Telegram', value: '@tired_sasha', href: 'https://t.me/tired_sasha' },
      { label: 'LinkedIn', value: 'linkedin.com/in/aleksandr-ipanov', href: 'https://www.linkedin.com/in/aleksandr-ipanov' },
      { label: 'GitHub', value: 'github.com/Alexto-IP', href: 'https://github.com/Alexto-IP' },
    ],
    projectLabels: { repo: 'Repository', demo: 'Live demo' },
    certificatesLabels: { issued: 'Issued', view: 'View certificate' },
    educationDefaultLink: 'Learn more →',
    themeLabels: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    footer: { tagline: 'built with React + TypeScript + Tailwind' },
  },
}
