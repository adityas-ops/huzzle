import Link from "next/link";
import React from "react";


const link = [
    "For Students",
    "For Student Societies",
    "For Employers",
    "Our Story"
]

function Header() {
  return (
    <>
      <div className=" w-full flex h-full pt-[30px] sm:pt-0 sm:h-[104px] px-[7%] sm:px-[3%] items-center bg-[#fff]">
        <nav className=" max-w-[1340px] w-full mx-auto flex items-center justify-between">
          <div className=" mt-0 sm:mt-[-16px] flex w-[50%] min-h-[50%] items-center">
            <div className=" mr-[48px] flex items-center">
              <Link href="/" className="">
                <img src="/images/logo.png" className="w-[100px]" alt="logo" />
              </Link>
            </div>
          </div>
          {/* middle navbar */}
          <div className=" hidden  sm:flex w-auto  h-full items-center text-[#000]">
            {
                link.map((item, index) => (
                    <div key={index} className=" whitespace-nowrap font-Inter text-[#262626] text-[14px] font-[500] flex justify-center items-center  capitalize py-[14px] px-[24px] hover:bg-[#c4e7e6] hover:text-[#029491] hover:font-[600] rounded-[30px]">
                        <Link href="/">{item}</Link>
                    </div>
                ))
            }
          </div>
          {/* right navbar */}
          <div className=" hidden sm:flex w-[50%] min-h-[50px] justify-end items-center">
                <Link href="/" className=" flex px-[24px] py-[14px] justify-center items-center rounded-[32px] font-Recoleta  bg-[#029491] text-white text-[18px] font-[900] text-center">
                Use Huzzle ✨
                </Link>
          </div>
          <div className=" block sm:hidden ">
                <div className="p-[14px] bg-[#c4e7e6] text-[#029491] rounded-[12px] ">
                <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
                </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
