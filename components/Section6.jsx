import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "This helped a lot in my career!",
    decs: "I got my first spring week through this app!",
    img: "/images/section6/1.png",
    img2: "/images/section6/frame/apple.svg",
  },
  {
    id: 2,
    title:"Such a great idea",
    decs: "The first match were actually pretty good",
    img: "/images/section6/2.png",
    img2: "/images/section6/frame/play.svg",
  },
  {
    id: 3,
    title:"Sick!",
    decs: "A friend told me about it, now i'm using it every week.",
    img: "/images/section6/3.png",
    img2: "/images/section6/frame/apple.svg",
  },
  {
    id: 4,
    title:"Really really really",
    decs: "As a first year, I love that it also matches you to student societies.",
    img: "/images/section6/4.png",
    img2: "/images/section6/frame/apple.svg",
  },
  {
    id: 5,
    title:"Great App",
    decs: "Came from Switzerland to London and instantly got great events through Huzzle.",
    img: "/images/section6/5.png",
    img2: "/images/section6/frame/play.svg",
  },
  {
    id: 6,
    title:"Supperbb",
    decs: "Huzzle matched me with really good graduate schemes",
    img: "/images/section6/2.png",
    img2: "/images/section6/frame/apple.svg",
  },
  {
    id: 7,
    title:"Really valuable",
    decs: "I went to 2 events Huzzle matched me with.",
    img: "/images/section6/7.png",
    img2: "/images/section6/frame/apple.svg",
  },
  {
    id: 8,
    title:"It's really cool concept",
    decs: "The matches I'm getting are pretty amazing",
    img: "/images/section6/8.png",
    img2: "/images/section6/frame/apple.svg",
  },
  {
    id: 9,
    title:"Super helpful!",
    decs: "Love the app. I found so many cool events you don't see anywhere else.",
    img: "/images/section6/9.png",
    img2: "/images/section6/frame/apple.svg",
  }
];

function Section6() {
  const [padd, setPadd] = useState("1rem");
  const [page, setPage] = useState(1);
  const [move,setMove] =useState(1);
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd("1rem");
        setPage(1);
        setMove(1)
      } else {
        setPadd("1rem");
        setPage(3);
        setMove(3)
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="sm:pt-[189px] pt-[130px] pb-[65px]  bg-cover bg-[url(/images/backgrounds/section6.png)] "
        style={{
          backgroundPosition: "0 0",
          backgroundSize: "cover",
        }}
      >
        <div className=" mt-[-48px] mb-[60px]  w-full px-[10px] sm:px-[75px] max-[940px] mx-auto">
          <div>
            <p className="mt-0 mb-[24px] text-[#222] font-Inter text-[28px] sm:text-[44px] max-w-[790px] mx-auto leading-[1.2] font-[900] text-center">
              We have your back, from Freshers to Grad.
            </p>
            <p className="  px-[20px] sm:px-[40px]  pb-0 font-Recoleta text-[20px] sm:text-[28px] leading-[1.3] text-center max-w-[730px] mx-auto ">
              Huzzle forms around you as you progress. Your interests, your
              goals, the things that you get excited about First. You First.
            </p>
          </div>
        </div>
        {/*  second  */}
        <div className=" max-w-[1280px] text-center mx-auto relative mt-[65px]">
          <div className=" max-w-[1280px]   w-full mx-auto">
            <Splide
              hasTrack={false}
              aria-label="..."
              options={{
                padding: padd,
                type: "loop",
                pagination: false,
                perPage: page,
                rewind: true,
                perMove: move,
              }}
            >
              <SplideTrack>
                {data.map((item, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div
                        key={index}
                        className=" flex pt-[36px] mx-auto pb-[26px] min-h-[350px] px-[40px] w-[320px] flex-col items-center rounded-[14px] border-[1px] border-[#f1f1f1] bg-[#fff] text-center"
                      >
                        <div className=" relative w-[90px] h-[90px] min-h-[90px] max-h-[90px] mb-[40px]">
                          <img
                            src={item.img}
                            className="w-full h-full object-cover"
                            alt="a"
                          />
                          <img
                            src={item.img2}
                            className=" absolute left-auto top-auto right-[-8px] bottom-[-8px]"
                            alt="as"
                          />
                        </div>
                        <div>
                          <div className=" mt-[-8px] mb-[32px]  justify-center flex">
                            <img
                              src="/images/section6/frame/star.svg"
                              className="w-[24px] h-[24px] mx-[2px] "
                              alt="a"
                            />
                            <img
                              src="/images/section6/frame/star.svg"
                              className="w-[24px] h-[24px] mx-[2px]"
                              alt="a"
                            />
                            <img
                              src="/images/section6/frame/star.svg"
                              className="w-[24px] h-[24px] mx-[2px] "
                              alt="a"
                            />
                            <img
                              src="/images/section6/frame/star.svg"
                              className="w-[24px] h-[24px] mx-[2px]"
                              alt="a"
                            />
                            <img
                              src="/images/section6/frame/star.svg"
                              className="w-[24px] h-[24px] mx-[2px]"
                              alt="a"
                            />
                          </div>
                          <p className=" mt-[-10px] opacity-80 text-[#4f4f4f] text-[1rem] leading-[1.6] mb-[1em]">
                            <strong>{item.title}</strong>
                            <br />
                            &quot;{item.decs}&quot;
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  );
                })}
              </SplideTrack>
              <div className="block absolute w-full top-[50%]">
                <div className="splide__arrows w-full flex relative justify-between">
                  <button className="splide__arrow splide__arrow--prev absolute left-[-0%]">
                  <div className="  flex items-center justify-center rounded-[50%] bg-[#fff] ">
                      {" "}
                      {" "}
                     <img 
                     src="https://web.archive.org/web/20220705123916im_/https://uploads-ssl.webflow.com/60e5762b1cdfd083aa364733/60e57d2db25ab9d515f798da_Light%20Grey%20Arrow.svg"
                     className="h-full w-full"
                        alt="a"
                        />
                    </div>
                  </button>
                  <button className="splide__arrow splide__arrow--next absolute right-0">
                  <div className="  flex items-center justify-center rounded-[50%] bg-[#fff] ">
                      {" "}
                     <img 
                     src="https://web.archive.org/web/20220705123916im_/https://uploads-ssl.webflow.com/60e5762b1cdfd083aa364733/60e57d2cfff1b15b3d682574_Light%20Grey%20Arrow%20Right.svg"
                     className="h-full w-full"
                        alt="a"
                        />
                    </div>
                  </button>
                </div>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6;
