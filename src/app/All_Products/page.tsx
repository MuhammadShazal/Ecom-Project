import React from 'react';
import { sanityClient as client } from '../../../sanity/lib/sanityClient';
import { Image as IImage } from 'sanity';
import ProductCartHandler from '../../../components/shared/ProductCartHandler';




const getProductData = async () => {
  const res = await client.fetch(`*[_type=="products"]{
    price,
    _id,
    productName,
    image[0],
    slug,
    productTypes,
  }`);
  return res;
};

interface Iproduct {
  title: string;
  _id: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
}

export default async function HomeProductSection() {
  const data: Iproduct[] = await getProductData();

  return (
    <div className='text-center'>
      <div>
    </div>
    <div className="content-center justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 gap-4">
      {data.map((item) => (
       <ProductCartHandler key={item._id} item={item}/>
      ))}
      </div>
      <div></div>
    </div>
 
 
 );
}

