'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && target && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Sản phẩm', href: '/san-pham' },
    { name: 'Về Chúng Tôi', href: '/ve-chung-toi' },
    { name: 'Blogs', href: '/tin-tuc'},
    { name: 'Liên hệ', href: '/lien-he' },
    { name: 'Tuyển dụng', href: '/tuyen-dung' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'bg-[#2e3b63] shadow-lg' : 'bg-[#2e3b63]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.15 }}
            className="flex items-center"
          >
            <img
              src="/mph1.png"
              alt="Mai Phú Hưng"
              className="h-15 sm:h-12 md:h-16 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#ca993b] transition-colors font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Hotline */}
          <motion.a
            href="tel:0798868886"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2 bg-[#ca993b] text-white rounded-full font-medium hover:shadow-lg transition-shadow whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>079.886.8886</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 sm:p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-4 sm:w-6 sm:h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Logo Section */}
              <div className="py-2.5 px-6 border-b border-gray-200 flex justify-center">
                <motion.a
                  href="/"
                  className="h-15 w-auto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <img
                    src="/mph1.png"
                    alt="Mai Phú Hưng Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.a>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 pt-6 pb-8 px-6 overflow-y-auto">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center py-3 px-4 rounded-lg text-lg font-medium text-gray-800 hover:bg-[#FFD700]/10 hover:text-[#D58800] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                      <svg className="w-5 h-5 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </nav>

              {/* Contact Section */}
              <div className="py-4 px-6 border-t border-gray-200 bg-gray-50">
                <p className="text-sm font-medium text-gray-900 mb-3">Liên Hệ Với Chúng Tôi</p>
                <div className="space-y-2">
                  <a href="tel:0798868886" className="flex items-center text-sm text-gray-600 hover:text-[#D58800] transition-colors">
                    <svg className="w-4 h-4 mr-2 text-[#D58800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    079.886.8886
                  </a>
                  <a href="mailto:maiphuhung79@gmail.com" className="flex items-center text-sm text-gray-600 hover:text-[#D58800] transition-colors">
                    <svg className="w-4 h-4 mr-2 text-[#D58800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    maiphuhung79@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

