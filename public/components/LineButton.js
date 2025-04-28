'use client';

import Image from 'next/image';

export default function LineButton() {
  return (
    <div className="common_fix1 w-full flex justify-center">
      <div
        className="relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
        onClick={() => {
          window.location.href = "https://line.me/ti/p/kDtqFxEuzR";
        }}
        style={{ width: 700, height: 100 }}
      >
        {/* Background button image */}
        <Image
          src="/images/btn_box.png"
          alt="LINE Button Box"
          fill
          className="object-cover rounded-lg"
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-start px-6 space-x-6">
          {/* Left-side image */}
          <Image
            src="/images/btn_default.jpg"
            alt="LINE Icon"
            width={60}
            height={60}
            className="rounded-full"
          />

          {/* Text content */}
          <div className="text-base text-gray-800 font-medium text-center">
            アシスタント投资大师LINEを追加今すぐ{' '}
            <span className="text-yellow-300 font-bold">無料</span>で参加してください
          </div>
        </div>
      </div>
    </div>
  );
}
