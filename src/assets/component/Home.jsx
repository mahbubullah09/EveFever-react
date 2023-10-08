import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";

import { FaAudible, FaDrupal, FaEarlybirds, FaEmpire, FaEnvira, FaTeamspeak } from "react-icons/fa";

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

        <div className="my-12">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-black text-center my-8 mx-2 lg:mx-0"> Why  <span className="text-[#E76F51]">choose us</span></h2>
          </div>

          <div className="flex justify-evenly">
            <div className="left ">
              <div className="flex items-center justify-around gap-6 w-96 mb-6" >
                <div className="text-4xl">
                  <FaAudible></FaAudible>
                </div>

                <div>
                  <h2 className=" text-lg font-bold text-blue-gray-700">
                    Experience
                  </h2>
                  <hr className=" text-black w-32 h-2" />
                  <p className=" text-sm  text-gray-600">
                    With years of experience in the event planning industry, our
                    team brings a wealth of knowledge and expertise to every
                    project.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-around gap-6 w-96 mb-6">
                <div className="text-4xl">
                  <FaDrupal></FaDrupal>
                </div>

                <div>
                  <h2 className=" text-lg font-bold text-blue-gray-700">
                  Passionate Team
                  </h2>
                  <hr className=" text-black w-32 h-2" />
                  <p className=" text-sm  text-gray-600">
                  Our dedicated team of event planners is passionate about creating magical moments. With years of experience in the industry, we have the knowledge and expertise to bring your vision to life, down to the smallest detail.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-around gap-6 w-96">
                <div className="text-4xl">
                  <FaEarlybirds></FaEarlybirds>
                </div>

                <div>
                  <h2 className=" text-lg font-bold text-blue-gray-700">
                  Personalized Approach
                  </h2>
                  <hr className=" text-black w-32 h-2" />
                  <p className=" text-sm  text-gray-600">
                  We believe that every event should be a reflection of your unique style and preferences. We take the time to get to know you, your desires, and your dreams, ensuring that your event is one-of-a-kind and truly memorable.
                  </p>
                </div>
              </div>
            </div>


            <div className="right    ">
              <div className="flex items-center justify-around gap-6 w-96 mb-6">
                <div className="text-4xl">
                  <FaEmpire></FaEmpire>
                </div>

                <div>
                  <h2 className=" text-lg font-bold text-blue-gray-700">
                  Creativity and Innovation
                  </h2>
                  <hr className=" text-black w-32 h-2" />
                  <p className=" text-sm  text-gray-600">
                  Creativity knows no bounds when you choose us. From breathtaking decor to imaginative themes, we pride ourselves on pushing the boundaries of what&apos;s possible to make your event stand out and leave a lasting impression.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-around gap-6 w-96 mb-6">
                <div className="text-4xl">
                  <FaEnvira></FaEnvira>
                </div>

                <div>
                  <h2 className=" text-lg font-bold text-blue-gray-700">
                  Attention to Detail
                  </h2>
                  <hr className=" text-black w-32 h-2" />
                  <p className=" text-sm  text-gray-600">
                  We obsess over the details so you don't have to. From planning and logistics to coordinating vendors and timelines, we leave no stone unturned to ensure that every aspect of your event runs seamlessly.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-around gap-6 w-96">
                <div className="text-4xl">
                  <FaTeamspeak></FaTeamspeak>
                </div>

                <div>
                  <h2 className=" text-lg font-bold text-blue-gray-700">
                  Destination Event Specialists
                  </h2>
                  <hr className=" text-black w-32 h-2" />
                  <p className=" text-sm  text-gray-600">
                  We specialize in creating unforgettable experiences in exotic locales. Let us take you on an adventure you'll treasure forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* question */}
        <div>
          <div className="FAQ max-w-4xl mx-auto mb-20 ">
            <h2 className="text-4xl font-bold text-black text-center mb-16 mx-2 lg:mx-0">
              Frequently Asked <span className="text-[#E76F51]">Questions</span>
            </h2>

            <div className="FAQ-cont mx-8 flex flex-col items-center lg:flex-row justify-around lg:mx-0 ">
              <div className="left-c flex-1 mx-10">
                <img
                  className=" "
                  src="https://i.ibb.co/1zbr0gJ/faq.png"
                  alt=""
                />
              </div>

              <div className="right-c flex-1">
                <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      What types of events do you specialize in planning?
                    </div>
                    <div className="collapse-content">
                      <p>
                        We specialize in planning a wide range of events,
                        including weddings, birthday parties, anniversary
                        celebrations, engagement parties, retirement parties,
                        and more. Our experienced team can tailor our services
                        to meet your specific event needs.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      How do I get started with planning my event with your
                      services?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Getting started is easy! Simply contact us through our
                        website or give us a call. We will schedule a
                        consultation where we can discuss your vision, budget,
                        and any specific requirements you have for your event.
                        From there, we will work closely with you to create a
                        customized plan.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                      Can you assist with destination weddings or events in
                      unique locations?
                    </div>
                    <div className="collapse-content">
                      <p>
                        Absolutely! We specialize in destination weddings and
                        events in unique and exotic locations. Whether you dream
                        of a beachside wedding, a romantic garden engagement, or
                        an adventure-filled destination celebration, our team
                        has the expertise to make it a reality.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    How do you handle surprise parties and keep them a secret?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Planning a surprise party is our specialty. We take extra
                      precautions to ensure the celebration remains a secret
                      until the big reveal. Our team communicates with you
                      discreetly and coordinates surprise elements with
                      precision to create unforgettable moments.{" "}
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    What sets your event planning services apart from others?
                  </div>
                  <div className="collapse-content">
                    <p>
                      What sets us apart is our attention to detail, creativity,
                      and commitment to making your event truly special. We
                      focus on personalized planning, ensuring that your event
                      reflects your unique style and preferences. Our
                      experienced team is dedicated to exceeding your
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
