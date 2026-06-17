export const projects = [
  {
    id: 'solar',
    title: 'SolAR',
    status: 'Live',
    date: 'Spring 2025',
    role: 'HackIllinois 2025 Winner',
    image: '', // Path to your screenshot in the public folder
    url: 'https://devpost.com/software/solar-ado76i',
    github: 'https://github.com/Zaydo123/SolAR', 
    desc: 'A decentralized Git server built on the blockchain, allowing for censorship-resistant code hosting and version control.',
    insight: 'By leveraging Solana for consensus and Arweave for permanent storage, we eliminated the single points of failure present in traditional Git providers.',
    tags: ['Solana', 'ARweave', 'Web3', 'Architecture']
  },
  {
    id: 'rigveda-search',
    title: 'Rigveda Semantic Search',
    status: 'In Development',
    date: 'Winter 2025',
    role: 'ML Engineer',
    image: '/Analysis_Demo1.png',
    url: 'https://rigveda-sse.streamlit.app',
    github: 'https://github.com/RamLanka05/ML1',
    desc: 'An AI-native search engine designed to parse, analyze, and query complex Sanskrit texts using advanced NLP vector embeddings.',
    insight: 'Translating ancient semantics into multidimensional vector space required custom tokenization strategies far beyond standard English LLM pipelines.',
    tags: ['Machine Learning', 'NLP', 'Python', 'Vector DB']
  },
  // {
  //   id: 'chip8',
  //   title: 'Chip-8 Emulator',
  //   status: 'Completed',
  //   date: '2024',
  //   role: 'Systems Programmer',
  //   image: '/projects/chip8.jpg',
  //   url: '',
  //   github: 'https://github.com/RamLanka05/...',
  //   desc: 'A custom hardware emulator written from scratch, handling CPU cycles, memory management, and display rendering at the lowest level.',
  //   insight: 'Building an emulator is the ultimate exercise in understanding the abstraction layer between raw opcodes and software execution.',
  //   tags: ['C/C++', 'Systems', 'Low-Level Architecture']
  // }
];

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
    period: 'May 2025 — December 2025',
    desc: `Developed a full stack web platform serving a non-profit organization utilizing MongoDB, Express.js, React, and Node.js. Built and maintained more than 15 API endpoints for secure admin authentication, content management, and integrated payment processing systems.
      Implemented a secure JWT-based authentication system with bcrypt password hashing, protected admin routes, and role-based access supporting multiple admins and account management.
      Integrated Stripe payment processing for collecting donations with customizable donation tiers, secure checkout sessions, and automated success/failure handling to support the organization's fundraising efforts.
      Utilized Tailwind CSS and Headless UI to implement advanced UI/UX elements, including infinite-scroll carousels, filterable blog sliders, and custom dropdowns.`,
  },
]

export type Project = typeof projects[number]
export type ExperienceItem = typeof experience[number]
