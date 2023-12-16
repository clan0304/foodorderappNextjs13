'use client';

import { useCartStore } from '../../utils/store';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';

const Cart = () => {
  const { products, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push('/login');
    } else {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              price: totalPrice,
              products,
              status: 'Not Paid!',
              userEmail: session.user.email,
            }),
          }
        );
        const data = await res.json();
        router.push(`/payment/${data.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full p-10 gap-20">
      <div className="w-full lg:w-3/4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row gap-y-10 justify-between gap-x-5 items-center"
          >
            <div className="relative w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]">
              <Image fill objectFit="cover" src={product.img} alt="Image" />
            </div>
            <div className="flex gap-x-3 justify-between items-center h-[40px]">
              <h1 className="text-xs sm:text-md">{product.title}</h1>
              <h2 className="text-xs sm:text-md">X{product.quantity}</h2>
            </div>
            <div className="flex items-center flex-col sm:flex-row sm:gap-10">
              <span className="text-blue-600 font-bold text-md sm:text-lg">
                $ {product.price}
              </span>
            </div>
            <IoIosClose
              color="red"
              size={30}
              className="color-red hover:opacity-50 hover:cursor-pointer"
              onClick={() => removeFromCart(product)}
            />
          </div>
        ))}
      </div>

      <div className="flex w-full lg:w-1/4 items-center justify-center">
        <div className="flex flex-col w-full items-center gap-3">
          <h1>Food Price : {totalPrice}</h1>
          <h1>Delivery Costs: 0</h1>
          <div className="w-full border-2 border-black" />
          <h1>Total Price: {totalPrice}</h1>
          <div className="my-10 w-full">
            <button
              className="px-5 text-lg bg-blue-500 w-full hover:pointer-cursor hover:opacity-80"
              onClick={handleCheckout}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
