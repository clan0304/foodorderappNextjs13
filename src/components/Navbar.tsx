'use client';

import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useCartStore } from '../utils/store';
import { FaUserCircle } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';
import { IoIosHome } from 'react-icons/io';
import MenuNavbar from '../app/(Home)/MenuNavbar';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { totalItems } = useCartStore();
  const router = useRouter();
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleLogout = () => {
    signOut();
    router.push('/');
  };

  return (
    <nav className="bg-white fixed top-0 left-0 h-[120px] sm:h-[60px] w-full flex flex-col items-center z-10 border-b-2 border-slate-300">
      <div className="flex sm:hidden gap-2 font-lobster">
        <h1 className="text-red-600">ABC</h1> Korean{' '}
        <h1 className="text-blue-700">Restaurant</h1>
      </div>
      <div className="h-[60px] w-full flex justify-between items-center px-5">
        <Link href="/" className="text-2xl font-bold font-lobster">
          <div className="block sm:hidden">
            <IoIosHome size={20} />
          </div>
          <div className="hidden sm:flex gap-2 font-lobster">
            <h1 className="text-red-600">ABC</h1> Korean{' '}
            <h1 className="text-blue-700">Restaurant</h1>
          </div>
        </Link>
        <div className="flex gap-x-3">
          {session?.user.isAdmin && <Link href="/addproduct">Add Product</Link>}
          {session?.user.isAdmin && (
            <div className="bg-black text-white px-3 rounded-xl hover:cursor-pointer hover:opacity-50">
              <Link href="/orders">Order</Link>
            </div>
          )}

          <div
            className="flex gap-2 text-black bg-slate-200 rounded-xl items-center px-3 hover:opacity-50 hover:cursor-pointer"
            onClick={() => {
              router.push('/cart');
            }}
          >
            <FaShoppingCart size={20} />
            {totalItems} Items
          </div>

          <div className="flex gap-x-2 items-center">
            <div className="flex items-center gap-x-2 text-white bg-black rounded-xl px-3 hover:cursor-pointer hover:opacity-50">
              <FaUserCircle size={20} />
              {session ? (
                <button onClick={handleLogout}>Log Out</button>
              ) : (
                <button onClick={() => router.push('/login')}>Log In</button>
              )}
            </div>
          </div>
        </div>
      </div>

      {pathname === '/' && (
        <div className="w-full bg-white flex items-center justify-center sm:hidden h-[60px]">
          <MenuNavbar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
