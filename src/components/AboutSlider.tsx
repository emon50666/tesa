import Marquee from "react-fast-marquee";
import me6 from "../assets/images/me6.png";
import me7 from "../assets/images/me7.png";

export default function AboutSlider() {
  return (
    <div className="container mx-auto bg-[#F1ECE6] py-10">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <img src={me6} alt="Slide 1" className="w-full h-auto" />
        <img src={me7} alt="Slide 2" className="w-full h-auto" />
       
      </Marquee>
    </div>
  );
}