'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { getAllProducts, type Product } from '@/data/products';
import Head from 'next/head';

type TabType = 'description' | 'features' | 'specifications' | 'usage' | 'benefits' | 'origin' | 'storage';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get all products from shared data source
  const allProducts = useMemo(() => getAllProducts(), []);
  
  // Convert array to object for easy lookup
  const products: Record<string, Product> = useMemo(() => {
    return allProducts.reduce((acc, product) => {
      acc[product.slug] = product;
      return acc;
    }, {} as Record<string, Product>);
  }, [allProducts]);

  const product = products[slug];
  const isFoodProduct = product?.category === 'Thực Phẩm';
  
  // Set initial tab based on product type
  const [activeTab, setActiveTab] = useState<TabType>(isFoodProduct ? 'origin' : 'description');

  // Get related products (same category, different product)
  const relatedProducts = Object.entries(products)
    .filter(([key, p]) => p.category === product.category && key !== slug)
    .slice(0, 3);

  // Update document meta tags for SEO
  useEffect(() => {
    if (product) {
      // Update page title
      document.title = `${product.title} | Mai Phú Hưng`;
      
      // Update meta description
      const metaDescription = product.metaDescription || product.description;
      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', metaDescription);
      
      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', product.title);
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      ogDescription.setAttribute('content', metaDescription);
      
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#2e3b63]">Sản phẩm không tồn tại</h1>
            <p className="text-gray-600 mb-8">Sản phẩm bạn đang tìm kiếm không có sẵn.</p>
            <Link href="/san-pham" className="px-6 py-3 bg-[#ca993b] text-white rounded-full font-semibold hover:shadow-lg transition-shadow inline-block">
              Quay lại trang Sản Phẩm
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* Product Detail Section */}
      <section className={`${isMobile ? 'pt-24 pb-12' : 'pt-32 pb-16'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className={`flex items-center text-xs sm:text-sm md:text-base text-gray-500 ${isMobile ? 'mb-3' : 'mb-6'} px-2 md:px-0`}>
              <Link href="/" className="hover:text-[#ca993b] transition-colors flex-shrink-0">Trang Chủ</Link>
              <span className="mx-1 sm:mx-1.5 md:mx-2 flex-shrink-0 text-gray-400">/</span>
              <Link href="/san-pham" className="hover:text-[#ca993b] transition-colors flex-shrink-0">Sản Phẩm</Link>
              <span className="mx-1 sm:mx-1.5 md:mx-2 flex-shrink-0 text-gray-400">/</span>
              <span className="text-gray-700 break-words font-medium">{product.title}</span>
            </div>

             <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${isMobile ? 'mb-8' : 'mb-12 lg:mb-16'}`}>
               {/* Product Image Gallery */}
               <div className="flex flex-col items-center">
                 {/* Main Image Display */}
                 <div className={`bg-white rounded-lg overflow-hidden ${isMobile ? 'mb-4' : 'mb-6'} aspect-square relative w-full ${isMobile ? 'max-w-sm' : 'max-w-md'} border-2 border-[#ca993b] group`}>
                   {product.isNew && (
                     <div className="absolute top-4 right-4 z-10 rounded-md bg-[#F8D43E] px-3 py-1 text-sm font-bold text-white shadow-md">
                       MỚI
                     </div>
                   )}
                   <img 
                     src={selectedImage === -1 ? product.image : (product.images?.[selectedImage] || product.image)} 
                     alt={product.title}
                     className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 cursor-zoom-in p-4"
                   />
                 </div>
                 
                 {/* Thumbnail Gallery - Show only if there are additional images */}
                 {product.images && product.images.length > 0 && (
                   <div className={`w-full ${isMobile ? 'max-w-sm' : 'max-w-md'}`}>
                     <p className={`text-sm text-gray-600 ${isMobile ? 'mb-2' : 'mb-3'} text-center`}>Hình ảnh sản phẩm:</p>
                     <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-4'} gap-3`}>
                       {/* Main product image as first thumbnail */}
                       <div 
                         onClick={() => setSelectedImage(-1)}
                         className={`bg-white border-2 rounded-md overflow-hidden cursor-pointer aspect-square relative transition-all ${
                           selectedImage === -1
                             ? 'border-[#ca993b] ring-2 ring-[#ca993b]/30 shadow-md' 
                             : 'border-gray-300 hover:border-[#ca993b]'
                         }`}
                       >
                         <img 
                           src={product.image} 
                           alt={`${product.title} - Ảnh chính`}
                           className="w-full h-full object-contain p-2"
                         />
                       </div>
                       
                       {/* Additional images as thumbnails */}
                       {product.images.map((img, idx) => (
                         <div 
                           key={idx}
                           onClick={() => setSelectedImage(idx)}
                           className={`bg-white border-2 rounded-md overflow-hidden cursor-pointer aspect-square relative transition-all ${
                             selectedImage === idx 
                               ? 'border-[#ca993b] ring-2 ring-[#ca993b]/30 shadow-md' 
                               : 'border-gray-300 hover:border-[#ca993b]'
                           }`}
                         >
                           <img 
                             src={img} 
                             alt={`${product.title} - Ảnh ${idx + 2}`}
                             className="w-full h-full object-contain p-2"
                           />
                         </div>
                       ))}
                     </div>
                   </div>
                 )}
               </div>

               {/* Product Info */}
               <div>
                 <h2 className={`font-bold text-gray-800 mb-2 leading-tight overflow-wrap-anywhere ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>
                   {product.title}
                 </h2>

                 {/* Status Badges */}
                 <div className={`${isMobile ? 'mb-4' : 'mb-6'}`}>
                  <div className="flex items-center gap-2 flex-wrap">
                     {product.isNew && (
                       <div className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded">
                         Sản phẩm mới
                       </div>
                     )}
                    {product.subcategory && (
                      <div className="bg-[#2e3b63]/10 text-[#2e3b63] text-xs font-bold px-2 py-1 rounded">
                        {product.subcategory}
                     </div>
                    )}
                   </div>
                   {product.inStock !== false && (
                     <div className="mt-2 text-sm text-green-600 font-medium">
                       Còn hàng
                     </div>
                   )}
                 </div>

                 {/* Description */}
                 <div className="mb-6 sm:mb-8">
                   <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-2">Mô tả</h3>
                   <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{product.description}</p>
                 </div>

                 {/* CTA Button */}
                 <div className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
                   <Link
                     href="/lien-he"
                     className={`w-full block bg-[#2e3b63] hover:bg-[#1f2a45] text-white font-medium ${isMobile ? 'py-2.5 px-4' : 'py-3 px-6'} rounded-md flex items-center justify-center transition-colors text-sm sm:text-base`}
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                     Liên hệ tư vấn và đặt hàng
                   </Link>
                 </div>
               </div>
             </div>

             {/* Product Details Tabs */}
             <section className={`bg-white ${isMobile ? 'py-8' : 'py-12'}`} id="product-details">
              <div className="max-w-7xl mx-auto px-4">
                {/* Tab Navigation */}
                <div className={`flex flex-wrap border-b border-gray-200 ${isMobile ? 'mb-4 gap-1' : 'mb-6 sm:mb-8'}`}>
                  {isFoodProduct ? (
                    // Food Product Tabs
                    <>
                      <button
                        onClick={() => setActiveTab('origin')}
                        className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                          activeTab === 'origin'
                            ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Xuất xứ
                      </button>
                      <button
                        onClick={() => setActiveTab('usage')}
                        className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                          activeTab === 'usage'
                            ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Hướng dẫn sử dụng
                      </button>
                      <button
                        onClick={() => setActiveTab('storage')}
                        className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                          activeTab === 'storage'
                            ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Bảo quản
                      </button>
                    </>
                  ) : (
                    // Regular Product Tabs
                    <>
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                      activeTab === 'description'
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Mô tả sản phẩm
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                      activeTab === 'features'
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Tính năng
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                      activeTab === 'specifications'
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Thông tin sản phẩm
                  </button>
                  <button
                    onClick={() => setActiveTab('usage')}
                    className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                      activeTab === 'usage'
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Hướng dẫn sử dụng
                  </button>
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`${isMobile ? 'pb-1' : 'pb-3'} text-xs sm:text-sm font-medium whitespace-nowrap px-1 sm:px-2 ${
                      activeTab === 'benefits'
                        ? 'text-[#2e3b63] border-b-2 border-[#2e3b63]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Lợi ích
                  </button>
                    </>
                  )}
                </div>

                {/* Tab Content */}
                <div className={`bg-white rounded-lg shadow-sm ${isMobile ? 'p-3' : 'p-4 sm:p-6 lg:p-8'}`}>
                  {/* Origin Tab (Food Products) */}
                  {activeTab === 'origin' && isFoodProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Xuất xứ sản phẩm</h3>
                      <div className="prose max-w-none text-gray-700">
                        <p className={`${isMobile ? 'mb-3' : 'mb-4'} leading-relaxed break-words`}>{product.description}</p>
                        <div className={`space-y-3 ${isMobile ? 'mt-4' : 'mt-6'}`}>
                          {product.specifications.map((spec, idx) => (
                            <div key={idx} className={`py-3 border-b border-gray-100 ${isMobile ? 'block space-y-1' : 'flex justify-between items-center'}`}>
                              <span className={`font-medium text-gray-700 ${isMobile ? 'block' : 'inline'}`}>{spec.label}</span>
                              <span className={`text-gray-600 ${isMobile ? 'block font-medium' : 'inline'}`}>{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Storage Tab (Food Products) */}
                  {activeTab === 'storage' && isFoodProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Hướng dẫn bảo quản</h3>
                      <div className="prose max-w-none text-gray-700">
                        <ul className={`space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                          <li className="flex items-start gap-3">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span className="break-words">Bảo quản nơi khô ráo, thoáng mát</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span className="break-words">Tránh ánh nắng trực tiếp và nhiệt độ cao</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span className="break-words">Đậy kín nắp sau khi sử dụng</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span className="break-words">Sử dụng trong thời hạn ghi trên bao bì</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span className="break-words">Để xa tầm tay trẻ em</span>
                          </li>
                        </ul>
                        <div className={`mt-6 bg-yellow-50 border-l-4 border-yellow-400 rounded ${isMobile ? 'p-3' : 'p-4'}`}>
                          <p className={`text-gray-700 break-words ${isMobile ? 'text-xs' : 'text-sm'}`}>
                            <strong>Lưu ý:</strong> Kiểm tra hạn sử dụng trên bao bì trước khi sử dụng. Không sử dụng sản phẩm khi đã hết hạn hoặc có dấu hiệu hư hỏng.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Description Tab */}
                  {activeTab === 'description' && !isFoodProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Chi tiết sản phẩm</h3>
                      <div className="prose max-w-none text-gray-700">
                        <p className={`${isMobile ? 'mb-3' : 'mb-4'} leading-relaxed break-words ${isMobile ? 'text-sm' : ''}`}>{product.description}</p>
                        <p className={`leading-relaxed ${isMobile ? 'text-sm' : ''}`}>
                          {product.category === 'Nước Giặt' && 'Với công thức đậm đặc và hiệu quả cao, sản phẩm giúp loại bỏ vết bẩn cứng đầu, giữ màu sắc quần áo tươi mới và mang lại hương thơm dễ chịu.'}
                          {product.category === 'Nước Tẩy Rửa' && 'Với khả năng tẩy rửa mạnh mẽ và diệt khuẩn hiệu quả, sản phẩm giúp làm sạch và bảo vệ sức khỏe gia đình bạn.'}
                          {product.category === 'Nước Lau Sàn' && 'Sản phẩm giúp làm sạch sàn nhà hiệu quả, diệt khuẩn và để lại hương thơm dễ chịu trong không gian sống.'}
                          {product.category === 'Chăm Sóc Da' && 'Với công thức dịu nhẹ và an toàn, sản phẩm giúp chăm sóc da hiệu quả, mang lại làn da khỏe mạnh và tươi sáng.'}
                          {product.category === 'Thực Phẩm' && 'Sản phẩm chất lượng cao từ Thái Lan, mang đến hương vị đặc trưng và độ an toàn cho sức khỏe.'}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Features Tab */}
                  {activeTab === 'features' && !isFoodProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Đặc điểm nổi bật</h3>
                      <ul className={`space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#2e3b63] mt-1 flex-shrink-0">✓</span>
                            <span className="break-words">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Specifications Tab */}
                  {activeTab === 'specifications' && !isFoodProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Thông tin sản phẩm</h3>
                      <div className={`space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                        {product.specifications.map((spec, idx) => (
                          <div key={idx} className={`py-3 border-b border-gray-100 ${isMobile ? 'block space-y-1' : 'flex justify-between items-center'}`}>
                            <span className={`font-medium text-gray-700 ${isMobile ? 'block' : 'inline'}`}>{spec.label}</span>
                            <span className={`text-gray-600 ${isMobile ? 'block font-medium' : 'inline'}`}>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Usage Tab */}
                  {activeTab === 'usage' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Hướng dẫn sử dụng</h3>
                      <ol className={`space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                        {product.usage.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#2e3b63] font-bold flex-shrink-0 bg-gray-100 w-6 h-6 rounded-full flex items-center justify-center text-sm">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5 break-words">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}

                  {/* Benefits Tab */}
                  {activeTab === 'benefits' && !isFoodProduct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className={`font-semibold text-gray-800 ${isMobile ? 'text-lg mb-3' : 'text-xl mb-4'}`}>Lợi ích sử dụng sản phẩm</h3>
                      <ul className={`space-y-3 ${isMobile ? 'text-sm' : ''}`}>
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#ca993b] mt-1 flex-shrink-0">★</span>
                            <span className="break-words">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
               </div>
             </section>
           </motion.div>
         </div>
       </section>

       {/* Contact Form Section */}
       <section className={`bg-gray-50 ${isMobile ? 'py-12' : 'py-16'}`} id="contact">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className={`text-center ${isMobile ? 'mb-6' : 'mb-8 sm:mb-12'}`}>
             <h2 className={`font-bold text-[#2e3b63] mb-4 ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl md:text-4xl'}`}>
               Liên Hệ Đặt Hàng
             </h2>
             <p className={`text-gray-600 ${isMobile ? 'text-sm' : 'text-base sm:text-lg'}`}>
               Để lại thông tin của bạn, chúng tôi sẽ liên hệ ngay
             </p>
           </div>

           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start ${isMobile ? 'gap-6' : ''}`}>
             {/* Contact Form */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${isMobile ? 'p-3 min-h-[450px]' : 'p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px]'}`}
             >
               <form className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                     Họ và tên <span className="text-red-500">*</span>
                   </label>
                   <input
                     type="text"
                     id="name"
                     name="name"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent"
                     placeholder="Nhập họ và tên"
                   />
                 </div>

                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                     Số điện thoại <span className="text-red-500">*</span>
                   </label>
                   <input
                     type="tel"
                     id="phone"
                     name="phone"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent"
                     placeholder="Nhập số điện thoại"
                   />
                 </div>

                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                     Email <span className="text-red-500">*</span>
                   </label>
                   <input
                     type="email"
                     id="email"
                     name="email"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent"
                     placeholder="Nhập địa chỉ email"
                   />
                 </div>

                 <div>
                   <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 mb-1">
                     Mô hình kinh doanh <span className="text-red-500">*</span>
                   </label>
                   <select
                     id="businessModel"
                     name="businessModel"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ca993b] bg-white cursor-pointer hover:border-gray-400 transition-colors"
                   >
                     <option value="">Chọn mô hình kinh doanh</option>
                     <option value="distributor">Nhà phân phối, đại lý</option>
                     <option value="store">Cửa hàng</option>
                     <option value="online">Bán hàng online</option>
                     <option value="other">Khác</option>
                   </select>
                 </div>

                 {/* Product Info */}
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                   <p className="text-sm text-gray-700">
                     <strong>Sản phẩm quan tâm:</strong> {product.title}
                   </p>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                     Lời nhắn
                   </label>
                   <textarea
                     id="message"
                     name="message"
                     rows={4}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ca993b] focus:border-transparent resize-none"
                     placeholder="Nhập lời nhắn của bạn"
                   />
                 </div>

                 <motion.button
                   whileHover={{ opacity: 0.9 }}
                   whileTap={{ scale: 0.98 }}
                   type="submit"
                   className="w-full bg-gradient-to-r from-[#ca993b] to-[#b8883a] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center"
                 >
                   Gửi Tin Nhắn
                 </motion.button>
               </form>
             </motion.div>

             {/* Contact Information */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="lg:sticky lg:top-32"
             >
               <div className={`bg-[#2e3b63] rounded-xl shadow-lg text-white h-full ${isMobile ? 'p-3 min-h-[450px]' : 'p-4 sm:p-6 lg:p-8 min-h-[500px] sm:min-h-[600px]'}`}>
                 <div className="space-y-6">
                   {/* Phone */}
                   <div className="flex items-start">
                     <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                     </div>
                     <div className="ml-4">
                       <h4 className="font-medium text-white">Điện Thoại</h4>
                       <p className="text-white/80 text-sm">079.886.8886</p>
                     </div>
                   </div>

                   {/* Email */}
                   <div className="flex items-start">
                     <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div className="ml-4">
                       <h4 className="font-medium text-white">Email</h4>
                       <p className="text-white/80 text-sm">maiphuhung79@gmail.com</p>
                     </div>
                   </div>

                   {/* Address */}
                   <div className="flex items-start">
                     <div className="bg-white/20 p-2 rounded-full flex-shrink-0 mt-1">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                     </div>
                     <div className="ml-4">
                       <h4 className="font-medium text-white">Địa Chỉ</h4>
                       <p className="text-white/80 text-sm">31 Dân Tộc, P. Tân Sơn Nhì, TP. Hồ Chí Minh</p>
                     </div>
                   </div>
                 </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-medium text-white mb-4">Theo dõi chúng tôi</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/maiphuhungvn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@congtytnhhmaiphuhung/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>

                 {/* Map */}
                 <div className="mt-8">
                   <div className="rounded-lg overflow-hidden border-2 border-white/20 h-[200px] w-full">
                     <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.3067342279273!2d106.6338362241183!3d10.794488331183551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3d98c77d09%3A0x4649ab36813418e9!2zTWFpIFBow7ogSMawbmcgLSBIw6BuZyBUaMOhaSBDaMOtbmggSMOjbmc!5e0!3m2!1svi!2s!4v1745295658845!5m2!1svi!2s"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Vị trí Mai Phú Hưng"
                     ></iframe>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

       {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className={`bg-gray-50 ${isMobile ? 'py-12' : 'py-16'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`font-bold mb-6 text-[#2e3b63] ${isMobile ? 'text-xl' : 'text-2xl'}`}>Sản Phẩm Liên Quan</h2>
            <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
              {relatedProducts.map(([key, relatedProduct], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                >
                  <Link href={`/san-pham/${key}`}>
                    <div className="relative w-full pt-[100%] bg-gray-100">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="px-2 py-1 bg-[#ca993b]/10 text-[#ca993b] text-xs font-semibold rounded-full">
                          {relatedProduct.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold mb-1 hover:text-[#ca993b] transition-colors line-clamp-1">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

