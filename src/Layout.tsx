import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";


export default function Layout() {
  return (
    <div>
      <Navbar/>

      {/* outlate */}
      <Outlet/>
      <FooterNav/>
      <Footer/>
    </div>
  )
}
