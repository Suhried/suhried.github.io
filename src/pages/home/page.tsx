import { useState, useEffect, useRef } from 'react';
import TerminalLoader from '../../components/feature/TerminalLoader';
import AnimatedDotBackground from '../../components/feature/AnimatedDotBackground';
import IconNavigation from '../../components/feature/IconNavigation';
import NewHeroSection from './components/NewHeroSection';
import HeroContentSection from './components/HeroContentSection';
import DarkProjectsSection from './components/DarkProjectsSection';
import DarkExperienceSection from './components/DarkExperienceSection';
import DarkToolsSection from './components/DarkToolsSection';
import DarkBlogSection from './components/DarkBlogSection';
import DarkContactSection from './components/DarkContactSection';
import DarkFooter from '../../components/feature/DarkFooter';

export default function HomePage() {
  const [showTerminal, setShowTerminal] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      const windowHeight = window.innerHeight;
      
      // On mobile, query all sections from document; on desktop, use container
      const sections = isMobile 
        ? document.querySelectorAll('.scroll-reveal-section')
        : scrollContainerRef.current?.querySelectorAll('.scroll-reveal-section') || [];

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    // On mobile, use window scroll; on desktop, use container scroll
    const isMobile = window.innerWidth < 768;
    const container = scrollContainerRef.current;
    
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll);
      } else if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [showTerminal]);

  return (
    <>
      {showTerminal && <TerminalLoader onComplete={() => setShowTerminal(false)} />}
      
      {/* Animated Dot Background */}
      {!showTerminal && <AnimatedDotBackground dotCount={150} mobileDotCount={75} scrollContainerRef={scrollContainerRef} />}
      
      <div className={`transition-opacity duration-1000 relative z-10 ${showTerminal ? 'opacity-0' : 'opacity-100'}`}>
        {/* Icon Navigation Bar */}
        {!showTerminal && <IconNavigation scrollContainerRef={scrollContainerRef} />}
        
        {/* MOBILE: PROFILE BANNER - SHOWS FIRST, SCROLLS WITH PAGE */}
        <div className="md:hidden w-full relative z-20 pt-20">
          <NewHeroSection />
        </div>

        {/* DESKTOP: CENTERED CONTAINER WITH TWO COLUMNS */}
        <div className="hidden md:block md:fixed md:inset-0 md:z-30 md:overflow-hidden">
          <div className="w-full h-full flex items-start justify-center pt-12 md:pt-16">
            <div className="w-full max-w-[1600px] h-screen flex items-start gap-2 md:gap-3 px-4 md:px-6">
              {/* LEFT SIDE - PROFILE BANNER */}
              <div className="flex-[0_0_42%] max-w-[700px] min-w-0 h-screen flex items-start justify-center flex-shrink-0 pt-0">
                <div className="w-full max-w-[450px] flex items-start overflow-visible">
                  <NewHeroSection />
                </div>
              </div>

              {/* RIGHT SIDE - SCROLLABLE CONTENT */}
              <div 
                ref={scrollContainerRef}
                className="flex-[0_0_53%] max-w-[820px] min-w-0 h-screen overflow-y-auto overflow-x-hidden scroll-smooth flex-shrink-0 pt-0 -ml-4 md:-ml-6"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#F36A2F #1a1a1a',
                }}
              >
                <div className="pt-8 md:pt-10 pb-32">
                  {/* Hero Content Section - First visible section */}
                  <div className="scroll-reveal-section">
                    <HeroContentSection />
                  </div>

                  {/* Scrollable Sections */}
                  <div className="scroll-reveal-section">
                    <DarkProjectsSection />
                  </div>
                  
                  <div className="scroll-reveal-section">
                    <DarkExperienceSection />
                  </div>
                  
                  <div className="scroll-reveal-section">
                    <DarkToolsSection />
                  </div>
                  
                  <div className="scroll-reveal-section">
                    <DarkBlogSection />
                  </div>
                  
                  <div className="scroll-reveal-section">
                    <DarkContactSection />
                  </div>
                  
                  <div className="scroll-reveal-section">
                    <DarkFooter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: SCROLLABLE CONTENT BELOW BANNER */}
        <div className="md:hidden w-full overflow-y-auto overflow-x-hidden scroll-smooth relative z-20">
          <div className="min-h-screen pt-8">
            {/* Hero Content Section - First visible section */}
            <div className="scroll-reveal-section">
              <HeroContentSection />
            </div>

            {/* Scrollable Sections */}
            <div className="space-y-32 pb-32">
              <div className="scroll-reveal-section">
                <DarkProjectsSection />
              </div>
              
              <div className="scroll-reveal-section">
                <DarkExperienceSection />
              </div>
              
              <div className="scroll-reveal-section">
                <DarkToolsSection />
              </div>
              
              <div className="scroll-reveal-section">
                <DarkBlogSection />
              </div>
              
              <div className="scroll-reveal-section">
                <DarkContactSection />
              </div>
              
              <div className="scroll-reveal-section">
                <DarkFooter />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Custom Scrollbar */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #F36A2F;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #ff7a3f;
        }

        /* Scroll Reveal Animation */
        .scroll-reveal-section {
          opacity: 0;
          transform: translateX(120px);
          transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .scroll-reveal-section.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Staggered delays for child elements */
        .scroll-reveal-section.visible > * {
          animation: slideInFromRight 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }

        .scroll-reveal-section.visible > *:nth-child(2) {
          animation-delay: 0.1s;
        }

        .scroll-reveal-section.visible > *:nth-child(3) {
          animation-delay: 0.15s;
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .scroll-reveal-section {
            transform: translateY(40px) !important;
          }

          .scroll-reveal-section.visible {
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </>
  );
}
