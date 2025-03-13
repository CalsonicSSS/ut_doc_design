import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ElementHeaderProps {
  elementTitle: string;
  subsectionId: string;
  subsectionTitle: string;
}

export default function ElementHeader({ elementTitle, subsectionId, subsectionTitle }: ElementHeaderProps) {
  return (
    <div className='w-full bg-[#193E72] text-white py-20 px-28'>
      {/* Breadcrumb navigation */}
      <div className='flex items-center mb-4 font-roboto font-normal text-[13px] leading-[22px]'>
        <Link href='/doc' className='hover:underline '>
          Guidebook
        </Link>
        <ChevronRight size={13} className='mx-2' />
        <Link href='/doc/main-contents' className='hover:underline'>
          Main Contents
        </Link>
        <ChevronRight size={13} className='mx-2' />
        <span>{elementTitle}</span>
        <ChevronRight size={13} className='mx-2' />
        <span>Element {subsectionId}</span>
      </div>

      {/* Subsection title */}
      <h1 className='font-lato text-[36px] font-medium leading-[50px] w-[75%]'>
        {subsectionId} {subsectionTitle}
      </h1>
    </div>
  );
}
