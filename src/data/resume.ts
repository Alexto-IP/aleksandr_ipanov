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

export const profile = {
  name: 'Александр Ипанов',
  role: 'Web-разработчик',
  status: 'Магистрант ИТМО · Web-разработка',
  experienceYears: '2,5+ года коммерческого опыта',
  availability: 'Открыт к предложениям',
  avatarUrl: 'https://avatars.githubusercontent.com/u/107483811?v=4',
  summary:
    'Разрабатываю интерфейсы на React и Vue для промышленных и продуктовых задач: от систем управления оборудованием в реальном времени до внутренних админ-панелей. Учусь в магистратуре ИТМО по веб-разработке. Ищу продуктовую команду, где важны качество кода и внимание к деталям.',
}

export const contacts: ContactLink[] = [
  { label: 'Email', value: 'alex.ipanov@icloud.com', href: 'mailto:alex.ipanov@icloud.com' },
  { label: 'Telegram', value: '@tired_sasha', href: 'https://t.me/tired_sasha' },
  { label: 'hh.ru', value: 'Резюме на hh.ru', href: 'https://hh.ru/resume/8a7261f2ff10162ad50039ed1f6d6a6c425241?hhtmFrom=main' },
  { label: 'GitHub', value: 'github.com/Alexto-IP', href: 'https://github.com/Alexto-IP' },
 ]

export const stats = [
  { value: '2,5', unit: 'года', label: 'коммерческого опыта' },
  { value: '40', unit: '%', label: 'ускорение разработки новых экранов за счёт переиспользуемых компонентов' },
  { value: '10+', unit: 'устройств', label: 'стабильная работа приложения для управления оборудованием' },
  { value: '16', unit: '%', label: 'повышения продаж после внедрения ML рекомендаций' },
]

export const experience: ExperienceEntry[] = [
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
]

export const education: EducationEntry[] = [
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
]

export const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Языки и фреймворки', items: ['JavaScript', 'TypeScript', 'React', 'Vue', 'ES6'] },
  { title: 'UI и вёрстка', items: ['HTML5', 'CSS3', 'MUI', 'Bootstrap', 'Адаптивная вёрстка', 'UX/UI'] },
  { title: 'Инструменты', items: ['Vite', 'npm', 'Git', 'GitHub', 'GitLab', 'Figma'] },
  { title: 'Интеграции и данные', items: ['REST API', 'JSON', 'Python', 'SQLite'] },
]

export const projects: Project[] = [
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
]
