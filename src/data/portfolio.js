// All content is sourced from Kanishka Krishna's resume.
// Update the `links` object with real profile URLs before deploying.

export const profile = {
  name: 'Kanishka Krishna',
  role: 'Software Engineer',
  tagline:
    'I build real-time distributed systems and AI-powered products — from Redis-backed matching engines to LangChain agents.',
  location: 'Bokaro, Jharkhand, India',
  email: 'kanishkakrishna694@gmail.com',
  phone: '+91-6200890962',
  links: {
    github: 'https://github.com/', // TODO: replace with actual GitHub username
    linkedin: 'https://linkedin.com/', // TODO: replace with actual LinkedIn URL
    codeforces: 'https://codeforces.com/', // TODO: replace with actual handle
    leetcode: 'https://leetcode.com/', // TODO: replace with actual handle
    resume: '/resume.pdf',
  },
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a final-year Electronics & Communication Engineering student at NIT Jamshedpur (CGPA 8.10), currently working as a Frontend Developer on the institute's official web team.",
    'My focus sits at the intersection of backend systems and applied AI — I like taking a problem apart until it becomes a data structure, a queue, or a lock, then building the smallest correct thing that solves it at scale.',
    "Outside of coursework, I've shipped a real-time ride-matching engine on Redis Geo and Kafka, and an AI-assisted travel discovery platform using vector search and LangChain agents. I also spend a fair amount of time on competitive programming — 1000+ problems solved across Codeforces, LeetCode, and GeeksforGeeks.",
  ],
  facts: [
    { label: 'Education', value: 'B.Tech ECE, NIT Jamshedpur' },
    { label: 'CGPA', value: '8.10 / 10' },
    { label: 'Current Role', value: 'Frontend Developer, NITJ Web Team' },
    { label: 'Based in', value: 'Bokaro, Jharkhand, India' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming',
    description: 'Languages I write and think in',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Interfaces',
    description: 'Client-facing UI and interaction layers',
    skills: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description: 'Services, APIs and application logic',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Spring Boot', 'Hibernate / JPA'],
  },
  {
    title: 'Database & Infra',
    description: 'Where the state lives',
    skills: ['MongoDB Atlas', 'MongoDB Vector Search', 'PostgreSQL', 'Redis', 'Redisson', 'Apache Kafka'],
  },
  {
    title: 'AI & Cloud',
    description: 'Intelligence and delivery',
    skills: ['LangChain', 'Google Gemini GenAI', 'Gemini Embeddings', 'REST APIs', 'JWT Auth', 'Cloudinary'],
  },
  {
    title: 'Tools & Concepts',
    description: 'How the systems stay correct',
    skills: ['Redis GeoSpatial', 'Pub/Sub', 'Distributed Locks', 'Git', 'Linux'],
  },
]

export const projects = [
  {
    id: 'ride-matching',
    name: 'Ride Matching System',
    summary: 'A real-time, geo-aware ride matching engine built for low latency at driver-scale.',
    description:
      'Engineered a real-time ride-matching engine using Redis GeoSpatial for low-latency proximity search within a 5km radius, bypassing heavy relational queries entirely. Secured 10+ REST endpoints with JWT auth and built an ACID-compliant PostgreSQL wallet covering fare deductions and driver earnings. Redisson distributed locks eliminate race conditions and double-booking when multiple drivers accept the same ride, while a fault-tolerant cascade algorithm re-routes rejected rides using Redis Sets for temporary blacklisting. The notification pipeline is decoupled through Kafka Pub/Sub, with Server-Sent Events powering live ride-status and location streaming.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis Geo', 'Redisson', 'Kafka', 'SSE'],
    highlights: [
      '5km radius proximity search via Redis GeoSpatial',
      'Distributed locks eliminate double-booking races',
      'Kafka-decoupled notifications + live SSE streaming',
    ],
    github: 'https://github.com/', // TODO: replace with actual repo URL
    demo: null,
    accent: 'indigo',
  },
  {
    id: 'khojindia-ai',
    name: 'KhojIndia AI',
    summary: 'A full-stack MERN platform for discovering hidden destinations, moderated and planned by AI.',
    description:
      'A full-stack MERN application supporting 25+ users and 100+ user-generated destination and media entries, with a decoupled backend: Node/Express for core APIs, Python/FastAPI for AI-heavy workflows. An "AI Bouncer" pipeline built on LangChain and Gemini structured outputs sanitizes and auto-moderates submissions across 5+ destination fields. MongoDB Atlas Vector Search with 3072-dimensional Gemini embeddings detects duplicate entries above 95% cosine similarity, and a gamified leaderboard ranks 40+ contributors via optimized aggregation pipelines. An agentic AI Trip Planner uses LangChain memory buffers to generate personalized 3–4 day itineraries for hidden destinations.',
    tech: ['React', 'Tailwind', 'Node/Express', 'FastAPI', 'MongoDB Vector Search', 'Gemini', 'LangChain'],
    highlights: [
      'AI Bouncer auto-moderates submissions with Gemini + LangChain',
      'Vector search blocks duplicates above 95% cosine similarity',
      'Agentic trip planner generates personalized itineraries',
    ],
    github: 'https://github.com/', // TODO: replace with actual repo URL
    demo: 'https://khojindia.example.com', // TODO: replace with actual live link
    accent: 'violet',
  },
]

export const achievements = [
  {
    category: 'Codeforces',
    stat: '1205',
    statLabel: 'Max Rating (Pupil)',
    detail: 'Global Rank 3396 in Codeforces Round 1096 (Div. 3) — solved 4 problems, +54 rating.',
    link: 'https://codeforces.com/', // TODO
  },
  {
    category: 'LeetCode',
    stat: '212+',
    statLabel: 'Problems Solved',
    detail: 'Strong coverage across Dynamic Programming, Arrays, Hash Tables, DFS, and Trees.',
    link: 'https://leetcode.com/', // TODO
  },
  {
    category: 'Hackathon',
    stat: '3rd',
    statLabel: 'HackHorizon (Google DGG)',
    detail: 'Led "GreenGuard" as team lead and system architect at HackHorizon, hosted by Google Developers Group.',
    link: null,
  },
  {
    category: 'Olympiad',
    stat: '#104',
    statLabel: 'International Rank',
    detail: 'Ranked 104th internationally in the 15th National Science Olympiad.',
    link: null,
  },
]

export const stats = [
  { label: 'Problems Solved', value: 1000, suffix: '+' },
  { label: 'Contests Attended', value: 100, suffix: '+' },
  { label: 'CF Peak Rating', value: 1205, suffix: '' },
  { label: 'APIs Shipped', value: 25, suffix: '+' },
]
