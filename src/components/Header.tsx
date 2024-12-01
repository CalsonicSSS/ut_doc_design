'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <div className='w-full mb-5'>
      {/* Crisis banner - maintaining exactly the same for desktop */}
      {isBannerVisible && (
        <div className='w-full bg-navy-3 text-white py-4 relative'>
          <p className='font-karla font-bold text-sm text-center px-4 md:px-32 sm:pr-20'>
            Please note that the Cleverley Lab does not provide mental health services. If you are in a crisis, please call 911 or go to your nearest Emergency Department.
          </p>
          <button className='absolute right-5 top-1/2 -translate-y-1/2 text-white' onClick={() => setIsBannerVisible(false)}>
            <X size={'20px'} />
          </button>
        </div>
      )}

      {/* Navigation container */}
      <div className='w-full border-b'>
        {/* Preserve exact desktop layout at 1440px+ while making it responsive below */}
        <div className='h-[80px] px-4 sm:px-8 lg:px-32 xl:px-64 flex items-center justify-between'>
          {/* Logo and Navigation Group */}
          <div className='flex items-center'>
            {/* Logo */}
            <Link href='/' className='font-open-sans font-bold sm:text-2xl md:text-3xl tracking-[1px] text-navy-3'>
              cleverleylab
            </Link>

            {/* Desktop Navigation - hidden on mobile, exact positioning maintained on desktop */}
            <nav className='hidden lg:flex items-center gap-6 ms-20'>
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/team', label: 'Team' },
                { href: '/resources', label: 'Resources' },
                { href: '/in-the-media', label: 'In the Media' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link) => (
                <Link key={link.label} href={link.href} className='font-open-sans text-base text-nav-item hover:text-navy-1'>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side controls */}
          <div className='flex items-center gap-4'>
            {/* Mobile menu button - only visible on mobile */}
            <button className='lg:hidden p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className='w-6 h-6 text-nav-item' />
            </button>

            {/* Search Icon */}
            <button className='p-2'>
              <Search className='w-5 h-5 text-nav-item' strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - slides in from top when menu is opened */}
        {isMenuOpen && (
          <div className='lg:hidden absolute z-50 w-full bg-white border-b shadow-lg'>
            <nav className='flex flex-col py-2'>
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/team', label: 'Team' },
                { href: '/resources', label: 'Resources' },
                { href: '/in-the-media', label: 'In the Media' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link) => (
                <Link key={link.label} href={link.href} className='font-open-sans text-base text-nav-item hover:bg-gray-50 px-8 py-3' onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
