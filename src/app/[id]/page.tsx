import Price from '@/components/Price';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const getData = async (id: string) => {
  const res = await axios.get(`/api/products/${id}`);

  if (!res.data) {
    throw new Error('Failed!');
  }

  return res.data;
};
const Item = async ({ params }: { params: { id: string } }) => {
  const singleItem: ProductType = await getData(params.id);
  return (
    <div className="flex flex-col sm:flex-row items-center justify-around w-full gap-4">
      <div className="rounded-lg flex w-full sm:w-1/2 sm: mx-6 h-[300px] relative">
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
