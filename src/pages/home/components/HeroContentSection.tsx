import { useEffect, useState } from 'react';

export default function HeroContentSection() {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const yearsTarget = 4;
    const projectsTarget = 50;
    const clientsTarget = 15;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setYearsCount(Math.floor(yearsTarget * progress));
      setProjectsCount(Math.floor(projectsTarget * progress));
      setClientsCount(Math.floor(clientsTarget * progress));

      if (step >= steps) {
        clearInterval(timer);
        setYearsCount(yearsTarget);
        setProjectsCount(projectsTarget);
        setClientsCount(clientsTarget);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="flex items-start pt-8 md:pt-12 pb-12 md:pb-20">
      <div className="w-full max-w-7xl mx-auto px-6 md:pl-8 md:pr-12">
        {/* Main Headline */}
        <div className="mb-8">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="text-white">DEVOPS &</span>
            <br />
            <span className="text-white">CLOUD</span>{' '}
            <span className="text-[#353334]">ARCHITECT</span>
          </h1>
          <p className="text-sm md:text-xl text-[#9A9A9A] leading-relaxed max-w-[500px] mb-6">
            Building scalable Kubernetes platforms, automating <br />
            and architecting cloud infrastructure at scale.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-row justify-start gap-4 md:gap-12 mb-12 overflow-x-auto">
          <div className="text-left flex-shrink-0">
            <div className="text-4xl md:text-6xl font-black mb-2">+{yearsCount}</div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-[#9A9A9A] leading-snug font-medium">
              YEARS<br />EXPERIENCE
            </div>
          </div>
          <div className="text-left flex-shrink-0">
            <div className="text-4xl md:text-6xl font-black mb-2">{projectsCount}%</div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-[#9A9A9A] leading-snug font-medium">
              COST<br />REDUCTION
            </div>
          </div>
          <div className="text-left flex-shrink-0">
            <div className="text-4xl md:text-6xl font-black mb-2">99.{clientsCount}%</div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-[#9A9A9A] leading-snug font-medium">
              UPTIME<br />SLA
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-4 max-w-[650px]">
          {/* Orange Card */}
          <div
            className="bg-gradient-to-br from-[#F36A2F] to-[#FF8A4C] rounded-[20px] p-6 md:p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F36A2F]/30"
            style={{
              animation: 'slideUp 1s ease-out 0.3s forwards',
              opacity: 0,
            }}
          >
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-2 border-white rounded-full -ml-12 -mb-12"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                CLOUD ARCHITECTURE
              </h3>
              <div className="mt-4 w-12 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Green Card */}
          <div
            className="bg-gradient-to-br from-[#C8FF3D] to-[#B8EF2D] rounded-[20px] p-6 md:p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#C8FF3D]/30"
            style={{
              animation: 'slideUp 1s ease-out 0.5s forwards',
              opacity: 0,
            }}
          >
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-black rounded-full -ml-16 -mt-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-black rounded-full -mr-12 -mb-12"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-black text-lg md:text-xl font-bold leading-tight">
                AUTOMATION & SCALE
              </h3>
              <div className="mt-4 w-12 h-1 bg-black/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
