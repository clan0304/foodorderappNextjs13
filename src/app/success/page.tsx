'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useCartStore } from '../../utils/store';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessPage = () => {
  const router = useRouter();

  const { clearProducts } = useCartStore();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setTimeout(() => {
          clearProducts();
          router.push('/');
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, [router, clearProducts]);

  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="w-2/3 text-center flex flex-col items-center justify-center gap-8">
        <FaCheckCircle color="green" size={100} />
        <p className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl">
          Thanks for your order!
        </p>
        <div className="flex justify-center">
          <button
            className="bg-indigo-500 text-white px-7 py-2 rounded-xl text-md md:text-lg font-semibold hover:opacity-70"
            onClick={() => router.push('/collections')}
          >
            Continue to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
