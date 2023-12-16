'use client';

import React, { useEffect, useState } from 'react';
import PopularItem from './PopularItem';

import axios from 'axios';

const PopularMenu = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://foodorderapp-nextjs13.vercel.app/api/products'
        );
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load data');
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Page is not found!</div>;
  }

  const popularProducts: ProductType[] = products.filter(
    (product) => product.isPopular === true
  );
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Popular items</h1>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
        {popularProducts.map((product) => (
          <PopularItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            isPopular={product.isPopular}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
