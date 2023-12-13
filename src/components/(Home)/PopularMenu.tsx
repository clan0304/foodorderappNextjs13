import React from 'react';
import PopularItem from './PopularItem';

const getPopularProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    throw new Error('Failed!');
  }
};

const PopularMenu = async () => {
  const products: ProductType[] = await getPopularProducts();
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
