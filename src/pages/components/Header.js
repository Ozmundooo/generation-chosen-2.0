import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
export default function Header(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <header
        className={
          props.home
            ? "flex lg:justify-between px-2 lg:p-10 lg:py-6 p-4 align-middle  lg:place-items-center bg-white rounded-full"
            : "flex lg:justify-between px-2 lg:p-10 lg:py-6 p-4 align-middle  lg:place-items-center bg-white "
        }
      >
        <div>
          <Link href="/">
            <Image className=" w-[80px] lg:w-20" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="font-['Poppins'] font-normal text-black ">
          <ul className="lg:flex hidden flex-row align-middle gap-8 text-lg">
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out"
              href="/executive-directors"
            >
              <li>Our Team</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out"
              href="/our-founders"
            >
              <li>Founders</li>
            </Link>

            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out"
              href="/programs"
            >
              <li>Programs</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out"
              href="/videos"
            >
              <li>Videos</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out"
              href="https://www.anchorshop.org"
            >
              <li>Shop</li>
            </Link>
            <Link
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out"
              href="/contact"
            >
              <li>Contact</li>
            </Link>
            <div
              className="hover:underline underline-offset-1 hover:underline-offset-4  ease-in-out cursor-pointer "
              onClick={() => onOpenModal()}
            >
              <li>Donate</li>
            </div>
          </ul>
        </div>
        <div className="lg:hidden">
          <Sidebar />
        </div>
      </header>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="">
          <h2 className="p- text-xl font-semibold ">Donate </h2>
          <p>
            If you would like to financially support our organization e-transfer
            generationchosenone@gmail.com and use the password chosenone
          </p>
        </div>
      </Modal>
    </>
  );
}

//
