import { Outlet } from "react-router-dom";
import Navbar from "../assets/component/Navbar";
import Footer from "../assets/component/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Navbar></Navbar>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster/>
    </div>
  );
};

export default MainLayout;
