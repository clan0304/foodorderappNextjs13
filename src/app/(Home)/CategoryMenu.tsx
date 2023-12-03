import axios from 'axios';
import CategoryItem from './CategoryItem';

const getProducts = async () => {
  const res = await axios.get('http://localhost:3000/api/products');

  if (!res.data) {
    throw new Error('Failed');
  }

  return res.data;
};

const CategoryMenu = async () => {
  const products: ProductType[] = await getProducts();
  const riceProducts: ProductType[] = products.filter(
    (product) => product.category === 'rice'
  );
  const noodleProducts: ProductType[] = products.filter(
    (product) => product.category === 'noodle'
  );
  const chickenProducts: ProductType[] = products.filter(
    (product) => product.category === 'chicken'
  );
  const drinksProducts: ProductType[] = products.filter(
    (product) => product.category === 'drinks'
  );

  return (
    <div className="flex flex-col gap-y-8">
      <div id="rice-section" className="flex flex-col gap-y-2 mt-2">
        <div>
          <h1 className="text-2xl font-bold">Rice</h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {riceProducts.map((product) => (
            <CategoryItem
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </div>
      <section>
        <h1 className="text-2xl font-bold my-2">Noodle</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {noodleProducts.map((product) => (
            <CategoryItem
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold my-2">Chicken</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {chickenProducts.map((product) => (
            <CategoryItem
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.img}
              isPopular={product.isPopular}
            />
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold my-2">Drinks</h1>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5">
          {drinksProducts.map((product) => (
            <CategoryItem
              key={product.id}
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
