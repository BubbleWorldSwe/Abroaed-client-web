import { useState } from "react";
import HomeServiceModal from "../../../../Components/Modals/HomeServiceModal";
import homeService1 from "../../../../assets/homeService1.png";
import homeService2 from "../../../../assets/homeService2.png";
import homeService3 from "../../../../assets/homeService3.png";
import homeService4 from "../../../../assets/homeService4.png";
import homeService5 from "../../../../assets/homeService5.png";
import homeService6 from "../../../../assets/homeService6.png";
import homeService7 from "../../../../assets/homeService7.png";
import homeService8 from "../../../../assets/homeService8.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const serviceData = [
  {
    text1: "Home Consultation",
    text2: "Get expert study-abroad advice at your home. Our counselors guide you on programs, visa processes, and financial planning—ensuring a smooth journey to global education.",
    imgUrl: homeService1,
  },
  {
    text1: "Comprehensive Research & Shortlisting",
    text2: "We simplify university and course selection. Our experts analyze global rankings, fees, and requirements to help you make the best decision for your future.",
    imgUrl: homeService2,
  },
  {
    text1: "Customized Personal Guidance",
    text2: "Receive one-on-one guidance for your study abroad journey. We assist with course selection, applications, scholarships, and interview preparation to enhance your success.",
    imgUrl: homeService3,
  },
  {
    text1: "Accommodation Support Services",
    text2: "We help you find safe and affordable housing abroad. From dorms to private flats, our team ensures you secure the best living space for your budget and needs.",
    imgUrl: homeService4,
  },
  {
    text1: "Exclusive Scholarship Guidance",
    text2: "Maximize your chances of securing scholarships with our expert assistance. We help you find, apply for, and submit strong applications for financial aid opportunities.",
    imgUrl: homeService5,
  },
  {
    text1: "Global Pathway Course Options",
    text2: "Bridge your way to top universities with pathway programs. We guide you in choosing courses that enhance language skills and academic readiness for global education.",
    imgUrl: homeService6,
  },
  {
    text1: "ABROAED Plus",
    text2: "Your all-in-one study-abroad package, covering everything from university selection to visa assistance, accommodation, and travel arrangements for a stress-free experience.",
    imgUrl: homeService7,
  },
  {
    text1: "League of Excellence",
    text2: "Exclusive guidance for Ivy League and top-tier university admissions. We help craft standout applications, essays, and interview strategies to secure your dream institution.",
    imgUrl: homeService8,
  },
];


const HomeServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  let settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    centerMode: true,
  };


  return (
    <div>
      {modalOpen && (
        <HomeServiceModal
          modalOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
      <section className="dark:bg-gray-900 relative  py-2  lg:py-1">
        <div className="px-5 md:px-12 mx-auto max-w-screen-2xl relative z-10">
          <h2
            className={`my-10 text-[28px] md:text-[45px]  font-extrabold text-gray-primary dark:text-white`}
          >
            Discover Our Unique Offerings
          </h2>
        </div>
        <div className="overflow-x-auto pb-6">
          <Slider {...settings}  >
            {serviceData?.map((service, index) => (
              <div
                key={index}
                className="w-full px-3 lg:w-96 md:w-80 sm:w-60 h-[28rem] relative rounded-lg   "

              >
                <div className="relative w-full h-full rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={service.imgUrl}
                    alt={`Service ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-black rounded-lg opacity-65"></div>{" "}

                </div>
                <div className="absolute inset-0 flex  flex-col justify-between p-6 z-10">
                  <div className="overflow-y-auto px-5">
                    <h1 className="mb-1 text-2xl  font-bold text-white">
                      {service.text1}
                    </h1>
                    <p className="text-gray-200 text-justify lg:mb-2 text-[16px]">
                      {service.text2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section >
    </div >
  );
};

export default HomeServicesSection;
