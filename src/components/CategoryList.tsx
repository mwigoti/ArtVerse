import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className='px-4  overflow-x-scroll'>
      <div className='flex gap-4 md:gap-8'>
        <Link href="/list?category=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src="/img6.webp"
              alt="Category Name"
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className='mt-4 font-light text-cl tracking-wide text-center'>Category Name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
