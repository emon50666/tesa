import { Link } from "react-router"
import portfolio1 from "../assets/images/portfolio1.png"
import portfolio2 from "../assets/images/portfolio2.png"


export default function Portfolio() {
  return (
    <div className="container mx-auto pb-10 bg-white">
       <div className="text-center  ">
      <h1 className=" text-[24px] tracking-[10px] text-[#bba085] " >PORTFOLIO</h1>
      <h1 className=" md:text-[48px]">Featured Story</h1>
      </div>
      {/* image and content section */}
      <div className="grid lg:grid-cols-3 gap-6 pt-10 pb-20 md:pb-0">
        <div data-aos="fade-up"
     data-aos-duration="3000" className="px-4 flex items-end ">
            <div className="bg-[#FBFAFB] p-4">
            <h1 className="text-[120px] text-[#bba085] font-serif font-normal">01</h1>
            
     
            <h1 className=" text-[34px] pt-2 great-vibes-regular">Paola & Ricardo</h1>
           <p className="text-3xl md:text-[28px] lg:max-w-[350px] justify ">On a beautiful spring day, I had the pleasure of photographing this gorgeous couple. Capturing the essence of a serence sunset, our outdoor photo session was a perfect blend of natural beauty and candid moments. </p>
            </div>
        
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000">
            <img src={portfolio1} alt="" className="w-full md:justify-center items-center mx-auto flex lg::h-[700px] pt-5" />
        </div>
        <div data-aos="fade-up"
     data-aos-duration="3000" className=" items-end flex ">
        <img src={portfolio2} alt=""  className="md:w-[350px] hidden lg:block  "/>

        </div>
      </div>
      <Link to={"/portfolio"} >
      <button className="justify-center  text-center cursor-pointer mx-auto items-center flex mt-8 text-[28px] bg-[#E9E0D8] hover:text-[#bba085] py-4 px-10">View Gallery</button>
      </Link>
    </div>
  )
}
