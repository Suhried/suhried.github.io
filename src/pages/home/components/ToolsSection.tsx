import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toolsData } from '../../../mocks/projects';

const ToolCard = ({ tool, index }: { tool: typeof toolsData[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-xl border border-gray-200 hover:border-accent transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
    >
      <div className="aspect-square flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 flex items-center justify-center mb-4 text-5xl text-gray-700 group-hover:text-accent transition-colors duration-300">
          <i className={tool.icon}></i>
        </div>
        <h3 className="text-base font-semibold text-center mb-1">{tool.name}</h3>
        <p className="text-xs text-gray-500 text-center">{tool.experience}</p>
      </div>
    </motion.div>
  );
};

const ToolsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tools" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">Tools &amp; Technologies</h2>
          <p className="text-xl text-gray-600">My current tech stack and design arsenal</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {toolsData.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;