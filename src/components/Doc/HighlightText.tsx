import React, { ReactNode } from 'react';

export default function HighlightText({ content, clickToId }: { content: string; clickToId?: string }): ReactNode {
  return (
    <span
      className={`text-navy-0 font-bold ${clickToId ? 'hover: cursor-pointer' : ''} `}
      onClick={() => {
        console.log(clickToId);
      }}
    >
      {content}
    </span>
  );
}
