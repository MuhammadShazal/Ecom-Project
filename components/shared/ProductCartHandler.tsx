"use client"

import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image'
import React, { FC } from 'react' 
import { BsCart2 } from "react-icons/bs"
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient as client } from '../../sanity/lib/sanityClient';




const ProductCartHandler: FC<{ item:any }> = ({ item }) => {

   const builder = imageUrlBuilder(client);
     function urlFor(source: any) {
        return builder.image(source)
    }
    
    return (
        <>   
          <div className='mx-auto w-[11rem] md:w-[16rem] space-y-3 duration-300 mt-6'>
          <Link href={`/catalog/${item.slug.current}`}>
            <div className='relative w-full'>
                <div className='absolute inset-0 z-10' />
                <Image width={1200} height={1200} src={urlFor(item.image).width(1200).height(1200).url()} alt={item.image.alt} />
            </div>
            <div className='space-y-1 text-gray-600 font-semibold text-lg select-none justify-center'>
               
                    <h6>{item.productName}</h6>
                    <p className='text-sm text-blue-500'>{item.productTypes[0]}</p>
                    <p>${item.price}</p>
            </div>
            </Link>
        </div>

          </>


    )
}

export default ProductCartHandler;