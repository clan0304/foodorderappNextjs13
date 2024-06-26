import { SafeProduct } from '@/type';
import Price from '../../components/Price';

import Image from 'next/image';
import React from 'react';
import getProduct from '../actions/getProduct';

const Item = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const singleItem: SafeProduct | null = await getProduct(id);

  if (!singleItem) {
    return <div>Item is not found!</div>;
  }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around w-full gap-10 mt-10">
      <div className="rounded-lg flex w-1/3 sm: mx-6 aspect-[4/3] relative">
        <Image className="rounded-lg" fill src={singleItem.img} alt="Image" />
      </div>
      <div className="flex flex-col w-full sm:w-1/2 items-center gap-y-3">
        <h1 className="text-xl font-semibold">{singleItem.title}</h1>
        <h2>{singleItem.desc}</h2>
        <h3>${singleItem.price}</h3>
        <Price product={singleItem} />
      </div>
    </div>
  );
};

export default Item;
