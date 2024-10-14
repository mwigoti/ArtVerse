import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll'>
    <div className='flex gap-4 md:gap-8'>
        <Link href="/list?category=test">
        <div className='relative bg-slate-100 w-full'>
            <Image src="/img6.webp" alt="" fill sizes="20vw" className= "object-cover "/>
        </div>
        <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
        </Link>
    </div>
    </div>
  )
}

export default CategoryList
