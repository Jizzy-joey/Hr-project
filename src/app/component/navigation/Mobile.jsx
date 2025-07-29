"use client";


import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"

import NavData from './NavData';

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='text-slate-50 bg-amber-700 h-16 flex justify-between
    items-center px-4 md:hidden'>
      <GiHamburgerMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />

    </div>
      {isOpen && (
        <ul className="flex flex-col items-center justify-center bg-green-700 text-slate-50 font-semibold text-2xl capitalize z-50 md:hidden">
          <NavData />
        </ul>
      )}
    </>
  );
}