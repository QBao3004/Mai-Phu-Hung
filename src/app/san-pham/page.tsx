'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useMemo, memo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getAllProducts, getCategoryCounts, getSubcategoryCounts, type Product } from '@/data/products';

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
        {/* Subcategory Badge */}
        {product.subcategory && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
            <div className="bg-[#2e3b63] text-white px-2 py-1 sm:px-3 rounded-full text-xs font-medium">
              {product.subcategory}
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-bold text-[#2e3b63] mb-2 sm:mb-3 line-clamp-2">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow line-clamp-2 sm:line-clamp-3 overflow-hidden">
          {product.description}
        </p>

        {/* Button */}
        <Link href={`/san-pham/${product.slug}`} className="w-full">
          <button
            className="w-full py-2.5 sm:py-3 bg-[#ca993b] text-white rounded-lg font-medium hover:bg-[#b8883a] transition-colors active:scale-95 text-sm sm:text-base touch-manipulation"
          >
            <span className="sm:hidden">Xem</span>
            <span className="hidden sm:inline">Xem chi tiết</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

// Main page content component that uses useSearchParams
function SanPhamPageContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  // Dynamic products per page based on device
  const [isMobile, setIsMobile] = useState(false);
  const productsPerPage = isMobile ? 16 : 15;

  // Hero stats for counting animation
  const heroStats = [
    { number: '120+', label: 'Sản phẩm' },
    { number: '15+', label: 'Thương hiệu' },
    { number: '4700+', label: 'Khách hàng' },
    { number: '500+', label: 'Nhà phân phối' },
  ];

  // State for counting animation
  const [heroCounts, setHeroCounts] = useState<number[]>(heroStats.map(() => 0));
  const [hasHeroAnimated, setHasHeroAnimated] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to animate counting
  const animateHeroCount = (targetValue: string, index: number, duration: number = 2000) => {
    const target = parseInt(targetValue.replace(/[^\d]/g, '')) || 0;
    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setHeroCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = currentValue;
        return newCounts;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  // Trigger animation when hero section comes into view
  useEffect(() => {
    if (isHeroInView && !hasHeroAnimated) {
      setHasHeroAnimated(true);
      heroStats.forEach((stat, index) => {
        setTimeout(() => {
          animateHeroCount(stat.number, index);
        }, index * 200); // Stagger the animations
      });
    }
  }, [isHeroInView, hasHeroAnimated]);

  // Get all products from shared data source
  const products = useMemo(() => getAllProducts(), []);

  const categories = useMemo(() => {
    const categoryCounts = getCategoryCounts();
    const totalProducts = products.length;

    return [
      {
        name: 'Tất cả',
        count: totalProducts,
        subcategories: []
      },
      {
        name: 'Nước Giặt',
        count: categoryCounts['Nước Giặt'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Nước Giặt')).sort()
      },
      {
        name: 'Nước Xả',
        count: categoryCounts['Nước Xả'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Nước Xả')).sort()
      },
      {
        name: 'Nước Tẩy Rửa',
        count: categoryCounts['Nước Tẩy Rửa'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Nước Tẩy Rửa')).sort()
      },
      {
        name: 'Nước Lau Sàn',
        count: categoryCounts['Nước Lau Sàn'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Nước Lau Sàn')).sort()
      },
      {
        name: 'Nước Rửa Chén',
        count: categoryCounts['Nước Rửa Chén'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Nước Rửa Chén')).sort()
      },
      {
        name: 'Chăm Sóc Da',
        count: categoryCounts['Chăm Sóc Da'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Chăm Sóc Da')).sort()
      },
      {
        name: 'Thực Phẩm Thái Lan',
        count: categoryCounts['Thực Phẩm Thái Lan'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Thực Phẩm Thái Lan')).sort()
      },
      {
        name: 'Mặt Hàng Khác',
        count: categoryCounts['Mặt Hàng Khác'] || 0,
        subcategories: Object.keys(getSubcategoryCounts('Mặt Hàng Khác')).sort()
      },
    ];
  }, [products]);

  // Read URL parameters and set initial filters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const subcategoryParam = searchParams.get('subcategory');

    if (categoryParam) {
      setSelectedCategory(categoryParam);
      // Find and expand the category if it has subcategories
      const categoryIndex = categories.findIndex(cat => cat.name === categoryParam);
      if (categoryIndex !== -1 && categories[categoryIndex].subcategories.length > 0) {
        setExpandedCategory(categoryIndex);
      }
    }

    if (subcategoryParam) {
      setSelectedSubcategory(subcategoryParam);
    }
  }, [searchParams, categories]);

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
        product.subcategory === selectedSubcategory ||
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
      <section ref={heroRef} className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-[#2e3b63] to-[#1f2a45] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Sản Phẩm Của Chúng Tôi
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              Khám phá bộ sưu tập sản phẩm chất lượng cao từ Thái Lan - Đa dạng, chính hãng, giá tốt nhất
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#ca993b] mb-1 sm:mb-2">
                  {heroCounts[index]}{stat.number.replace(/^\d+/, '')}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content - Sidebar Layout */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Categories - Show all categories on mobile */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="md:hidden mb-8"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <h3 className="text-lg font-bold text-[#2e3b63] mb-4">Danh Mục Sản Phẩm</h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category, index) => (
                    <div
                      key={category.name}
                      className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                    >
                      {/* Parent Category */}
                      <div
                        onClick={() => {
                          handleCategoryChange(category.name);
                          if (category.subcategories.length > 0) {
                            setExpandedCategory(expandedCategory === index ? null : index);
                          }
                        }}
                        className={`flex items-center justify-between cursor-pointer transition-all rounded-md p-2 ${
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
                              className="w-4 h-4 flex-shrink-0"
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
                        <span className="font-semibold text-sm">
                          {category.count}
                        </span>
                      </div>

                      {/* Subcategories */}
                      {category.subcategories.length > 0 && expandedCategory === index && (
                        <motion.div
                          initial={false}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 space-y-1"
                        >
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSubcategoryChange(subcategory);
                              }}
                              className={`block w-full text-left py-1 px-2 text-sm rounded transition-colors ${
                                selectedSubcategory === subcategory
                                  ? 'bg-[#ca993b] text-white font-medium'
                                  : 'text-gray-600 hover:text-[#ca993b] hover:bg-white'
                              }`}
                            >
                              • {subcategory}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Search & Categories - Hidden on mobile */}
            <div className="hidden lg:block w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24">
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
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
                  </div>

                </div>
              </motion.div>

              {currentProducts.length > 0 ? (
                <>
                  {/* Products Grid */}
                  <div
                    ref={ref}
                    className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`}
                  >
                    {currentProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-8 sm:mt-12 flex justify-center items-center gap-1 sm:gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 sm:px-4 rounded-lg font-medium transition-all touch-manipulation ${
                          currentPage === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-[#2e3b63] text-white hover:bg-[#1f2a45] active:scale-95'
                        }`}
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Page Numbers */}
                      <div className="flex gap-1 sm:gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                          // Show first, last, current, and adjacent pages
                          // On very small screens, be more conservative with pagination
                          const shouldShow = (
                            page === 1 ||
                            page === totalPages ||
                            (page >= currentPage - 1 && page <= currentPage + 1) ||
                            (totalPages <= 5) // Show all if 5 or fewer pages
                          );

                          if (shouldShow) {
                            return (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-all active:scale-95 touch-manipulation text-sm sm:text-base ${
                                  currentPage === page
                                    ? 'bg-[#ca993b] text-white shadow-lg'
                                    : 'bg-white text-[#2e3b63] border border-gray-300 hover:bg-gray-100'
                                }`}
                              >
                                {page}
                              </button>
                            );
                          } else if (page === currentPage - 2 || page === currentPage + 2) {
                            return <span key={page} className="px-1 sm:px-2 py-2 text-gray-400 text-sm">...</span>;
                          }
                          return null;
                        })}
                      </div>

                      {/* Next Button */}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 sm:px-4 rounded-lg font-medium transition-all touch-manipulation ${
                          currentPage === totalPages
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-[#2e3b63] text-white hover:bg-[#1f2a45] active:scale-95'
                        }`}
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className={`bg-gray-50 ${isMobile ? 'py-12' : 'py-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isMobile ? 'mb-8' : 'mb-16'}`}>
            <h2 className={`font-bold mb-4 text-[#2e3b63] ${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
              Tại Sao Chọn Mai Phú Hưng?
            </h2>
            <p className={`text-gray-600 max-w-3xl mx-auto ${isMobile ? 'text-base px-4' : 'text-xl'}`}>
              Chúng tôi cam kết mang đến những giá trị tốt nhất cho khách hàng
            </p>
          </div>

          <div className={`grid gap-6 ${isMobile ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
            {[
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Chính Hãng 100%',
                description: 'Tất cả sản phẩm đều được nhập khẩu chính hãng từ Thái Lan',
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Giá Cạnh Tranh',
                description: 'Cam kết giá cả cạnh tranh nhất thị trường',
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Giao Hàng Nhanh',
                description: 'Giao hàng toàn quốc, nhanh chóng và an toàn',
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Hỗ Trợ 24/7',
                description: 'Đội ngũ tư vấn chuyên nghiệp, nhiệt tình',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center ${
                  isMobile ? 'p-4' : 'p-8'
                }`}
              >
                <div className={`text-[#ca993b] flex justify-center ${
                  isMobile ? 'mb-3' : 'mb-4'
                }`}>
                  <div className={isMobile ? 'w-10 h-10' : 'w-16 h-16'}>
                    {item.icon}
                  </div>
                </div>
                <h3 className={`font-bold text-[#2e3b63] ${
                  isMobile ? 'text-base mb-2' : 'text-xl mb-3'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-gray-600 ${
                  isMobile ? 'text-sm leading-relaxed' : ''
                }`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-br from-[#2e3b63] to-[#1f2a45] text-white ${isMobile ? 'py-12' : 'py-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className={`font-bold mb-6 ${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
              Sẵn Sàng Đặt Hàng?
            </h2>
            <p className={`text-gray-300 mb-10 max-w-2xl mx-auto ${isMobile ? 'text-base px-4' : 'text-xl'}`}>
              Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn và báo giá tốt nhất
            </p>
            <div className={`justify-center ${isMobile ? 'flex flex-col gap-3 px-4' : 'flex flex-col sm:flex-row gap-4'}`}>
              <a
                href="tel:0798868886"
                className={`inline-flex items-center justify-center gap-2 bg-[#ca993b] text-white rounded-full font-medium hover:bg-[#b8873a] transition-colors shadow-lg active:scale-95 ${
                  isMobile
                    ? 'px-6 py-3 text-base w-full max-w-sm mx-auto'
                    : 'px-8 py-4 text-lg'
                }`}
              >
                <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {isMobile ? 'Gọi: 079.886.8886' : 'Gọi ngay: 079.886.8886'}
              </a>
              <a
                href="/lien-he"
                className={`inline-flex items-center justify-center gap-2 bg-white text-[#2e3b63] rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg active:scale-95 ${
                  isMobile
                    ? 'px-6 py-3 text-base w-full max-w-sm mx-auto'
                    : 'px-8 py-4 text-lg'
                }`}
              >
                <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// Loading fallback component
function SanPhamPageLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ca993b] mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải sản phẩm...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function SanPhamPage() {
  return (
    <Suspense fallback={<SanPhamPageLoading />}>
      <SanPhamPageContent />
    </Suspense>
  );
}
