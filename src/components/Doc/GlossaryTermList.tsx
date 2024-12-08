import React from 'react';
import Link from 'next/link';

type TermContent = {
  href?: string; // Add relevant properties for your `LinkContent` object
  title: string;
  text: string;
};

export default function GlossaryTermList({ termList }: { termList: TermContent[] }) {
  return (
    <>
      {termList.map((term: TermContent, index: number) => (
        <div key={index} className={`${index + 1 !== termList.length && 'mb-4'}`}>
          <Link href={term.href ? term.href : ''} className={`text-navy-0 underline block`}>
            {term.title}
          </Link>
          <p>{term.text}</p>
        </div>
      ))}
    </>
  );
}
