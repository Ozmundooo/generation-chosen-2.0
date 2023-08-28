import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const openDonationModal = () => {
    closeSideBar();
    setOpen(true);
  };
  const closeSideBar = () => {
    setIsOpen(false);
  };
  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Menu
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        className="font-[Poppins]"
        right
      >
        <Link
          onClick={() => closeSideBar()}
          href="/executive-directors"
          className="font-bold text-xl"
        >
          Executive Directors
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/our-founders"
          className="font-bold text-xl"
        >
          Our Founders
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/therapy"
          className=" font-bold text-xl"
        >
          Our Therapists
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/programs"
          className=" font-bold text-xl"
        >
          Programs
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/videos"
          className="font-bold text-xl"
        >
          Videos
        </Link>
        <Link href="https://www.anchorshop.org" className="font-bold text-xl">
          Shop
        </Link>
        <Link
          onClick={() => closeSideBar()}
          href="/contact"
          className="font-bold text-xl"
        >
          Contact
        </Link>
        <div
          onClick={() => openDonationModal()}
          className="cursor-pointer font-bold text-xl"
        >
          Donate
        </div>
      </Menu>
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

export default Sidebar;
