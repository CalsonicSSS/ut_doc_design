import Link from 'next/link';

type LinkContent = {
  href: string; // Add relevant properties for your `LinkContent` object
  text: string;
};

export default function LinkList({ linkContents }: { linkContents: LinkContent[] }) {
  return (
    <>
      {linkContents.map((content: LinkContent, index: number) => (
        <Link key={index} href={content.href} className={`text-navy-0 underline block ${index + 1 !== linkContents.length && 'mb-3'}`}>
          {content.text}
        </Link>
      ))}
    </>
  );
}