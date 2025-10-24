'use client';

import { useEffect } from 'react';

interface ZaloChatProps {
  oaId: string; // Your Zalo Official Account ID
  welcomeMessage?: string;
  autoExpand?: boolean;
}

export default function ZaloChat({ 
  oaId, 
  welcomeMessage = 'Xin chào! Chúng tôi có thể giúp gì cho bạn?',
  autoExpand = false 
}: ZaloChatProps) {
  useEffect(() => {
    // Load Zalo SDK script
    const script = document.createElement('script');
    script.src = 'https://sp.zalo.me/plugins/sdk.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      className="zalo-chat-widget"
      data-oaid={oaId}
      data-welcome-message={welcomeMessage}
      data-autopopup={autoExpand ? '1' : '0'}
      data-width="350"
      data-height="420"
    ></div>
  );
}

