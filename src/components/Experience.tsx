import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Desenvolvedor Frontend Líder",
    company: "TechCorp Inc.",
    period: "2023 - Presente",
    description: "Liderança de uma equipe de 5 desenvolvedores na construção de uma plataforma SaaS moderna utilizando React, TypeScript e GraphQL. Implementação de pipelines CI/CD e melhoria de performance do site em 40%.",
    type: "work"
  },
  {
    id: 2,
    title: "Desenvolvedor Web Sênior",
    company: "Digital Solutions",
    period: "2020 - 2023",
    description: "Desenvolvimento e manutenção de múltiplos projetos para clientes utilizando React, Node.js e MongoDB. Arquitetura de soluções escaláveis para plataformas de e-commerce e sites corporativos.",
    type: "work"
  },
  {
    id: 3,
    title: "Mestrado em Ciência da Computação",
    company: "Tech University",
    period: "2018 - 2020",
    description: "Especialização em Tecnologias Web e Sistemas Distribuídos. Tese sobre 'Otimização de Aplicações React para Casos de Uso Empresariais'.",
    type: "education"
  },
  {
    id: 4,
    title: "Desenvolvedor Frontend",
    company: "Creative Agency",
    period: "2016 - 2020",
    description: "Criação de sites responsivos e aplicações web para diversos clientes. Trabalho com JavaScript, HTML/CSS e vários frameworks frontend.",
    type: "work"
  },
  {
    id: 5,
    title: "Bacharelado em Engenharia de Software",
    company: "State University",
    period: "2012 - 2016",
    description: "Formado com honras. Participação em competições de desenvolvimento web e projetos open-source.",
    type: "education"
  }
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });
    
    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .timeline-item {
          opacity: 0;
        }
      `}</style>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block py-1 px-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg font-mono text-sm mb-2">
            Minha Jornada
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experiência Profissional
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Minha trajetória profissional e formação acadêmica que me transformaram no desenvolvedor que sou hoje.
          </p>
        </div>
        
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-teal-500 rounded-full"></div>
          
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 md:pr-8 md:pl-0 pl-8 relative">
                <div className="flex items-center mb-2">
                  {item.type === 'work' ? (
                    <Briefcase size={18} className="text-purple-600 dark:text-purple-400 mr-2" />
                  ) : (
                    <GraduationCap size={18} className="text-teal-500 dark:text-teal-400 mr-2" />
                  )}
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <h5 className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  {item.company}
                </h5>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
                
                {/* Line connector for mobile */}
                <div className="absolute top-0 -left-4 md:hidden">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center shadow-md">
                    {item.type === 'work' ? (
                      <Briefcase size={16} className="text-white" />
                    ) : (
                      <GraduationCap size={16} className="text-white" />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Line connector for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center shadow-md">
                  {item.type === 'work' ? (
                    <Briefcase size={16} className="text-white" />
                  ) : (
                    <GraduationCap size={16} className="text-white" />
                  )}
                </div>
              </div>
              
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="/resume.pdf" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg font-medium flex items-center group hover:shadow-lg transform hover:-translate-y-1 transition-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Baixar Currículo Completo
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 group-hover:translate-y-1 transition-transform"
            >
              <path 
                d="M12 4L12 16M12 16L8 12M12 16L16 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M6 20H18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;