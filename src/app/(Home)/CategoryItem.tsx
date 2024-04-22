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
        <div className="relative min-w-[40px] w-1/3 sm:w-4/5 aspect-[1/1] rounded-lg">
          <Image
            src={img}
            alt="image"
            fill
            objectFit="cover"
            className="rounded-lg"
            sizes="(max-width:624px) 33vw, 80vw"
          />
          <div className="hidden xs:block absolute right-2 bottom-2">
            <button
              className="bg-blue-700 text-white px-3 rounded-2xl font-semibold text-lg hover:opacity-80 hover:curosr-pointer"
              onClick={handleCart}
            >
              Add
            </button>
          </div>
          {isPopular && (
            <div className="absolute  max-w-1/2 top-3 left-0 ">
              <div className="w-full px-3 flex justify-center items-center text-center rounded-md h-4 xs:h-6 bg-green-600 text-white text-md font-semibold">
                <h1 className="text-[0.5rem] xs:text-[1rem]">Popular</h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-y-1 w-1/2 sm:w-4/5">
          <h2 className="font-semibold min-h-[40px] text-[11px] xs:text-[13px] sm:text-[16px] md:text-lg lg:text-xl hover:underline">
            {title}
          </h2>
          <h3 className="text-10px sm:text-lg">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
