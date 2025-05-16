import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/ui/Cursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        <Cursor />
        {isLoading ? (
          <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-t-4 border-b-4 border-purple-500 rounded-full animate-spin"></div>
              <p className="mt-4 text-slate-300 text-xl font-mono">Loading portfolio...</p>
            </div>
          </div>
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;