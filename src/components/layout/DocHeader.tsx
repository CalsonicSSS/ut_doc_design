'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { assetPathMode } from '@/utils';
import CleverleylabHeader from '@/components/layout/CleverleylabHeader';

const devDocPathAssetMapping: Record<string, string> = {
  '/doc/getting-started': 'doc_header_getting_started.svg',
  '/doc/about-this-resource': 'doc_header_about_this_resource.svg',
  '/doc/main-contents': 'doc_header_main_content.svg',
  '/doc/resources-lists': 'doc_header_resource_list.svg',
  '/doc/glossary': 'doc_header_appendices_gt.svg',
  '/doc/citation': 'doc_header_appendice_citation.svg',
};

const prodDocPathAssetMapping: Record<string, string> = {
  '/doc/getting-started/': 'doc_header_getting_started.svg',
  '/doc/about-this-resource/': 'doc_header_about_this_resource.svg',
  '/doc/main-contents/': 'doc_header_main_content.svg',
  '/doc/resources-lists/': 'doc_header_resource_list.svg',
  '/doc/glossary/': 'doc_header_appendices_gt.svg',
  '/doc/citation/': 'doc_header_appendice_citation.svg',
};

export default function DocHeader() {
  const pathname: string = usePathname();
  const targetAsset = assetPathMode === 'PROD' ? prodDocPathAssetMapping[pathname] : devDocPathAssetMapping[pathname];

  return (
    <div className='relative overflow-hidden'>
      <CleverleylabHeader />
      <div className='absolute inset-0' style={{ position: 'relative', width: '100%', height: '500px' }}>
        <Image src={`${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/${targetAsset}`} alt='Documentation header asset' style={{ objectFit: 'cover' }} fill />
      </div>
    </div>
  );
}
