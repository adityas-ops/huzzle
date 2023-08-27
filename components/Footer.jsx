import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
         <div
        className="sm:pt-[189px] text-white pt-[130px] pb-[65px]  bg-cover bg-[url(/images/backgrounds/section7.png)] "
        style={{
          backgroundPosition: "0 0",
          backgroundSize: "cover",
        }}
      >
         <div className=" mt-[-48px] mb-[60px]  w-full px-[10px] sm:px-[75px] max-[940px] mx-auto">
          <div>
          <div className=' flex justify-center'>
            <img
            src='https://web.archive.org/web/20220625052225im_/https://uploads-ssl.webflow.com/6223c66648fd5d3b6c4c1bd3/62262522e8794e73adb62991_huzzle_white-p-500.png'
            className=' max-w-[20%] w-[152px] sm:w-[152px] h-full  '
            alt="a"
            />
          </div>
            <p className=" mb-[0px] mt-[15px]  font-Recoleta text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[400] text-center">
            [huh-zl] • from “to hustle”
            </p>
            <p className=" mb-[24px] mt-[4px]  font-Recoleta text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[400] text-center">
            #careers  #tech
            </p>
            <p className=" mb-[24px] mt-[24px]  font-Recoleta text-[28px] sm:text-[44px] max-w-[890px] mx-auto leading-[1.2] font-[400] text-center">
            You are Flowing smoothly through your career, untroubled, elegant, with Finesse. 
            <br/>
            The evolution of “hustling”.
            </p>
          </div>
        </div>
        <div className=" mt-[60px] mb-[90px] flex items-center justify-center">
                <Link href="/" className=" bg-[#fff] py-[15px] px-[50px] text-[#000] font-Recoleta font-[900]  text-[20px] sm:text-[24px] rounded-[30px]">
                    Get Matches Now!
                </Link>
        </div>
        <div className='mt-[36px] text-[20px] text-center font-Recoleta sm:text-[28px]'>
        Find out how Huzzle started
        </div>
        <div className='flex justify-center'>
            <img 
            src='https://uploads-ssl.webflow.com/6223c66648fd5d3b6c4c1bd3/62261fe95b5cb92bfef8f07f_right-arrow-3.png'
            className=' w-[60px]'
            alt='as'
            />
        </div>
      </div>
    </>
  )
}

export default Footer