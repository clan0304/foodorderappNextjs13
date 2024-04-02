import { SafeProduct } from '@/type';
import { BASE_API_URL } from '../../utils/constants';
import PopularItem from './PopularItem';

import getProducts from '../actions/getProducts';

const PopularMenu = async () => {
  const products: SafeProduct[] = await getProducts();

  if (!products || products.length === 0) {
    return <div> No Products found.</div>;
  }

  const popularProducts: SafeProduct[] = products.filter(
    (product) => product.isPopular === true
  );
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl sm:text-2xl font-bold">Popular items</h1>
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
