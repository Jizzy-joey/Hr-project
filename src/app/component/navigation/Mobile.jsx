"use client";


import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { ImFlattr } from 'react-icons/im';
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
       <Link href="/" className='text-6xl'><ImFlattr /></Link>
      <GiHamburgerMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />

    </div>
      {isOpen && 
        <ul className="flex flex-col items-center justify-center bg-amber-700 text-slate-50 font-semibold text-2xl capitalize space-y-4 p-4">
          <NavData />
        </ul>
      }
    </>
  );
}