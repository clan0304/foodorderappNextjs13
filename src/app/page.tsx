import CategoryMenu from './(Home)/CategoryMenu';
import PopularMenu from './(Home)/PopularMenu';

import axios from 'axios';
import MainPhoto from './(Home)/MainPhoto';
import Sidebar from './(Home)/Sidebar';
import MenuNavbar from './(Home)/MenuNavbar';

const getProducts = async () => {
  const res = await axios.get('http://localhost:3000/api/products');

  if (!res.data) {
    throw new Error('Failed');
  }

  return res.data;
};

export default async function Home() {
  const products: ProductType[] = await getProducts();
  const popularProducts: ProductType[] = products.filter(
    (product) => product.isPopular === true
  );

  return (
    <main className="flex flex-col px-10 gap-2 w-full">
      <div className="w-full h-[300px] relative my-10">
        <MainPhoto />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="hidden sm:block sm:w-1/4 lg:w-1/5 w-full">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full sm:w-3/4 gap-14">
          <PopularMenu />
          <CategoryMenu />
        </div>
      </div>
    </main>
  );
}
