import { Link } from "react-router";
import hero from "../assets/images/banner.png";

import portfolio11 from "../assets/images/portfolio11.png";
import portfolio10 from "../assets/images/portfolio10.png";
import portfolio12 from "../assets/images/portfolio12.png";




import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useEffect } from "react";
import Aos from "aos";
export default function Portfolio3() {
  useEffect(() => {
    Aos.init({
      duration: 2000, // Animation duration in ms
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="container mx-auto bg-white pb-20 px-4">
         <div
      className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
    </div>
    <div className="text-center max-w-xl justify-center mx-auto py-16 ">
      <h1 className=" text-[24px] tracking-[10px] text-[#bba085] " >PORTFOLIO</h1>
      <h1 className=" text-2xl md:text-[58px]">John & Miranda</h1>
      </div>
      {/* date  */}
      <div className="flex max-w-xl mx-auto pb-1 justify-between">
      <h1 className=" text-xl  md:text-[28px] text-start ">Date <span className="great-vibes-regular text-[#bba085] ">Oct 2, 2024</span> </h1>
      <h1 className=" text-xl  md:text-[28px] text-start ">Category: <span className="great-vibes-regular text-[#bba085] ">Wedding</span> </h1> 
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className=" justify-center flex">
  <img src={portfolio12} alt=""  />
</div>

{/* description */}
<div className="text-[28px] max-w-3xl justify-center mx-auto space-y-6 py-10 ">
<p>An unforgettable experience, filled with heartfelt moments and joyful celebrations. The elegant decor and intimate setting created a beautiful backdrop for capturing the love and happiness radiating from the couple and their guests. </p> 
</div>


<div data-aos="fade-up"
     data-aos-duration="3000" className="lg:px-20 pt-3 ">
        <img src={portfolio10} alt="" />
    </div>
    <div data-aos="fade-up"
     data-aos-duration="3000" className="lg:px-20 pt-3 pb-10">
        <img src={portfolio11} alt="" />
    </div>
<div className="border-b-1 border-gray-300"></div> 

<div className="flex max-w-3xl mx-auto pb-1 justify-between  ">
      <Link to={'/portfolio'} className=" text-xl  md:text-[24px] text-start  uppercase flex items-center gap-1"> <IoIosArrowRoundBack size={30} /> Back </Link>
      <Link to={'/service'} className=" text-xl  md:text-[24px] text-start uppercase  flex items-center gap-1 "> Services <IoIosArrowRoundForward size={30} /> </Link> 
      </div>

    </div>
  )
}
