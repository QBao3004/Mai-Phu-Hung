import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2e3b63] text-white pt-4 pb-3 sm:pt-6 sm:pb-4 md:pt-8 md:pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center items-start">
          {/* Logo & Social Media */}
          <div className="w-full max-w-sm flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-58 h-25 sm:w-40 sm:h-12 md:w-48 md:h-16 lg:w-56 lg:h-20 xl:w-64 xl:h-24 relative mx-auto">
                <img
                  src="/mph1.png"
                  alt="Mai Phú Hưng Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 max-w-md text-center">
              </p>
              <div className="flex space-x-3 sm:space-x-4 md:space-x-5 mb-3 sm:mb-4 md:mb-6 justify-center items-center mx-auto">
                <a
                  href="https://www.facebook.com/maiphuhungvn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-[#ca993b] transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.795.715-1.795 1.763V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@congtytnhhmaiphuhung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-gray-400 hover:text-[#ca993b] transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Liên Kết */}
          <div className="w-full max-w-sm relative z-10">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white text-center">Liên Kết</h3>
            <ul className="space-y-2 sm:space-y-3 text-center">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block cursor-pointer text-sm sm:text-base">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block cursor-pointer text-sm sm:text-base">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block cursor-pointer text-sm sm:text-base">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="/tuyen-dung" className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block cursor-pointer text-sm sm:text-base">
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Chính Sách */}
          <div className="w-full max-w-sm">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white text-center">Chính Sách</h3>
            <ul className="space-y-2 sm:space-y-3 text-center">
              <li><a className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block text-sm sm:text-base" href="#contact">Liên Hệ</a></li>
              <li><a className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block text-sm sm:text-base" href="#">Chính Sách Bảo Mật</a></li>
              <li><a className="text-gray-400 hover:text-[#ca993b] transition-colors inline-block text-sm sm:text-base" href="#">Điều Khoản Sử Dụng</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full max-w-sm">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white text-center">Liên Hệ</h3>
            <div className="bg-[#1f2a45] rounded-lg p-2 sm:p-3 md:p-4 shadow-inner">
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                <li className="flex items-start">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mt-0.5 text-[#ca993b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 ml-1.5 sm:ml-2 md:ml-3 text-xs sm:text-sm leading-relaxed break-words">
                    31 Dân Tộc, P. Tân Sơn Nhì, TP. Hồ Chí Minh
                  </span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#ca993b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:0798868886" className="text-gray-300 ml-1.5 sm:ml-2 md:ml-3 text-xs sm:text-sm hover:text-[#ca993b] transition-colors whitespace-nowrap">
                    079.886.8886
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#ca993b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:maiphuhung79@gmail.com" className="text-gray-300 ml-1.5 sm:ml-2 md:ml-3 text-xs sm:text-sm break-all hover:text-[#ca993b] transition-colors">
                    maiphuhung79@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mt-0.5 text-[#ca993b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-300 ml-1.5 sm:ml-2 md:ml-3 text-xs sm:text-sm">
                    <p className="leading-relaxed">Thứ 2 - Thứ 7: 8:00 - 16:30</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-5 md:pt-6 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Mai Phú Hưng. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}

