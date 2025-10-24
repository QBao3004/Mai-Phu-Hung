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
    <section id="careers" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
            Tuyển Dụng
          </h2>
        </motion.div>

        {/* Open Positions */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-[#2e3b63]"
          >
            Công ty TNHH Mai Phú Hưng tuyển dụng các vị trí
          </motion.h3>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-[#2e3b63]">{position.title}</h4>
                      <span className="px-3 py-1 bg-[#2e3b63]/10 text-[#2e3b63] text-xs font-semibold rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        🏢 {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        📍 {position.location}
                      </span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <Link href={`/tuyen-dung/${position.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-[#ca993b] text-white rounded-full font-semibold hover:shadow-lg transition-shadow whitespace-nowrap"
                    >
                      Xem thêm
                    </motion.button>
                  </Link>
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
            className="mt-12 text-center"
          >
            <Link href="/tuyen-dung">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#2e3b63] text-white rounded-full font-semibold text-lg hover:bg-[#1f2a45] transition-colors shadow-lg hover:shadow-xl"
              >
                Xem thêm
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

