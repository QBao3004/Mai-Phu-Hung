'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories = [
    { 
      name: 'Nước giặt Thái Lan', 
      count: 34,
      subcategories: ['Deemee', 'Hygiene', 'Essence', 'D-nee', 'Fineline', 'Okashi']
    },
    { 
      name: 'Nước xả Thái Lan', 
      count: 63,
      subcategories: ['Hygiene', 'Comfort', 'Fresh&Soft']
    },
    { 
      name: 'Nước tẩy rửa', 
      count: 12,
      subcategories: ['Deemee', 'Duck', 'Okay', 'Vixol', 'Cốc thả bồn cầu Hàn Quốc']
    },
    { 
      name: 'Thực phẩm Thái Lan', 
      count: 24,
      subcategories: ['Bánh que Ticky', 'Bánh Quy Magic', 'Bánh xốp Jumpo', 'Bánh xốp Rinny']
    },
    { 
      name: 'Nước lau sàn', 
      count: 10,
      subcategories: ['Okay']
    },
    { 
      name: 'Sữa tắm', 
      count: 8,
      subcategories: ['Mistine Top Country', 'Sofia', 'Algermarin']
    },
    { 
      name: 'Nước rửa chén', 
      count: 8,
      subcategories: ['Okashi', 'Lipon']
    },
    { 
      name: 'Chăm sóc da', 
      count: 3,
      subcategories: ['Vaseline']
    },
  ];

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-5 bg-gradient-to-b from-white to-gray-50">
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          {/* Product Categories - Left Side (Smaller) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 border-2 border-[#ca993b] rounded-xl p-5 bg-transparent"
          >
            <h2 className="text-3xl font-bold mb-5 text-[#2e3b63]">
              Danh Mục Sản Phẩm
            </h2>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Parent Category */}
                  <div
                    onClick={() => toggleCategory(index)}
                    className="flex items-center justify-between p-2.5 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <motion.svg
                        animate={{ rotate: expandedCategory === index ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-4 h-4 text-[#ca993b] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                      <span className="text-gray-800 font-medium text-base">
                        {category.name}
                      </span>
                    </div>
                    {category.count && (
                      <span className="text-[#ca993b] font-semibold text-base">
                        {category.count.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Subcategories */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCategory === index ? 'auto' : 0,
                      opacity: expandedCategory === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-2 pt-1 bg-gray-50">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <motion.a
                          key={subIndex}
                          href="#products"
                          whileHover={{ x: 5 }}
                          className="block py-1.5 px-3 text-sm text-gray-600 hover:text-[#ca993b] transition-colors rounded hover:bg-white"
                        >
                          • {subcategory}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Banner Image - Right Side (Larger) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/hero.jpg" 
                alt="Mai Phú Hưng Banner" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback if banner image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-[600px] bg-gradient-to-br from-[#2e3b63] to-[#ca993b] flex items-center justify-center"><div class="text-white text-center"><h2 class="text-5xl font-bold mb-4">Mai Phú Hưng</h2><p class="text-2xl">Chuyên cung cấp sản phẩm chất lượng từ Thái Lan</p></div></div>';
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

