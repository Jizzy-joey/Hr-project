"use client";
import Link from "next/link";
import { useContext } from "react";
import { SideContext } from "../providers";

export default function DasNav() {

    const context = useContext(SideContext);
    const likes = context?.likes ?? 0; // Get likes from context or default to 0

  return (
    <nav className="bg-gradient-to-r from-gray-300 to-gray-900 shadow-lg">
      <ul className="flex items-center justify-between px-8 py-4">
        <li>
          <Link
            href="/dashboard"
            className="transition-colors duration-200 hover:bg-amber-600 px-6 py-2 rounded text-lg font-semibold"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/saves"
            className="transition-colors duration-200 hover:bg-amber-600 px-6 py-2 rounded text-lg font-semibold flex items-center gap-2"
          >
            <span>Likes</span>
            <span className="bg-black text-white rounded-full px-3 py-1 text-sm font-bold">{likes}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
