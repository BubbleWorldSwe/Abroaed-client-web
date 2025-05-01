import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import { steps } from "../../data"
import vectorRightRing from "../../../../assets/vectorRightRing.png"
import Slider from "react-slick"
import NextArrow from "../../../comman/components/nextArrow"
import PrevArrow from "../../../comman/components/prevArrow"
import { useState } from "react"

const WhychooseUsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: i => (
      <div className={`rounded-full w-3 h-3 transition-all duration-300 
        ${i === currentSlide ? 'bg-yellow-primary w-4' : 'bg-gray-500 '}`}
      />
    ),
    appendDots: dots => (
      <div>
        <ul className="flex justify-center  mt-4">{dots}</ul>
      </div>
    ),
    responsive: [

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="relative">
      <div className=" relative z-10">
        <section className="max-w-screen-2xl mx-auto">
          <div className="px-6 md:px-12   relative z-10">
            <SectionMainHeader className={`mb-4`}>
              Why Choose Us?
            </SectionMainHeader>
          </div>
          <div className="mt-10  md:px-8">
            <Slider {...settings} className="pb-4 flex  gap-10 ">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="px-4"
                >

                  <div

                    className="flex  flex-shrink-0 h-60 w- relative justify-center items-center text-justify hover:scale-[1.01] transition-all ease-in-out delay-100 flex-col gap-1   p-6 bg-gray-primary border border-gray-200 rounded-lg "
                  >
                    <div
                      className="absolute  inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-lg  pointer-events-none"
                      style={{
                        left: "auto",
                        right: 0,
                        width: "70%",
                        height: "100%",
                      }}
                    ></div>
                    <h5 className="mb-2 text-[24px] md:text-[28px] font-medium  text-[#FFFFFF]">
                      {step.heading}
                    </h5>
                    <div className="absolute top-0 right-0">
                      <img src={vectorRightRing} alt="vector" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>

    </div>)
}

export default WhychooseUsSection