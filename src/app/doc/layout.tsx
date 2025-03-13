'use client';

import { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import DocSidebar from '@/components/layout/DocSidebar';
import DocHeader from '@/components/layout/DocHeader';
import GlossarySidebar from '@/components/layout/GlossarySidebar';
import { usePathname } from 'next/navigation';
import CleverleylabHeader from '@/components/layout/CleverleylabHeader';

export default function DocLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMainElement = pathname.includes('/main-contents/element');

  if (isMainElement) {
    return (
      <div className='min-h-screen flex flex-col'>
        <CleverleylabHeader />
        <main>{children}</main>;
        <Footer />
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <DocHeader />

      <div className='flex flex-1'>
        {/* Sidebar that stays fixed during scroll */}
        <aside className='w-[30%] shrink-0'>
          <div className='sticky top-0 max-h-screen overflow-y-auto py-16 pl-32 pr-16'>
            <DocSidebar />
          </div>
        </aside>

        {/* Main content area */}
        <main className='flex-1 pl-24 pr-96 py-16'>{children}</main>

        {/* Right side glossary sidebar */}
        <GlossarySidebar />
      </div>

      <Footer />
    </div>
  );
}
