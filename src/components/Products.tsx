'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { getHomepageProducts } from '@/data/products';

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Get products - limit to 8 for mobile, 16 for desktop
  const allProducts = getHomepageProducts();
  const products = allProducts.slice(0, 8); // Always show first 8 products

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="products" className="py-2 sm:py-3 md:py-6 lg:py-9 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 text-[#2e3b63]">
            Sản Phẩm Của Chúng Tôi
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những sản phẩm chất lượng cao từ Thái Lan
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-yellow-500 flex flex-col"
            >
              {/* Product Image - 1:1 Ratio */}
              <div className="relative w-full pt-[100%] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                {/* Subcategory Name - Small, Left Aligned */}
                {product.subcategory && (
                  <p className="text-xs text-[#2e3b63] font-medium mb-1 uppercase tracking-wide">
                    {product.subcategory}
                  </p>
                )}

                {/* Product Name */}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#2e3b63] mb-auto">
                  {product.title}
                </h3>

                {/* Button at Bottom - Links to individual product detail page */}
                <Link href={`/san-pham/${product.slug}`} className="mt-3 sm:mt-4 w-full block">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-[#ca993b] text-white rounded-lg font-medium hover:bg-[#b8883a] transition-colors text-sm sm:text-base"
                  >
                    Xem chi tiết
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 lg:mt-12 text-center"
        >
          <Link href="/san-pham">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-[#2e3b63] text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-[#1f2a45] transition-colors shadow-lg hover:shadow-xl"
            >
              Xem tất cả sản phẩm
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

