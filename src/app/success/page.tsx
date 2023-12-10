'use client';

import { useCartStore } from '@/utils/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Success = () => {
  const searchParams = useSearchParams();
  const { clearProducts } = useCartStore();

  const payment_intent = searchParams.get('payment_intent');
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: 'PUT',
        });

        router.push('/');
        clearProducts();
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [payment_intent, router, clearProducts]);

  return (
    <div>Payment successful. You are being redirected to the orders page.</div>
  );
};

export default Success;
