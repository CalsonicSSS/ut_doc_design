import React from 'react';

export default function Dot({ key }: { key: string }) {
  return (
    <div key={key} className='py-[12px]'>
      <div className='w-[2px] h-[2px] rounded-full bg-[#454545] mr-3' />
    </div>
  );
}
