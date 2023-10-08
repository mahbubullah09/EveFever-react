

const Question = () => {
    return (
        <div>
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
    );
};

export default Question;