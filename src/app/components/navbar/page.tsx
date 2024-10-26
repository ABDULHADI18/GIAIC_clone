"use client"
import Logo from"../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <>
        <div className="w-full h-20 sticky top-0 bg-[#044E83] flex justify-between items-center px-6 z-50">
          <Image
            src={Logo}
            alt="Logo"
            className="w-[80px] h-auto absolute top-6 "
          ></Image>
          <div className="relative left-28 text-xs">
            <p className="text-[#b9d8f3] text-lg font-extrabold xl:text-2xl xl:font-bold font-sans">
               Tuition Free Education Program on Latest Technologies
             </p>
          </div>
          <ul className="hidden md:flex h-full items-center text-white md:space-x-4 lg:text-lg lg:space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-[#b9d8f3] hover:border-b-2 transition-all duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Apply"
                className="hover:text-[#b9d8f3] hover:border-b-2 transition-all"
              >
                Apply
              </Link>
            </li>
            <li>
              <Link
                href="/Jobs"
                className="hover:text-[#b9d8f3] hover:border-b-2 transition-all"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/Result"
                className="hover:text-[#b9d8f3] hover:border-b-2 transition-all"
              >
                Result
              </Link>
            </li>
            <li>
              <Link
                href="/Courses"
                className=" mx-5 hover:text-[#b9d8f3] hover:border-b-2 transition-all"
              >
                Courses
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default Navbar;