import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react'; // Import the search icon
import { X } from 'lucide-react';

const Header = () => {
  return (
    <div className='w-full'>
      {/* Crisis banner - full width */}
      <div className='w-full bg-crisis text-white py-4 relative'>
        <p className='font-karla font-bold text-[14px] text-center'>
          Please note that the Cleverley Lab does not provide mental health services. If you are in a crisis, please call 911 or go to your nearest Emergency Department.
        </p>
        <button className='absolute right-5 top-1/2 -translate-y-1/2 text-white'>
          <X size={'20px'} />
        </button>
      </div>

      {/* Navigation container - full width with centered content */}
      <div className='w-full border-b'>
        {/* Inner container with fixed width */}
        <div className='px-64 h-[80px] flex items-center justify-between'>
          <div className='flex'>
            {/* Logo */}
            <Link href='/' className='font-open-sans font-bold text-[30px] leading-[30px] tracking-[1px] text-[#00204E]'>
              cleverleylab
            </Link>
            <nav className='flex items-center gap-6 ms-20'>
              <Link href='/' className='font-open-sans text-base text-[#4F4F4E] hover:text-navy'>
                Home
              </Link>
              <Link href='/projects' className='font-open-sans text-base text-[#4F4F4E] hover:text-navy'>
                Projects
              </Link>
              <Link href='/team' className='font-open-sans text-base text-[#4F4F4E] hover:text-navy'>
                Team
              </Link>
              <Link href='/resources' className='font-open-sans text-base text-[#4F4F4E] hover:text-navy'>
                Resources
              </Link>
              <Link href='/in-the-media' className='font-open-sans text-base text-[#4F4F4E] hover:text-navy'>
                In the Media
              </Link>
              <Link href='/contact-us' className='font-open-sans text-base text-[#4F4F4E] hover:text-navy'>
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Navigation Links - with proper spacing */}
          {/* Search Icon */}
          <button className='p-2'>
            <Search className='w-5 h-5 text-[#4F4F4E]' strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;