import logo from "../assets/images/logo.png";
import { Link } from "react-router";

const FooterNav = () => {

  return (
    <nav className="bg-[#EBEBEB] container py-7 justify-center mx-auto z-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Left Side Links */}
          <div className="hidden lg:flex space-x-24 text-[28px] font-normal">
          <Link to={'/'} className="text-[#555555] hover:text-[#bba085]">Home</Link>
            <Link to={'/about'} className="text-[#555555] hover:text-[#bba085]">About</Link>

            <Link to={'/service'} className="text-[#555555] hover:text-[#bba085]">Services</Link>
          </div>

          {/* Logo in Center */}
          <Link to={'/'} className="justify-center   w-full items-center flex">
            <img src={logo} alt="logo" className="w-[140px] h-[50px]" />
          </Link>

          {/* Right Side Links */}
          <div className="hidden lg:flex space-x-24 text-[28px]">
          <Link to={'/portfolio'} className="text-[#555555] hover:text-[#bba085]">Portfolio</Link>
            <Link to={'/blog'} className="text-[#555555] hover:text-[#bba085]">Blog</Link>
            <Link to={'/contact'} className="text-[#555555] hover:text-[#bba085]">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu (Vertical Alignment) */}
      <div className="lg:hidden flex flex-col space-y-4 items-center text-[28px]">
      <Link to={'/'} className="text-[#555555] hover:text-[#bba085]">Home</Link>
            <Link to={'/about'} className="text-[#555555] hover:text-[#bba085]">About</Link>

            <Link to={'/service'} className="text-[#555555] hover:text-[#bba085]">Services</Link>
            <Link to={'/portfolio'} className="text-[#555555] hover:text-[#bba085]">Portfolio</Link>
            <Link to={'/blog'} className="text-[#555555] hover:text-[#bba085]">Blog</Link>
            <Link to={'/contact'} className="text-[#555555] hover:text-[#bba085]">Contact</Link>
      </div>
    </nav>
  );
};

export default FooterNav;
