import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularItem = ({ title, price, img, id, isPopular }: ProductType) => {
  return (
    <Link href={`/${id}`}>
      <div className="flex flex-row sm:flex-col gap-y-2 gap-x-5 w-full">
        <div className="relative sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] rounded-lg">
          <Image
            src={img}
            alt="image"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          {isPopular && (
            <div className="absolute top-3 left-0">
              <div className="w-[80px] text-center rounded-md h-6 bg-green-500 text-white text-md font-semibold">
                <h1 className="ml-1">Popular</h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-1">
          <h2 className="font-semibold">{title}</h2>
          <h3>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PopularItem;
