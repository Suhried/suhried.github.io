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

      const element = document.querySelector(`#${sectionId}`) as HTMLElement;
      if (element && scrollContainer) {
        const containerContent = scrollContainer.firstElementChild as HTMLElement;
        if (!containerContent) return;
        
        // Step 3: Manual calculation by summing heights of previous sections
        const sectionWrapper = element.closest('.scroll-reveal-section') as HTMLElement;
        if (!sectionWrapper) return;
        
        // Get all scroll-reveal-section children of containerContent
        const allSections = Array.from(containerContent.children) as HTMLElement[];
        
        // Sum heights of all sections before target section
        let cumulativeHeight = 0;
        for (const section of allSections) {
          if (section === sectionWrapper) break;
          cumulativeHeight += section.offsetHeight;
        }
        
        // The element (section) is the first child inside wrapper typically
        // wrapperOffset should equal cumulativeHeight
        const wrapperOffset = sectionWrapper.offsetTop;
        
        // Use wrapper's offsetTop if available, otherwise use cumulative height
        const sectionPosition = wrapperOffset || cumulativeHeight;
        
        // Container has pt-8 md:pt-10 = 40px padding on desktop
        // Home section at scrollTop 0: visually shows content at 40px (container padding) + 48px (home padding) = 88px from container top
        // Other sections have py-12 md:py-20 = 80px top padding
        // To align section's content (which starts at section top + 80px) at same visual position as home (88px):
        // Visual position of section content = scrollTop + containerPadding + sectionPosition + sectionPadding
        // We want: scrollTop + 40px + sectionPosition + 80px = 88px
        // Therefore: scrollTop = 88px - 40px - sectionPosition - 80px = -32px - sectionPosition (always negative!)
        // This means we can't align it this way.
        
        // Alternative: Align section's top edge visually where home's content starts (88px)
        // scrollTop + 40px + sectionPosition = 88px
        // scrollTop = 48px - sectionPosition
        // But for sections after home, sectionPosition > 0, so scrollTop < 48px, which is too small
        
        // Better approach: Align section's content visually at same position as home's content
        // scrollTop + containerPadding + sectionPosition + sectionTopPadding = homeContentStart
        // scrollTop = homeContentStart - containerPadding - sectionPosition - sectionTopPadding
        const containerPadding = 40; // md:pt-10 = 40px
        const homePadding = 48; // md:pt-12 = 48px
        const homeContentStart = containerPadding + homePadding; // 88px
        const sectionTopPadding = 80; // md:py-20 = 80px
        
        // scrollTop = 88 - 40 - sectionPosition - 80 = -32 - sectionPosition (wrong!)
        // Let me recalculate: we want the section's top padding area to align with container padding + home padding area
        // Actually, we want section's CONTENT (not padding) to align with home's CONTENT
        // Section content starts at: sectionPosition + sectionTopPadding from containerContent top
        // Home content starts at: 0 + homePadding = 48px from containerContent top
        // When home is at scrollTop 0, home content is visually at: containerPadding (40px) + homePadding (48px) = 88px from container top
        // To align section content at same visual position:
        // scrollTop + containerPadding + sectionPosition + sectionTopPadding = 88px
        // scrollTop = 88px - 40px - sectionPosition - 80px = -32px - sectionPosition
        // This will always be negative for sections after home, which means we can't align content this way.
        
        // Instead, align section's top edge where home content starts:
        // scrollTop + containerPadding + sectionPosition = homeContentStart
        // scrollTop = 88px - 40px - sectionPosition = 48px - sectionPosition
        // But for sections, sectionPosition is large (e.g., 1000px), so this would be negative
        
        // Correct approach: When scrollTop = 0, home's content is at 88px visual position
        // For section, we want its content at 88px visual position
        // section content position in container = sectionPosition + sectionTopPadding
        // visual position = scrollTop + containerPadding + sectionPosition + sectionTopPadding
        // We want: scrollTop + 40 + sectionPosition + 80 = 88
        // scrollTop = 88 - 40 - sectionPosition - 80 = -32 - sectionPosition (negative!)
        
        // The issue is sections have MORE padding than home, so we can't align content this way
        // Instead, let's align the section's top edge with where home's content starts, accounting for padding difference
        // We want section's content to visually appear where home's content is (at 88px)
        // Since section has 80px padding vs home's 48px, we have 32px extra padding
        // So we need to scroll section up by 32px more than if they had same padding
        const paddingDifference = sectionTopPadding - homePadding; // 32px
        const targetScroll = Math.max(0, sectionPosition - containerPadding - paddingDifference);
        
        scrollContainer.scrollTo({ top: targetScroll, behavior: 'smooth' });
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

