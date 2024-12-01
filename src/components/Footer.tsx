import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function Footer(): ReactElement {
  return (
    <div className='font-open-sans w-full bg-navy-3 py-12 px-80'>
      <div className='flex items-center justify-between'>
        <p className='text-size-base text-white font-bold tracking-[2px]'>Uncomplicated access, seamless transitions, continuous care.</p>

        <div className='flex'>
          <Image src='/social_links.svg' alt='social_links illustration' className='object-contain' height={32} width={62} />
          <div className='mr-20' />
          <Image src='/logo.svg' alt='logo illustration' className='object-contain' height={73} width={129} />
        </div>
      </div>
      <p className='text-center text-sm mt-10 text-[#717170]'>Copyright Dr. Kristin Cleverley 2023.</p>
    </div>
  );
}
