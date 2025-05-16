import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                      target.tagName.toLowerCase() === 'button' ||
                      target.closest('a') || 
                      target.closest('button');
      
      setIsOverLink(Boolean(isLink));
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', handleLinkHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', handleLinkHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }
  
  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none;
          }
        }
      `}</style>
      <div 
        className={`cursor-dot fixed w-5 h-5 bg-purple-600 dark:bg-purple-500 mix-blend-difference pointer-events-none rounded-full z-50 transition-transform duration-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-50' : ''} ${isOverLink ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
      <div 
        className={`cursor-ring fixed w-8 h-8 border-2 border-purple-600 dark:border-purple-500 mix-blend-difference pointer-events-none rounded-full z-50 transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-150' : ''} ${isOverLink ? 'scale-200' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
    </>
  );
};

export default Cursor;