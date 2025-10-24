'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Job positions data
  const positions = [
    {
      slug: 'nhan-vien-kinh-doanh-van-phong',
      title: 'Nhân viên kinh doanh văn phòng',
      department: 'Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      workingHours: '8h00 – 16h30, từ thứ 2 đến thứ 7',
      products: 'Hàng tiêu dùng thuộc các nhãn hàng Deemee, Ludee',
      salary: '8.000.000 – 14.000.000 VNĐ/tháng',
      description: 'Việc làm Nhân viên Văn phòng tại Công ty TNHH Mai Phú Hưng đang tuyển dụng, với công việc hành chính – hỗ trợ nghiệp vụ ổn định và nhiều cơ hội phát triển.',
      responsibilities: [
        'Tìm kiếm khách hàng mới, mở rộng độ phủ sản phẩm tại thị trường Miền Nam',
        'Giới thiệu, tư vấn và chăm sóc khách hàng về sản phẩm',
        'Thực hiện hoạt động bán hàng, theo dõi đơn hàng và công nợ thanh toán',
        'Đảm bảo doanh số được giao, thực hiện báo cáo kết quả kinh doanh định kỳ',
        'Phối hợp với các bộ phận liên quan để xử lý công việc',
        'Thực hiện các công việc khác theo yêu cầu của cấp trên',
      ],
      requirements: [
        'Độ tuổi: 22 – 30 tuổi',
        'Trình độ: Tốt nghiệp THPT (hết 12)',
        'Xử lý công việc nhanh nhạy, linh hoạt',
        'Trung thực, tận tâm, có trách nhiệm cao',
        'Kỹ năng giao tiếp, bán hàng và giải quyết vấn đề tốt',
        'Thành thạo Excel và phần mềm FAST',
        'Có kinh nghiệm bán hàng FMCG hoặc phát triển thị trường là lợi thế lớn',
      ],
      benefits: [
        'Môi trường làm việc trẻ, năng động, tạo điều kiện phát triển bản thân',
        'Tham gia BHXH đầy đủ theo quy định của công ty',
        'Được đào tạo, hướng dẫn trực tiếp bởi quản lý có kinh nghiệm chuyên sâu',
        'Tham gia team building và các hoạt động nội bộ hàng năm',
      ],
      salaryDetails: [
        'Lương cơ bản: 7.000.000 VNĐ',
        'Thưởng KPI',
        'Thưởng doanh thu',
        'Các khoản thưởng khác theo quy định của công ty',
      ],
    },
    {
      slug: 'sale-admin',
      title: 'Sale admin',
      department: 'Hành chính - Kinh doanh',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      workingHours: '8:00 – 16:30, từ thứ 2 đến thứ 7',
      products: 'Phân phối hàng tiêu dùng Thái Lan',
      salary: '9.000.000 – 14.000.000 VNĐ/tháng',
      description: 'Việc làm Sales Admin tại Công ty TNHH Mai Phú Hưng đang tuyển dụng, với nhiệm vụ hỗ trợ kinh doanh, quản lý dữ liệu và chăm sóc khách hàng.',
      responsibilities: [
        'Gọi điện tư vấn sản phẩm và báo giá cho khách hàng (bao gồm: nhà phân phối, đại lý, tạp hóa, sỉ online, siêu thị)',
        'Chốt đơn và xuất hàng trên phần mềm FAST',
        'Xử lý các vấn đề sai hàng, nhầm hàng, đổi trả hàng của khách',
        'Tìm kiếm và chăm sóc khách hàng trong phạm vi phụ trách',
        'Kiểm tra tồn kho để tư vấn chính xác cho khách hàng',
        'Theo dõi đơn đặt hàng, gửi báo cáo cho Quản lý Kinh doanh để lên kế hoạch nhập hàng mỗi buổi sáng',
        'Kiểm tra số liệu, xử lý các vấn đề liên quan đến xuất hàng, bù hàng, hàng nhập trả',
        'Theo dõi và quản lý công nợ khách hàng',
        'Xác nhận giao hàng và thanh toán của khách hàng với các bộ phận liên quan',
        'Thực hiện các công việc khác theo yêu cầu của cấp trên',
      ],
      requirements: [
        'Độ tuổi: 24 – 32 tuổi',
        'Trình độ: Tốt nghiệp Cao đẳng/Đại học chuyên ngành Quản trị kinh doanh, Kinh tế, Kế toán,...',
        'Kinh nghiệm: Tối thiểu 2 năm ở vị trí hoặc công việc tương đương',
        'Xử lý công việc nhanh, linh hoạt',
        'Trung thực, tận tâm, có trách nhiệm cao trong công việc',
        'Kỹ năng giao tiếp, thương lượng, giải quyết vấn đề, làm việc nhóm tốt',
      ],
      benefits: [
        'Môi trường làm việc trẻ trung, năng động, khuyến khích phát triển bản thân',
        'Được tham gia BHXH theo quy định của công ty',
        'Cơ hội thăng tiến rõ ràng và được đào tạo bài bản',
      ],
      salaryDetails: [
        'Lương cơ bản: 7.000.000 VNĐ (hoặc thỏa thuận)',
        'Thưởng KPI',
        'Thưởng doanh thu',
        'Các khoản thưởng khác theo quy định của công ty',
      ],
    },
    {
      slug: 'thu-kho',
      title: 'Thủ kho',
      department: 'Kho vận',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      workingHours: '8h00 – 16h30, từ thứ 2 đến thứ 7',
      products: 'Phân phối hàng tiêu dùng Thái Lan',
      salary: '9.000.000 – 13.000.000 VNĐ/tháng',
      description: 'Việc làm Thủ kho tại Công ty TNHH Mai Phú Hưng đang tuyển dụng, với công việc quản lý xuất nhập hàng và sắp xếp kho bãi gọn gàng, chính xác.',
      responsibilities: [
        'Kiểm tra số lượng, chất lượng hàng hóa khi nhập – xuất',
        'Tiếp nhận đơn hàng từ Leader, soạn hàng giao cho khách hoặc bàn giao cho bộ phận giao nhận',
        'Phối hợp cùng Leader xử lý các vấn đề phát sinh trong quá trình giao – nhận',
        'Kiểm tra tồn kho hằng ngày, đảm bảo tính chính xác của dữ liệu',
        'Đối chiếu số liệu tồn kho với kế toán nội bộ',
        'Xử lý hàng hư hỏng và báo cáo cho kế toán',
        'Giám sát việc thực hiện quy trình nghiệp vụ kho đảm bảo đúng quy định',
        'Sắp xếp, bố trí hàng hóa trong kho gọn gàng, khoa học, sạch sẽ',
        'Thực hiện bốc xếp hàng hóa, lái xe nâng theo nhu cầu công việc',
        'Thực hiện các nhiệm vụ khác theo yêu cầu của cấp trên',
      ],
      requirements: [
        'Giới tính: Nam, 25 – 35 tuổi',
        'Hộ khẩu thường trú: TP. Hồ Chí Minh',
        'Trình độ: Tốt nghiệp THPT (12/12)',
        'Kinh nghiệm: Tối thiểu 2 năm ở vị trí tương đương',
        'Biết lái xe nâng',
        'Nhanh nhẹn, nhiệt tình, ghi nhớ hàng hóa tốt',
        'Trách nhiệm cao, trung thực, chính trực',
        'Sẵn sàng tăng ca để hoàn thành công việc',
      ],
      benefits: [
        'Lương thưởng cạnh tranh, chế độ đãi ngộ tốt',
        'Môi trường làm việc chuyên nghiệp, năng động',
        'Đào tạo nâng cao kỹ năng quản lý, lãnh đạo',
        'Được hướng dẫn trực tiếp bởi cấp trên có kinh nghiệm chuyên sâu',
        'Đóng BHXH, BHYT, BHTN đầy đủ theo quy định',
        'Tham gia team building, du lịch cùng công ty hàng năm',
      ],
      salaryDetails: [
        'Lương cơ bản: 7.000.000 VNĐ',
        'Thưởng KPI',
        'Thưởng doanh thu',
        'Phụ cấp trách nhiệm',
      ],
    },
    {
      slug: 'nhan-vien-kho-van',
      title: 'Nhân viên kho vận',
      department: 'Kho vận',
      location: 'TP. Hồ Chí Minh',
      type: 'Toàn thời gian',
      workingHours: '8:00 – 16:30, từ thứ 2 đến thứ 7',
      products: 'Phân phối hàng tiêu dùng Thái Lan',
      salary: '8.000.000 – 10.000.000 VNĐ/tháng',
      description: 'Việc làm Nhân viên Kho vận tại Công ty TNHH Mai Phú Hưng đang tuyển dụng, với công việc hỗ trợ xuất nhập hàng, vận chuyển và kiểm soát hàng hóa chính xác.',
      trialPeriod: '01 tháng',
      quantity: '02 nhân sự',
      responsibilities: [
        'Kiểm tra chất lượng và số lượng hàng hóa khi nhập, xuất',
        'Bốc xếp hàng hóa, đảm bảo an toàn và đúng quy trình',
        'Sắp xếp hàng hóa trong kho gọn gàng, khoa học',
        'Tiếp nhận đơn hàng từ thủ kho và soạn hàng đúng số lượng, đúng chủng loại',
        'Thực hiện kiểm kê định kỳ, đảm bảo tính chính xác của số liệu tồn kho',
        'Thực hiện nhiệm vụ khác theo yêu cầu của cấp trên',
      ],
      requirements: [
        'Giới tính: Nam, 20 – 30 tuổi',
        'Hộ khẩu thường trú: TP. Hồ Chí Minh',
        'Sức khỏe tốt, sẵn sàng tăng ca khi có đơn hàng gấp',
        'Biết lái xe nâng là lợi thế',
        'Tác phong nhanh nhẹn, nhiệt tình, chịu khó học hỏi',
        'Tinh thần trách nhiệm cao, đúng giờ, trung thực',
      ],
      benefits: [
        'Môi trường làm việc hòa đồng, năng động, tạo điều kiện phát triển bản thân',
        'Ký hợp đồng lao động đầy đủ, được thưởng Lễ, Tết theo quy định',
        'Cơ hội khen thưởng, thăng tiến rõ ràng theo lộ trình công ty',
      ],
      salaryDetails: [
        'Lương cơ bản: 7.000.000 VNĐ',
        'Thưởng KPI',
        'Thưởng doanh thu',
      ],
    },
  ];

  const position = positions.find(p => p.slug === slug);

  if (!position) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Navigation />
        <div className="text-center pt-32">
          <h1 className="text-4xl font-bold text-[#2e3b63] mb-4">Vị trí không tồn tại</h1>
          <Link href="/tuyen-dung">
            <button className="px-6 py-3 bg-[#ca993b] text-white rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Quay lại trang tuyển dụng
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-[#2e3b63] to-[#1f2a45] pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/tuyen-dung" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Quay lại
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {position.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {position.department}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {position.location}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {position.type}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-[#2e3b63] mb-4">Tổng Quan</h2>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Thời gian làm việc:</strong> {position.workingHours}</p>
                  {position.products && <p><strong>Sản phẩm kinh doanh:</strong> {position.products}</p>}
                  {position.trialPeriod && <p><strong>Thời gian thử việc:</strong> {position.trialPeriod}</p>}
                  {position.quantity && <p><strong>Số lượng tuyển:</strong> {position.quantity}</p>}
                  <p><strong>Thu nhập:</strong> {position.salary}</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-[#2e3b63] mb-4">Mô Tả Công Việc</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{position.description}</p>
                <ul className="space-y-3">
                  {position.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#ca993b] mt-1 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Salary Details */}
              {position.salaryDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-[#2e3b63] mb-4">Thu Nhập Chi Tiết</h2>
                  <p className="text-lg font-semibold text-[#ca993b] mb-4">{position.salary}</p>
                  <ul className="space-y-3">
                    {position.salaryDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#ca993b] mt-1 flex-shrink-0">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-[#2e3b63] mb-4">Yêu Cầu</h2>
                <ul className="space-y-3">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#ca993b] mt-1 flex-shrink-0">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-[#2e3b63] mb-4">Quyền Lợi</h2>
                <ul className="space-y-3">
                  {position.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-[#ca993b] mt-1 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar - Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#2e3b63] rounded-xl shadow-lg p-8 text-white sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-4">Cách Thức Ứng Tuyển</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Gửi hồ sơ ứng tuyển của bạn qua email hoặc liên hệ trực tiếp với chúng tôi để được tư vấn chi tiết.
                </p>

                {/* Email Application */}
                <div className="mb-8">
                  <h3 className="font-bold mb-3 text-lg">Gửi Email Ứng Tuyển</h3>
                  <a 
                    href={`mailto:maiphuhung79@gmail.com?subject=Ứng tuyển vị trí: ${position.title}&body=Kính gửi Ban Tuyển Dụng Mai Phú Hưng,%0D%0A%0D%0ATôi xin gửi đến Quý Công ty hồ sơ ứng tuyển vị trí: ${position.title}%0D%0A%0D%0AThông tin cá nhân:%0D%0AHọ và tên: %0D%0ASố điện thoại: %0D%0AEmail: %0D%0A%0D%0AKinh nghiệm và giới thiệu bản thân:%0D%0A[Vui lòng điền thông tin của bạn ở đây]%0D%0A%0D%0ATrân trọng.`}
                    className="block w-full bg-[#ca993b] hover:bg-[#b8883a] text-white font-bold py-4 rounded-lg transition-colors text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Gửi Email Ứng Tuyển
                    </span>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-white/20">
                  <h3 className="font-bold mb-4 text-lg">Liên Hệ Trực Tiếp</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/70 text-sm mb-1">Số điện thoại</p>
                      <a href="tel:0798868886" className="flex items-center gap-2 text-white hover:text-[#ca993b] transition-colors font-semibold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        079.886.8886
                      </a>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Email</p>
                      <a href="mailto:maiphuhung79@gmail.com" className="flex items-start gap-2 text-white hover:text-[#ca993b] transition-colors font-semibold break-all">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        maiphuhung79@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-white/70 text-sm mb-1">Địa chỉ</p>
                      <p className="text-white flex items-start gap-2">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        31 Dân Tộc, P. Tân Sơn Nhì, TP. Hồ Chí Minh
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
