'use client';

import { ScrollManager } from './utils';

export default function HighlightTextButton({ children, clickToId }: { children: string; clickToId?: string }) {
  return (
    <button
      onClick={() => {
        if (clickToId) {
          ScrollManager.scrollToElement(clickToId);
        }
      }}
      className='text-[14px] font-medium text-[#FFB652] leading-[16px] px-4 py-2 rounded-2xl bg-[#FFF8EE] mr-5'
    >
      {children}
    </button>
  );
}
