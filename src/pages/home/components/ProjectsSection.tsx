import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../../../mocks/projects';

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-600"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full whitespace-nowrap">
            {project.role}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-accent font-medium uppercase tracking-wide">
            {project.category}
          </span>
          <button className="text-accent hover:text-accent-dark transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap">
            View Case Study
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-5xl font-bold whitespace-nowrap">Selected Projects</h2>
            <div className="flex-1 h-px bg-accent"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;