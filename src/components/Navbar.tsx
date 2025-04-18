import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import { Link } from "react-router"; // <-- corrected from "react-router"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FBFAFB] max-w-[1170px] justify-center mx-auto z-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Left Side Links */}
          <div className="hidden lg:flex space-x-24 text-[28px] font-normal">
            <Link to='/' className="text-[#555555] hover:text-[#bba085]">Home</Link>
            <Link to='/about' className="text-[#555555] hover:text-[#bba085]">About</Link>
            <Link to='/service' className="text-[#555555] hover:text-[#bba085]">Services</Link>
          </div>

          {/* Logo in Center */}
          <Link to='/'>
            <img src={logo} alt="logo" className="w-[140px] h-[50px]" />
          </Link>

          {/* Right Side Links */}
          <div className="hidden lg:flex space-x-24 text-[28px]">
            <Link to='/portfolio' className="text-[#555555] hover:text-[#bba085]">Portfolio</Link>
            <Link to='/blog' className="text-[#555555] hover:text-[#bba085]">Blog</Link>
            <Link to='/contact' className="text-[#555555] hover:text-[#bba085]">Contact</Link>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#555555] focus:outline-none"
          >
            {isOpen ? <IoClose size={28} color="#bba085" /> : <IoMenu size={28} color="#bba085" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full z-50 overflow-scroll bg-white/30 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-[28px] transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-[#555555]"
        >
          <IoClose size={32} color="#bba085" />
        </button>

        {/* Mobile Links (with onClick close behavior) */}
        <Link to='/' onClick={() => setIsOpen(false)} className="text-[#555555] hover:text-[#bba085]">Home</Link>
        <Link to='/about' onClick={() => setIsOpen(false)} className="text-[#555555] hover:text-[#bba085]">About</Link>
        <Link to='/service' onClick={() => setIsOpen(false)} className="text-[#555555] hover:text-[#bba085]">Services</Link>
        <Link to='/portfolio' onClick={() => setIsOpen(false)} className="text-[#555555] hover:text-[#bba085]">Portfolio</Link>
        <Link to='/blog' onClick={() => setIsOpen(false)} className="text-[#555555] hover:text-[#bba085]">Blog</Link>
        <Link to='/contact' onClick={() => setIsOpen(false)} className="text-[#555555] hover:text-[#bba085]">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
