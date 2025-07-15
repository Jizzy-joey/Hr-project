"use client";
import JobCard from "./JobCard";
import React from "react";
import { useState, useEffect } from "react";

export default function JobCategory() {
    const companyImages = [
      { src: "/CBN.jpg", alt: "CBN logo" },
      { src: "/mtn.jpg", alt: "MTN logo" },
      { src: "/nnpc.png", alt: "NNPC logo" },
      { src: "/acces.png", alt: "Access Bank logo" },
      { src: "/firstbank.png", alt: "First Bank logo" },
      { src: "/micro.png", alt: "Micro logo" },
      { src: "/Nestle.png", alt: "Nestle logo" },
    ];

    return (
      <section>
        <h2 className="text-3xl font-bold text-center py-4 my-8 border-b-8 w-fit border-emerald-700">
          Best Jobs Available
        </h2>
        <div>
          <JobCard val="6" />
        </div>
        <section>
          <h2 className="text-2xl font-bold text-center py-4 my-8 border-b-8 w-fit border-emerald-700">
            MAJOR COMPANY'S LOOKING FOR WORKERS
          </h2>
          <Slideshow images={companyImages} />
        </section>
      </section>
    );

    function Slideshow({ images }) {
      const [index, setIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 2500); // Change slide every 2.5 seconds
        return () => clearInterval(interval);
      }, [images.length]);

      function nextSlide() {
        setIndex((prev) => (prev + 1) % images.length);
      }

      function prevSlide() {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      }

      return (
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl h-48 flex items-center justify-center"> {/* Increased width */}
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={prevSlide} className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition">
              Prev
            </button>
            <button onClick={nextSlide} className="px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition">
              Next
            </button>
          </div>
        </div>
      );
    }
}