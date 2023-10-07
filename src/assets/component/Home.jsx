import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";


const Home = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <div>
     <Slider></Slider>

     <div>
        <h2>Our Services</h2>
       <div className=" grid grid-cols-3 gap-4 my-6" >
       {
            data.map((data) =>( <ServiceCard key={data.id} cardData={data} ></ServiceCard>))
        }
       </div>
       


     </div>
    </div>
  );
};

export default Home;
