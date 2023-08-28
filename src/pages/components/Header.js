import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Header(props) {
  const [homeStart, setHomeStart] = useState(props.home ? 0 : 1);
  useEffect(() => {
    if (props.home) {
      setTimeout(() => {
        setHomeStart(1);
      }, 1000);
    }
  });
  return (
    <>
      <header
        className={
          props.home
            ? homeStart === 1
              ? "flex lg:justify-between px-2 lg:p-10 lg:py-6 p-4 align-middle  lg:place-items-center bg-white rounded-full opacity-100 duration-1000"
              : "flex lg:justify-between px-2 lg:p-10 lg:py-6 p-4 align-middle  lg:place-items-center bg-white rounded-full opacity-0 duration-1000"
            : "flex lg:justify-between px-2 lg:p-10 lg:py-6 p-4 align-middle  lg:place-items-center bg-white "
        }
      >
        <div>
          <Link href="/">
            <Image className=" w-[80px] lg:w-20" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="font-['Poppins'] font-normal text-black ">
          <ul className="lg:flex hidden flex-row align-middle justify-center gap-8 text-lg ">
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out my-auto"
              href="/executive-directors"
            >
              <li>Our Team</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out my-auto"
              href="/our-founders"
            >
              <li>Founders</li>
            </Link>

            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out my-auto"
              href="/programs"
            >
              <li>Programs</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out my-auto"
              href="/videos"
            >
              <li>Videos</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out my-auto"
              href="https://www.anchorshop.org"
            >
              <li>Shop</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out my-auto"
              href="/contact"
            >
              <li>Contact</li>
            </Link>
            <Link
              className="bg-[#CB2607]  text-white font-medium rounded-full py-2 px-6  text-center"
              href="/contact"
            >
              <li>Donate</li>
            </Link>
          </ul>
        </div>
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </header>
    </>
  );
}

//
