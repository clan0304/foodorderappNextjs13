'use client';

import { useCartStore } from '@/utils/store';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

const ConfirmOperation: React.FC<{ intentId: string }> = ({ intentId }) => {
  const { clearProducts } = useCartStore();
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${intentId}`, {
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

const Success = () => {
  const searchParams = useSearchParams();
  const intentId = searchParams.get('payment_intent');

  if (!intentId) {
    return <div>Payment intent not found.</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmOperation intentId={intentId} />
    </Suspense>
  );
};

export default Success;
