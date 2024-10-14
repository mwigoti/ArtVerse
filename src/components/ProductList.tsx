import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
            <Image src="/city.webp" alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
            <Image src="/city.webp" alt="" fill sizes='25vw'/>
            </div>
        </Link>
      
    </div>
  )
}

export default ProductList
