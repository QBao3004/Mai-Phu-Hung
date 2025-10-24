'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;

  // Sample blog data - in production this would come from a database or CMS
  const blogPosts: Record<string, {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: string[];
  }> = {
    'xu-huong-cong-nghe-san-xuat-2025': {
      title: 'Xu hướng công nghệ trong ngành sản xuất 2025',
      category: 'Công nghệ',
      author: 'Mai Phú Hưng',
      date: '20 Tháng 10, 2025',
      readTime: '5 phút đọc',
      image: '🏭',
      content: [
        'Năm 2025 đánh dấu những bước tiến đột phá trong lĩnh vực công nghệ sản xuất. Các doanh nghiệp đang chuyển đổi mạnh mẽ sang tự động hóa và số hóa quy trình.',
        'Công nghệ AI và Machine Learning đang được ứng dụng rộng rãi trong việc tối ưu hóa quy trình sản xuất, dự đoán bảo trì và kiểm soát chất lượng.',
        'Internet of Things (IoT) giúp kết nối các thiết bị trong nhà máy, cho phép giám sát và điều khiển từ xa, nâng cao hiệu suất và giảm thiểu rủi ro.',
        'Robot công nghiệp thế hệ mới với khả năng học tập và thích nghi đang thay đổi cách thức sản xuất truyền thống.',
        'Mai Phú Hưng luôn cập nhật và áp dụng những công nghệ tiên tiến nhất để mang đến sản phẩm và dịch vụ chất lượng cao cho khách hàng.',
      ],
    },
    'gioi-thieu-san-pham-moi': {
      title: 'Giới thiệu dòng sản phẩm mới của Mai Phú Hưng',
      category: 'Sản phẩm',
      author: 'Mai Phú Hưng',
      date: '18 Tháng 10, 2025',
      readTime: '4 phút đọc',
      image: '📦',
      content: [
        'Mai Phú Hưng tự hào giới thiệu dòng sản phẩm mới với chất lượng vượt trội và thiết kế hiện đại.',
        'Các sản phẩm được nghiên cứu và phát triển dựa trên nhu cầu thực tế của khách hàng, đảm bảo tính ứng dụng cao trong thực tế.',
        'Quy trình sản xuất tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng quốc tế, mang đến sự an tâm tuyệt đối cho người sử dụng.',
        'Đội ngũ kỹ sư của chúng tôi không ngừng cải tiến và tối ưu hóa sản phẩm để đáp ứng mọi yêu cầu khắt khe nhất.',
        'Liên hệ với chúng tôi để được tư vấn chi tiết về các sản phẩm phù hợp với nhu cầu của bạn.',
      ],
    },
    'mo-rong-hoat-dong': {
      title: 'Mai Phú Hưng mở rộng hoạt động kinh doanh',
      category: 'Tin tức',
      author: 'Mai Phú Hưng',
      date: '15 Tháng 10, 2025',
      readTime: '3 phút đọc',
      image: '📰',
      content: [
        'Công ty Mai Phú Hưng vui mừng thông báo kế hoạch mở rộng quy mô hoạt động trong năm 2025.',
        'Chúng tôi đang tăng cường đầu tư vào cơ sở vật chất và thiết bị hiện đại để nâng cao năng lực sản xuất.',
        'Đồng thời, Mai Phú Hưng đang tuyển dụng nhiều vị trí để mở rộng đội ngũ nhân sự chuyên nghiệp.',
        'Sự phát triển này là kết quả của sự tin tưởng và ủng hộ từ khách hàng và đối tác trong suốt thời gian qua.',
        'Chúng tôi cam kết tiếp tục mang đến những sản phẩm và dịch vụ chất lượng cao nhất cho thị trường.',
      ],
    },
    'huong-dan-su-dung-san-pham': {
      title: 'Cách bảo quản và sử dụng sản phẩm hiệu quả',
      category: 'Hướng dẫn',
      author: 'Mai Phú Hưng',
      date: '12 Tháng 10, 2025',
      readTime: '6 phút đọc',
      image: '📋',
      content: [
        'Để sản phẩm của bạn luôn hoạt động tốt và có tuổi thọ cao, việc bảo quản và sử dụng đúng cách là vô cùng quan trọng.',
        'Trước tiên, hãy đọc kỹ hướng dẫn sử dụng đi kèm với sản phẩm để hiểu rõ các tính năng và cách vận hành.',
        'Thường xuyên vệ sinh và kiểm tra sản phẩm theo định kỳ để phát hiện sớm các vấn đề có thể xảy ra.',
        'Bảo quản sản phẩm ở nơi khô ráo, thoáng mát và tránh xa các nguồn nhiệt hoặc hóa chất có thể gây hại.',
        'Nếu có bất kỳ thắc mắc nào, đừng ngại liên hệ với bộ phận hỗ trợ khách hàng của Mai Phú Hưng để được tư vấn chi tiết.',
      ],
    },
    'tu-dong-hoa-san-xuat': {
      title: 'Tự động hóa quy trình sản xuất',
      category: 'Công nghệ',
      author: 'Mai Phú Hưng',
      date: '10 Tháng 10, 2025',
      readTime: '7 phút đọc',
      image: '⚙️',
      content: [
        'Tự động hóa là xu hướng tất yếu trong ngành công nghiệp hiện đại, giúp tăng năng suất và giảm chi phí vận hành.',
        'Các hệ thống tự động có thể hoạt động liên tục 24/7 mà không cần sự giám sát con người, đảm bảo hiệu suất ổn định.',
        'Công nghệ tự động hóa giúp giảm thiểu sai sót do con người, nâng cao độ chính xác và chất lượng sản phẩm.',
        'Đầu tư vào tự động hóa có thể đòi hỏi chi phí ban đầu cao, nhưng lợi ích về lâu dài là rất đáng kể.',
        'Mai Phú Hưng sẵn sàng tư vấn và cung cấp các giải pháp tự động hóa phù hợp cho từng loại hình sản xuất.',
      ],
    },
    'thanh-tuu-2024': {
      title: 'Thành tựu và giải thưởng năm 2024',
      category: 'Tin tức',
      author: 'Mai Phú Hưng',
      date: '5 Tháng 10, 2025',
      readTime: '5 phút đọc',
      image: '🏆',
      content: [
        'Năm 2024 là một năm thành công rực rỡ với nhiều dấu ấn quan trọng của Mai Phú Hưng.',
        'Chúng tôi vinh dự nhận được nhiều giải thưởng uy tín về chất lượng sản phẩm và dịch vụ khách hàng.',
        'Doanh thu và thị phần của công ty tăng trưởng vượt bậc, khẳng định vị thế trong ngành.',
        'Đội ngũ nhân viên ngày càng lớn mạnh với nhiều chuyên gia giỏi tham gia vào tập thể.',
        'Cảm ơn sự ủng hộ của quý khách hàng và đối tác đã đồng hành cùng Mai Phú Hưng trong năm qua.',
      ],
    },
    'so-sanh-san-pham': {
      title: 'So sánh các dòng sản phẩm chủ lực',
      category: 'Sản phẩm',
      author: 'Mai Phú Hưng',
      date: '1 Tháng 10, 2025',
      readTime: '8 phút đọc',
      image: '🔍',
      content: [
        'Mai Phú Hưng cung cấp nhiều dòng sản phẩm đa dạng để phục vụ các nhu cầu khác nhau của khách hàng.',
        'Dòng sản phẩm cơ bản phù hợp cho các ứng dụng thông thường với mức giá cạnh tranh.',
        'Dòng sản phẩm cao cấp được trang bị nhiều tính năng nâng cao và chất liệu cao cấp hơn.',
        'Dòng sản phẩm chuyên dụng được thiết kế riêng cho các ngành nghề đặc thù với yêu cầu kỹ thuật cao.',
        'Hãy liên hệ với chúng tôi để được tư vấn chọn lựa sản phẩm phù hợp nhất cho nhu cầu của bạn.',
      ],
    },
    'huong-dan-bao-tri': {
      title: 'Bảo trì định kỳ - Hướng dẫn toàn diện',
      category: 'Hướng dẫn',
      author: 'Mai Phú Hưng',
      date: '28 Tháng 9, 2025',
      readTime: '6 phút đọc',
      image: '🔧',
      content: [
        'Bảo trì định kỳ là chìa khóa để duy trì hiệu suất tối ưu và kéo dài tuổi thọ của thiết bị.',
        'Lịch bảo trì nên được lập kế hoạch cụ thể dựa trên tần suất sử dụng và điều kiện làm việc.',
        'Kiểm tra và làm sạch các bộ phận quan trọng, thay thế các linh kiện hao mòn kịp thời.',
        'Ghi chép đầy đủ lịch sử bảo trì giúp theo dõi tình trạng thiết bị và dự đoán các vấn đề có thể xảy ra.',
        'Đội ngũ kỹ thuật của Mai Phú Hưng sẵn sàng hỗ trợ dịch vụ bảo trì chuyên nghiệp khi bạn cần.',
      ],
    },
    'khuyen-mai-thang-10': {
      title: 'Chương trình khuyến mãi đặc biệt tháng 10',
      category: 'Tin tức',
      author: 'Mai Phú Hưng',
      date: '25 Tháng 9, 2025',
      readTime: '3 phút đọc',
      image: '🎁',
      content: [
        'Mai Phú Hưng vui mừng công bố chương trình khuyến mãi đặc biệt trong tháng 10 với nhiều ưu đãi hấp dẫn.',
        'Giảm giá lên đến 30% cho các sản phẩm được chọn lọc, áp dụng cho cả khách hàng cá nhân và doanh nghiệp.',
        'Miễn phí vận chuyển và lắp đặt cho đơn hàng có giá trị từ 10 triệu đồng trở lên.',
        'Tặng thêm 1 năm bảo hành mở rộng cho tất cả sản phẩm mua trong thời gian khuyến mãi.',
        'Đừng bỏ lỡ cơ hội tuyệt vời này! Liên hệ ngay với chúng tôi để được tư vấn và đặt hàng.',
      ],
    },
  };

  const blog = blogPosts[slug];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Bài viết không tồn tại</h1>
            <p className="text-gray-600 mb-8">Bài viết bạn đang tìm kiếm không có sẵn.</p>
            <Link href="/tin-tuc" className="px-6 py-3 bg-[#ca993b] text-white rounded-full font-semibold hover:shadow-lg transition-shadow inline-block">
              Quay lại trang Tin Tức
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedBlogs = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#ca993b]">Trang Chủ</Link>
              <span className="mx-2">/</span>
              <Link href="/tin-tuc" className="hover:text-[#ca993b]">Tin Tức</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700">{blog.title}</span>
            </div>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#ca993b]/10 text-[#ca993b] text-sm font-semibold rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-16 flex items-center justify-center">
              <span className="text-9xl">{blog.image}</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 leading-relaxed mb-6"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Chia sẻ bài viết:</h3>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.795.715-1.795 1.763V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map(([key, relatedBlog], index) => (
                <motion.article
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                >
                  <Link href={`/tin-tuc/${key}`}>
                    <div className="p-6">
                      <div className="flex items-center justify-center w-full h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mb-4">
                        <span className="text-6xl">{relatedBlog.image}</span>
                      </div>
                      <div className="mb-2">
                        <span className="px-3 py-1 bg-[#ca993b]/10 text-[#ca993b] text-xs font-semibold rounded-full">
                          {relatedBlog.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 hover:text-[#ca993b] transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <div className="text-sm text-gray-500">{relatedBlog.readTime}</div>
                    </div>
                  </Link>
                </motion.article>
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

