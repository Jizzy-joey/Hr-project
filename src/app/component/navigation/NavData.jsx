import Link from "next/link";
import { ImFlattr } from "react-icons/im";
import CategorySearchBar from "../Categories";
import jobs from "@/app/data/jobs";

export default function NavData() {
    return (
        <>
        <div className="flex items-left space-x-4 md:space-x-8">
         <li>
                    <Link href="/"><ImFlattr className="text-8xl text-white bg-green-700 p-2" /></Link>
                </li>
        </div>
        <div className="flex items-center justify-center space-x-4">
                <li>
                    <Link href="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
        </div>
               <div>
                <CategorySearchBar jobs={jobs} />
               </div>
            
        </>
    )
}