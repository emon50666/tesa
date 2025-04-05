import port7 from "../assets/images/port7.png"
import port8 from "../assets/images/port8.png"
import PortfolioNextSection from "./PortfolioNextSection"


export default function PortfolioAnotherSection() {
  return (
    <div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      className=" container z-10 mx-auto relative w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${port8})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div data-aos="fade-up"
     data-aos-duration="3000" className="relative z-10 text-center text-black w-full   bg-white/90 py-12  px-4">
        <img src={port7} alt="" className="justify-center  mx-auto flex items-center  text-center" />
        <p className="text-3xl md:text-[40px] max-w-[780px] leading-14 font-normal justify-center mx-auto items-center flex">
        I guarantee breathtaking wedding photos that will perfectly capture the magic of your special day, or your money back.
        </p>
       
      </div>
    </div>
    <PortfolioNextSection/>
    </div>
  )
}
