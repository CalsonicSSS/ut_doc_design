'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SubSection1_1 from './subSections/Subsection1_1';
import ElementHeader from '../ElementHeader';
import ElementSidebar from '../../ElementSidebar';
import SubSection1_2 from './subSections/Subsection1_2';

const subsections = [
  { id: '1.1', title: 'Develop an integrated care pathway that describes the steps that make up the transition process.' },
  {
    id: '1.2',
    title:
      'Develop an organization-specific transition policy with youth (with input from family members/caregivers) that describes the organization’s approach to mental health care transitions, and make it publicly available.',
  },
  {
    id: '1.3',
    title:
      'Develop a youth-centered and developmentally appropriate transition protocol in collaboration with both the child and adolescent mental health services and the adult mental health services, that outlines standards for communication and information sharing.',
  },
  { id: '1.4', title: 'Ensure that all staff have the knowledge, skills and training to effectively support the agency/services approach to transitions.' },
  {
    id: '1.5',
    title: 'Determine clear responsibilities for all roles within the organization involved in the transition of care, to be further informed by the needs of each youth.',
  },
  { id: '1.6', title: 'Partner with the youth (and family members/caregivers, if appropriate) at all phases of transition and decision-making' },
  { id: '1.7', title: 'Establish a plan to evaluate the organization’s transition protocol.' },
];

export default function Element1Content() {
  const [activeSubsection, setActiveSubsection] = useState('1.1');

  // Function to render the appropriate subsection content
  const renderSubsectionContent = () => {
    switch (activeSubsection) {
      case '1.1':
        return <SubSection1_1 />;
      case '1.2':
        return <SubSection1_2 />;
      case '1.3':
        return <SubSection1_1 />;
      case '1.4':
        return <SubSection1_1 />;
      case '1.5':
        return <SubSection1_1 />;
      case '1.6':
        return <SubSection1_1 />;
      case '1.7':
        return <SubSection1_1 />;
      default:
        return <SubSection1_1 />;
    }
  };

  const elementTitle = 'Element 1 Organization Transition Policy';

  // Get current index and determine next/previous sections
  const currentIndex = subsections.findIndex((section) => section.id === activeSubsection);
  const prevSection = currentIndex > 0 ? subsections[currentIndex - 1] : null;
  const nextSection = currentIndex < subsections.length - 1 ? subsections[currentIndex + 1] : null;

  return (
    <div className='w-full'>
      {/* Blue header section */}
      <ElementHeader elementTitle={elementTitle} subsectionId={activeSubsection} subsectionTitle={subsections.find((s) => s.id === activeSubsection)?.title || ''} />

      <div className='flex'>
        {/* Left sidebar with subsection navigation */}
        <aside className='w-[30%] shrink-0'>
          <div className='sticky top-0 max-h-screen overflow-y-auto py-14 pl-32 pr-20'>
            <ElementSidebar elementTitle={elementTitle} subsections={subsections} activeSubsection={activeSubsection} onSubsectionChange={setActiveSubsection} />
          </div>
        </aside>

        {/* Main content area */}
        <div className='flex-1 pl-24 pr-96 py-14'>
          {renderSubsectionContent()}

          {/* Navigation buttons */}
          <div className='flex justify-between mt-36 '>
            {prevSection ? (
              <Link
                href={`#${prevSection.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSubsection(prevSection.id);
                }}
                className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70'
              >
                <ArrowLeft className='h-4 mr-2' />
                Previous Element: {prevSection.id}
              </Link>
            ) : (
              <Link href='/doc/main-contents' className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70'>
                <ArrowLeft className='h-4 mr-2' />
                Back to Guidebook
              </Link>
            )}

            {nextSection && (
              <Link
                href={`#${nextSection.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSubsection(nextSection.id);
                }}
                className='flex items-center font-roboto text-[16px] leading-[25px] hover:opacity-70 '
              >
                Next Element: {nextSection.id}
                <ArrowRight className='h-4 ml-2' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
