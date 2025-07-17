"use client";

import { SideContext } from "@/app/providers"
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function Saves() {
  const router = useRouter();

  const  { updates, setUpdates, removed, setRemoved, setLikes } = useContext(SideContext);

  const handleRemove = (index) => {
   const UpdatedList = updates.filter((_, data) => data !== index);
   setRemoved([...removed, updates[index]]);
   setUpdates(UpdatedList);
  };

  return (
    <div className="p-16">
      <h1 className="font-semibold uppercase text-2xl text-right">Total Saves: {updates.length}</h1>
      {
        updates.length == 0 ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-3xl font-bold">No Saves updates Yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-200 pt-4">
            {updates.map((update, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <h2 className="text-xl font-semibold">{update.name}</h2>
                <p className="text-gray-600">{update.company}</p>
                <div className="flex items-center space-x-2 ">
                  <button className="text- hover:underline bg-black text-white hover:bg-amber-600
                  hover:scale-105  hover:shadow-lg
                  transition duration-300 cursor-pointer border-2 border-amber-500 px-2 py-1 rounded-md"
                  onClick={() => router.push(`/jobs/${update.name.toLowerCase().replace(/\s+/g, '-')}`)}>
                   read more
                  </button>
                  <button className="text-red-500 hover:underline" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

