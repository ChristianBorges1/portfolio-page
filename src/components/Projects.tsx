import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product filtering, user authentication, shopping cart, and payment integration.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app to manage tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.pexels.com/photos/6956353/pexels-photo-6956353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Redux", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather tracking app with 7-day forecasts, location search, and interactive maps.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["JavaScript", "API", "CSS", "HTML"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics tracking growth, engagement, and audience insights.",
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Vue.js", "ChartJS", "REST API", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "Music Streaming App",
    description: "A Spotify-like music streaming application with playlist creation and artist discovery.",
    image: "https://images.pexels.com/photos/2261041/pexels-photo-2261041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = filter === 'all' 
    ? projectData 
    : filter === 'featured' 
      ? projectData.filter(p => p.featured) 
      : projectData.filter(p => p.tags.includes(filter));
  
  const uniqueTags = Array.from(new Set(projectData.flatMap(p => p.tags)));

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block py-1 px-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg font-mono text-sm mb-2">
            My Projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Work
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my skills and passion for building innovative web applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'featured' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Featured
          </button>
          {uniqueTags.slice(0, 5).map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === tag 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 bg-purple-600/90 text-white text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-colors"
          >
            <Code size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;