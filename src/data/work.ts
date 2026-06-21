export type Project = {
  id: string;
  title: string;
  status: string;
  date: string;
  role: string;
  image: string;
  url: string;
  urlType?: 'Live' | 'Demo'; // Our optional toggle
  github: string;
  desc: string;
  insight: string;
  tags: string[];
  starred?: boolean;         // Our optional star toggle
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  desc: string;
};

// 2. Apply the type to the arrays
export const projects: Project[] = [
  {
    id: 'solar',
    title: 'SolAR',
    status: 'Completed',
    date: 'Spring 2025',
    role: 'HackIllinois 2025 Winner',
    image: '', 
    url: 'https://devpost.com/software/solar-ado76i',
    urlType: 'Demo', 
    github: 'https://github.com/Zaydo123/SolAR', 
    desc: 'A decentralized Git server built on the blockchain, allowing for censorship-resistant code hosting and version control.',
    insight: 'By leveraging Solana for consensus and Arweave for permanent storage, we eliminated the single points of failure present in traditional Git providers.',
    tags: ['Solana', 'ARweave', 'Web3', 'Architecture']
  },
  {
    id: 'rigveda-search',
    title: 'Rigveda Semantic Search Engine',
    status: 'In Development',
    date: 'Winter 2025',
    role: 'ML Engineer',
    starred: true,
    image: '/Analysis_Demo1.png',
    url: 'https://rigveda-sse.streamlit.app',
    urlType: 'Live',
    github: 'https://github.com/RamLanka05/ML1',
    desc: 'An AI-native search engine designed to parse, analyze, and query complex Sanskrit texts using advanced NLP vector embeddings.',
    insight: 'Translating ancient semantics into multidimensional vector space required custom tokenization strategies far beyond standard English LLM pipelines.',
    tags: ['Machine Learning', 'NLP', 'Python', 'Vector DB']
  },
  {
    id: 'cuda-mandelbrot',
    title: 'GPU-Accelerated Fractal Renderer',
    status: 'In Development',
    date: 'Summer 2026',
    role: 'Systems & Graphics Programmer',
    starred: true,
    image: '/mandelbrot.png', 
    url: '',
    github: 'https://github.com/RamLanka05/Mandelbrot-Set-Generator',
    desc: 'A high-performance Mandelbrot engine written in C++ and CUDA, featuring a dynamic aspect-locked camera, continuous color smoothing, and 2x2 supersampling for instantaneous 4K renders.',
    insight: 'Pushing hardware limits taught me that rendering beautiful graphics isn\'t just about the math, and that it requires meticulously optimizing memory bandwidth and bypassing disk I/O bottlenecks.',
    tags: ['C++', 'CUDA', 'Parallel Computing', 'Graphics']
  }, 
{
    id: 'earthdb',
    title: 'EarthDB',
    status: 'Completed',
    date: 'Fall 2025',
    role: 'Full Stack Developer',
    image: '',
    url: '',
    github: 'https://github.com/RamLanka05/Earth_DB',
    desc: 'An interactive, Google Earth-inspired 3D web application built with Three.js. The platform features secure authentication, full CRUD operations, and diverse country datasets sourced from Kaggle and hosted on Google Cloud Platform.',
    insight: 'Bridging a fully 3D frontend with a scalable cloud backend required balancing WebGL rendering performance with dynamic API calls to ensure a seamless exploration of global statistics.',
    tags: ['Three.js', 'GCP', 'Full Stack', 'WebGL']
  }
];

export const experience: ExperienceItem[] = [
  {
    id: 'atlas-vr',
    role: 'VR Developer Intern',
    company: 'ATLAS UIUC',
    period: 'August 2025 - December 2025',
    desc: `Built interactive Virtual Reality environments for Quad Games, a Unity-based simulation deployed to Meta Quest headsets, requiring real-time performance optimization and hardware-level debugging to maintain consistent frame rates under constrained mobile GPU resources.
      Developed a VR Archery Game in C# with custom physics engines for projectile motion and collision detection, implementing a real-time scoring system that synchronized game state across networked VR sessions.
      Optimized the VR production pipeline by automating the build and deployment process through Visual Studio tooling and Meta Quest Link integration, reducing iteration cycle time by >50% and enabling rapid testing of physics and gameplay logic.`,
  },
  {
    id: 'oli-gardens',
    role: 'Software Developer Intern',
    company: 'OLI Gardens, Patriotic Gardens',
    period: 'May 2025 - December 2025',
    desc: `Developed a full stack web platform serving a non-profit organization utilizing MongoDB, Express.js, React, and Node.js. Built and maintained more than 15 API endpoints for secure admin authentication, content management, and integrated payment processing systems.
      Implemented a secure JWT-based authentication system with bcrypt password hashing, protected admin routes, and role-based access supporting multiple admins and account management.
      Integrated Stripe payment processing for collecting donations with customizable donation tiers, secure checkout sessions, and automated success/failure handling to support the organization's fundraising efforts.
      Utilized Tailwind CSS and Headless UI to implement advanced UI/UX elements, including infinite-scroll carousels, filterable blog sliders, and custom dropdowns.`,
  },
]

