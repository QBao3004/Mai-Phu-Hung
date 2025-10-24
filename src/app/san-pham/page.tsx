'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo, memo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllProducts, type Product } from '@/data/products';

// Memoized Product Card Component for better performance
const ProductCard = memo(({ product, index }: { product: Product; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-1 border-[#ca993b] flex flex-col"
    >
      {/* Product Image */}
      <div className="relative w-full pt-[100%] bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-[#ca993b] text-white px-3 py-1 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-xl font-bold text-[#2e3b63] mb-3">
          {product.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
          {product.description}
        </p>
        
        {/* Button */}
        <Link href={`/san-pham/${product.slug}`} className="w-full">
          <button
            className="w-full py-3 bg-[#ca993b] text-white rounded-lg font-medium hover:bg-[#b8883a] transition-colors active:scale-95"
          >
            Xem chi tiết
          </button>
        </Link>
      </div>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

export default function SanPhamPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const productsPerPage = 15;

  const categories = [
    { 
      name: 'Tất cả', 
      count: 30,
      subcategories: []
    },
    { 
      name: 'Nước Giặt', 
      count: 6,
      subcategories: ['OMO', 'Attack', 'Pao', 'Breeze', 'Ariel', 'Tide']
    },
    { 
      name: 'Nước Xả', 
      count: 5,
      subcategories: ['Comfort', 'Downy', 'Essence', 'Hygiene', 'Lenor']
    },
    { 
      name: 'Nước Tẩy Rửa', 
      count: 4,
      subcategories: ['Sunlight', 'Toilet Duck', 'Vim', 'Mr. Muscle']
    },
    { 
      name: 'Nước Lau Sàn', 
      count: 3,
      subcategories: ['Lipon', 'Kleenso', 'Joy']
    },
    { 
      name: 'Chăm Sóc Da', 
      count: 6,
      subcategories: ['Breeze', 'Nivea', 'Clear', 'Lifebuoy', 'Dove', 'Sunsilk']
    },
    { 
      name: 'Thực Phẩm', 
      count: 6,
      subcategories: ['Mama', 'Nước Mắm', 'Snack', 'Sriracha', 'Trà', 'Pocky']
    },
  ];

  // Get all products from shared data source
  const products = useMemo(() => getAllProducts(), []);

  // Filter products based on category, subcategory, and search query
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'Tất cả') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by subcategory (brand)
    if (selectedSubcategory) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(selectedSubcategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, selectedCategory, selectedSubcategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, productsPerPage]);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when category changes
    setCurrentPage(1);
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(selectedSubcategory === subcategory ? null : subcategory);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-gradient-to-br from-[#2e3b63] to-[#1f2a45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sản Phẩm Của Chúng Tôi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Khám phá bộ sưu tập sản phẩm chất lượng cao từ Thái Lan - Đa dạng, chính hãng, giá tốt nhất
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '100+', label: 'Sản phẩm' },
              { number: '15+', label: 'Thương hiệu' },
              { number: '4700+', label: 'Khách hàng' },
              { number: '500+', label: 'Nhà phân phối' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#ca993b] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content - Sidebar Layout */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Search & Categories */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Search Bar */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-4"
                >
                  <h3 className="text-lg font-bold text-[#2e3b63] mb-4">Tìm Kiếm</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm sản phẩm..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full px-4 py-3 pl-11 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#ca993b] transition-colors text-sm"
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 p-4"
                >
                  <h3 className="text-lg font-bold text-[#2e3b63] mb-4">Danh Mục</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div
                        key={category.name}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                      >
                        {/* Parent Category */}
                        <div
                          onClick={() => {
                            handleCategoryChange(category.name);
                            if (category.subcategories.length > 0) {
                              toggleCategory(index);
                            }
                          }}
                          className={`flex items-center justify-between p-3 transition-all cursor-pointer ${
                            selectedCategory === category.name 
                              ? 'bg-[#2e3b63] text-white' 
                              : 'hover:bg-[#2e3b63] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2 flex-1">
                            {category.subcategories.length > 0 && (
                              <motion.svg
                                animate={{ rotate: expandedCategory === index ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`w-4 h-4 flex-shrink-0 transition-colors ${
                                  selectedCategory === category.name ? 'text-white' : 'text-[#ca993b]'
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            )}
                            <span className="font-medium text-sm">
                              {category.name}
                            </span>
                          </div>
                          {category.count > 0 && (
                            <span className="font-semibold text-sm">
                              {category.count}
                            </span>
                          )}
                        </div>

                        {/* Subcategories */}
                        {category.subcategories.length > 0 && (
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
                                <button
                                  key={subIndex}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSubcategoryChange(subcategory);
                                  }}
                                  className={`block w-full text-left py-1.5 px-3 text-sm rounded transition-colors ${
                                    selectedSubcategory === subcategory
                                      ? 'bg-[#ca993b] text-white font-medium'
                                      : 'text-gray-600 hover:text-[#ca993b] hover:bg-white'
                                  }`}
                                >
                                  • {subcategory}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Products Grid */}
            <div className="flex-1">
              {/* Page Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#2e3b63]">
                  {selectedCategory === 'Tất cả' ? 'Tất Cả Sản Phẩm' : selectedCategory}
                  {selectedSubcategory && (
                    <span className="text-2xl md:text-3xl text-[#ca993b]"> - {selectedSubcategory}</span>
                  )}
                </h2>
                <p className="text-gray-600">
                  Hiển thị {currentProducts.length} sản phẩm trên tổng số {filteredProducts.length} sản phẩm
                  {searchQuery && (
                    <span className="ml-1 text-[#ca993b] font-medium">
                      - Kết quả cho &quot;{searchQuery}&quot;
                    </span>
                  )}
                </p>
              </motion.div>

              {currentProducts.length > 0 ? (
                <>
                  {/* Products Grid */}
                  <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {currentProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          currentPage === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-[#2e3b63] text-white hover:bg-[#1f2a45] active:scale-95'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Page Numbers */}
                      <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                          // Show first, last, current, and adjacent pages
                          if (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1)
                          ) {
                            return (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition-all active:scale-95 ${
                                  currentPage === page
                                    ? 'bg-[#ca993b] text-white shadow-lg'
                                    : 'bg-white text-[#2e3b63] border border-gray-300 hover:bg-gray-100'
                                }`}
                              >
                                {page}
                              </button>
                            );
                          } else if (page === currentPage - 2 || page === currentPage + 2) {
                            return <span key={page} className="px-2 py-2 text-gray-400">...</span>;
                          }
                          return null;
                        })}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          currentPage === totalPages
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-[#2e3b63] text-white hover:bg-[#1f2a45] active:scale-95'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20">
                  <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl text-gray-600 mb-2">Không tìm thấy sản phẩm</p>
                  <p className="text-gray-500">Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
              Tại Sao Chọn Mai Phú Hưng?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến những giá trị tốt nhất cho khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Chính Hãng 100%',
                description: 'Tất cả sản phẩm đều được nhập khẩu chính hãng từ Thái Lan',
              },
              {
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Giá Tốt Nhất',
                description: 'Cam kết giá cả cạnh tranh nhất thị trường',
              },
              {
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Giao Hàng Nhanh',
                description: 'Giao hàng toàn quốc, nhanh chóng và an toàn',
              },
              {
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Hỗ Trợ 24/7',
                description: 'Đội ngũ tư vấn chuyên nghiệp, nhiệt tình',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-[#ca993b] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#2e3b63] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2e3b63] to-[#1f2a45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn Sàng Đặt Hàng?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn và báo giá tốt nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0798868886"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ca993b] text-white rounded-full font-medium hover:bg-[#b8873a] transition-colors text-lg shadow-lg active:scale-95"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Gọi ngay: 079.886.8886
              </a>
              <a
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2e3b63] rounded-full font-medium hover:bg-gray-100 transition-colors text-lg shadow-lg active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Liên hệ qua Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
