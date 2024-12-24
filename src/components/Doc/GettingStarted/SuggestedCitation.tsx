import Image from 'next/image';
import React from 'react';

export default function SuggestedCitation() {
  return (
    <section id='suggested-citation' data-section className='py-14 doc-content-text border-b-[1px]'>
      <h1 className='doc-content-title mb-8'>Suggested Citation</h1>
      <p className='mb-6'>
        Cleverley et al. (2023). The UNITE Guidebook: Core Components of CAMHS to AMHS Transitions. University of Toronto. Retrieved from cleverleylab.com/guidebook
      </p>
      <p>For more information, please contact: </p>
      <p>Dr. Kristin Cleverley </p>
      <div className='flex'>
        <Image src='/email.svg' alt='email' height={15} width={15} priority />
        <p className='text-[#00B6EF] ms-3'>k.cleverley@utoronto.ca</p>
      </div>
    </section>
  );
}
