'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function TuyenDungPage() {

  const positions = [
    {
      slug: 'nhan-vien-kinh-doanh-van-phong',
      title: 'Nhân viên kinh doanh văn phòng',
      department: 'Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với công việc hành chính – hỗ trợ nghiệp vụ ổn định và nhiều cơ hội phát triển. Ứng tuyển ngay hôm nay để gia nhập môi trường làm việc chuyên nghiệp, phúc lợi hấp dẫn!',
    },
    {
      slug: 'sale-admin',
      title: 'Sale admin',
      department: 'Hành chính - Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với nhiệm vụ hỗ trợ kinh doanh, quản lý dữ liệu và chăm sóc khách hàng. Ứng tuyển ngay hôm nay để phát triển sự nghiệp trong môi trường chuyên nghiệp, đãi ngộ tốt!',
    },
    {
      slug: 'thu-kho',
      title: 'Thủ kho',
      department: 'Kho vận',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với công việc quản lý xuất nhập hàng và sắp xếp kho bãi gọn gàng, chính xác. Ứng tuyển ngay hôm nay để ổn định sự nghiệp trong môi trường chuyên nghiệp, phúc lợi tốt!',
    },
    {
      slug: 'nhan-vien-kho-van',
      title: 'Nhân viên kho vận',
      department: 'Kho vận',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với công việc hỗ trợ xuất nhập hàng, vận chuyển và kiểm soát hàng hóa chính xác. Ứng tuyển ngay hôm nay để gia nhập môi trường ổn định, phúc lợi hấp dẫn!',
    },
  ];

  const whyJoinUs = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Môi Trường Chuyên Nghiệp',
      description: 'Làm việc trong môi trường năng động, chuyên nghiệp với đội ngũ nhiệt huyết',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Cơ Hội Thăng Tiến',
      description: 'Chính sách đào tạo và thăng tiến rõ ràng, minh bạch dựa trên năng lực',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Thu Nhập Hấp Dẫn',
      description: 'Mức lương cạnh tranh, thưởng theo hiệu quả công việc và các phúc lợi đầy đủ',
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Phát Triển Bản Thân',
      description: 'Được tham gia các khóa đào tạo nâng cao kỹ năng và kiến thức chuyên môn',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] sm:h-[30vh] md:h-[30vh] lg:h-[40vh] xl:h-[45vh] bg-gradient-to-r from-[#2e3b63] to-[#1f2a45] pt-20 sm:pt-16 md:pt-20">
        <div className="absolute inset-0 flex items-center justify-center pt-20 sm:pt-16 md:pt-20">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight"
            >
              Cơ Hội Nghề Nghiệp
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              Gia nhập đội ngũ Mai Phú Hưng - Nơi tài năng được phát triển
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-[#2e3b63] leading-tight">
              Tại Sao Chọn Mai Phú Hưng?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Chúng tôi cam kết tạo môi trường làm việc tốt nhất cho đội ngũ nhân viên
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {whyJoinUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center justify-center text-center"
              >
                <div className="text-[#ca993b] mb-3 sm:mb-4 xl:mb-5 flex justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl font-bold text-[#2e3b63] mb-2 sm:mb-3 xl:mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-[#2e3b63] leading-tight">
              Vị Trí Đang Tuyển Dụng
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Khám phá các cơ hội nghề nghiệp phù hợp với bạn
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
                  {/* Icon/Image Section */}
                  <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden">
                    <Image
                      src="/hero.jpg"
                      alt="Job position"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center lg:text-left flex flex-col justify-center min-h-0 lg:min-h-[120px]">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2e3b63] mb-1 sm:mb-2 leading-tight">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-sm mb-2 sm:mb-3 font-medium">
                      {position.department} • {position.location}
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {position.description}
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                    <Link href={`/tuyen-dung/${position.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#ca993b] text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base whitespace-nowrap"
                      >
                        Xem chi tiết
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

