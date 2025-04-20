/* eslint-disable react/prop-types */
import { benefits } from "../../data";
import vectorRightFlat from "../../../../assets/vectorRightFlat.png"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import Slider from "react-slick";

import { ChevronLeft, ChevronRight } from "lucide-react";
function CareerJoinTeam() {

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2  hover:bg-opacity-80"
    >
      <ChevronLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2  hover:bg-opacity-80"
    >
      <ChevronRight />
    </button>
  );

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className=" dark:bg-gray-900 relative ">
        <div className="px-6 md:px-12 mx-auto max-w-screen-2xl relative z-10">
          <div className="mb-4 flex flex-col gap-1 lg:mb-6 not-format">
            <SectionMainHeader
            >
              Why you should join our awesome team ?
            </SectionMainHeader>
            <h3 className={`text-[20px] md:text-[22px] font-medium text-gray-primary dark:text-white`}>

              We want to feel like home when you are working at ABROAED & for that
              we have curated a great set of benefits for you.
            </h3>
          </div>
        </div>
        <div className="md:block  hidden overflow-x-auto">
          <Slider {...settings}>
            {benefits.map((benefit, index) => (
              <div key={index} className="px-4">
                <div
                  className=" relative hover:scale-[1.01] transition-all ease-in-out delay-100 w-full h-[25rem] md:h-[20rem] bg-black bg-opacity-80 overflow-y-auto flex flex-col flex-grow-0 p-6  text-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div
                    // style={{
                    //   backgroundImage:
                    //     "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
                    // }}
                    className="text-white">
                    {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img> */}
                    <h5 className="mt-2  text-[26px] leading-tight md:text-[36px] font-medium   dark:text-white"
                    >
                      {benefit.heading}
                    </h5>
                    <p className="font-normal text-justify text-[18px]  md:text-[16px]   mt-6  dark:text-gray-400">
                      {benefit.text}
                    </p>
                    {/* <p className="text-sm">Location, India</p> */}

                  </div>
                  <div className="absolute right-0 w-32 top-20 bottom-0 overflow-hidden z-0">
                    <img
                      className="rounded-lg w-full h-full object-contain"
                      src={vectorRightFlat}
                      alt="Counselling session"
                    />
                  </div>
                </div>

              </div>
            ))}
          </Slider>
        </div>

        <div className="md:hidden flex  gap-4 px-4 overflow-x-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="">
              <div
                className=" relative hover:scale-[1.01] transition-all ease-in-out delay-100 w-[23rem]  md:w-full h-[25rem] md:h-[20rem] bg-black bg-opacity-80 overflow-y-auto flex flex-col flex-grow-0 p-6  text-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <div
                  // style={{
                  //   backgroundImage:
                  //     "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
                  // }}
                  className="text-white">
                  {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img> */}
                  <h5 className="mt-2  text-[26px] leading-tight md:text-[36px] font-medium   dark:text-white"
                  >
                    {benefit.heading}
                  </h5>
                  <p className="font-normal text-justify text-[18px]  md:text-[16px]   mt-6  dark:text-gray-400">
                    {benefit.text}
                  </p>
                  {/* <p className="text-sm">Location, India</p> */}

                </div>
                <div className="absolute right-0 w-32 top-20 bottom-0 overflow-hidden z-0">
                  <img
                    className="rounded-lg w-full h-full object-contain"
                    src={vectorRightFlat}
                    alt="Counselling session"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default CareerJoinTeam;
