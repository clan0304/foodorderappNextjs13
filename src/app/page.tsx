import CategoryMenu from './(Home)/CategoryMenu';
import PopularMenu from './(Home)/PopularMenu';

import Sidebar from './(Home)/Sidebar';
import Carousel from './(Home)/Carousel';

export default function Home() {
  return (
    <main className="flex flex-col gap-2 w-full">
      <div className="w-full h-full mb-10 ">
        <Carousel />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:px-10">
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
