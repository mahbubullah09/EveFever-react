import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";

import { FaAudible, FaDrupal, FaEarlybirds, FaEmpire, FaEnvira, FaTeamspeak } from "react-icons/fa";
import ChooseUs from "./ChooseUs";
import Question from "./question";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Slider></Slider>

      <div>
        <div className="text-center">
          <h2 className="text-4xl font-bold my-8">Our <span className="text-[#E76F51]">Services</span></h2>
        </div>
        <div className=" grid grid-cols-3 gap-4 my-6">
          {data.slice(0, 6).map((data) => (
            <ServiceCard key={data.id} cardData={data}></ServiceCard>
          ))}
        </div>

        <div className="text-center my-4">
          <Link to={`/services`}>
            <button
              className=" bg-[#E76F51] text-white hover:text-black  select-none rounded-lg hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300   transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-Black shadow-md shadow-pink-500/20  hover:shadow-lg"
              type="button"
              data-ripple-light="true"
            >
              See All
            </button>
          </Link>
        </div>

        {/* wht choose us */}

        <ChooseUs></ChooseUs>

       

        {/* question */}
        
        <Question></Question>
      </div>
    </div>
  );
};

export default Home;
