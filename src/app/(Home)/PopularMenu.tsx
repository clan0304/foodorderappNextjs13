import PopularItem from './PopularItem';

import axios from 'axios';

export const getProducts = async () => {
  try {
    const products = await axios.get(
      `${process.env.DATABASE_URL}/api/products`
    );

    if (!products.data) {
      throw new Error('failed!');
    }

    return products.data;
  } catch (error) {
    console.error('Failed to fetch!');
  }
};

const PopularMenu = async () => {
  const products: ProductType[] = await getProducts();

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
