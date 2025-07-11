"use client";


import Link from 'next/link';
import { useState } from 'react';
import { SiHandshake } from "react-icons/si";
import NavData from './NavData';

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='text-slate-50 bg-emerald-700 h-16 flex justify-between
    items-center px-4 md:hidden'>
        <Link href="/" className='text-2xl font-bold'>
            HR Platform
        </Link>
        <SiHandshake className="text-green-700" onClick={toggleMenu} />
    </div>
    {
    isOpen &&
    <ul className="flex flex-col items-center justify-center border-green-700 text-slate-50 font-semibold text-2xl capitalize space-y-4 p-4">
        <NavData />
    </ul> 
        
    }
    </>
  );
}