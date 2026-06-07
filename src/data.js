/** Personal interests for About, not a mirror of the projects list */
export const ABOUT_INTERESTS = [
  {
    topic: 'AI & machine learning',
    note: 'How models learn, generalise, and fail, not just calling APIs. I like understanding the data and whether a result is actually meaningful.',
  },
  {
    topic: 'Software development',
    note: 'Building things that hold up: clear structure, honest debugging, and code you can return to months later without dreading it.',
  },
  {
    topic: 'Game development',
    note: 'A long-running side interest: mechanics, feel, and fast iteration. Games teach you feedback loops and player experience in a different way.',
  },
  {
    topic: 'Cloud & systems thinking',
    note: 'How pieces connect end to end: backends, infra, data flow. I enjoy seeing the full path from a user action to what happens underneath.',
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
    desc: 'iOS app from the Apple Foundation Program: step tracking and nature photo quests to ease climate burnout.',
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
    desc: 'VGG-style CNNs for colon histopathology: binary cancer detection and multi-class cell typing with semi-supervised learning.',
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
              'COSC2673 ML at RMIT: full pipeline on CRCHistoPhenotypes patches. EDA, class imbalance, improved recall for cancerous class, semi-supervised boost for minority cell types. Co-authored with Labiba Nawar.',
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
    desc: 'Interactive Power BI dashboard for Superstore sales: KPIs, trends, and category profitability.',
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
    desc: 'Large-scale Reddit & YouTube analysis of UK transgender rights discourse: sentiment, LDA topics, network centrality.',
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
    desc: 'This site: VS Code-themed React portfolio with tabbed panels and command palette.',
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

export const CERTIFICATIONS = [
  {
    name: 'AI Pair Programming with GitHub Copilot',
    issuer: 'LinkedIn Learning',
    year: 'Jan 2026',
    url: 'https://www.linkedin.com/learning/certificates/4b68badfd46718b97edd718bdeb18b7e6a32699909bb19e917062481d4011e18',
  },
  {
    name: 'Artificial Intelligence Foundations: Machine Learning',
    issuer: 'LinkedIn Learning',
    year: 'Dec 2024',
    url: 'https://www.linkedin.com/learning/certificates/a257aca353201dca5c0528b606f5ca764702c4ae799421d92d476d6bcea4ab6f',
  },
  {
    name: 'Introduction to Physical Computing',
    issuer: 'Lancaster University · FutureLearn',
    year: 'Jun 2022',
    url: 'https://www.futurelearn.com/certificates/7uimrwn',
  },
  {
    name: 'Digital Skills: Artificial Intelligence',
    issuer: 'Accenture · FutureLearn',
    year: 'May 2022',
    url: 'https://www.futurelearn.com/certificates/bqsg3g6',
  },
  {
    name: 'Python Programming',
    issuer: 'Digital India · EICT Academies (IITs/NITs)',
    year: 'Jul 2021',
  },
]

export const CAREER_LOG = [
  {
    hash: 'a3f9c2e',
    date: 'Jul 2026',
    type: 'feat',
    message: 'Finishing CS (Professional) at RMIT',
    body: 'Final year at RMIT Melbourne. Looking for internship or grad roles, Melbourne or remote.',
    tag: 'milestone',
    tagColor: '#9ece6a',
  },
  {
    hash: 'b71d4a1',
    date: '2025',
    type: 'feat',
    message: 'Apple Foundation Program, Stridey iOS',
    body: 'SwiftUI app for nature reconnection; human-centred design, user research, and team pitch.',
    tag: 'program',
    tagColor: '#bb9af7',
  },
  {
    hash: 'b93e1d4',
    date: 'Feb 2025',
    type: 'feat',
    message: 'Peer Mentor @ RMIT',
    body: 'Mentoring 20+ students in Java and C++. Diagnose issues, explain clearly, follow through to resolution.',
    tag: 'leadership',
    tagColor: '#73daca',
  },
  {
    hash: 'f03b2c9',
    date: '2024',
    type: 'chore',
    message: 'FIRE+ committee & CSIT Club',
    body: 'Content and events for 1,000+ students (FIRE+); coding workshops and hackathons (CSIT).',
    tag: 'extracurricular',
    tagColor: '#bac730',
  },
  {
    hash: 'e15a9d7',
    date: '2023',
    type: 'init',
    message: 'Started Bachelor of CS (Professional) @ RMIT',
    body: 'Lectures and labs, group assignments, hackathons, peer mentoring, and committee work with student clubs. A lot more than sitting in class.',
    tag: 'education',
    tagColor: '#7aa2f7',
  },
  {
    hash: '8f4a7b1',
    date: '2019–20',
    type: 'chore',
    message: "High school awards: chess, World Scholar's Cup, Scotland exchange",
    body: 'State-level chess champion (2019); World Scholar\'s Cup global rounds (2020); exchange at Kilgraston School, Scotland.',
    tag: 'awards',
    tagColor: '#52525b',
  },
]

export const TIMELINE = [
  {
    title: 'Bachelor of CS (Professional)',
    org: 'RMIT University · Melbourne',
    desc: 'Coursework, group work, hackathons, peer mentoring, and student committee roles alongside the degree.',
    date: '2023\nJul 2026',
    hasLine: true,
  },
  {
    title: 'Peer Mentor',
    org: 'RMIT University',
    desc: 'Technical mentoring for 20+ students: Java & C++ debugging, clear explanations, end-to-end follow-up.',
    date: 'Feb 2025\nPresent',
    hasLine: true,
  },
  {
    title: 'Committee Member, FIRE+',
    org: 'RMIT Social Media Portfolio',
    desc: 'Digital content, club events, and online presence reaching 1,000+ students.',
    date: '2024\nPresent',
    hasLine: false,
  },
]
