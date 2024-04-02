import { SafeProduct } from '@/type';

import CategoryItem from './CategoryItem';

import getProducts from '../actions/getProducts';

const CategoryMenu = async () => {
  const products: SafeProduct[] = await getProducts();

  if (!products || products.length === 0) {
    return <div> No Products found.</div>;
  }

  const riceProducts: SafeProduct[] = products.filter(
    (product) => product.category === 'rice'
  );
  const noodleProducts: SafeProduct[] = products.filter(
    (product) => product.category === 'noodle'
  );
  const chickenProducts: SafeProduct[] = products.filter(
    (product) => product.category === 'chicken'
  );
  const drinksProducts: SafeProduct[] = products.filter(
    (product) => product.category === 'drinks'
  );

  return (
    <div className="flex flex-col gap-y-14">
      <section id="rice-section" className="flex flex-col gap-y-2 mt-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Rice</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {riceProducts.map((product) => (
            <CategoryItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </section>
      <section id="noodle-section">
        <h1 className="text-xl sm:text-2xl font-bold my-2">Noodle</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {noodleProducts.map((product) => (
            <CategoryItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </section>
      <section id="chicken-section" className="min-h-[50vh]">
        <h1 className="text-xl sm:text-2xl font-bold my-2">Chicken</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {chickenProducts.map((product) => (
            <CategoryItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </section>
      <section id="drink-section" className="min-h-screen">
        <h1 className="text-xl sm:text-2xl font-bold my-2">Drinks</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {drinksProducts.map((product) => (
            <CategoryItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryMenu;
