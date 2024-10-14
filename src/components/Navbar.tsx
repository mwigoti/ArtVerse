import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import Link from 'next/link';  // Import the Next.js Link component

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* MOBILE */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link href="/" passHref>
          <div className='text-2xl tracking-wide cursor-pointer'>ArtVerse</div>
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className='hidden md:flex items-center justify-between gap-8 h-full'>
        {/* LEFT */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
          <Link href="/" passHref>
            <div className='flex items-center gap-4 cursor-pointer'>
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
              <div className='text-2xl tracking-wide'>ArtVerse</div>
            </div>
          </Link>
          <div className='hidden xl:flex gap-4'>
                    <Link href='/' passHref>Homepage</Link>
                    <Link href='/shop' passHref>Shop</Link>
                    <Link href='/deals' passHref>Deals</Link>
                    <Link href='/about' passHref>About</Link>
                    <Link href='/contact' passHref>Contact</Link>
                    
          </div>
        </div>

        {/* RIGHT */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
