import { useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    console.log(loading);
    if (loading){
       return <div className=' text-center text-9xl h-[30vh]   my-[30vh]'>
            <span className="loading loading-spinner text-error loading-lg"></span>
        </div>
    }

    

    if(!user?.email) {

        return <Navigate to={`/login`}></Navigate>
        
    }
  
       
       return children;
   
};

export default PrivateRoute;