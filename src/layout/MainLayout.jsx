import { Outlet } from "react-router-dom";
import Navbar from "../assets/component/Navbar";
import Footer from "../assets/component/Footer";


const MainLayout = () => {
    return (
        <div>
            <div  className="max-w-5xl mx-auto">
            <Navbar></Navbar>
      
      <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;