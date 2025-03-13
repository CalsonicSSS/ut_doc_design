'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { assetPathMode } from '@/utils';
import CleverleylabHeader from '@/components/layout/CleverleylabHeader';

const docPathAssetMapping: Record<string, string> = {
  '/doc/getting-started': 'doc_header_getting_started.svg',
  '/doc/about-this-resource': '',
  '/doc/main-contents': '',
  '/doc/resources-lists': '',
  '/doc/appendices': '',
  '/doc/glossary': '',
  '/doc/citation': '',
};

export default function DocHeader() {
  const pathname: string = usePathname();
  const targetAsset = docPathAssetMapping[pathname];

  return (
    <div className='relative overflow-hidden'>
      <CleverleylabHeader />
      {/* Background image */}
      <div className='absolute inset-0' style={{ position: 'relative', width: '100%', height: '600px' }}>
        <Image src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/${targetAsset}`} alt='Documentation header asset' style={{ objectFit: 'cover' }} fill />
      </div>
    </div>
  );
}
