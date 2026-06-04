/** Short focus lines for README — scannable, not repeated on About */
export const README_FOCUS = [
  {
    label: 'ML & vision',
    detail: 'Medical imaging CNNs, class imbalance, semi-supervised learning',
  },
  {
    label: 'Cloud & backends',
    detail: 'Flask on AWS — DynamoDB, Lambda, API Gateway, production debugging',
  },
  {
    label: 'Data & products',
    detail: 'NLP/sentiment at scale, Power BI, SwiftUI, game prototypes on the side',
  },
]

/** Deeper “what I gravitate toward” for About — different format from README */
export const ABOUT_CURIOSITIES = [
  {
    topic: 'Applied machine learning',
    note: 'End-to-end pipelines where evaluation and data quality matter — e.g. histopathology classification with real clinical trade-offs.',
  },
  {
    topic: 'Language & social data',
    note: 'Sentiment, topic modelling, and graph analysis on large comment datasets — how platforms shape discourse.',
  },
  {
    topic: 'Shipping on AWS',
    note: 'Multi-service web apps: auth, search, storage, and tracing issues through CloudWatch when something breaks in prod.',
  },
  {
    topic: 'Interfaces people use',
    note: 'SwiftUI screens, analytics dashboards, and occasional game-dev experiments when I want something tactile and fast to iterate.',
  },
]

export const FILES = [
  { id: 'readme',   name: 'README.md',    icon: 'M',  color: '#67e8f9', hint: 'Home' },
  { id: 'about',    name: 'about.ts',     icon: 'TS', color: '#93c5fd', hint: 'About' },
  { id: 'projects', name: 'projects.tsx', icon: 'TX', color: '#fcd34d', hint: 'Projects' },
  { id: 'skills',   name: 'stack.json',   icon: '{}', color: '#86efac', hint: 'Skills' },
  { id: 'contact',  name: 'contact.sh',   icon: 'SH', color: '#fca5a5', hint: 'Contact' },
]

