'use client';
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Introduction from '@/components/Doc/GettingStarted/Introduction';
import Acknowledgements from '@/components/Doc/GettingStarted/Acknowledgements';
import SuggestedCitation from '@/components/Doc/GettingStarted/SuggestedCitation';
import AboutThisResource from '@/components/Doc/GettingStarted/AboutThisResource';
import DocumentationSidebar from '@/components/Doc/SideBar/Sidebar';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Element1 from '@/components/Doc/MainContent/Element1';
import Element2 from '@/components/Doc/MainContent/Element2';
import Element3 from '@/components/Doc/MainContent/Element3';
import Element4 from '@/components/Doc/MainContent/Element4';
import Element5 from '@/components/Doc/MainContent/Element5';
import Element6 from '@/components/Doc/MainContent/Element6';

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
        <SheetContent side={'left'}>
          <DocumentationSidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />
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
        <DocumentationSidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

      {/* Main Content */}
      <main className='w-full overflow-y-auto lg:ms-28 px-4 lg:px-0 py-14 h-screen'>
        <div className='max-w-[800px] border-t-2 pb-10'>
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
      </main>
    </div>
  );
}
