import React, { ReactNode } from 'react';
// import { ScrollManager } from './Doc/utils';
import Link from 'next/link';

export default function AuthorReference({ refName, href }: { refName: string; href?: string }): ReactNode {
  return (
    <>
      {href ? (
        <Link
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='text-navy-0 hover:cursor-pointer underline'
          // onClick={() => {
          //   ScrollManager.scrollToElement(clickToId);
          // }}
        >
          {refName}
        </Link>
      ) : (
        <span className='text-navy-0'>{refName}</span>
      )}
    </>
  );
}
