'use client';

import { OrderType } from '@/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const Orders = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/login');
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('/api/orders').then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success('The Order has been updated successfully!');
  };
  if (isLoading || status === 'loading') return 'Loading...';

  return (
    <div>
      <table className="w-full border-seperate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th>Order ID</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: OrderType) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.price}</td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className="bg-red-500 p-2 rounded-full">
                      Edit
                    </button>
                  </form>
                </td>
              ) : (
                <td>{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
