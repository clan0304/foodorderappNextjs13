'use client';

import { useCartStore } from '../../utils/store';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';

const Cart = () => {
  const {
    products,
    totalPrice,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useCartStore();
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
      <div className="w-full lg:w-3/5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row gap-y-10 justify-between gap-x-5 items-center mt-10"
          >
            <div className="relative w-1/5 aspect-[1/1] rounded-md">
              <Image
                fill
                objectFit="cover"
                src={product.img}
                alt="Image"
                className="rounded-md"
              />
            </div>
            <div className="flex gap-x-3 w-2/5 justify-around items-center h-[40px]">
              <h1 className="text-xs sm:text-md md:text-lg">{product.title}</h1>
              <div className="flex gap-2 items-center">
                <CiSquareMinus
                  size={15}
                  onClick={() => decrementQuantity(product.id)}
                  className="hover:opacity-40 hover:cursor-pointer"
                />
                <p>{product.quantity}</p>
                <CiSquarePlus
                  size={15}
                  onClick={() => incrementQuantity(product.id)}
                  className="hover:opacity-40 hover:cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row sm:gap-10">
              <span className="text-blue-600 font-bold text-xs sm:text-sm md:text-md">
                $ {product.price}
              </span>
            </div>
            <p
              className="hover:underline hover:cursor-pointer text-red-600 text-xs sm:text-sm md:text-md lg:text-lg"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full lg:w-2/5 items-center justify-center">
        <div className="flex flex-col w-full items-center gap-3">
          <h1>Food Price : $ {totalPrice}</h1>
          <h1>Delivery Costs: $ 0</h1>
          <div className="w-full border-2 border-black" />
          <h1>Total Price: $ {totalPrice}</h1>
          <div className="my-10 w-full">
            <button
              className="px-5 text-lg bg-blue-500 w-full hover:pointer-cursor hover:opacity-80 rounded-md font-semibold"
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
