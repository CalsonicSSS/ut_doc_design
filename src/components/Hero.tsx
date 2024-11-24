import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-full'>
      <div className='ps-52 flex items-center justify-between'>
        <div>
          <div className='mb-[50px]'>
            <p className='font-roboto font-bold text-xl tracking-[1px] text-navy2 '>THE UNITE TOOLKIT</p>
            <h1 className='font-open-sans font-bold text-5xl text-base-color'>Core Components Guidebook</h1>
          </div>
          <p className='font-roboto text-lg mb-[60px] text-base-color'>Supporting youth mental health transitions in care</p>
          <div className='flex gap-4'>
            <button className='bg-navy rounded-3xl text-white px-8 py-2 hover:bg-navy/90 font-roboto text-lg tracking-[0.5px]'>Go to Doc</button>
            <button className='border-2 border-navy rounded-3xl text-navy px-8 py-2  hover:bg-navy/10 font-roboto font-semibold tracking-[0.5px]'>PDF Preview</button>
          </div>
        </div>
        <div>
          {/* Replace with your actual image path */}
          <Image src='/hero_image.svg' alt='Healthcare illustration' className='object-contain' height={530} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
