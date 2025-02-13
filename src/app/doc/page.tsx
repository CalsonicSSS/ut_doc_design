'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Introduction from '@/components/Doc/GettingStarted/Introduction';
import Acknowledgements from '@/components/Doc/GettingStarted/Acknowledgements';
import SuggestedCitation from '@/components/Doc/GettingStarted/SuggestedCitation';
import AboutThisResource from '@/components/Doc/GettingStarted/AboutThisResource';
import SideBar from '@/components/Doc/SideBar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Element1 from '@/components/Doc/MainContent/Element1';
import Element2 from '@/components/Doc/MainContent/Element2';
import Element3 from '@/components/Doc/MainContent/Element3';
import Element4 from '@/components/Doc/MainContent/Element4';
import Element5 from '@/components/Doc/MainContent/Element5';
import Element6 from '@/components/Doc/MainContent/Element6';
import ResourcesLists from '@/components/Doc/others/ResourcesLists';
import Appendices from '@/components/Doc/others/Appendices';
import Link from 'next/link';

export default function DocumentationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row relative'>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-md shadow-md'>
        {!isMobileMenuOpen && <Menu size={24} />}
      </button>
      {/* the placement of this sheet does not matter as it is the overlay, it will not change the current structure*/}
      {/* both open and onOpenChange are needed here. The onOpenChange enables close sheet (by X or area outside the sheet)*/}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side={'left'} className=' overflow-y-auto'>
          <div className='mb-6'>
            <Link className='doc-sidebar-nav-section text-lg ms-10' href={'/'}>
              Home
            </Link>
          </div>

          <SideBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </SheetContent>
      </Sheet>

      {/* Sidebar */}
      <div
        className={`
    py-20
    hidden
    lg:block lg:w-[35%]
    transition-transform duration-300
    lg:translate-x-0
    h-screen
    overflow-y-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}  `}
      >
        <div className='mb-6'>
          <Link className='doc-sidebar-nav-section text-lg lg:ms-24' href={'/'}>
            Home
          </Link>
        </div>

        <SideBar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

      {/* Main Content */}
      <main className='w-full overflow-y-auto lg:ps-28 h-screen'>
        <div className='max-w-[800px]'>
          <Introduction />
          <Acknowledgements />
          <SuggestedCitation />
          <AboutThisResource />
          <Element1 />
          <Element2 />
          <Element3 />
          <Element4 />
          <Element5 />
          <Element6 />
        </div>
        <div className='max-w-[920px]'>
          <ResourcesLists />
          <Appendices />
        </div>
      </main>
    </div>
  );
}
