'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Animate() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 700); // blinking effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 w-full flex flex-col items-center z-50">
      {/* Top Text */}
      <div className="mb-2 text-2xl font-bold text-green-600">
        残無料席：6
      </div>

      {/* Blinking Button */}
      <div
        className={`relative w-[700px] h-[100px] rounded-lg cursor-pointer transition-transform duration-300 bg-green-400 ${
          visible ? 'scale-105 opacity-100' : 'scale-95 opacity-70'
        }`}
        onClick={() => {
          window.location.href = "https://works.do/xfO76NJ";
        }}
      >
        {/* Background Image */}
        <Image
          src="/images/btn_box.png"
          alt="LINE Button"
          fill
          className="object-cover rounded-lg"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 space-x-6">
          <Image
            src="/images/btn_default.jpg"
            alt="LINE Icon"
            width={60}
            height={60}
            className="rounded-full"
          />
          {/* Text Inside Button */}
          <div className="text-base text-gray-800 font-medium text-center">
            アシスタント投资大师LINEを追加今すぐ{' '}
            <span className="text-yellow-300">無料</span>で参加してください
          </div>
        </div>
      </div>
    </div>
  );
}
