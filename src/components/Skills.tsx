import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "frontend", level: 95 },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "frontend", level: 90 },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend", level: 92 },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend", level: 88 },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend", level: 85 },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", category: "frontend", level: 90 },
  
  // Backend
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend", level: 85 },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend", level: 82 },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend", level: 80 },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "backend", level: 78 },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "backend", level: 83 },
  
  // Tools
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools", level: 88 },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools", level: 75 },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools", level: 80 },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools", level: 92 },
];

const TechCube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotating, setRotating] = useState(true);
  const [currentFace, setCurrentFace] = useState(0);
  const faces = ["front", "right", "back", "left", "top", "bottom"];
  
  useEffect(() => {
    if (!rotating) return;
    
    const interval = setInterval(() => {
      setCurrentFace((prev) => (prev + 1) % faces.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [rotating]);
  
  useEffect(() => {
    if (!cubeRef.current) return;
    
    cubeRef.current.className = `cube show-${faces[currentFace]}`;
  }, [currentFace]);
  
  const handleFaceClick = (index: number) => {
    setRotating(false);
    setCurrentFace(index);
  };
  
  const resumeRotation = () => {
    setRotating(true);
  };
  
  return (
    <div className="scene" onClick={resumeRotation}>
      <div ref={cubeRef} className={`cube show-${faces[currentFace]}`}>
        <div className="cube-face cube-face-front" onClick={(e) => { e.stopPropagation(); handleFaceClick(0); }}>
          <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></div>
        </div>
        <div className="cube-face cube-face-right" onClick={(e) => { e.stopPropagation(); handleFaceClick(1); }}>
          <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" /></div>
        </div>
        <div className="cube-face cube-face-back" onClick={(e) => { e.stopPropagation(); handleFaceClick(2); }}>
          <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /></div>
        </div>
        <div className="cube-face cube-face-left" onClick={(e) => { e.stopPropagation(); handleFaceClick(3); }}>
          <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" /></div>
        </div>
        <div className="cube-face cube-face-top" onClick={(e) => { e.stopPropagation(); handleFaceClick(4); }}>
          <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" /></div>
        </div>
        <div className="cube-face cube-face-bottom" onClick={(e) => { e.stopPropagation(); handleFaceClick(5); }}>
          <div className="tech-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /></div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="inline-block py-1 px-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg font-mono text-sm mb-2">
            My Skills
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Expertise
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies throughout my career. Here's a visual representation of my technical skills.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-12">
          <div className="w-72 h-72">
            <style jsx>{`
              .scene {
                width: 200px;
                height: 200px;
                perspective: 600px;
                margin: 0 auto;
              }
              .cube {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
                transition: transform 1s;
              }
              .cube-face {
                position: absolute;
                width: 200px;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 16px;
                border: 2px solid rgba(139, 92, 246, 0.3);
                background-color: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(5px);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                cursor: pointer;
                transition: transform 0.3s, box-shadow 0.3s;
              }
              .tech-icon {
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .tech-icon img {
                width: 80px;
                height: 80px;
                filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
              }
              .cube-face:hover {
                box-shadow: 0 0 20px rgba(139, 92, 246, 0.7);
              }
              .cube-face-front { transform: rotateY(0deg) translateZ(100px); }
              .cube-face-right { transform: rotateY(90deg) translateZ(100px); }
              .cube-face-back { transform: rotateY(180deg) translateZ(100px); }
              .cube-face-left { transform: rotateY(-90deg) translateZ(100px); }
              .cube-face-top { transform: rotateX(90deg) translateZ(100px); }
              .cube-face-bottom { transform: rotateX(-90deg) translateZ(100px); }
              
              .cube.show-front { transform: rotateY(0deg); }
              .cube.show-right { transform: rotateY(-90deg); }
              .cube.show-back { transform: rotateY(-180deg); }
              .cube.show-left { transform: rotateY(90deg); }
              .cube.show-top { transform: rotateX(-90deg); }
              .cube.show-bottom { transform: rotateX(90deg); }
              
              .dark .cube-face {
                background-color: rgba(30, 41, 59, 0.5);
                border-color: rgba(139, 92, 246, 0.3);
              }
            `}</style>
            <TechCube />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === 'all' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === 'frontend' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === 'backend' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveCategory('tools')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === 'tools' 
                ? 'bg-purple-600 text-white' 
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Tools
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12"
                />
              </div>
              <h4 className="text-slate-900 dark:text-white font-medium mb-2">
                {skill.name}
              </h4>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-1">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-teal-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;