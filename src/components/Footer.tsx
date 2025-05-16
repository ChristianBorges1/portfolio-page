import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#hero" className="text-2xl font-bold mb-4 block font-mono">
              <span className="text-purple-400">{'<'}</span>
              Portfolio
              <span className="text-purple-400">{'/>'}</span>
            </a>
            <p className="text-slate-400 mb-6 max-w-md">
              Um desenvolvedor full-stack apaixonado, criando soluções web intuitivas e eficientes. 
              Vamos dar vida às suas ideias com código limpo e design moderno.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-purple-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-purple-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Email:</span>
                <a href="mailto:contact@example.com" className="text-slate-400 hover:text-purple-400 transition-colors">
                  contact@example.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Phone:</span>
                <a href="tel:+1234567890" className="text-slate-400 hover:text-purple-400 transition-colors">
                  +55 12 3456-7890
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">Location:</span>
                <span className="text-slate-400">Sao Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center">
          <p className="text-slate-500 flex items-center justify-center">
            © {currentYear} Portfolio. Made with 
            <Heart size={16} className="mx-1 text-red-500" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;