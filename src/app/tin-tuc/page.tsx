'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Công nghệ', 'Sản phẩm', 'Tin tức', 'Hướng dẫn'];

  const blogs = [
    {
      id: 1,
      category: 'Công nghệ',
      title: 'Xu hướng công nghệ trong ngành sản xuất 2025',
      excerpt: 'Khám phá những xu hướng công nghệ mới nhất đang thay đổi ngành sản xuất và cách chúng tối ưu hóa quy trình làm việc.',
      author: 'Mai Phú Hưng',
      date: '20 Tháng 10, 2025',
      readTime: '5 phút đọc',
      image: '🏭',
      slug: 'xu-huong-cong-nghe-san-xuat-2025',
    },
    {
      id: 2,
      category: 'Sản phẩm',
      title: 'Giới thiệu dòng sản phẩm mới của Mai Phú Hưng',
      excerpt: 'Tìm hiểu về các sản phẩm chất lượng cao mới nhất được thiết kế đặc biệt cho nhu cầu của doanh nghiệp bạn.',
      author: 'Mai Phú Hưng',
      date: '18 Tháng 10, 2025',
      readTime: '4 phút đọc',
      image: '📦',
      slug: 'gioi-thieu-san-pham-moi',
    },
    {
      id: 3,
      category: 'Tin tức',
      title: 'Mai Phú Hưng mở rộng hoạt động kinh doanh',
      excerpt: 'Công ty Mai Phú Hưng công bố kế hoạch mở rộng quy mô hoạt động và tăng cường đội ngũ nhân sự.',
      author: 'Mai Phú Hưng',
      date: '15 Tháng 10, 2025',
      readTime: '3 phút đọc',
      image: '📰',
      slug: 'mo-rong-hoat-dong',
    },
    {
      id: 4,
      category: 'Hướng dẫn',
      title: 'Cách bảo quản và sử dụng sản phẩm hiệu quả',
      excerpt: 'Hướng dẫn chi tiết về cách bảo quản, sử dụng và khai thác tối đa hiệu quả của sản phẩm.',
      author: 'Mai Phú Hưng',
      date: '12 Tháng 10, 2025',
      readTime: '6 phút đọc',
      image: '📋',
      slug: 'huong-dan-su-dung-san-pham',
    },
    {
      id: 5,
      category: 'Công nghệ',
      title: 'Tự động hóa quy trình sản xuất',
      excerpt: 'Tìm hiểu cách tự động hóa có thể giúp doanh nghiệp của bạn tăng năng suất và giảm chi phí vận hành.',
      author: 'Mai Phú Hưng',
      date: '10 Tháng 10, 2025',
      readTime: '7 phút đọc',
      image: '⚙️',
      slug: 'tu-dong-hoa-san-xuat',
    },
    {
      id: 6,
      category: 'Tin tức',
      title: 'Thành tựu và giải thưởng năm 2024',
      excerpt: 'Nhìn lại những thành tựu đáng tự hào và các giải thưởng mà Mai Phú Hưng đã đạt được trong năm qua.',
      author: 'Mai Phú Hưng',
      date: '5 Tháng 10, 2025',
      readTime: '5 phút đọc',
      image: '🏆',
      slug: 'thanh-tuu-2024',
    },
    {
      id: 7,
      category: 'Sản phẩm',
      title: 'So sánh các dòng sản phẩm chủ lực',
      excerpt: 'Phân tích chi tiết về các dòng sản phẩm để giúp bạn lựa chọn giải pháp phù hợp nhất cho nhu cầu.',
      author: 'Mai Phú Hưng',
      date: '1 Tháng 10, 2025',
      readTime: '8 phút đọc',
      image: '🔍',
      slug: 'so-sanh-san-pham',
    },
    {
      id: 8,
      category: 'Hướng dẫn',
      title: 'Bảo trì định kỳ - Hướng dẫn toàn diện',
      excerpt: 'Quy trình bảo trì định kỳ chi tiết giúp kéo dài tuổi thọ và duy trì hiệu suất tối ưu cho thiết bị.',
      author: 'Mai Phú Hưng',
      date: '28 Tháng 9, 2025',
      readTime: '6 phút đọc',
      image: '🔧',
      slug: 'huong-dan-bao-tri',
    },
    {
      id: 9,
      category: 'Tin tức',
      title: 'Chương trình khuyến mãi đặc biệt tháng 10',
      excerpt: 'Đừng bỏ lỡ các ưu đãi hấp dẫn và chương trình khuyến mãi đặc biệt trong tháng này.',
      author: 'Mai Phú Hưng',
      date: '25 Tháng 9, 2025',
      readTime: '3 phút đọc',
      image: '🎁',
      slug: 'khuyen-mai-thang-10',
    },
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-[#2e3b63] to-[#1f2a45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Tin Tức & Bài Viết
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 md:px-0">
              Cập nhật những tin tức mới nhất, xu hướng công nghệ và kiến thức hữu ích từ Mai Phú Hưng
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#ca993b] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 cursor-pointer h-full"
              >
                <Link href={`/tin-tuc/${blog.slug}`} className="h-full">
                  <div className="p-4 md:p-6 flex flex-col h-full">
                    <div className="flex items-center justify-center w-full h-32 md:h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mb-3 md:mb-4">
                      <span className="text-6xl md:text-8xl">{blog.image}</span>
                    </div>

                    <div className="mb-2 md:mb-3">
                      <span className="px-2 md:px-3 py-1 bg-[#ca993b]/10 text-[#ca993b] text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 hover:text-[#ca993b] transition-colors overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-3 md:pt-4 mt-auto">
                      <div className="text-xs md:text-sm text-gray-500">
                        <div className="font-medium text-gray-700">{blog.author}</div>
                        <div className="text-xs">{blog.date}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 md:px-4 py-2 bg-[#ca993b] text-white rounded-full text-xs md:text-sm font-medium hover:shadow-lg transition-shadow"
                      >
                        Đọc tiếp
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 md:py-16"
            >
              <p className="text-lg md:text-xl text-gray-500">Không tìm thấy bài viết nào trong danh mục này.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

