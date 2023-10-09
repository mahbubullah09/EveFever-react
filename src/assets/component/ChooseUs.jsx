import {
  FaAudible,
  FaDrupal,
  FaEarlybirds,
  FaEmpire,
  FaEnvira,
  FaTeamspeak,
} from "react-icons/fa";

const ChooseUs = () => {
  return (
    <div>
      <div className="my-12 mx-3">
        <div className="text-center ">
          <h2 className="  text-4xl font-bold text-black text-center my-8 mx-2 lg:mx-0">
            Why <span className="text-[#E76F51]">choose us</span>
          </h2>
        </div>

        <div className="flex justify-evenly flex-col md:flex-row gap-16">
          <div className="left ">
            <div className="flex items-center justify-around gap-6  mb-6">
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

            <div className="flex items-center justify-around gap-6  mb-6">
              <div className="text-4xl">
                <FaDrupal></FaDrupal>
              </div>

              <div>
                <h2 className=" text-lg font-bold text-blue-gray-700">
                  Passionate Team
                </h2>
                <hr className=" text-black w-32 h-2" />
                <p className=" text-sm  text-gray-600">
                  Our dedicated team of event planners is passionate about
                  creating magical moments. With years of experience in the
                  industry, we have the knowledge and expertise to bring your
                  vision to life, down to the smallest detail.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-around gap-6">
              <div className="text-4xl">
                <FaEarlybirds></FaEarlybirds>
              </div>

              <div>
                <h2 className=" text-lg font-bold text-blue-gray-700">
                  Personalized Approach
                </h2>
                <hr className=" text-black w-32 h-2" />
                <p className=" text-sm  text-gray-600">
                  We believe that every event should be a reflection of your
                  unique style and preferences. We take the time to get to know
                  you, your desires, and your dreams, ensuring that your event
                  is one-of-a-kind and truly memorable.
                </p>
              </div>
            </div>
          </div>

          <div className="right    ">
            <div className="flex items-center justify-around gap-6  mb-6">
              <div className="text-4xl">
                <FaEmpire></FaEmpire>
              </div>

              <div>
                <h2 className=" text-lg font-bold text-blue-gray-700">
                  Creativity and Innovation
                </h2>
                <hr className=" text-black w-32 h-2" />
                <p className=" text-sm  text-gray-600">
                  Creativity knows no bounds when you choose us. From
                  breathtaking decor to imaginative themes, we pride ourselves
                  on pushing the boundaries of what&apos;s possible to make your
                  event stand out and leave a lasting impression.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-around gap-6  mb-6">
              <div className="text-4xl">
                <FaEnvira></FaEnvira>
              </div>

              <div>
                <h2 className=" text-lg font-bold text-blue-gray-700">
                  Attention to Detail
                </h2>
                <hr className=" text-black w-32 h-2" />
                <p className=" text-sm  text-gray-600">
                  We obsess over the details so you don't have to. From planning
                  and logistics to coordinating vendors and timelines, we leave
                  no stone unturned to ensure that every aspect of your event
                  runs seamlessly.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-around gap-6 ">
              <div className="text-4xl">
                <FaTeamspeak></FaTeamspeak>
              </div>

              <div>
                <h2 className=" text-lg font-bold text-blue-gray-700">
                  Destination Event Specialists
                </h2>
                <hr className=" text-black w-32 h-2" />
                <p className=" text-sm  text-gray-600">
                  We specialize in creating unforgettable experiences in exotic
                  locales. Let us take you on an adventure you'll treasure
                  forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
