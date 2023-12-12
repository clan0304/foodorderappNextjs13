'use client';

import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <div className="sticky top-20 flex flex-col gap-20 text-xl font-semibold font-outfit hover:cursor-pointer pr-10 lg:pr-20">
      <Link
        to="rice-section"
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
      >
        <ul className=" hover:bg-red-600 border-2 border-black rounded-lg px-3">
          Rice
        </ul>
      </Link>

      <Link
        to="noodle-section"
        spy={true}
        smooth={true}
        offset={-110}
        duration={500}
      >
        <ul className=" hover:bg-blue-600 border-2 border-black px-3 rounded-lg">
          Noodle
        </ul>
      </Link>

      <Link
        to="chicken-section"
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
      >
        <ul className="hover:bg-red-600 border-2 border-black rounded-lg px-3">
          Chicken
        </ul>
      </Link>

      <Link
        to="drink-section"
        spy={true}
        smooth={true}
        offset={-110}
        duration={500}
      >
        <ul className=" hover:bg-blue-600 border-2 border-black px-3 rounded-lg">
          Drinks
        </ul>
      </Link>
    </div>
  );
};

export default Sidebar;
