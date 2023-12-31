import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/authProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
   const navigate = useNavigate()

    const {user, googleLogin} = useContext(AuthContext)
    console.log(user);

    const handleSocialSingin = () =>{
        googleLogin()
        .then(res =>  {
            toast.success('Succesfully logged in')
            navigate(location?.state ? location.state : '/')

    
    })
        .catch(error => console.log(error))
    }
    return (
        <div>
             <div className="divider px-4">continue with</div>
            <div className=" text-center my-6">
                <button onClick={handleSocialSingin} className=" text-5xl"> <FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;