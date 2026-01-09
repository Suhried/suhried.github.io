import { useEffect, useRef } from 'react';

export default function DarkHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20 px-12">
      <div className="max-w-4xl w-full">
        {/* Content */}
        <div ref={heroRef} className="opacity-0 transition-all duration-1000 space-y-12">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              SOFTWARE{' '}
              <span className="text-gradient">ENGINEER</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl">
              Passionate about creating intuitive and engaging user experiences. Specialize in
              transforming ideas into beautifully crafted products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold mb-1">+4</p>
              <p className="text-xs text-gray-500 uppercase">Years of</p>
              <p className="text-xs text-gray-500 uppercase">Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">+46</p>
              <p className="text-xs text-gray-500 uppercase">Projects</p>
              <p className="text-xs text-gray-500 uppercase">Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">+20</p>
              <p className="text-xs text-gray-500 uppercase">Worldwide</p>
              <p className="text-xs text-gray-500 uppercase">Clients</p>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative bg-accent-orange rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="absolute top-4 right-4">
                <i className="ri-arrow-right-up-line text-2xl"></i>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
              <div className="absolute top-0 right-0 bottom-0 w-px bg-white/20" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                DYNAMIC ANIMATION, MOTION DESIGN
              </p>
            </div>

            <div className="relative bg-accent-lime rounded-2xl p-6 overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="absolute top-4 right-4">
                <i className="ri-arrow-right-up-line text-2xl text-gray-900"></i>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-900/20" />
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gray-900/20" />
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                FRAMER, FIGMA, WORDPRESS, REACTJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
