'use client';

import { useCartStore } from '@/utils/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Success = () => {
  const searchParams = useSearchParams();
  const { clearProducts } = useCartStore();

  const intentId = searchParams.get('payment_intent');
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`/api/confirm/${intentId}`, {
          method: 'PUT',
        });

        router.push('/');
        clearProducts();
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [intentId, router, clearProducts]);

  return (
    <div>Payment successful. You are being redirected to the orders page.</div>
  );
};

export default Success;
