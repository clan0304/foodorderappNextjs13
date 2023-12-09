'use client';

import React from 'react';
import { Link } from 'react-scroll';

const MenuNavbar = () => {
  return (
    <div className="flex gap-10 font-outfit font-semibold hover:cursor-pointer bg-white">
      <ul className="active:bg-slate-700 border-2 border-black hover:bg-red-600 rounded-lg px-3">
        <Link
          to="rice-section"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Rice
        </Link>
      </ul>
      <ul className=" hover:bg-blue-600 border-2 border-black px-3 rounded-lg">
        <Link
          to="noodle-section"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          Noodle
        </Link>
      </ul>
      <ul className=" hover:bg-red-600 border-2 border-black rounded-lg px-3">
        <Link
          to="chicken-section"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Chicken
        </Link>
      </ul>
      <ul className="hover:bg-blue-600 px-3 border-2 border-black rounded-lg">
        <Link
          to="drink-section"
          spy={true}
          smooth={true}
          offset={-110}
          duration={500}
        >
          Drinks
        </Link>
      </ul>
    </div>
  );
};

export default MenuNavbar;
