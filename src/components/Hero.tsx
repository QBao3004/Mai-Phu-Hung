'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  // Category mapping to match the product page categories
  const categoryMapping: { [key: string]: string } = {
    'Nước giặt Thái Lan': 'Nước Giặt',
    'Nước xả Thái Lan': 'Nước Xả',
    'Nước tẩy rửa': 'Nước Tẩy Rửa',
    'Thực phẩm Thái Lan': 'Thực Phẩm Thái Lan',
    'Nước lau sàn': 'Nước Lau Sàn',
    'Sữa tắm': 'Chăm Sóc Da',
    'Nước rửa chén': 'Nước Tẩy Rửa',
    'Chăm sóc da': 'Chăm Sóc Da',
    'Mặt hàng khác': 'Mặt Hàng Khác',
  };

  // Subcategory mapping to match actual product subcategories
  const subcategoryMapping: { [key: string]: string } = {
    'Bánh que Ticky': 'Ticky',
    'Bánh xốp Jumpo': 'Jumbo',
    'Bánh xốp Rinny': 'Rinny',
    'Bánh Quy Magic': 'Magic',
    'Duck': 'Toilet Duck',
    'Mistine Top Country': 'Breeze',
    'Sofia': 'Dove',
    'Algermarin': 'Nivea',
    'Okashi': 'Sunlight',
  };

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
      count: 30,
      subcategories: ['Bánh que Ticky', 'Bánh Quy Magic', 'Bánh xốp Jumpo', 'Bánh xốp Rinny', 'Thai Ship']
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
    { 
      name: 'Mặt hàng khác', 
      count: 32,
      subcategories: ['Tẩy quần áo Hygiene', 'Kem đánh răng Median 93%', 'Bột giặt Pao', 'Túi thơm Hygiene']
    },
  ];

  const getMappedCategory = (categoryName: string) => {
    return categoryMapping[categoryName] || categoryName;
  };

  const getMappedSubcategory = (subcategoryName: string) => {
    return subcategoryMapping[subcategoryName] || subcategoryName;
  };

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <section id="hero" className="min-h-[105vh] sm:min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-5 bg-gradient-to-b from-white to-gray-50">
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 z-10 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          {/* Product Categories - Left Side (Smaller) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 border-2 border-[#ca993b] rounded-xl p-3 sm:p-5 bg-transparent"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5 text-[#2e3b63]">
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
                  <Link
                    href={`/san-pham?category=${encodeURIComponent(getMappedCategory(category.name))}`}
                    className="block"
                  >
                    <div
                      onClick={(e) => {
                        if (category.subcategories.length > 0) {
                          e.preventDefault();
                          toggleCategory(index);
                        }
                      }}
                      className="flex items-center justify-between p-2 sm:p-2.5 hover:bg-gray-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        {category.subcategories.length > 0 && (
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
                        )}
                        <span className="text-gray-800 font-medium text-sm sm:text-base break-words">
                          {category.name}
                        </span>
                      </div>
                      {category.count && (
                        <span className="text-[#ca993b] font-semibold text-sm sm:text-base flex-shrink-0">
                          {category.count.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </Link>

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
                    <div className="px-3 sm:px-4 pb-2 pt-1 bg-gray-50">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`/san-pham?category=${encodeURIComponent(getMappedCategory(category.name))}&subcategory=${encodeURIComponent(getMappedSubcategory(subcategory))}`}
                        >
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="block py-1.5 px-2 sm:px-3 text-xs sm:text-sm text-gray-600 hover:text-[#ca993b] transition-colors rounded hover:bg-white cursor-pointer break-words overflow-hidden"
                          >
                            <span className="break-words inline-block w-full">{subcategory}</span>
                          </motion.div>
                        </Link>
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
                    parent.innerHTML = '<div class="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#2e3b63] to-[#ca993b] flex items-center justify-center"><div class="text-white text-center px-4"><h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Mai Phú Hưng</h2><p class="text-lg sm:text-xl lg:text-2xl break-words">Chuyên cung cấp sản phẩm<br class="sm:hidden"/> chất lượng từ Thái Lan</p></div></div>';
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

