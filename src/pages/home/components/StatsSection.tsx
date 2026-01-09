import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface StatProps {
  end: number;
  label: string;
  delay: number;
  inView: boolean;
}

const StatCounter = ({ end, label, delay, inView }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;

    const timer = setTimeout(() => {
      let current = 0;
      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, end, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="text-6xl md:text-7xl font-bold mb-3">
        <span className="text-accent">+</span>
        {count}
      </div>
      <div className="text-sm uppercase tracking-widest text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { end: 6, label: 'Years Experience' },
    { end: 50, label: 'Projects Completed' },
    { end: 30, label: 'Clients Worldwide' },
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              end={stat.end}
              label={stat.label}
              delay={index * 200}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;