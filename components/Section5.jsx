import React, { useState } from 'react'

function Section5() {
    const [click,setClick] = useState(false)
  return (
    <>
        <div
        className="sm:pt-[189px] pt-[130px] sm:pb-[85px] pb-0  bg-cover bg-[url(/images/backgrounds/section5.png)] "
        style={{
          backgroundPosition: "0 0",
          backgroundSize: "cover",
        }}
      >
        <div className=" mt-[-68px] mb-[60px]  w-full px-[10px] sm:px-[75px] max-[940px] mx-auto">
          <div>
            <div className=' mb-[24px]  text-center text-[20px] sm:text-[28px] font-Recoleta font-[400]'>
🙊 Coming soon...
            </div>
            <p className="mt-0 mb-[24px] text-[#222] font-Inter text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[900] text-center">
             <span className='text-[#009491]'>(Professionally){" "}</span>
             Match with likeminded students in London.
            </p>
            <p className="  px-[20px] sm:px-[40px]  pb-0 font-Recoleta text-[20px] sm:text-[28px] leading-[1.3] text-center max-w-[730px] mx-auto ">
              This counts. With huzzle, you don&apos;t compromise on your First
              job. It should rock. You deserve it.
            </p>
          </div>
        </div>
        {/* section of cards */}
        <div 
       
         className=' max-w-[720px] mt-[100px]  h-[400px]  sm:h-[500px] mx-auto' 
         onMouseEnter={()=>{
            setClick(true)
         }}
         onMouseLeave={()=>{
            setClick(false)
         }}
         onClick={()=>{
                        setClick(!click)
                    }}  
         >
            <div className='relative hidden sm:block w-full  h-full'>
                    <div className={` ${click ? "rotate-[-24deg] top-[15%] left-[-7%] ":'rotate-[-15deg] top-0 left-[30%]'}  w-[290px] absolute h-[410px] duration-500  bg-transparent` }>
                        <img
                        src='/images/section5/1.png'
                        className=' w-full h-full  rounded-[10px] shadow-2xl'
                        alt='as'
                        />
                    </div>
                    <div className={`  ${click ? " top-0 left-[30%] rotate-4 ":'top-0  left-[32%] rotate-[0deg]'}   absolute   duration-500 w-[290px]  h-[410px] bg-transparent  `}>
                    <img
                        src='/images/section5/2.png'
                        className=' w-full h-full  rounded-[10px] shadow-2xl'
                        alt='as'
                        />
                    </div>
                    <div className={`   ${click ? " top-[12%] right-[-7%] rotate-[30deg] ":'top-0 rotate-[10deg] right-[30%]'}  absolute top-0 w-[290px]  h-[410px]  duration-500  `}>
                    <img
                        src='/images/section5/1.png'
                        className=' w-full h-full  rounded-[10px] shadow-2xl'
                        alt='as'
                        />
                    </div>
            </div>
            <div className='relative block sm:hidden w-full overflow-hidden  h-full'>
                    <div className={` ${click ? "rotate-[-24deg] top-[10%] left-[-4%] ":'rotate-[-10deg] top-0 left-[30%]'}  w-[190px] absolute h-[300px] duration-500 shadow-md  scale-90`}>
                        <img
                        src='/images/section5/1.png'
                        className=' w-full h-full object-cover'
                        alt='as'
                        />
                    </div>
                    <div className={`  ${click ? " top-0 left-[30%] rotate-4 ":'top-0  left-[32%] rotate-0'}   absolute   duration-500 w-[190px]  h-[300px] shadow-2xl  scale-90 `}>
                    <img
                        src='/images/section5/2.png'
                        className=' w-full h-full object-cover'
                        alt='as'
                        />
                    </div>
                    <div className={`   ${click ? " top-[12%] right-[-7%] rotate-[30deg] ":'top-0 rotate-[10deg] right-[20%]'}  absolute top-0 w-[190px]  h-[300px] shadow-2xl duration-500 scale-90 `}>
                    <img
                        src='/images/section5/1.png'
                        className=''
                        alt='as'
                        />
                    </div>
                    <div className=' absolute bottom-[50px]  text-[20px] font-Inter font-[500] left-[40%]'>
                        ^ Tap Me ^
                    </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Section5