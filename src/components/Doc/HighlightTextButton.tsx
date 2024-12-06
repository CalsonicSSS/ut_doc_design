import React from 'react';

export default function HighlightTextButton({ children }: { children: string }) {
  return <button className='text-[14px] font-medium text-[#FFB652] leading-[16px] px-4 py-2 rounded-2xl bg-[#FFF8EE] mr-5'>{children}</button>;
}
