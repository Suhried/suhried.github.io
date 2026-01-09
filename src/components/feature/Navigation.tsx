import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Tools', id: 'tools' },
    { label: 'Thoughts', id: 'thoughts' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
      style={{ height: isScrolled ? '64px' : '80px' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="font-mono text-lg font-medium hover:text-accent transition-colors cursor-pointer whitespace-nowrap"
        >
          SD<span className="text-accent">_</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-all duration-300 hover:text-accent cursor-pointer whitespace-nowrap ${
                isScrolled ? 'font-medium' : 'font-light'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block px-6 py-2.5 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap"
        >
          Download CV
        </a>

        <button className="md:hidden text-2xl cursor-pointer">
          <i className="ri-menu-3-line"></i>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;