export interface Project {
  name: string;
  demoLink: string;
  tags?: string[];
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Gofitrunnow.com',
    description:
      'A Master Thesis web application that utilizes gamification to track and motivate users in their running and overall wellness journey.',
    demoLink: 'https://gofitrunnow.com',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Gamification', 'Health', 'Web App']
  },
  {
    name: 'Warongkon Tech Blog',
    description:
      'High-performance bilingual tech & engineering publication built with Astro 4, Tailwind CSS, and automated SEO/GEO pipelines covering Global AI, Software Engineering, and Thailand/SEA Tech.',
    demoLink: 'https://github.com/jkstudio99/warongkon-blog',
    postLink: '/about/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'SEO']
  },
  {
    name: 'Enterprise .NET & Clean Architecture Microservices',
    description:
      'Production-ready ASP.NET Core & C# backend architecture implementing Clean Architecture, CQRS, SOLID principles, and high-throughput RESTful APIs with SQL Server & MongoDB.',
    demoLink: 'https://github.com/jkstudio99',
    postLink: '/microservices-architecture-2026/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['C#', 'ASP.NET Core', 'Clean Architecture', 'Microservices']
  },
  {
    name: 'AI-Powered Knowledge & Tech Intelligence Pipeline',
    description:
      'Automated research and editorial pipeline synthesizing global AI breakthroughs, cloud infrastructure trends, and Southeast Asia tech ecosystem insights into structured Thai articles.',
    demoLink: 'https://warongkon-blog.vercel.app/posts/',
    postLink: '/generative-ai-evolution-2026/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['AI', 'LLM', 'Automation', 'Knowledge Graph']
  },
  {
    name: 'Real-Time Enterprise Data & API Gateway',
    description:
      'Scalable data synchronization and RESTful API integration layer engineered with .NET, SQL Server optimization, and distributed caching for enterprise workflows.',
    demoLink: 'https://github.com/jkstudio99',
    postLink: '/dotnet-10-api-sql-server-clean-architecture-2026/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['.NET', 'SQL Server', 'MongoDB', 'Performance']
  },
  {
    name: 'Angular & TypeScript Enterprise UI System',
    description:
      'Modular, accessible responsive frontend architecture built with Angular, TypeScript, and Tailwind CSS for complex enterprise dashboards and mission-critical web applications.',
    demoLink: 'https://github.com/jkstudio99',
    postLink: '/2026-05-20-signals-angular-vs-react-2026/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Angular', 'TypeScript', 'UI/UX', 'Enterprise']
  }
];
