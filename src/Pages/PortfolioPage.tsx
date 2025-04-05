
import { Link } from "react-router";
import hero from "../assets/images/banner.png";
import port1 from "../assets/images/port1.png"
import port2 from "../assets/images/port2.png"
import port3 from "../assets/images/port3.png"
import port4 from "../assets/images/port4.png"
import port5 from "../assets/images/port5.png"
import port6 from "../assets/images/port6.png"
import PortfolioAnotherSection from "../components/PortfolioAnotherSection";

import { useEffect } from "react";
import Aos from "aos"
export default function PortfolioPage() {
  useEffect(() => {
            Aos.init({
              duration: 2000, // Animation duration in ms
              once: true,     // Whether animation should happen only once - while scrolling down
            });
          }, []);
  return (
    <div className="container mx-auto bg-white ">
      <div
      className=" container w-full h-88 bg-top justify-center items-center mx-auto bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
    </div>
    <div className="text-center py-16 ">
      <h1 className=" text-[24px] tracking-[10px] text-[#bba085] " >PORTFOLIO</h1>
      <h1 className=" md:text-[58px]">Highlighted Works</h1>
      </div>


      {/* service card */}
      <div className="grid lg:grid-cols-3 gap-8 pt-10 pb-10 px-10">
        
      <Link data-aos="fade-up"
     data-aos-duration="3000" to={"/fiona-mikael"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
  <img
      src={port1}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
   <h3 className="text-[28px] pt-2  ">Fiona & Mikael</h3>
    <h1 className="text-[28px] pt-2 text-[#bba085] great-vibes-regular ">Wedding</h1>
  </div>
</Link>

<Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" to={"/stacy"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
  <img
      src={port2}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
   <h3 className="text-[28px] pt-2  ">Stacy</h3>
    <h1 className="text-[28px] pt-2 text-[#bba085] great-vibes-regular ">Portrait</h1>
  </div>
</Link>


<Link data-aos="fade-up"
     data-aos-duration="3000" to={"/john-miranda"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
  <img
      src={port3}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
   <h3 className="text-[28px] pt-2  ">John & Miranda</h3>
    <h1 className="text-[28px] pt-2 text-[#bba085] great-vibes-regular ">Wedding</h1>
  </div>
</Link>


<Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" to={"/nathan-helen"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
  <img
      src={port4}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
   <h3 className="text-[28px] pt-2  ">Nathan & Helen</h3>
    <h1 className="text-[28px] pt-2 text-[#bba085] great-vibes-regular ">Engagement</h1>
  </div>
</Link>

<Link data-aos="fade-up"
     data-aos-duration="3000" to={"/elena"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
  <img
      src={port5}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
   <h3 className="text-[28px] pt-2  ">Elena</h3>
    <h1 className="text-[28px] pt-2 text-[#bba085] great-vibes-regular ">Portrait</h1>
  </div>
</Link>


<Link data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" to={"/maria-carlo"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
  <img
      src={port6}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
   <h3 className="text-[28px] pt-2  ">Maria & Carlo</h3>
    <h1 className="text-[28px] pt-2 text-[#bba085] great-vibes-regular ">Elopement</h1>
  </div>
</Link>
      </div>
 <Link to={'/contact'} > <button className="justify-center cursor-pointer text-gray-600 text-center mx-auto items-center mb-12 flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">Get In Touch</button></Link>


<PortfolioAnotherSection/>
    </div>
  )
}
