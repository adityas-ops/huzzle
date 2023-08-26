import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const data = [
  "/images/section2/1.png",
  "/images/section2/2.png",
  "/images/section2/3.png",
  "/images/section2/4.png",
  "/images/section2/5.png",
  "/images/section2/6.png",
  "/images/section2/7.png",
]


function Carosuel() {

  const [pad2,setPad2] = useState("4rem")
  const [page2,setPage2] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPad2("1rem")
        setPage2(1)
      } else {
        setPad2("23rem");
        setPage2(2)
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
   <>
    <div className=" flex items-center  justify-center relative w-full  h-full">
        <div className=" relative">
          <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              perPage: page2,
            padding:pad2,
              pagination: false,
             autoplay:true,
             rewindSpeed:12,
             perMove:1

            }}
            onMoved={(splide) => {
          setActiveIndex(splide.index);
        }}
          >
            <SplideTrack>

              {data.map((item, index) => {
                const opacity = activeIndex === index ? 1 : 0.4;
                const scale = activeIndex===index ? 1.1:1;
                return (
                  <>
                    <SplideSlide key={index}>
                      <div className=" lg:max-w-[308px] mb-[30px] max-w-[400px] w-full  rounded-[12px]   shadow-md"  
                      style={
                        {
                          opacity:opacity,
                          transform:`scale(${scale})`
                        }
                          }>
                            <img 
                            src={item}
                            alt="s"
                            className="h-full w-full object-cover "
                            />
                      </div>
                    </SplideSlide>
                  </>
                );
              })}
            </SplideTrack>
           
           

            <div className=" hidden sm:block absolute w-full top-[40%]">
          <div className="splide__arrows w-full flex relative justify-evenly">
            <button className="splide__arrow splide__arrow--prev absolute left-[50px] w-full h-full">
            <div className='w-[60px] h-[60px] rounded-[50%] bg-[#D4DEDB] '>  <IoIosArrowForward className="text-[50px] font-[400]" /></div>
          
            </button>
            <button className="splide__arrow splide__arrow--next absolute right-[150px] w-full h-full">
            <div className='w-[60px] h-[60px] rounded-[50%] bg-[#D4DEDB] '>
            <IoIosArrowForward className="text-[50px] font-[400]" />
            </div>
            </button>
          </div>
        </div>
          </Splide>
        </div>
      </div>
   </>
  )
}

export default Carosuel



