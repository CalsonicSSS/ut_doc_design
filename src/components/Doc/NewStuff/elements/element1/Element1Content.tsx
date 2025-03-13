'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SubSection1_1 from './subSections/Subsection1_1';
import ElementHeader from '../ElementHeader';
import ElementSidebar from '../ElementSidebar';

const subsections = [
  { id: '1.1', title: 'Develop an integrated care pathway that describes the steps that make up the transition process.' },
  { id: '1.2', title: "Organization's written transition policy" },
  { id: '1.3', title: 'Create a developmentally appropriate transition timeline' },
  { id: '1.4', title: 'Ensure staff has appropriate knowledge' },
  { id: '1.5', title: 'Determine responsibilities for each role' },
  { id: '1.6', title: 'Partner with the youth during all stages' },
  { id: '1.7', title: "Evaluate the organization's transition protocol" },
];

export default function Element1Content() {
  const [activeSubsection, setActiveSubsection] = useState('1.1');

  // Function to render the appropriate subsection content
  const renderSubsectionContent = () => {
    switch (activeSubsection) {
      case '1.1':
        return <SubSection1_1 />;
      // Additional cases for other subsections will be added as they're implemented
      default:
        return <SubSection1_1 />;
    }
  };

  // Get current index and determine next/previous sections
  const currentIndex = subsections.findIndex((section) => section.id === activeSubsection);
  const prevSection = currentIndex > 0 ? subsections[currentIndex - 1] : null;
  const nextSection = currentIndex < subsections.length - 1 ? subsections[currentIndex + 1] : null;

  return (
    <div className='w-full'>
      {/* Blue header section */}
      <ElementHeader
        title='Element 1 Organizational Transition Policy'
        subsectionId={activeSubsection}
        subsectionTitle={subsections.find((s) => s.id === activeSubsection)?.title || ''}
      />

      <div className='flex mt-8'>
        {/* Left sidebar with subsection navigation */}
        <aside className='w-[30%] shrink-0'>
          <div className='sticky top-0 max-h-screen overflow-y-auto py-16 pl-32 pr-16'>
            <ElementSidebar subsections={subsections} activeSubsection={activeSubsection} onSubsectionChange={setActiveSubsection} />
          </div>
        </aside>

        {/* Main content area */}
        <div className='flex-1 pl-24 pr-96 py-16'>
          {renderSubsectionContent()}

          {/* Navigation buttons */}
          <div className='flex justify-between mt-12 mb-8'>
            {prevSection ? (
              <Link
                href={`#${prevSection.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSubsection(prevSection.id);
                }}
                className='flex items-center text-blue-600 hover:text-blue-800'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />
                Previous: {prevSection.id}
              </Link>
            ) : (
              <Link href='/doc/main-contents' className='flex items-center text-blue-600 hover:text-blue-800'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Main Contents
              </Link>
            )}

            {nextSection && (
              <Link
                href={`#${nextSection.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSubsection(nextSection.id);
                }}
                className='flex items-center text-blue-600 hover:text-blue-800'
              >
                Next: {nextSection.id}
                <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
