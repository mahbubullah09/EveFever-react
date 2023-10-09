import { Link } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";

const ServiceCard = ({ cardData }) => {
  console.log(cardData);
  const { id, image, name, short_details, price } = cardData;

  return (
    <div >
      <div
        className=" relative h-[410px]   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-4  "
        data-aos="zoom-in"
      >
        <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
          className=" w-full h-full"
            src={image}
            alt="img-blur-shadow"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>
          <p className=" text-blue-gray-500 font-bold block font-sans text-base my-2  ">
            {short_details}
          </p>
          <div className="flex items-center gap-2">
            <FaSackDollar></FaSackDollar>
          <p>{price} BDT</p>
          </div>
        </div>
        <div className="p-6 pt-0  bottom-1 absolute">
          <Link to={`/details/${id}`}>
            <button
              className=" select-none rounded-lg bg-[#E76F51] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none hover:text-black  select-none rounded-lg hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300   transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-Black shadow-md shadow-pink-500/20  hover:shadow-lg"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
