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
  {
    id: 'cuda-mandelbrot',
    title: 'GPU-Accelerated Fractal Renderer',
    status: 'Completed',
    date: '2026',
    role: 'Systems & Graphics Programmer',
    image: '', //empty for now, ADD LATER
    url: '',
    github: 'https://github.com/RamLanka05/Mandelbrot-Set-Generator',
    desc: 'A high-performance Mandelbrot engine written in C++ and CUDA, featuring a dynamic aspect-locked camera, continuous color smoothing, and 2x2 supersampling for instantaneous 4K renders.',
    insight: 'Pushing hardware limits taught me that rendering beautiful graphics isn\'t just about the math—it requires meticulously optimizing memory bandwidth and bypassing disk I/O bottlenecks.',
    tags: ['C++', 'CUDA', 'Parallel Computing', 'Graphics']
  }
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
