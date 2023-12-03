import { useSession } from 'next-auth/react';
import CategoryMenu from './(Home)/CategoryMenu';
import PopularMenu from './(Home)/PopularMenu';
import Sidebar from './(Home)/Sidebar';
import axios from 'axios';
import MainCarousel from './(Home)/MainCarousel';

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
      <div className="w-full h-[300px] relative">
        <MainCarousel />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="sm:w-1/4 lg:w-1/5 w-full">{/* <Sidebar /> */}</div>
        <div className="flex flex-col w-full sm:w-3/4">
          <PopularMenu />
          <CategoryMenu />
        </div>
      </div>
    </main>
  );
}
