import React, { ReactNode } from 'react';
import { ScrollManager } from './utils';

export default function HighlightText({ content, clickToId }: { content: string; clickToId?: string }): ReactNode {
  return (
    <span
      className={`text-navy-0 font-bold ${clickToId ? 'hover: cursor-pointer' : ''} `}
      onClick={() => {
        if (clickToId) {
          ScrollManager.scrollToElement(clickToId);
        }
      }}
    >
      {content}
    </span>
  );
}
