import React from "react";



const data = [
    "/images/section3/1.png",
    "/images/section3/2.png",
    "/images/section3/3.png",
    "/images/section3/1.png",
    "/images/section3/2.png",
]

function Section3() {
  return (
    <>
      <div
        className="sm:pt-[189px] pt-[130px] pb-0 sm:pb-[61px]  bg-cover bg-[url(/images/backgrounds/section3.png)] "
        style={{
          backgroundPosition: "0 0",
          backgroundSize: "cover",
        }}
      >
        <div className=" mt-[-48px] mb-[90px] w-full px-[10px] sm:px-[75px] max-[940px] mx-auto">
          <div>
            <p className="mt-0 mb-[24px] text-[#222] font-Inter text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[900] text-center">
              Dive into London&apos;s
              <br />
              Student Societies
            </p>
            <p className="  px-[10px] sm:px-[40px]  pb-0 font-Recoleta text-[20px] sm:text-[28px] leading-[1.3] text-center max-w-[630px] mx-auto ">
              Are you aware of the wonderful things happening around you? Use
              Huzzle to tap into the richest career networks in Europe.{" "}
            </p>
          </div>
        </div>
        <div className=' sm:mt-[32px] mt-[0px] pb-[64px]  px-[35px] sm:px-[65px] items-center flex overflow-x-scroll  '>
            {
                data.map((item,index)=>{
                    return(
                        <div key={index} className='sm:mx-[10px] mx-[5px]  min-w-[256px] sm:min-w-[360px] w-full h-[310px] sm:h-[430px]'>
                            <img src={item} alt="" className='w-full h-full object-cover'/>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
}

export default Section3;
