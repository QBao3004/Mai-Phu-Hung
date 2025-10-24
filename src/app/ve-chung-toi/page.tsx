'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function VeChungToiPage() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });

  const achievements = [
    { number: '5+', label: 'Năm kinh nghiệm' },
    { number: '4700+', label: 'Khách hàng hài lòng' },
    { number: '500+', label: 'Nhà phân phối toàn quốc' },
    { number: '24/7', label: 'Đội ngũ tư vấn' },
    { number: '100+', label: 'Mã sản phẩm' },
  ];

  const coreValues = [
    {
      icon: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sứ Mệnh',
      description: 'Trao quyền cho các doanh nghiệp trên toàn thế giới với các giải pháp công nghệ sáng tạo thúc đẩy tăng trưởng và thành công. Chúng tôi cam kết mang đến những sản phẩm chất lượng cao và dịch vụ tận tâm nhất cho khách hàng.',
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Giá Trị Cốt Lõi',
      description: 'Đổi mới, chính trực, xuất sắc và thành công của khách hàng là trọng tâm trong mọi việc chúng tôi làm. Chúng tôi luôn đặt lợi ích khách hàng lên hàng đầu và không ngừng cải thiện chất lượng dịch vụ.',
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'Tầm Nhìn',
      description: 'Trở thành công ty hàng đầu toàn cầu trong chuyển đổi số, làm cho công nghệ tiên tiến trở nên dễ tiếp cận với mọi người. Chúng tôi hướng tới việc xây dựng một tương lai bền vững và thịnh vượng.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Nguyễn Thị Trúc Mai',
      position: 'CEO & Founder',
      image: '/About/CEO.webp',
      bio: [
        'Nhà sáng lập kiêm CEO Nguyễn Thị Trúc Mai với khát vọng và hoài bão cải thiện chất lượng đời sống của người tiêu dùng Việt, với nhiều thành tích và là thành viên của nhiều tổ chức như Thành viên của Cộng đồng doanh nhân Việt Nam. Chị đã và đang dẫn dắt Mai Phú Hưng trở thành doanh nghiệp dẫn đầu thị trường về ngành hàng tiêu dùng Thái Lan, mang lại những sản phẩm Thái Lan chất lượng với giá thành tốt nhất đến người Việt.',
        'Bằng sự nhiệt huyết và đam mê mãnh liệt của mình, CEO Trúc Mai đã và đang mang tới nhiều thành công hơn nữa. Năm 2023 chị đã dẫn dắt Mai Phú Hưng vinh dự nhận được 2 giải thưởng vô cùng ý nghĩa đó là: Top 10 Thương hiệu – nhãn hiệu nổi tiếng Quốc Gia năm và giải thưởng Doanh nhân Xuất sắc nhất năm 2023. Đây là phần thưởng to lớn để Công ty TNHH Mai Phú Hưng phấn đấu trở thành nhà phân phối nhãn hiệu hàng Thái nổi tiếng tại Việt Nam.',
        'Năm 2025, Công ty TNHH Mai Phú Hưng hân hoan ra mắt nhãn hàng Deemee – thương hiệu chăm sóc nhà cửa với các sản phẩm giặt xả và tẩy rửa, được định vị là giải pháp chất lượng và truyền cảm hứng cho việc chăm sóc tổ ấm Việt. Đây là dấu ấn chiến lược thể hiện tầm nhìn đổi mới và cam kết mang đến sản phẩm chất lượng vượt trội cho người tiêu dùng.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Video Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black">
          {/* Video Background */}
          <video 
            className="w-full h-full object-cover opacity-70"
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="/videos/mai-phu-hung-intro.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img src="/hero.jpg" alt="Mai Phú Hưng" className="w-full h-full object-cover" />
          </video>
        </div>
        
        {/* Video Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Cuộn xuống</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2e3b63] whitespace-nowrap">
                Giới Thiệu Về Mai Phú Hưng
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Công ty TNHH Mai Phú Hưng là doanh nghiệp hàng đầu về phân phối sản phẩm tiêu dùng Thái Lan chính hãng đặc biệt là các mặt hàng hoạt chất tẩy rửa. Mai Phú Hưng tự tin cung cấp cho khách hàng những sản phẩm chất lượng vượt bậc với giá thành hợp lí, là điểm tựa vững chắc giúp người tiêu dùng giải quyết các nhu cầu tiêu dùng trong đời sống.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/hero.jpg" 
                alt="Mai Phú Hưng Office" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#ca993b] text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm">Năm kinh nghiệm</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Core Values, Vision Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
              Sứ Mệnh, Giá Trị & Tầm Nhìn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị cốt lõi định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-[#2e3b63] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="mb-6 text-[#ca993b]">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white text-center">
                  {value.title}
                </h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
              Gặp Gỡ Lãnh Đạo Mai Phú Hưng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Người đứng sau thành công của Mai Phú Hưng
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                  {/* Left side: Image, Name, Position */}
                  <div className="md:col-span-2 p-8">
                    <div className="aspect-square bg-gray-200 relative overflow-hidden rounded-xl mb-6 border-2 border-[#ca993b]">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2e3b63] mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-[#ca993b] font-medium text-xl text-center">
                      {member.position}
                    </p>
                  </div>

                  {/* Right side: Description */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      {Array.isArray(member.bio) ? (
                        member.bio.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 text-lg leading-relaxed">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2e3b63]">
              Thành Tựu Của Mai Phú Hưng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số ấn tượng khẳng định vị thế của chúng tôi
            </p>
          </motion.div>

          <motion.div
            ref={statsRef}
            initial={{ opacity: 0 }}
            animate={isStatsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={isStatsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ 
                  delay: index * 0.15, 
                  type: 'spring', 
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.1 }}
                className="text-center bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all border border-gray-200"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#ca993b] mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-700 text-sm md:text-base font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-xl mb-6 text-gray-700">
              Sẵn sàng trở thành một phần của câu chuyện thành công?
            </p>
            <a 
              href="tel:0798868886"
              className="inline-block bg-[#ca993b] text-white px-10 py-4 rounded-full font-medium hover:bg-[#b8873a] transition-colors text-lg"
            >
              Liên hệ với chúng tôi ngay
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
