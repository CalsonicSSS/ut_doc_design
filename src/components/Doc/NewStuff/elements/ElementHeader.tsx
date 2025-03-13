import React from 'react';
import Link from 'next/link';

interface ElementHeaderProps {
  title: string;
  subsectionId: string;
  subsectionTitle: string;
}

export default function ElementHeader({ title, subsectionId, subsectionTitle }: ElementHeaderProps) {
  return (
    <div className='w-full bg-[#1a3e72] text-white p-8'>
      <div className='max-w-4xl'>
        {/* Breadcrumb navigation */}
        <div className='flex items-center text-sm mb-4'>
          <Link href='/doc' className='hover:underline'>
            Guidebook
          </Link>
          <span className='mx-2'>›</span>
          <Link href='/doc/main-contents' className='hover:underline'>
            Main Contents
          </Link>
          <span className='mx-2'>›</span>
          <span>{title}</span>
          <span className='mx-2'>›</span>
          <span>Element {subsectionId}</span>
        </div>

        {/* Subsection title */}
        <h1 className='text-3xl font-bold mt-4'>
          {subsectionId} {subsectionTitle}
        </h1>
      </div>
    </div>
  );
}
