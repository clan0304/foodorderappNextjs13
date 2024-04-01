'use client';

import { SafeProduct } from '@/type';
import Image from 'next/image';

import { useCartStore } from '@/utils/store';
import { toast } from 'react-toastify';
import { MouseEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CategoryItem = ({ price, title, img, id, isPopular }: SafeProduct) => {
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
        <div className="relative sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] rounded-lg">
          <Image
            src={img}
            alt="image"
            fill
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute right-2 bottom-2">
            <button
              className="bg-white px-2 sm:px-3 rounded-2xl font-semibold text-sm sm:text-lg"
              onClick={handleCart}
            >
              Add
            </button>
          </div>
          {isPopular && (
            <div className="absolute  top-3 left-0 ">
              <div className="w-[60px] sm:w-[80px] flex justify-center items-center text-center rounded-md h-6 bg-green-500 text-white text-md font-semibold">
                <h1 className="ml-1 text-[0.75rem] sm:text-[1rem]">Popular</h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-1 max-w-[200px]">
          <h2 className="font-semibold min-h-[40px]">{title}</h2>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
