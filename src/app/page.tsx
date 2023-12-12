import CategoryMenu from '../components/(Home)/CategoryMenu';
import PopularMenu from '../components/(Home)/PopularMenu';

import MainPhoto from '../components/(Home)/MainPhoto';
import Sidebar from '../components/(Home)/Sidebar';

export default function Home() {
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
