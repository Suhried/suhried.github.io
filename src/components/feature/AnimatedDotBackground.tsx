import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  blur: number;
}

interface AnimatedDotBackgroundProps {
  dotCount?: number;
  mobileDotCount?: number;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

export default function AnimatedDotBackground({ 
  dotCount = 80, 
  mobileDotCount = 40,
  scrollContainerRef
}: AnimatedDotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const dotsRef = useRef<Dot[]>([]);
  const scrollOffsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Determine dot count based on screen size
    const isMobile = window.innerWidth < 768;
    const totalDots = isMobile ? mobileDotCount : dotCount;

    // Initialize dots with 3 depth layers
    const initializeDots = () => {
      dotsRef.current = [];
      
      // Layer 1: Small dots, very slow, low opacity (40% of dots)
      const layer1Count = Math.floor(totalDots * 0.4);
      for (let i = 0; i < layer1Count; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: 2 + Math.random() * 0.5,
          opacity: 0.4 + Math.random() * 0.2,
          blur: Math.random() * 0.3,
        });
      }

      // Layer 2: Medium dots, slightly faster, medium opacity (40% of dots)
      const layer2Count = Math.floor(totalDots * 0.4);
      for (let i = 0; i < layer2Count; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: 2.5 + Math.random() * 0.5,
          opacity: 0.5 + Math.random() * 0.2,
          blur: Math.random() * 0.2,
        });
      }

      // Layer 3: Few brighter dots, slightly faster, higher opacity (20% of dots)
      const layer3Count = totalDots - layer1Count - layer2Count;
      for (let i = 0; i < layer3Count; i++) {
        dotsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          size: 3 + Math.random() * 0.5,
          opacity: 0.6 + Math.random() * 0.2,
          blur: Math.random() * 0.1,
        });
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      // Reinitialize dots on resize to fill new canvas size
      initializeDots();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    initializeDots();

    // Subtle scroll-based parallax
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef?.current || window;
      const scrollY = scrollContainerRef?.current?.scrollTop || window.scrollY;
      scrollOffsetRef.current = {
        x: 0,
        y: scrollY * 0.01,
      };
    };
    
    // Listen to the custom scroll container or window scroll
    const scrollContainer = scrollContainerRef?.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = '#0B0B0B';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const dots = dotsRef.current;
      const offset = scrollOffsetRef.current;

      dots.forEach((dot) => {
        // Move dot
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.y < 0) dot.y = canvas.height;
        if (dot.y > canvas.height) dot.y = 0;

        // Calculate draw position with subtle scroll parallax offset
        const drawX = dot.x + offset.x;
        const drawY = dot.y + offset.y;

        // Draw dot with blur effect
        ctx.save();
        ctx.globalAlpha = dot.opacity;
        if (dot.blur > 0) {
          ctx.filter = `blur(${dot.blur}px)`;
        }
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(drawX, drawY, dot.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      const scrollContainer = scrollContainerRef?.current;
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dotCount, mobileDotCount, scrollContainerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0B0B0B' }}
    />
  );
}

