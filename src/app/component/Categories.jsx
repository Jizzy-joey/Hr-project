"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function CategorySearchBar({ jobs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Get unique categories
  const categories = [...new Set(jobs.map(job => job.category))];
  
  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    typeof category === "string" && category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto my-6" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-lg"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownOpen(true);
          }}
          onFocus={() => setIsDropdownOpen(true)}
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isDropdownOpen && filteredCategories.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          <ul className="py-1">
            {filteredCategories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/jobs/category/${category.replaceAll(/\s+/g, '-').toLowerCase()}`}
                  className="block px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
                  onClick={() => {
                    setSearchTerm("");
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isDropdownOpen && searchTerm && filteredCategories.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg p-4 text-gray-500">
          No categories found for "{searchTerm}"
        </div>
      )}
    </div>
  );
}