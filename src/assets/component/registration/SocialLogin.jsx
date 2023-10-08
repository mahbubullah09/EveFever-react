import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Provider/authProvider";


const SocialLogin = () => {

    const {user, googleLogin} = useContext(AuthContext)
    console.log(user);

    const handleSocialSingin = () =>{
        googleLogin()
        .then(res => console.log(res))
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