/** Explorer-style projects (linked to GitHub) */
export const WORKSPACE_PROJECTS = [
  {
    id: 'stridey',
    folder: 'Stridey',
    status: 'SHIPPED',
    statusColor: '#bb9af7',
    githubUrl: 'https://github.com/kannanarora5/Stridey',
    githubLabel: 'github.com/kannanarora5/Stridey',
    desc: 'iOS app from the Apple Foundation Program — step tracking and nature photo quests to ease climate burnout.',
    tags: ['Swift', 'SwiftUI', 'Xcode', 'UX research'],
    files: [
      {
        name: 'HomeView.swift',
        icon: 'SW',
        iconColor: '#bb9af7',
        content: [
          { label: 'framework', value: 'SwiftUI', color: '#bb9af7' },
          { label: 'focus', value: 'step tracking + quests', color: '#93c5fd' },
          { label: 'team', value: 'Apple Foundation @ RMIT', color: '#93c5fd' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          {
            label: 'desc',
            value:
              'Human-centred iOS app: reconnecting young adults with nature through outdoor habits. I built SwiftUI screens, helped with UX, integrated team code, and contributed to the final pitch.',
            color: '#d4d4d8',
            isText: true,
          },
        ],
      },
    ],
  },
  {
    id: 'cloud',
    folder: 'cloud-computing',
    status: 'DEPLOYED',
    statusColor: '#86efac',
    githubUrl: 'https://github.com/kannanarora5/cloud-computing',
    githubLabel: 'github.com/kannanarora5/cloud-computing',
    desc: 'Flask music subscription app on AWS EC2 with DynamoDB, S3, Lambda, and API Gateway.',
    tags: ['Python', 'Flask', 'AWS', 'DynamoDB', 'Lambda'],
    files: [
      {
        name: 'architecture.md',
        icon: 'PY',
        iconColor: '#7dcfff',
        content: [
          { label: 'web', value: 'Apache2 + Flask on EC2', color: '#7dcfff' },
          { label: 'data', value: 'DynamoDB (3 tables)', color: '#93c5fd' },
          { label: 'assets', value: 'S3 artist images', color: '#93c5fd' },
          { label: 'serverless', value: 'Lambda + API Gateway', color: '#86efac' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          {
            label: 'desc',
            value:
              'RMIT cloud computing project: auth, music search, subscriptions, and secure image delivery. Group build with Flask on EC2 and serverless subscribe/register flows.',
            color: '#d4d4d8',
            isText: true,
          },
        ],
      },
    ],
  },
  {
    id: 'histopath',
    folder: 'colon-cancer-cell-classfication-ml',
    status: 'RESEARCH',
    statusColor: '#e0af68',
    githubUrl: 'https://github.com/kannanarora5/colon-cancer-cell-classfication-ml',
    githubLabel: 'github.com/kannanarora5/colon-cancer-cell-classfication-ml',
    desc: 'VGG-style CNNs for colon histopathology — binary cancer detection and multi-class cell typing with semi-supervised learning.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Medical imaging'],
    files: [
      {
        name: 'train.ipynb',
        icon: 'NB',
        iconColor: '#e0af68',
        content: [
          { label: 'task_1', value: 'cancerous vs not (~86% acc)', color: '#86efac' },
          { label: 'task_2', value: 'cell type (~74% acc)', color: '#93c5fd' },
          { label: 'method', value: 'VGG CNN + augmentation + pseudo-labels', color: '#e0af68' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          {
            label: 'desc',
            value:
              'COSC2673 ML at RMIT: full pipeline on CRCHistoPhenotypes patches — EDA, class imbalance, improved recall for cancerous class, semi-supervised boost for minority cell types. Co-authored with Labiba Nawar.',
            color: '#d4d4d8',
            isText: true,
          },
        ],
      },
    ],
  },
  {
    id: 'powerbi',
    folder: 'sales-powerbi-dashboard',
    status: 'ANALYSIS',
    statusColor: '#fcd34d',
    githubUrl: 'https://github.com/kannanarora5/sales-powerbi-dashboard',
    githubLabel: 'github.com/kannanarora5/sales-powerbi-dashboard',
    desc: 'Interactive Power BI dashboard for Superstore sales — KPIs, trends, and category profitability.',
    tags: ['Power BI', 'Python', 'SQL', 'Data viz'],
    files: [
      {
        name: 'dashboard.pbix',
        icon: 'BI',
        iconColor: '#fcd34d',
        content: [
          { label: 'sales', value: '$2.3M total', color: '#fcd34d' },
          { label: 'profit', value: '$286.4K', color: '#86efac' },
          { label: 'orders', value: '38K units', color: '#93c5fd' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          {
            label: 'desc',
            value:
              'Cleaned Superstore data with Python/SQL, built KPI cards, monthly trends, and category breakdowns in Power BI with interactive date filters.',
            color: '#d4d4d8',
            isText: true,
          },
        ],
      },
    ],
  },
  {
    id: 'discourse',
    folder: 'social-media-network-analysis',
    status: 'RESEARCH',
    statusColor: '#c4b5fd',
    githubUrl: 'https://github.com/LabibaNawar/Social-media-and-network-analysis',
    githubLabel: 'github.com/LabibaNawar/Social-media-and-network-analysis',
    desc: 'Large-scale Reddit & YouTube analysis of UK transgender rights discourse — sentiment, LDA topics, network centrality.',
    tags: ['Python', 'NLP', 'NetworkX', 'VADER', 'LDA'],
    files: [
      {
        name: 'analysis.ipynb',
        icon: 'NB',
        iconColor: '#c4b5fd',
        content: [
          { label: 'scale', value: '~100K comments', color: '#c4b5fd' },
          { label: 'methods', value: 'VADER · LDA · Louvain', color: '#93c5fd' },
          { label: 'tools', value: 'PRAW · YouTube API · Gephi', color: '#93c5fd' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          {
            label: 'desc',
            value:
              'Course research with Labiba Nawar & Brook Xiong: compared platform polarisation, topic themes, and influence networks after the April 2025 UK Supreme Court ruling.',
            color: '#d4d4d8',
            isText: true,
          },
        ],
      },
    ],
  },
  {
    id: 'portfolio',
    folder: 'personal-portfolio',
    status: 'LIVE',
    statusColor: '#67e8f9',
    githubUrl: 'https://github.com/kannanarora5/personal-portfolio',
    githubLabel: 'github.com/kannanarora5/personal-portfolio',
    desc: 'This site — VS Code-themed React portfolio with tabbed panels and command palette.',
    tags: ['React', 'Vite', 'CSS Modules', 'Vercel'],
    files: [
      {
        name: 'App.jsx',
        icon: 'TX',
        iconColor: '#67e8f9',
        content: [
          { label: 'ui', value: 'VS Code shell metaphor', color: '#67e8f9' },
          { label: 'panels', value: 'readme · about · projects · skills', color: '#93c5fd' },
          { label: 'deploy', value: 'Vercel on push to main', color: '#86efac' },
        ],
      },
      {
        name: 'README.md',
        icon: 'M',
        iconColor: '#52525b',
        content: [
          {
            label: 'desc',
            value:
              'Personal portfolio you are viewing now. Built with Vite + React to show projects, background, and contact in an IDE-inspired layout.',
            color: '#d4d4d8',
            isText: true,
          },
        ],
      },
    ],
  },
]

export const CAREER_LOG = [
  {
    hash: 'a3f9c2e',
    date: 'Jul 2026',
    type: 'feat',
    message: 'Graduating CS (Professional) — open to SWE, ML/AI, cloud, data',
    body: 'Final year at RMIT Melbourne. Interested in hybrid or remote roles across software, ML, and interactive products.',
    tag: 'milestone',
    tagColor: '#9ece6a',
  },
  {
    hash: 'b71d4a1',
    date: '2025',
    type: 'feat',
    message: 'Apple Foundation Program — Stridey iOS team',
    body: 'Selected for RMIT’s Apple Foundation cohort. Built Stridey with SwiftUI: nature quests, step tracking, and a user-research-driven pitch.',
    tag: 'mobile',
    tagColor: '#bb9af7',
  },
  {
    hash: 'b93e1d4',
    date: '2025',
    type: 'feat',
    message: 'Peer Mentor @ RMIT — Java & C++ support',
    body: 'Mentored 20+ students through coursework, labs, and problem-solving in one-on-one and group sessions.',
    tag: 'leadership',
    tagColor: '#73daca',
  },
  {
    hash: 'c29f813',
    date: '2025',
    type: 'feat',
    message: 'Customer Service @ Marvel Stadium',
    body: 'Front-line support for 1,000+ attendees per event — calm decisions under pressure and high-volume communication.',
    tag: 'work',
    tagColor: '#7dcfff',
  },
  {
    hash: 'd84c6b2',
    date: '2024',
    type: 'feat',
    message: 'FIRE+ committee — student media & outreach',
    body: 'Created content reaching 1,000+ students for RMIT’s social media portfolio.',
    tag: 'community',
    tagColor: '#bac730',
  },
  {
    hash: 'e15a9d7',
    date: '2023',
    type: 'init',
    message: 'Started CS (Professional) @ RMIT',
    body: 'Hackathons, societies, mentoring programs, and hands-on projects alongside coursework.',
    tag: 'origin',
    tagColor: '#7aa2f7',
  },
  {
    hash: 'f03b2c9',
    date: '2022',
    type: 'feat',
    message: "World Scholar's Cup · exchange in Scotland",
    body: 'Global rounds, international exchange at Kilgraston School, and early foundations in debate and performance.',
    tag: 'school',
    tagColor: '#bb9af7',
  },
]

export const TIMELINE = [
  {
    title: 'CS (Professional) Student',
    org: 'RMIT University · Melbourne',
    desc: 'Coursework across software engineering, cloud, ML, and data — plus side work in mobile, analytics, and game prototypes.',
    date: '2022\nPresent',
    hasLine: true,
  },
  {
    title: 'Customer Service Representative',
    org: 'Marvel Stadium · Melbourne',
    desc: 'Front-line support for 1,000+ attendees. Fast decisions, high volume.',
    date: 'May 2025\nPresent',
    hasLine: true,
  },
  {
    title: 'Committee Member, FIRE+',
    org: 'RMIT Social Media Portfolio',
    desc: 'Created content reaching 1,000+ students.',
    date: '2024\nPresent',
    hasLine: true,
  },
  {
    title: "World Scholar's Cup",
    org: 'Global Participant',
    desc: 'International competition and exchange at Kilgraston School, Scotland.',
    date: '2022',
    hasLine: false,
  },
]
