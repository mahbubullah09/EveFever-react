
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
    <footer className="footer footer-center  bg-blue-gray-600 text-primary-content ">
        <div className="flex pt-20  ">
            <img src="https://i.ibb.co/vhTkhmH/Eve-Fever-3-removebg-preview.png" />
            
        </div>
        <div className="pt-0 pb-0">
            <ul tabIndex="0" className="text-white gap-8  flex flex-wrap justify-center  md:grid-cols-6 gap-5     ">
                <li><a className="cursor-pointer">Home</a></li>
                <li><a className="cursor-pointer">About Us</a></li>
                <li><a className="cursor-pointer">Shop</a></li>
              
                <li><a className="cursor-pointer">Support</a></li>
                <li><a className="cursor-pointer">My Account</a></li>

            </ul>
        </div>
        <div>
            <div className=" text-white pb-10 text-3xl flex flex-wrap justify-center gap-6 md:grid-cols-6   ">
              
                <FaTwitter></FaTwitter>
                <FaYoutube></FaYoutube>
                <FaFacebook></FaFacebook>
                <FaLinkedin></FaLinkedin>
                <FaInstagram></FaInstagram>

               
            </div>
        </div>
    </footer>
            
        </div>
    );
};

export default Footer;