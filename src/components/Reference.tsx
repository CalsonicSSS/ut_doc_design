import React, { ReactNode } from 'react';
import { ScrollManager } from './Doc/utils';

export default function Reference({ refName, clickToId }: { refName: string; clickToId: string }): ReactNode {
  return (
    <span
      className='text-navy-0 hover:cursor-pointer'
      onClick={() => {
        ScrollManager.scrollToElement(clickToId);
      }}
    >
      {refName}
    </span>
  );
}
