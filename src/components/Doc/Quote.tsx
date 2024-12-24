import React, { ReactNode } from 'react';

export default function Quote({ title, quote, author, position, mt }: { title?: string; quote: string | ReactNode; author?: string; position: string; mt: number }) {
  return (
    <div className={`flex ${position} mt-${mt}`}>
      <div className='text-sm font-semibold leading-[18px] text-[#333E5F]'>
        <p className='w-[524px] text-center mb-4'>{title && `${title}`}</p>
        <p className='w-[524px]'>{quote}</p>
        <p className='mt-3 text-end'>{author && `-${author}`}</p>
      </div>
    </div>
  );
}
