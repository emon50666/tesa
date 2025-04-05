
import hero from "../assets/images/banner.png";


export default function Hero() {
  
  return (
    <div
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      className=" container z-10 mx-auto relative w-full h-[550px] md:h-[550px] bg-cover bg-no-repeat bg-top  flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-normal">
        ARTISTIC WEDDING PHOTOGRAPHY
        </h1>
       
      </div>
    </div>
  );
}
