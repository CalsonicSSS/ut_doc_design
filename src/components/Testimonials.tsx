import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function Testimonials(): ReactElement {
  return (
    <div className='font-roboto w-full py-14 bg-[#EFF7FC]'>
      <div className='flex flex-col items-center justify-center'>
        <Image src='/user_thumb.png' alt='user_thumb illustration' className='object-contain mb-10' height={96} width={96} />
        <p className='text-center w-[1035px] text-lg mb-10'>
          Nibh elit lacus mi elit, dui maecenas vestibulum cursus. Aliquet quam cursus tortor eu a. Enim, integer pellentesque sagittis lectus aliquam sed cursus tortor, ac. Ornare
          quisque ullamcorper a eleifend fringilla turpis.
        </p>
        <p className='font-bold text-2xl'>Author Name</p>
        <p className='text-lg'>Role</p>
      </div>
    </div>
  );
}
