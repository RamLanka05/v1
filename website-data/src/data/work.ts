export const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    desc: 'This site — built with React, Vite, and Tailwind CSS.',
    date: '2025',
    url: '',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'solar',
    title: 'SolAR',
    desc: 'Coming soon...',
    date: '2025',
    url: '',
    tags: ['React', 'Node.js'],
  },
  {
    id: 'statwizard',
    title: 'StatWizard',
    desc: 'A personal blog platform where I share articles about web development and programming.',
    date: '2024',
    url: '',
    tags: ['Gatsby', 'GraphQL', 'Markdown'],
  },
]

export const experience = [
  {
    id: 'atlas-vr',
    role: 'VR Developer Intern',
    company: 'ATLAS UIUC',
    period: 'August 2025 - December 2025',
    desc: `Collaborated with a team of developers to create immersive VR experiences using Unity and C#. Developed interactive 3D environments and optimized performance for various VR platforms. Implemented user interface elements and integrated audio-visual effects to enhance user engagement.`,
  },
  {
    id: 'oli-gardens',
    role: 'Software Developer Intern',
    company: 'OLI Gardens, Patriotic Gardens',
    period: 'May 2025 — Present',
    desc: `Developed a full stack web platform serving a non-profit organization utilizing MongoDB, Express.js, React, and Node.js. Built and maintained more than 15 API endpoints for secure admin authentication, content management, and integrated payment processing systems.
      Implemented a secure JWT-based authentication system with bcrypt password hashing, protected admin routes, and role-based access supporting multiple admins and account management.
      Integrated Stripe payment processing for collecting donations with customizable donation tiers, secure checkout sessions, and automated success/failure handling to support the organization's fundraising efforts.
      Utilized Tailwind CSS and Headless UI to implement advanced UI/UX elements, including infinite-scroll carousels, filterable blog sliders, and custom dropdowns.`,
  },
]

export type Project = typeof projects[number]
export type ExperienceItem = typeof experience[number]
