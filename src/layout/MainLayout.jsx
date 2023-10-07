import { Outlet } from "react-router-dom";
import Navbar from "../assets/component/Navbar";
import Footer from "../assets/component/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
      
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;