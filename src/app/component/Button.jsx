"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Button({ title }) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/jobs/${title.toLowerCase().replace(/\s+/g, '-')}`);
        // This will navigate to the job description page with the title as a slug
    }
  return (
    <button onClick={handleClick} className='flex flex-col items-center bg-black text-white px-4 py-2 rounded-md
    hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer'>
        Read More

    </button>
  )
}
