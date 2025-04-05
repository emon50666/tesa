import { Link } from "react-router"
import card1 from "../assets/images/card1.png"
import cardFlower1 from "../assets/images/cardFlower1.png"
import cardFlower2 from "../assets/images/flowers2.png"
import cardFlower3 from "../assets/images/flower3.png"
import ser1 from "../assets/images/ser1.png"
import ser2 from "../assets/images/ser2.png"




export default function Service() {
  return (
    <div className="pt-20 bg-white container mx-auto pb-20">
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-center ">
      <h1 className=" text-[24px] tracking-[10px] text-[#bba085] " >SERVICES</h1>
      <h1 className=" md:text-[48px]">Photography Packages</h1>
      </div>

      {/* image card */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="grid lg:grid-cols-3 gap-8 pt-10 pb-10">
      <Link to={"/service"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
    <img
      src={card1}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
    <h1 className="text-[34px] pt-2 great-vibes-regular">Wedding</h1>
    <img
      src={cardFlower1}
      alt=""
      className="mx-auto group-hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
    />
    <button className="text-[24px] pb-2 group-hover:text-[#bba085]">Learn More</button>
  </div>
</Link>


<Link to={"/service"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
    <img
      src={ser1}
      alt=""
      className="w-full group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
    <h1 className="text-[34px] pt-2 great-vibes-regular">Portrait
    </h1>
    <img
      src={cardFlower2}
      alt=""
      className="mx-auto group-hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
    />
    <button className="text-[24px] pb-2 group-hover:text-[#bba085]">Learn More</button>
  </div>
</Link>


<Link to={"/service"}>
  <div className="bg-[#FBFAFB] hover:shadow-sm text-center items-center border border-gray-300 p-3 justify-center transition-transform duration-200 ease-linear transform group">
    <img
      src={ser2}
      alt=""
      className="w-full  group-hover:translate-y-[-3px] transition-transform duration-200 ease-in-out"
    />
    <h1 className="text-[34px] pt-2 great-vibes-regular">Engagement</h1>
    <img
      src={cardFlower3}
      alt=""
      className="mx-auto  group-hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
    />
    <button className="text-[24px] pb-2 group-hover:text-[#bba085] ">Learn More</button>
  </div>
</Link>
      </div>

      <Link to={"/service"}><button className="justify-center  cursor-pointer text-center mx-auto items-center flex mt-6 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">View Details</button></Link>
    </div>
  )
}
