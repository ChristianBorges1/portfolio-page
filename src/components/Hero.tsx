import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  const typingSpeed = 100;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timer);
    }
  }, [typedText]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-purple-500/10 -top-10 -right-10 blur-3xl"></div>
        <div className="absolute w-72 h-72 rounded-full bg-teal-500/10 -bottom-10 -left-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="space-y-6">
              <h2 className="inline-block py-1 px-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg font-mono text-sm mb-2">
                Hello World! I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
                Chris
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400">Portfolio</span>
              </h1>
              <div className="h-8">
                <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-mono">
                  <span className="mr-1">I'm a</span> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400">
                    {typedText}
                  </span>
                  <span className="inline-block w-1 h-6 bg-purple-500 animate-blink"></span>
                </h2>
              </div>
                <p className="text-slate-600 dark:text-slate-400 max-w-lg">
                Especializado em criar experiências digitais excepcionais. Eu me concentro em desenvolver produtos acessíveis, centrados no ser humano, utilizando código limpo e tecnologias de ponta.
                </p>
              <div className="flex space-x-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-lg font-medium flex items-center group hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  View Projects
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-purple-500 hover:text-purple-500 dark:hover:border-purple-400 dark:hover:text-purple-400 transform hover:-translate-y-1 transition-all"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-teal-400/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl bg-gradient-to-br from-purple-600 to-teal-400 p-1 shadow-xl rotate-3 hover:rotate-6 transition-transform duration-500">
                  <div className="bg-white dark:bg-slate-800 h-full w-full rounded-lg overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Developer portrait" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll down">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-slate-400 dark:text-slate-500"
          >
            <path 
              d="M12 5L12 19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform rotate-90"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;