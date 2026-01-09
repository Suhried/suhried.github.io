import { useState, useEffect } from 'react';

interface IconNavigationProps {
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

export default function IconNavigation({ scrollContainerRef }: IconNavigationProps) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const scrollContainer = scrollContainerRef?.current;
      
      const sections = [
        { id: 'home', offset: 0 },
        { id: 'projects', selector: '#projects' },
        { id: 'experience', selector: '#experience' },
        { id: 'tools', selector: '#tools' },
        { id: 'contact', selector: '#contact' },
      ];

      // Check which section is in view
      let currentSection = 'home';
      
      if (isMobile) {
        // On mobile, use window scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.selector) {
            const element = document.querySelector(section.selector);
            if (element) {
              const rect = element.getBoundingClientRect();
              
              if (rect.top <= 300) {
                currentSection = section.id;
                break;
              }
            }
          } else if (scrollTop < 300) {
            currentSection = 'home';
            break;
          }
        }
      } else {
        // On desktop, use container scroll
        if (!scrollContainer) return;
        const scrollTop = scrollContainer.scrollTop;
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.selector) {
            const element = document.querySelector(section.selector);
            if (element) {
              const rect = element.getBoundingClientRect();
              const containerRect = scrollContainer.getBoundingClientRect();
              const relativeTop = rect.top - containerRect.top;
              
              if (relativeTop <= 300) {
                currentSection = section.id;
                break;
              }
            }
          } else if (scrollTop < 300) {
            currentSection = 'home';
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      const timeoutId = setTimeout(handleScroll, 100);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      const scrollContainer = scrollContainerRef?.current || document.querySelector('.overflow-y-auto.fixed.right-0') as HTMLElement;
      if (scrollContainer) {
        scrollContainer.addEventListener('scroll', handleScroll);
        const timeoutId = setTimeout(handleScroll, 100);
        
        return () => {
          clearTimeout(timeoutId);
          scrollContainer.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [scrollContainerRef]);

  const scrollToSection = (sectionId: string) => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, scroll the window
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const targetScroll = scrollTop + elementRect.top - 20;
        
        window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    } else {
      // On desktop, scroll the container
      const scrollContainer = scrollContainerRef?.current || document.querySelector('.overflow-y-auto.fixed.right-0') as HTMLElement;
      if (!scrollContainer) return;

      if (sectionId === 'home') {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(`#${sectionId}`);
      if (element && scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const scrollTop = scrollContainer.scrollTop;
        const targetScroll = scrollTop + elementRect.top - containerRect.top - 50;
        
        scrollContainer.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { id: 'home', icon: 'ri-home-line', label: 'Home' },
    { id: 'projects', icon: 'ri-folder-line', label: 'Projects' },
    { id: 'experience', icon: 'ri-briefcase-line', label: 'Experience' },
    { id: 'tools', icon: 'ri-tools-line', label: 'Tools' },
    { id: 'contact', icon: 'ri-edit-line', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center gap-4 md:gap-8 border border-gray-700/50 shadow-2xl" style={{ backgroundColor: '#343a40' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-all duration-300 cursor-pointer ${
              activeSection === item.id
                ? 'text-white scale-110'
                : 'text-gray-400 hover:text-white'
            }`}
            aria-label={item.label}
          >
            <i className={`${item.icon} text-xl md:text-2xl`}></i>
          </button>
        ))}
      </div>
    </nav>
  );
}

