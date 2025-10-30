'use client';

import { useState } from 'react';

interface ZaloChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  zaloLink: string;
}

export default function ZaloChatWidget({ isOpen, onClose, zaloLink }: ZaloChatWidgetProps) {
  const [language, setLanguage] = useState<'vi' | 'en'>('vi');

  if (!isOpen) return null;

  const handleZaloChat = () => {
    window.open(zaloLink, '_blank', 'width=500,height=600');
  };

  const handleQuickChat = () => {
    window.open(zaloLink, '_blank', 'width=500,height=600');
  };

  return (
    <div className="fixed bottom-64 right-4 sm:right-10 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-72 sm:w-80 md:w-96 max-w-[calc(100vw-2rem)]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-white bg-[#2e3b63] flex items-center justify-center p-1.5 overflow-hidden">
                  <img
                    src="/mph.png"
                    alt="Mai Phú Hưng"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="text-white">
                <p className="font-semibold text-base">Mai Phú Hưng</p>
                <p className="text-xs text-blue-100">Đang hoạt động</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              aria-label="Đóng"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {language === 'vi' ? 'Xin chào!' : 'Hello!'}
          </h2>
          <p className="text-gray-600">
            {language === 'vi' 
              ? 'Rất vui khi được hỗ trợ bạn' 
              : 'We are happy to support you'}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-center text-gray-500 text-sm mb-4">
            {language === 'vi' 
              ? 'Bắt đầu trò chuyện với Mai Phú Hưng' 
              : 'Start conversation with Mai Phú Hưng'}
          </p>
          
          <button
            onClick={handleZaloChat}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 3.168 1.92 5.982 4.8 7.645l-1.2 3.6c-.08.24.16.44.368.336l4.56-2.178c.64.08 1.296.11 1.972.11 5.523 0 10-4.145 10-9.243S17.523 2 12 2z"/>
            </svg>
            <span>{language === 'vi' ? 'Chat bằng Zalo' : 'Chat with Zalo'}</span>
          </button>

          <button
            onClick={handleQuickChat}
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-300 transition-colors duration-200"
          >
            {language === 'vi' ? 'Chat nhanh' : 'Quick Chat'}
          </button>
        </div>

        {/* Footer - Language Selector */}
        <div className="bg-gray-50 p-4 border-t border-gray-200">
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => setLanguage('vi')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                language === 'vi'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Tiếng Việt
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                language === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Zalo Logo at bottom */}
        <div className="bg-blue-600 py-2 flex justify-center">
          <img 
            src="/Icon_of_Zalo.svg.webp" 
            alt="Zalo" 
            className="h-6 w-auto opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

