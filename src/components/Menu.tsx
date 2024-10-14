"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';  // Import the Next.js Link component

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Menu Icon Image */}
            <Image
                src="/menu.png"
                alt="Menu icon"
                width={28}
                height={28}
                className="cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
            />

            {/* Menu Items - only show when 'open' is true */}
            {open && (
                <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                    <Link href='/' passHref>Homepage</Link>
                    <Link href='/shop' passHref>Shop</Link>
                    <Link href='/deals' passHref>Deals</Link>
                    <Link href='/about' passHref>About</Link>
                    <Link href='/contact' passHref>Contact</Link>
                    <Link href='/logout' passHref>Logout</Link>
                    <Link href='/cart' passHref>Cart (1)</Link>
                </div>
            )}
        </div>
    );
}

export default Menu;
