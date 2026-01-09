import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../../../mocks/projects';

const ExperienceCard = ({ experience, index }: { experience: typeof experienceData[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`w-full md:w-[480px] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
      >
        <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden flex-shrink-0">
              <img src={experience.logo} alt={experience.company} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{experience.position}</h3>
              <p className="text-accent font-medium">{experience.company}</p>
            </div>
            <span className="text-sm text-gray-500 whitespace-nowrap">{experience.duration}</span>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>

          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                <i className="ri-checkbox-circle-fill text-accent mt-0.5 flex-shrink-0"></i>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-lg hidden md:block"
      ></motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {experienceData.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;