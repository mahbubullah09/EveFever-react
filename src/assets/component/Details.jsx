import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/authProvider";


const Details = () => {
    const [detailsData, setDetailsData] = useState();
    const data = useLoaderData();
    const {id} = useParams();

    const {user} = useContext(AuthContext)
    console.log(user?.email);
   


 
   
   

    useEffect (()=>{
    const findData = data?.find(details => details.id == id)
    setDetailsData(findData);
    





   

}, [id, data])


const handleBook= () => {

  const donateItemArray = [];
  const donateItem= JSON.parse(localStorage.getItem((user?.email)));
  

  if (!donateItem){
      donateItemArray.push((detailsData))
      localStorage.setItem((user?.email), JSON.stringify(donateItemArray))
     toast.success("Booked Succesfull!");
  }
 
  else{

      const isExist = donateItem.find(item => item.id ==id);
      
      if(!isExist){
          donateItemArray.push(...donateItem,detailsData)
          localStorage.setItem((user.email), JSON.stringify(donateItemArray))
         toast.success('Book Succesfully')

      }
      else{
          toast.error("Already booked!");
      }

    

  }
}

    return (
      <div className=" gap-6 mx-4 my-20">
      <div className="my-4 relative flex w-full max-w-[80rem] flex-col md:flex-row  rounded-xl bg-blue-gray-50 bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0  w-full md:w-2/5  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
      src={detailsData?.image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
    {detailsData?.category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {detailsData?.name}
    </h4>
    <p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {detailsData?.details}
    </p>

    <p className=" mb-8 text-lg font-bold "> Cost: {detailsData.price} BDT</p>
    <a className="inline-block" href="#">
      <button onClick={handleBook}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Book Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default Details;