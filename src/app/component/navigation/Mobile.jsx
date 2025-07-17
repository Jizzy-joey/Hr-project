"use client";


import Link from 'next/link';
import { useState } from 'react';

import NavData from './NavData';

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      {isOpen && (
        <ul className="flex flex-col items-center justify-center bg-green-700 text-slate-50 font-semibold text-2xl capitalize z-50 md:hidden">
          <NavData />
        </ul>
      )}
    </>
  );
}