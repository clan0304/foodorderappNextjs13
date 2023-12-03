import { FaBowlRice } from 'react-icons/fa6';
import { CiBowlNoodles } from 'react-icons/ci';
import { GiChickenOven } from 'react-icons/gi';
import { GiSodaCan } from 'react-icons/gi';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="sm:flex sticky hidden  sm:top-[70px]">
      <ul className="flex flex-row sm:flex-col gap-10 sm:gap-20">
        <div className="flex gap-x-4 items-center">
          <FaBowlRice size={30} />
          <Link href="#rice-section" className="text-xl">
            Rice
          </Link>
        </div>
        <div className="flex gap-x-4 items-center">
          <CiBowlNoodles size={30} />
          <li className="text-xl">Noodle</li>
        </div>
        <div className="flex gap-x-4 items-center">
          <GiChickenOven size={30} />
          <li className="text-xl">Chicken</li>
        </div>
        <div className="flex gap-x-4 items-center">
          <GiSodaCan size={30} />
          <li className="text-xl">Drinks</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
