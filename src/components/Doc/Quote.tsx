import React from 'react';

export default function Quote({ quote, author, position, mt }: { quote: string; author: string; position: string; mt: number }) {
  return (
    <div className={`flex justify-${position} mt-${mt}`}>
      <div className='text-xs font-semibold leading-[18px] text-[#353E5C]'>
        <p className='w-[524px]'>{quote}</p>
        <p className='mt-3 text-end'>- {author}</p>
      </div>
    </div>
  );
}
