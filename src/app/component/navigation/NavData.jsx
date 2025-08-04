import Link from "next/link";
import { ImFlattr } from "react-icons/im";
import jobs from "@/app/data/jobs";
import LoginButton from "../LoginButton";
import SignupButton from "../SignupButton";

export default function NavData() {
    return (
        <>
            
                <li>
                    <Link href="/"><ImFlattr className="text-6xl" /></Link>
                </li>
            
                <li>
                    <Link href="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dash Board</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/post-job">Post Job</Link>
                </li>
            
            <div className="flex flex-row space-x-3">
               
                <LoginButton />
                <SignupButton />
            </div>
        </>
    )
}