import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogData } from '../../../mocks/projects';

const BlogCard = ({ post, index }: { post: typeof blogData[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full whitespace-nowrap">
            {post.date}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-3">
          <span className="text-xs text-accent font-semibold uppercase tracking-wide">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-4 line-clamp-2 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.readTime}</span>
          <button className="text-accent hover:text-accent-dark transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap">
            Read More
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="thoughts" ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-20"
        >
          <h2 className="text-5xl font-bold">Latest Thoughts</h2>
          <button className="text-accent hover:text-accent-dark transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap">
            View All Articles
            <i className="ri-arrow-right-line"></i>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;