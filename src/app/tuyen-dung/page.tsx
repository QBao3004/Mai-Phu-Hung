'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TuyenDungPage() {

  const positions = [
    {
      slug: 'nhan-vien-kinh-doanh-van-phong',
      title: 'Nhân viên kinh doanh văn phòng',
      department: 'Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với công việc hành chính – hỗ trợ nghiệp vụ ổn định và nhiều cơ hội phát triển. Ứng tuyển ngay hôm nay để gia nhập môi trường làm việc chuyên nghiệp, phúc lợi hấp dẫn!',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      slug: 'sale-admin',
      title: 'Sale admin',
      department: 'Hành chính - Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với nhiệm vụ hỗ trợ kinh doanh, quản lý dữ liệu và chăm sóc khách hàng. Ứng tuyển ngay hôm nay để phát triển sự nghiệp trong môi trường chuyên nghiệp, đãi ngộ tốt!',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      slug: 'thu-kho',
      title: 'Thủ kho',
      department: 'Kho vận',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với công việc quản lý xuất nhập hàng và sắp xếp kho bãi gọn gàng, chính xác. Ứng tuyển ngay hôm nay để ổn định sự nghiệp trong môi trường chuyên nghiệp, phúc lợi tốt!',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      slug: 'nhan-vien-kho-van',
      title: 'Nhân viên kho vận',
      department: 'Kho vận',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      description: 'Với công việc hỗ trợ xuất nhập hàng, vận chuyển và kiểm soát hàng hóa chính xác. Ứng tuyển ngay hôm nay để gia nhập môi trường ổn định, phúc lợi hấp dẫn!',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
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
      <section className="relative w-full h-[50vh] md:h-[30vh] bg-gradient-to-r from-[#2e3b63] to-[#1f2a45] pt-16 md:pt-20">
        <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-20">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Cơ Hội Nghề Nghiệp
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Gia nhập đội ngũ Mai Phú Hưng - Nơi tài năng được phát triển
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
              Tại Sao Chọn Mai Phú Hưng?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết tạo môi trường làm việc tốt nhất cho đội ngũ nhân viên
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center justify-center text-center"
              >
                <div className="text-[#ca993b] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-base font-bold text-[#2e3b63] mb-3 whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
              Vị Trí Đang Tuyển Dụng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá các cơ hội nghề nghiệp phù hợp với bạn
            </p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                  {/* Icon/Image Section */}
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#2e3b63] to-[#1f2a45] rounded-xl flex items-center justify-center text-[#ca993b]">
                    {position.icon}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 text-center md:text-left min-h-[120px] flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#2e3b63] mb-2">
                      {position.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {position.department} • {position.location}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {position.description}
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <Link href={`/tuyen-dung/${position.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full md:w-auto px-8 py-3 bg-[#ca993b] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow whitespace-nowrap"
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

