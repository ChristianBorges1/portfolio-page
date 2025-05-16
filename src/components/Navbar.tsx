import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
          <span className="text-purple-600">{'<'}</span>
          Portfolio
          <span className="text-purple-600">{'/>'}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#projects" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          <a 
            href="#projects" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#experience" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;