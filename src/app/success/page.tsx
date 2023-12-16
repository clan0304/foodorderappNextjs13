'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useCartStore } from '../../utils/store';

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
    <>
      <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
        <p className="max-w-[600px]">
          Payment successful. You are being redirected to the orders page.
          Please do not close the page.
        </p>
      </div>
    </>
  );
};

export default SuccessPage;
