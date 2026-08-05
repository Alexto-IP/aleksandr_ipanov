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
  location: string
  role: string
  summary: string
  stack: string[]
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
  stack: string[]
  href?: string
  demoHref?: string
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
    contact: { eyebrow: string; title: string; intro: string }
  }
  experience: ExperienceEntry[]
  education: EducationEntry[]
  skillGroups: SkillGroup[]
  projects: Project[]
  contacts: ContactLink[]
  projectLabels: { repo: string; demo: string }
  educationDefaultLink: string
  footer: { tagline: string }
}

const avatarUrl = 'https://avatars.githubusercontent.com/u/107483811?v=4'

export const content: Record<Lang, ContentBundle> = {
  ru: {
    meta: {
      title: 'Александр Ипанов',
      description: 'Портфолио и резюме Александра Ипанова, Frontend-разработчика (React, Vue, TypeScript)',
    },
    nav: [
      { label: 'Опыт', href: '#experience' },
      { label: 'Проекты', href: '#projects' },
      { label: 'Навыки', href: '#skills' },
      { label: 'Образование', href: '#education' },
      { label: 'Контакты', href: '#contact' },
    ],
    profile: {
      name: 'Александр Ипанов',
      role: 'Web-разработчик',
      status: 'Магистрант ИТМО · Web-разработка',
      experienceYears: '2,5+ года коммерческого опыта',
      availability: 'Открыт к предложениям',
      avatarUrl,
      summary:
        'Разрабатываю интерфейсы на React и Vue для промышленных и продуктовых задач: от систем управления оборудованием в реальном времени до внутренних админ-панелей. Учусь в магистратуре ИТМО по веб-разработке. Ищу продуктовую команду, где важны качество кода и внимание к деталям.',
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
      { value: '2,5', unit: 'года', label: 'коммерческого опыта' },
      { value: '40', unit: '%', label: 'ускорение разработки новых экранов за счёт переиспользуемых компонентов' },
      { value: '10+', unit: 'устройств', label: 'стабильная работа приложения для управления оборудованием' },
      { value: '16', unit: '%', label: 'повышения продаж после внедрения ML рекомендаций' },
    ],
    sections: {
      experience: { eyebrow: '// компетенция', title: 'Опыт работы' },
      projects: { eyebrow: '// репозитории', title: 'Проекты' },
      skills: { eyebrow: '// стек', title: 'Навыки' },
      education: { eyebrow: '// образование', title: 'Образование и квалификация' },
      contact: { eyebrow: '// на связи', title: 'Контакты', intro: 'Открыт к предложениям' },
    },
    experience: [
      {
        period: 'Август 2024 — настоящее время',
        duration: '2+ года',
        company: 'ООО «Эмитех»',
        location: 'Санкт-Петербург',
        role: 'Frontend-разработчик',
        summary:
          'Развивался внутри компании от поддержки базового интерфейса на Vue до разработки продвинутого приложения на React и системы администрирования — с ростом сложности задач и зоны ответственности.',
        stack: ['JavaScript', 'TypeScript', 'React', 'Vue', 'MUI', 'Bootstrap', 'REST API', 'Figma', 'GitLab'],
        highlights: [
          'Веб-приложение для управления сканером (Vue): интерактивный UI без перезагрузки страницы, интеграция с backend API для управления оборудованием',
          'Веб-приложение для управления сканером (React): интерфейс по макетам из Figma, переиспользуемые UI-компоненты на MUI, данные в реальном времени — сократил время разработки новых экранов на 40%, стабильная работа на 10+ устройствах',
          'Внутренняя система администрирования: статические и динамические страницы, адаптивная вёрстка, 5 новых страниц',
        ],
      },
      {
        period: 'Февраль 2024 — Август 2024',
        duration: '7 месяцев',
        company: 'FND',
        location: 'Санкт-Петербург',
        role: 'Python-разработчик',
        summary:
          'Разработал Telegram-бота для интернет-магазина с пользовательскими и административными функциями, спроектировал базу данных и внедрил систему рекомендаций.',
        stack: ['Python', 'telebot', 'SQLite', 'SVD', 'Surprise'],
        highlights: [
          'Спроектировал базу данных на SQLite, реализовал CRUD-операции',
          'Внедрил ML-модель рекомендаций, подбирающую контент под пользователя',
          'Результат: 156 активных пользователей, рекомендации повысили продажи на 16%',
        ],
      },
    ],
    education: [
      {
        year: '2027 (ожидается)',
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
    skillGroups: [
      { title: 'Языки и фреймворки', items: ['JavaScript', 'TypeScript', 'React', 'Vue', 'ES6'] },
      { title: 'UI и вёрстка', items: ['HTML5', 'CSS3', 'MUI', 'Bootstrap', 'Адаптивная вёрстка', 'UX/UI'] },
      { title: 'Инструменты', items: ['Vite', 'npm', 'Git', 'GitHub', 'GitLab', 'Figma'] },
      { title: 'Интеграции и данные', items: ['REST API', 'JSON', 'Python', 'SQLite'] },
    ],
    projects: [
      {
        name: 'ITMO Portfolio',
        description: 'Лендинг с учебными проектами магистратуры',
        stack: ['JavaScript'],
        demoHref: 'https://se.ifmo.ru/~s507218/',
      },
      {
        name: 'quizmaster',
        description: 'Pet-проект платформы для веб-аналитики.',
        stack: ['TypeScript'],
        href: 'https://github.com/Alexto-IP/quizmaster',
        demoHref: 'https://alexto-ip.github.io/quizmaster',
      },
      {
        name: 'aspectus-web',
        description: 'Фронтенд веб-приложения Aspectus.',
        stack: ['JavaScript'],
        href: 'https://github.com/Alexto-IP/aspectus-web',
        demoHref: 'https://alexto-ip.github.io/aspectus-web',
      },
      {
        name: 'REST-api-with-rec',
        description: 'REST API с системой рекомендаций для пользователей на SQLite.',
        stack: ['Python'],
        href: 'https://github.com/Alexto-IP/REST-api-with-rec',
      },
      {
        name: 'tgbot_shop_py',
        description: 'Telegram-бот для магазина одежды на python-telebot и SQLite.',
        stack: ['Python'],
        href: 'https://github.com/Alexto-IP/tgbot_shop_py',
      },
    ],
    contacts: [
      { label: 'Email', value: 'alex.ipanov@icloud.com', href: 'mailto:alex.ipanov@icloud.com' },
      { label: 'Telegram', value: '@tired_sasha', href: 'https://t.me/tired_sasha' },
      {
        label: 'hh.ru',
        value: 'Резюме на hh.ru',
        href: 'https://hh.ru/resume/8a7261f2ff10162ad50039ed1f6d6a6c425241?hhtmFrom=main',
      },
      { label: 'GitHub', value: 'github.com/Alexto-IP', href: 'https://github.com/Alexto-IP' },
    ],
    projectLabels: { repo: 'Репозиторий', demo: 'Live-демо' },
    educationDefaultLink: 'Подробнее →',
    footer: { tagline: 'сделано на React + TypeScript + Tailwind' },
  },
  en: {
    meta: {
      title: 'Aleksandr Ipanov',
      description: 'Portfolio and resume of Aleksandr Ipanov, Frontend Developer (React, Vue, TypeScript)',
    },
    nav: [
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' },
    ],
    profile: {
      name: 'Aleksandr Ipanov',
      role: 'Web Developer',
      status: "ITMO University — Master's student · Web Development",
      experienceYears: '2.5+ years of commercial experience',
      availability: 'Open to offers',
      avatarUrl,
      summary:
        'I build interfaces with React and Vue for industrial and product tasks — from real-time equipment management systems to internal admin panels. Currently pursuing a master\'s degree in web development at ITMO University. Looking for a product team that values code quality and attention to detail.',
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
      { value: '2.5', unit: 'yrs', label: 'of commercial experience' },
      { value: '40', unit: '%', label: 'faster screen development thanks to reusable components' },
      { value: '10+', unit: 'devices', label: 'stable equipment-management app performance' },
      { value: '16', unit: '%', label: 'sales increase after shipping ML recommendations' },
    ],
    sections: {
      experience: { eyebrow: '// track record', title: 'Work Experience' },
      projects: { eyebrow: '// repositories', title: 'Projects' },
      skills: { eyebrow: '// stack', title: 'Skills' },
      education: { eyebrow: '// education', title: 'Education & Qualifications' },
      contact: { eyebrow: '// get in touch', title: 'Contact', intro: 'Open to offers' },
    },
    experience: [
      {
        period: 'August 2024 — Present',
        duration: '2+ years',
        company: 'Emitech LLC',
        location: 'Saint Petersburg',
        role: 'Frontend Developer',
        summary:
          'Grew within the company from maintaining a basic Vue interface to building an advanced React application and an admin system — as task complexity and scope of responsibility increased.',
        stack: ['JavaScript', 'TypeScript', 'React', 'Vue', 'MUI', 'Bootstrap', 'REST API', 'Figma', 'GitLab'],
        highlights: [
          'Scanner management web app (Vue): interactive UI without page reloads, backend API integration for equipment control',
          'Scanner management web app (React): interface built from Figma designs, reusable UI components on MUI, real-time data — cut new-screen development time by 40%, stable performance across 10+ devices',
          'Internal admin system: static and dynamic pages, responsive layout, 5 new pages shipped',
        ],
      },
      {
        period: 'February 2024 — August 2024',
        duration: '7 months',
        company: 'FND',
        location: 'Saint Petersburg',
        role: 'Python Developer',
        summary:
          'Built a Telegram bot for an online store with user- and admin-facing features, designed the database, and shipped a recommendation system.',
        stack: ['Python', 'telebot', 'SQLite', 'SVD', 'Surprise'],
        highlights: [
          'Designed an SQLite database and implemented CRUD operations',
          'Shipped an ML-based recommendation model tailored to each user',
          'Result: 156 active users, recommendations boosted sales by 16%',
        ],
      },
    ],
    education: [
      {
        year: '2027 (expected)',
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
    skillGroups: [
      { title: 'Languages & Frameworks', items: ['JavaScript', 'TypeScript', 'React', 'Vue', 'ES6'] },
      { title: 'UI & Markup', items: ['HTML5', 'CSS3', 'MUI', 'Bootstrap', 'Responsive Design', 'UX/UI'] },
      { title: 'Tools', items: ['Vite', 'npm', 'Git', 'GitHub', 'GitLab', 'Figma'] },
      { title: 'Integrations & Data', items: ['REST API', 'JSON', 'Python', 'SQLite'] },
    ],
    projects: [
      {
        name: 'ITMO Portfolio',
        description: "Landing page with master's-program coursework projects",
        stack: ['JavaScript'],
        demoHref: 'https://se.ifmo.ru/~s507218/',
      },
      {
        name: 'quizmaster',
        description: 'Pet project — a web analytics quiz platform.',
        stack: ['TypeScript'],
        href: 'https://github.com/Alexto-IP/quizmaster',
        demoHref: 'https://alexto-ip.github.io/quizmaster',
      },
      {
        name: 'aspectus-web',
        description: 'Frontend of the Aspectus web application.',
        stack: ['JavaScript'],
        href: 'https://github.com/Alexto-IP/aspectus-web',
        demoHref: 'https://alexto-ip.github.io/aspectus-web',
      },
      {
        name: 'REST-api-with-rec',
        description: 'REST API with a user recommendation system on SQLite.',
        stack: ['Python'],
        href: 'https://github.com/Alexto-IP/REST-api-with-rec',
      },
      {
        name: 'tgbot_shop_py',
        description: 'Telegram bot for a clothing store built with python-telebot and SQLite.',
        stack: ['Python'],
        href: 'https://github.com/Alexto-IP/tgbot_shop_py',
      },
    ],
    contacts: [
      { label: 'Email', value: 'alex.ipanov@icloud.com', href: 'mailto:alex.ipanov@icloud.com' },
      { label: 'Telegram', value: '@tired_sasha', href: 'https://t.me/tired_sasha' },
      {
        label: 'hh.ru',
        value: 'Resume on hh.ru',
        href: 'https://hh.ru/resume/8a7261f2ff10162ad50039ed1f6d6a6c425241?hhtmFrom=main',
      },
      { label: 'GitHub', value: 'github.com/Alexto-IP', href: 'https://github.com/Alexto-IP' },
    ],
    projectLabels: { repo: 'Repository', demo: 'Live demo' },
    educationDefaultLink: 'Learn more →',
    footer: { tagline: 'built with React + TypeScript + Tailwind' },
  },
}
