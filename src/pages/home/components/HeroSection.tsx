import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          SUHRIED DATTA{' '}
          <span className="text-accent">—</span>{' '}
          <span className="font-light">CREATIVE TECHNOLOGIST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-light"
        >
          Crafting intuitive, engaging digital experiences with motion design
          and code.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-white rounded-full text-lg font-medium hover:bg-accent-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
        >
          View My Work
          <i className="ri-arrow-right-line text-xl"></i>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;