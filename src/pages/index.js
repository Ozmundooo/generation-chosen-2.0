import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import HomeHero from "../assets/HomeHeroBg.webp";
import Logo from "../assets/Logo.png";
import Pillars from "./components/pillars";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Generation Chosen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Generation Chosen" />
        <meta
          name="description"
          content="Generation Chosen is a non-profit organization devoted to interrupting intergenerational cycles of trauma and poverty in lower-income communities."
        />
        <meta name="keywords" content="non-profit, youth help, therapist" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="OADev" />
      </Head>
      <main className="">
        <div className="relative bg-black">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[60vh] lg:h-screen opacity-60 object-cover"
          >
            <source src="/HomeHero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 top-0  items-center justify-center rounded-3xl mx-3  lg:mx-10 mt-5 lg:mt-10">
            <Header home={true} />
          </div>
          <div className="absolute inset-0 md:right-1/4 flex items-center justify-center mx-6 lg:mx-12">
            <div className=" my-5  lg:my-auto text-white">
              <Image
                className=" hidden lg:flex w-24 lg:w-28 mb-3"
                src={Logo}
                alt="logo"
              />
              <h1 className="mb-2 text-lg md:text-3xl lg:text-4xl xl:text-6xl font-title font-medium ">
                Generation Chosen
              </h1>
              <h4 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-normal font-title mb-4 lg:w-3/4 xl:w-1/2">
                Devoted to <span className="text-[#CB2607]">interrupting</span>{" "}
                intergenerational cycles of trauma and poverty in lower-income
                communities.
              </h4>
              <div className="flex flex-row gap-4 font-title font-semibold md:text-xl">
                <Link
                  className="bg-[#CB2607] text-white py-2 px-4 rounded-lg w-1/2 lg:w-1/4 text-center"
                  href={"/"}
                >
                  Programs
                </Link>
                <Link
                  className="border-[#CB2607] border-2 py-2 px-4 rounded-lg w-1/2 lg:w-1/4 text-center"
                  href={"/"}
                >
                  Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Pillars />
      </main>
    </>
  );
}
