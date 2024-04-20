'use client';

import { SafeProduct } from '@/type';
import Image from 'next/image';

import { useCartStore } from '@/utils/store';
import { toast } from 'react-toastify';
import { MouseEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PopularItem = ({ price, title, img, id, isPopular }: SafeProduct) => {
  const { addToCart } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addToCart({
      id: id,
      title: title,
      img: img,
      price: price,
      quantity: 1,
    });

    toast.success('Added to the cart successfully!');
  };

  const navigateToProduct = () => {
    router.push(`/${id}`);
  };

  return (
    <div
      className="flex flex-row sm:flex-col gap-y-2 gap-x-5 w-full cursor-pointer"
      onClick={navigateToProduct}
    >
      <div className="flex flex-row sm:flex-col gap-y-2 gap-x-5 w-full">
        <div className="relative max-w-1/3 aspect-[1/1] h-[70px] sm:w-[200px] sm:h-[200px]  xs:w-[100px] xs:h-[100px] rounded-lg">
          <Image
            src={img}
            alt="image"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute right-2 bottom-2">
            <button
              className="bg-blue-700 text-white px-2 sm:px-3 rounded-2xl font-semibold text-xs sm:text-lg hover:opacity-80 hover:curosr-pointer"
              onClick={handleCart}
            >
              Add
            </button>
          </div>
          {isPopular && (
            <div className="absolute  top-3 left-0 ">
              <div className="w-[40px] sm:w-[80px] flex justify-center items-center text-center rounded-md h-4 sm:h-6 bg-green-600 text-white text-md font-semibold">
                <h1 className="text-[0.5rem] sm:text-[1rem]">Popular</h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-1 max-w-[200px]">
          <h2 className="font-semibold text-[9px] sm:text-md min-h-[40px] max-w-1/2 hover:underline">
            {title}
          </h2>
          <h3 className="text-[10px] sm:text-lg">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
