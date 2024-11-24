import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function Footer(): ReactElement {
  return (
    <div className='font-open-sans w-full bg-navy3 py-12 px-80'>
      <div className='flex items-center justify-between'>
        <p className='text-base text-white font-bold tracking-[2px]'>Uncomplicated access, seamless transitions, continuous care.</p>

        <Image src='/social_links.svg' alt='social_links illustration' className='object-contain' height={32} width={62} />
        <Image src='/logo.svg' alt='logo illustration' className='object-contain' height={73} width={129} />
      </div>
      <p className='text-center text-white text-sm mt-10'>Copyright Dr. Kristin Cleverley 2023.</p>
    </div>
  );
}
