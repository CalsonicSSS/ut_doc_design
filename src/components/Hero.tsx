import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full'>
      {/* Change fixed padding to responsive padding */}
      <div className='lg:ps-52 flex flex-col lg:flex-row items-center justify-between'>
        <div className='w-full lg:w-auto text-center lg:text-left'>
          <div className='mb-[50px]'>
            {/* Adjust text sizes for mobile */}
            <p className='section-title'>THE UNITE TOOLKIT</p>
            <h1 className='main-title'>Core Components Guidebook</h1>
          </div>
          <p className='font-roboto text-base lg:text-lg mb-8 lg:mb-[56px] text-base-1'>Supporting youth mental health transitions in care</p>
          {/* Make buttons stack on mobile */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <button className='button-fill w-full sm:w-auto'>Go to Doc</button>
            <button className='button-outline w-full sm:w-auto'>PDF Preview</button>
          </div>
        </div>
        {/* Make image responsive */}
        <div className='mt-10 xl:m-0'>
          <Image src='/hero_image.svg' alt='Healthcare illustration' className='object-contain w-full h-auto' height={530} width={495} priority />
        </div>
      </div>
    </div>
  );
};

export default Hero;
