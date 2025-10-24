'use client';

import { useState } from 'react';
import ZaloChatWidget from './ZaloChatWidget';

interface ZaloFloatingButtonProps {
  phoneNumber?: string; // Your Zalo phone number or OA link
  zaloLink?: string; // Direct link to your Zalo OA
}

export default function ZaloFloatingButton({ 
  phoneNumber,
  zaloLink = 'https://zalo.me/0798868886' // Default to your phone number
}: ZaloFloatingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleClick = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <div className="fixed bottom-40 right-10 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        aria-label="Chat với chúng tôi qua Zalo"
      >
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Chat với chúng tôi qua Zalo
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900" />
        </div>

        {/* Zalo Button */}
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" />
          
          {/* Main button with Zalo logo */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Zalo Icon Image */}
            <img
              src="/Icon_of_Zalo.svg.webp"
              alt="Zalo Chat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </button>

      {/* Zalo Chat Widget */}
      <ZaloChatWidget 
        isOpen={isWidgetOpen}
        onClose={() => setIsWidgetOpen(false)}
        zaloLink={zaloLink}
      />
    </div>
  );
}

