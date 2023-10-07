

const Slider = () => {
    return (
        <div>
             <div className="carousel w-full h-[80vh]  ">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage: "url(https://i.ibb.co/jzfrPPd/PRJA9793.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
                data-aos="zoom-out-up"
              >
               
                  <h1 className="mb-5 text-5xl font-bold text-amber-500 ">
                    Love Unites
                  </h1>

                  <p className="mb-5">
                    Your Perfect Wedding Awaits! <br /> Discover Inspiration,
                    Planning, and Memorable Moments at EveFever - Your Ultimate
                    Wedding Resource!
                  </p>
                
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className=" text-white">
              ❮
            </a>
            <a href="#slide2" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/qd4tXT9/Hero-slider-Wedding-1.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
                className="max-w-md"
                data-aos="fade-down"
                data-aos-easing="linear"
              >
                <h1 className="mb-5 text-5xl font-bold text-amber-600">A Promise </h1>
                <p className="mb-5">
                From &apos;Yes!&apos; to Forever <br />Your Premier Source for Heartwarming Engagement Stories, Planning Tips, and Inspiration!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white">
              ❮
            </a>
            <a href="#slide3" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gJc4x8L/anniversary-party-ideas.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
                className="max-w-md"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <h1 className="mb-5 text-5xl font-bold text-amber-600">Lifetime of Love</h1>
                <p className="mb-5">
                We Presents Heartwarming Anniversary Stories, Gift Ideas, and Inspiration – Join Us in Honoring Everlasting Commitment!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white">
              ❮
            </a>
            <a href="#slide4" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage: "url(https://i.ibb.co/N6R4zp8/dance.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
              <div
                className="max-w-md"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <h1 className="mb-5 text-5xl font-bold text-amber-600">Grand Farewell</h1>
                <p className="mb-5">
                Hosts Retirement Celebrations, Offering Insights, Inspirations, and Tips for the Next Chapter in Life! <br />Join Us in Honoring Your Dedication, Achievements, and New Beginnings!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-white">
              ❮
            </a>
            <a href="#slide1" className="text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Slider;