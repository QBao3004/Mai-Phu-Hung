'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Careers() {
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

  return (
    <section id="careers" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-[#2e3b63] leading-tight">
            Tuyển Dụng
          </h2>
        </motion.div>

        {/* Open Positions */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-[#2e3b63] leading-snug"
          >
            Công ty TNHH Mai Phú Hưng tuyển dụng các vị trí
          </motion.h3>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="flex flex-col gap-4">
                  {/* Header with title and badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2e3b63] leading-tight">
                      {position.title}
                    </h4>
                    <span className="px-3 py-1 bg-[#2e3b63]/10 text-[#2e3b63] text-xs font-semibold rounded-full self-start sm:self-center whitespace-nowrap">
                      {position.type}
                    </span>
                  </div>

                  {/* Department and Location */}
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">🏢</span>
                      <span className="font-medium">{position.department}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-base">📍</span>
                      <span className="font-medium">{position.location}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {position.description}
                  </p>

                  {/* Button */}
                  <div className="flex justify-start sm:justify-end pt-2">
                    <Link href={`/tuyen-dung/${position.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#ca993b] text-white rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base whitespace-nowrap"
                      >
                        Xem thêm
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 text-center"
          >
            <Link href="/tuyen-dung">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 bg-[#2e3b63] text-white rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-[#1f2a45] transition-all shadow-lg hover:shadow-xl"
              >
                Xem thêm các vị trí
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

