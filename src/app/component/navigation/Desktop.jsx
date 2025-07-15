import Link from "next/link";
import NavData from "./NavData";


export default function Desktop() {
    return (
       <ul className="p-4 bg-black text-white flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 md:space-x-8 shadow-md text-lg">
           <NavData />
           

       </ul>
    );
}
