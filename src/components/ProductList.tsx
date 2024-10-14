import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 'kes. 1500', image: '/img5.webp', description: 'My description 1' },
    { id: 2, name: 'Product 2', price: 'kes. 1800', image: '/img6.webp', description: 'My description 2' },
    { id: 3, name: 'Product 3', price: 'kes. 2000', image: '/img7.webp', description: 'My description 3' },
    { id: 4, name: 'Product 4', price: 'kes. 2500', image: '/img8.webp', description: 'My description 4' },
  ];

  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      {products.map(product => (
        <div key={product.id} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
          <Link href="/test">
            <div className='relative w-full h-80'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500'
              />
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes='25vw'
              />
            </div>
          </Link>
          <div className='flex justify-between'>
            <span className='font-medium'>{product.name}</span>
            <span className='font-semibold'>{product.price}</span>
          </div>
          <div className='text-sm text-gray-500'>{product.description}</div>
          <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
