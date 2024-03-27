import Image from 'next/image';

import SweetChilliChicken from '../../images/sweetchillichicken.jpeg';

const MainPhoto = () => {
  return (
    <div className="flex flex-col sm:flex-row h-[250px] w-full gap-3 items-center justify-center  bg-white text-black">
      <div className="sm:flex w-full sm:w-3/5 lg:w-2/5 aspect-[16/9] relative">
        <Image src={SweetChilliChicken} alt="chicken" fill objectFit="cover" />
      </div>
      <div className="flex w-4/5 sm:w-2/5 relative">
        <div className="flex-wrap w-full flex flex-col items-center justify-center gap-3">
          <h1 className="text-3xl font-bold font-lobster">Welcome to ABC</h1>
          <h2 className="text-md font-semibold">Open 7 days a week</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPhoto;
