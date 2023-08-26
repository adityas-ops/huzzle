import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const data = [
  "/images/section4/1.png",
  "/images/section4/2.png",
  "/images/section4/3.png",
  "/images/section4/4.png",
  "/images/section4/5.png",
  "/images/section4/6.png",
  "/images/section4/7.png",
  "/images/section4/8.png",
  "/images/section4/9.jpeg",
];

function Section4() {
  return (
    <>
      <div
        className="sm:pt-[189px] pt-[130px] pb-[65px]  bg-cover bg-[url(/images/backgrounds/section4.png)] "
        style={{
          backgroundPosition: "0 0",
          backgroundSize: "cover",
        }}
      >
        <div className=" mt-[-48px] mb-[60px]  w-full px-[10px] sm:px-[75px] max-[940px] mx-auto">
          <div>
            <p className="mt-0 mb-[24px] text-[#222] font-Inter text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[900] text-center">
              Land your
              <br />
              dream job
            </p>
            <p className="  px-[20px] sm:px-[40px]  pb-0 font-Recoleta text-[20px] sm:text-[28px] leading-[1.3] text-center max-w-[730px] mx-auto ">
              This counts. With huzzle, you don&apos;t compromise on your First
              job. It should rock. You deserve it.
            </p>
          </div>
        </div>
        <div className=" max-w-[950px] px-[20px] w-full h-full mx-auto">
          <Marquee
            direction="left"
            speed={55}
            gradient={false}
            className="flex min-w-0 flex-[0_0_100%]  items-center gap-8 flex-nowrap"
          >
            {data.map((item, index) => (
              <div
                className="flex items-center justify-center sm:mx-[50px] mx-[50px] w-full h-full "
                key={index}
              >
                <img
                  src={item}
                  alt="marquee"
                  className=" max-w-full max-h-[3.5rem] "
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div className=" mt-[60px] flex items-center justify-center">
                <Link href="/" className=" bg-[#000] py-[12px] px-[50px] text-white font-Recoleta font-[700]  text-[20px] sm:text-[24px] rounded-[30px]">
                    Get Matches Now!
                </Link>
        </div>
      </div>
    </>
  );
}

export default Section4;
