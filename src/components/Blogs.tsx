'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Blogs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogs = [
    {
      category: 'Technology',
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming the way businesses operate and make decisions in 2025.',
      author: 'John Doe',
      date: 'Oct 15, 2025',
      readTime: '5 min read',
      image: '🤖',
    },
    {
      category: 'Design',
      title: 'Modern UI/UX Trends',
      excerpt: 'Discover the latest design trends that are shaping user experiences across digital platforms.',
      author: 'Jane Smith',
      date: 'Oct 12, 2025',
      readTime: '4 min read',
      image: '🎨',
    },
    {
      category: 'Development',
      title: 'Building Scalable Applications',
      excerpt: 'Learn best practices for creating applications that can grow with your business needs.',
      author: 'Mike Johnson',
      date: 'Oct 10, 2025',
      readTime: '7 min read',
      image: '💻',
    },
    {
      category: 'Business',
      title: 'Digital Transformation Strategy',
      excerpt: 'A comprehensive guide to successfully implementing digital transformation in your organization.',
      author: 'Sarah Williams',
      date: 'Oct 8, 2025',
      readTime: '6 min read',
      image: '📈',
    },
    {
      category: 'Security',
      title: 'Cybersecurity Best Practices',
      excerpt: 'Essential security measures every business should implement to protect their digital assets.',
      author: 'Tom Brown',
      date: 'Oct 5, 2025',
      readTime: '5 min read',
      image: '🔒',
    },
    {
      category: 'Innovation',
      title: 'Web3 and the Metaverse',
      excerpt: 'Understanding the next generation of the internet and its potential impact on businesses.',
      author: 'Lisa Anderson',
      date: 'Oct 1, 2025',
      readTime: '8 min read',
      image: '🌐',
    },
  ];

  return (
    <section id="blogs" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our experts
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl mb-4">
                  <span className="text-8xl">{blog.image}</span>
                </div>
                
                <div className="mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">{blog.author}</div>
                    <div>{blog.date}</div>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400">{blog.readTime}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

