'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '10K+', label: 'Happy Clients' },
    { number: '50+', label: 'Countries' },
    { number: '100M+', label: 'Users Worldwide' },
    { number: '99.9%', label: 'Uptime' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To empower businesses worldwide with innovative technology solutions that drive growth and success.',
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To become the global leader in digital transformation, making advanced technology accessible to everyone.',
    },
    {
      icon: '💎',
      title: 'Our Values',
      description: 'Innovation, integrity, excellence, and customer success are at the heart of everything we do.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re passionate about creating solutions that make a difference
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2e3b63] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 bg-gray-50 rounded-2xl"
            >
              <div className="text-6xl mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-[#2e3b63]">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#2e3b63] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h3>
            <p className="text-lg mb-4 opacity-90">
              Founded in 2020, we started with a simple mission: to make technology accessible and powerful for everyone.
              What began as a small team of passionate innovators has grown into a global company serving millions of users worldwide.
            </p>
            <p className="text-lg opacity-90">
              Today, we continue to push boundaries, innovate relentlessly, and put our customers at the center of everything we do.
              Our journey is just beginning, and we&apos;re excited to shape the future of technology together with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

