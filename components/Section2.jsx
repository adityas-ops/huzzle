import React from 'react'
import Carosuel from './Carosuel'

function Section2() {
  return (
    <>
         <div className='sm:pt-[189px] pt-[130px] pb-0 sm:pb-[61px]  bg-cover bg-[url(/images/backgrounds/section2.png)] ' style={{
            backgroundPosition:"0 0",
            backgroundSize:"cover",}}>
            <div className=' mt-[-48px] mb-0 sm:mb-[90px] w-full px-[10px] sm:px-[75px] max-[940px] mx-auto'>
                <div>
                    <p className='mt-0 mb-[24px] text-[#222] font-Inter text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[900] text-center'>
                    Explore Grad Jobs, Internships, Spring Weeks & Events
                    </p>
                    <p className='  px-0 sm:px-[40px] pb-[100px] sm:pb-0 font-Recoleta text-[20px] sm:text-[28px] leading-[1.3] text-center max-w-[790px] mx-auto '>
                    Your personal stream of curated events, internships, jobs, and everything that will supercharge your career. 🚀
                    </p>
                </div>
            </div>
            <div className=' mt-[32px] pb-[64px]  items-center hidden sm:flex '>
              <Carosuel/>
            </div>

        </div>
    </>
  )
}
 
export default Section2