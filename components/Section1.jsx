import Link from 'next/link'
import React from 'react'

function Section1() {
  return (
    <>
        <div className='mt-[67px] pb-[61px]  bg-cover bg-[url(/images/backgrounds/section1.png)] ' style={{
            backgroundPosition:"50% 20%",
            backgroundSize:"auto"
        }}>
            <div className=' sm:max-w-[940px] w-full mx-auto sm:px-[75px] px-[15px]  mt-[-20px] sm:mt-[-36px]'>
                <div className=' mt-[20px] mb-[-5px] sm:mb-0 overflow-hidden h-auto px-0 sm:px-[80px]'>
                    <p className=' pt-[12px] text-[#222] sm:text-[38px] text-[24px]  text-center px-[3rem] font-[900]'>Stop chasing</p>
                </div>
                <div className='sm:h-[100px] mt-[5px] sm:mt-0 h-[50px] overflow-hidden'>
                    <p className='sm:text-[100px] text-[50px] leading-[1] font-[800] font-Inter text-[#009491] text-center'>Internships</p>
                </div>
                <div>
                    <p className='pt-[12px] text-[#222] text-[24px] sm:text-[38px] font-Inter px-0 sm:px-[3rem] text-center font-[900] '>
                    Let them come to You.
                    </p>
                </div>
                <div className=' sm:mx-[80px] mx-[15px] '>
                    <p className=' sm:mt-[28px] mt-[12px] font-Recoleta text-[#000] sm:text-[28px] text-[20px] font-[400] text-center'>
                    Super-personalized career opportunities 
                    <br/>
                    that meet your goals.
                    </p>
                </div>
                <div className=' sm:mt-[60px] mt-[40px] mb-[50px] sm:mb-[90px] text-center flex items-center justify-center'>
                    <Link href="/" className=' font-Recoleta py-[12px] px-[50px] rounded-[30px] bg-[#009491] text-white text-[18px] sm:text-[24px] font-[700] '>
                        Get Matches Now!
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section1