/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";


const serviceDataWeb = [
  {
    text1: "Home Consultation",
    text2:
      "Our home consultation brings expert advice to your doorstep. We assess your educational aspirations, preferred destinations, and potential career paths. This service ensures personalized guidance from experienced counselors in the comfort of your home. With a focus on clarity, we discuss program options, visa processes, and financial planning. This consultation provides families an opportunity to understand the study abroad process comprehensively. Our home consultation services cover throughout Delhi, but on request, we can also serve you in NCR-region and other states of India. We focus on answering your questions, explaining the process, and providing honest, practical advice to help you kick-start your journey.",
    imgUrl: homeService8,
  },
  {
    text1: "Comprehensive Research & Shortlisting",
    text2:
      "We make the highly complicated process of selecting the proper euniversity and course easier. Based on your educational background, the desired career outcome, and choice of country, our experts are going to analyze and research very thoroughly about any particular program to compare universities across the world in rank, courses available, fees and requirements to apply. That's how the personal approach could give you better insight into which choice is actually yours. Narrowing down your choices will lead us to help you focus on opportunities that best align with your aims toward the goal of a successful academic experience abroad.",
    imgUrl: homeService1,
  },
  {
    text1: "Customized Personal Guidance",
    text2:
      "We give you one-to-one guidance at every step in your study abroad journey. Our team takes time to understand the specific needs you have, from selecting a course to preparing your application. We can help you with drafting your statement of purpose, review your documents, and ensure you fulfill all requirements set by the university you've chosen. Additionally, we help you land the most suitable scholarship and offer support in interview preparations. This hands-on assistance ensures you’re fully prepared for every stage of the application process.",
    imgUrl: homeService2,
  },
  {
    text1: "Accommodation Support Services",
    text2:
      "Finding a place to call home while studying in a foreign land is a cumbersome task, however, help is at hand from our team. There is a wide range of choices available to you like hostel dorms, flats where you can house with a flatmate, or independently rented homes. Our team gives you advice on picking a place that works for your money situation where you want to be, and how you like to live. We walk you through the steps to book your place making sure you have all the papers and deals you need. With us backing you up, you can get a comfy and safe place to live, so you can pay attention to your classes without worrying about where you'll sleep at night.",
    imgUrl: homeService3,
  },
  {
    text1: "Exclusive Scholarship Guidance",
    text2:
      "We provide in-depth assistance in identifying and applying for scholarships that align with your academic qualifications and professional objectives. Our team thoroughly researches the relevant funding opportunities, including merit-based, need-based, and program-specific scholarships. We assist you in preparing your application, ensuring all documentation meets all criteria, from academic transcripts to recommendation letters. We also help students write well-argued personal statements and prepare their applications in line with scholarship requirements. Through our extensive information, we help enhance the chances of one being awarded the much-needed financial support to fund their education abroad.",
    imgUrl: homeService4,
  },
  {
    text1: "Global Pathway Course Options",
    text2:
      "We will support you by recommending an appropriate global pathway course to be your bridge to the degree program abroad. These courses are planned for students who need more preparation or improvement in language proficiency, academic abilities, or subject knowledge. With the help of our team, you will identify programs that best fit your background and career aspirations. We provide ample information in terms of course content, duration, and entry requirements to make an informed choice. With our help, you will ease your transition into the university and its academic program that you've chosen.",
    imgUrl: homeService5,
  },
  {
    text1: <>ABROAED<sup>+</sup></>,
    // text2:"The ABROAED Plus program is your all-inclusive study abroad companion, designed to simplify every step of your journey to global education. Recognizing that the study abroad process extends far beyond securing admission, this service offers comprehensive support—from researching the right country, university, and course to managing finances, securing loans, booking accommodation, and even arranging flight tickets and airport transfers. ABROAED Plus eliminates the stress of hidden costs, confusing paperwork, and overwhelming choices, saving you time, money, and effort. With features like personalized consultations, country-specific mentors, tailored SOPs/LORs, visa assistance, and priority offer letters, this program ensures a seamless transition to your dream university. ABROAED Plus is more than just a service; it’s a commitment to empowering you with the tools, guidance, and confidence needed to thrive in your academic and professional pursuits abroad.",
    text2: <>ABROAED<sup>+</sup>  program is your all-inclusive study abroad companion, designed to simplify every step of your journey to global education. Recognizing that the study abroad process extends far beyond securing admission, this service offers comprehensive support—from researching the right country, university, and course to managing finances, securing loans, booking accommodation, and even arranging flight tickets and airport transfers. <>ABROAED<sup>+</sup></> eliminates the stress of hidden costs, confusing paperwork, and overwhelming choices, saving you time, money, and effort. With features like personalized consultations, country-specific mentors, tailored SOPs/LORs, visa assistance, and priority offer letters, this program ensures a seamless transition to your dream university. <>ABROAED<sup>+</sup></> is more than just a service; it’s a commitment to empowering you with the tools, guidance, and confidence needed to thrive in your academic and professional pursuits abroad.</>

    ,
    imgUrl: homeService6,
  },
  {
    text1: "League of Excellence",
    text2:
      "For students aspiring to join the ranks of the world’s most prestigious institutions, the League of Excellence offers unparalleled, distinct assistance for admissions to Ivy League universities and other top-tier global institutions. This service is designed for high-achieving individuals who seek to elevate their academic and professional trajectories. Our experts provide personalized strategies, from crafting compelling application essays to preparing for rigorous interviews, ensuring you stand out in highly competitive admissions processes. With intimate knowledge of what best universities desire, we help you highlight your strengths, achievements, and potential. The League of Excellence is your doorway to making ambitious dreams a reality on the global stage.",
    imgUrl: homeService7,
  },
];
const serviceDataPhone = [
  {
    text1: "Home Consultation",
    text2:
      "Experience personalized study abroad guidance from the comfort of your home. Our expert counselors visit you to understand your educational background, preferences, and long-term career vision. We explain study destinations, university options, course selection, application timelines, visa processes, and financial planning. This service is ideal for families who want clarity and expert advice without the hassle of traveling to an office. Available across Delhi and on-request in NCR and other states, our home consultations make the study abroad journey more accessible, informed, and comfortable for every student.",
    imgUrl: homeService8,
  },
  {
    text1: "Comprehensive Research & Shortlisting",
    text2:
      "We take the stress out of university and course selection by providing tailored recommendations based on your goals, qualifications, and preferences. Our experts evaluate institutions across countries based on rankings, faculty, program quality, entry requirements, fees, and post-study opportunities. We present a curated list that suits your academic interests and budget. This approach brings confidence, saves time, and ensures you make smart, goal-aligned decisions that set the foundation for a successful international education experience.",
    imgUrl: homeService1,
  }
  ,
  {
    text1: "Customized Personal Guidance",
    text2:
      "Receive individual attention and expert guidance through every step of your study abroad journey. We begin by understanding your strengths and aspirations, helping you pick the right course and university. Our counselors assist with SOP writing, LORs, application review, and timely submission. We also support you with scholarship applications, interview readiness, and visa document preparation. This holistic, hands-on approach ensures your application is polished, competitive, and tailored to each institution. With us, you stay on track, informed, and fully equipped to achieve your global education goals.",
    imgUrl: homeService2,
  },
  {
    text1: "Accommodation Support Services",
    text2:
      "Finding housing in a new country can be daunting, but we make it easy. Our team guides you through various accommodation options—university dorms, student hostels, shared flats, or private rentals—based on your budget, preferences, and lifestyle. We assist with location research, application procedures, booking, contracts, and move-in logistics. Our goal is to ensure your new living space is safe, comfortable, and convenient. With our support, you avoid common pitfalls and secure a reliable home, allowing you to focus on settling in and succeeding academically.",
    imgUrl: homeService3,
  },
  {
    text1: "Exclusive Scholarship Guidance",
    text2:
      "We maximize your chances of receiving financial aid by identifying scholarships that match your academic merit, financial situation, and course of interest. Our team researches national and international opportunities—merit-based, need-based, and university-specific. We help you prepare compelling statements, gather documents, and submit strong applications. Our guidance ensures you meet deadlines, follow eligibility, and present yourself as a strong candidate. With our support, you reduce financial burden and gain more freedom to pursue global academic ambitions.",
    imgUrl: homeService4,
  }
  ,
  {
    text1: "Global Pathway Course Options",
    text2:
      "If you don’t meet direct university entry requirements, we help you find the right global pathway course. These programs strengthen your academic knowledge, language proficiency, and study skills—preparing you to transition smoothly into your chosen degree. Our experts analyze your background and goals, then suggest pathway options tailored to your needs. We also help you understand course structure, duration, and progression routes. With our support, you bridge academic gaps, meet university standards, and begin your international education journey with greater confidence and preparedness.",
    imgUrl: homeService5,
  },
  {
    text1: <>ABROAED<sup>+</sup></>,
    text2: (
      <>
        <strong>ABROAED<sup>+</sup></strong> is an all-inclusive companion designed to simplify and support your entire study abroad experience. It covers every step—from researching countries, courses, and universities to managing finances, securing loans, booking accommodation, and organizing travel. With this service, you avoid unnecessary stress, hidden costs, and confusing paperwork. It includes tailored SOPs, expert guidance for LORs, visa assistance, and fast-track university offers. <strong>ABROAED<sup>+</sup></strong> is more than a service—it’s your strategic partner, helping you stay organized, informed, and confident throughout your journey toward global academic success.
      </>
    ),
    imgUrl: homeService6,
  },
  {
    text1: "League of Excellence",
    text2:
      "This elite program is tailored for ambitious students targeting Ivy League and other top global universities. We provide expert mentorship on how to build a competitive application, including customized strategies, profile building, and interview preparation. Our team helps you create standout SOPs and essays that reflect your unique voice, achievements, and aspirations. We also provide insights into what top institutions look for in candidates. The League of Excellence ensures you’re not just applying—you’re positioning yourself as a top contender for admission into world-renowned institutions.",
    imgUrl: homeService7,
  },
];




const HomeServicesSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [modalOpen, setModalOpen] = useState(false);
  const [countImg, setCountImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [countImg]);

  const handleNextImage = () => {
    setTimeout(() => {
      setCountImg((prev) => (prev + 1) % serviceData.length);

    }, 3000);
  };

  const handleDotClick = (index) => {
    if (index !== countImg) {
      setTimeout(() => {
        setCountImg(index);
      }, 3000);
    }
  };

  const serviceData = isMobile ? serviceDataPhone : serviceDataWeb;

  // const PrevArrow = ({onClick}) => (
  //   <button
  //     onClick={onClick}
  //     className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2  hover:bg-opacity-80"
  //   >
  //     <ChevronLeft />
  //   </button>
  // );

  // const NextArrow = ({ onClick }) => (
  //   <button
  //     onClick={onClick}
  //     className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2  hover:bg-opacity-80"
  //   >
  //     <ChevronRight />
  //   </button>
  // );

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 6000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   centerModa: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  // };

  // console.log(serviceData[countImg]?.imgUrl);

  return (
    <div>
      {modalOpen && (
        <HomeServiceModal
          modalOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
      <section className=" dark:bg-gray-900 flex flex-col space-y-4 w-full md:max-w-screen-2xl mx-auto  relative">
        <div className="px-4 md:px-12  max-w-screen-2xl relative z-10">

          <SectionMainHeader
          >
            Discover Our Unique Offerings
          </SectionMainHeader>
        </div>
        <div className="overflow-x-auto ">
          {/* <Slider {...settings}  >
            {serviceData?.map((service, index) => ( */}
          <div
            className="w-full px-4   h-[32rem] relative rounded-lg"
          >
            <div className="relative w-full h-full rounded-lg">
              <div
                className="absolute inset-0 bg-black  opacity-40 rounded-lg"

              ></div>
              <div className="absolute inset-0 bg-gradient-to-l from-gray-600 to-black opacity-60 z-0 rounded-lg"></div>
              <img
                className="w-full h-full object-cover rounded-lg"
                src={serviceData[countImg]?.imgUrl}
                alt={`Service ${countImg + 1}`}
              />
            </div>
            <div className="absolute top-0 md:top-[10%] inset-0 flex  flex-col justify-between p-6 z-10">

              <div className="overflow-y-auto flex  flex-col gap-4 md:gap-10 px-2 md:px-5">
                <h1 className="text-[24px] leading-tight  md:text-[57px] text-white   font-medium ">
                  {serviceData[countImg].text1}
                </h1>
                <p className="text-gray-200 leading-6 md:leading-8  text-justify font-normal lg:mb-2 text-base md:text-[22px]">
                  {serviceData[countImg].text2}
                </p>
              </div>
            </div>
          </div>

          {/* //   ))} */}
          {/* // </Slider> */}
        </div>
        <div className="flex justify-center items-center gap-2">
          {serviceData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full ${index === countImg ? 'bg-yellow-primary w-4 ' : 'bg-gray-500'
                }`}
            />
          ))}
        </div>
      </section >
    </div >
  );
};

export default HomeServicesSection;
