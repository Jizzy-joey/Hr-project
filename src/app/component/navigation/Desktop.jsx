import Link from "next/link";
import NavData from "./NavData";

export default function Desktop() {
    return (
        <ul className='md:flex space-x-4 md:flex-row hidden justify-around items-center bg-emerald-700 text-slate-50 h-32 capitalize font-semibold text-2xl'>
            <NavData />
        </ul>
    );
}
