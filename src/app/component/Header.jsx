import React from 'react';
import { ImFlattr } from "react-icons/im";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-center relative h-[70vh]">
            <video
                src="/working.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <ImFlattr className="text-6xl text-white bg-green-700 p-2" />
                <h1 className="text-6xl font-bold text-green-700">NIJA-JOBS</h1>
                <p className="text-lg text-white">THE NO #1 JOB SITE IN NIGERIA.</p>
            </div>
        </header>
    );
}