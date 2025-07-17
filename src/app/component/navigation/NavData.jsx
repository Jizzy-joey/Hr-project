import Link from "next/link";
import { ImFlattr } from "react-icons/im";
import CategorySearchBar from "../Categories";
import jobs from "@/app/data/jobs";
import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";

export default function NavData() {
    return (
        <>
        <div className="flex items-left space-x-4 md:space-x-4">
         <li>
                    <Link href="/"><ImFlattr className="text-8xl text-white bg-amber-600 p-2" /></Link>
                </li>
        </div>
        <div className="flex items-center justify-center space-x-2">
                <li>
                    <Link className="flex flex-col items-center bg-black text-white px-2 py-2 rounded-md
    hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer" href="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link className="flex flex-col items-center bg-black text-white px-2 py-2 rounded-md
    hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer"  href="/about">About</Link>
                    </li>
                    <li>
                        <Link className="flex flex-col items-center bg-black text-white px-2 py-2 rounded-md
    hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer" href="/dashboard">Dash Board</Link>
                    </li>
                    <li>
                        <Link className="flex flex-col items-center bg-black text-white px-2 py-2 rounded-md
    hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer" href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="flex flex-col items-center bg-black text-white px-2 py-2 rounded-md
    hover:bg-amber-700 transition-all duration-300 capitalize cursor-pointer" href="/post-job">Post Job</Link>
                    </li>
        </div>
               <div className="flex flex-row items-center justify-end space-x-2">
                <CategorySearchBar jobs={jobs} />
                <LoginButton />
                <SignupButton />
               </div>
            
        </>
    )
}