import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='ps-52 flex items-center justify-between'>
        <div>
          <div className='mb-[50px]'>
            <p className='section-title'>THE UNITE TOOLKIT</p>
            <h1 className='main-title'>Core Components Guidebook</h1>
          </div>
          <p className='font-roboto text-lg mb-[56px] text-base-1'>Supporting youth mental health transitions in care</p>
          <div className='flex gap-4'>
            <button className='button-fill'>Go to Doc</button>
            <button className='button-outline'>PDF Preview</button>
          </div>
        </div>
        <div>
          <Image src='/hero_image.svg' alt='Healthcare illustration' className='object-contain' height={530} width={495} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
