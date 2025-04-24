import { useState } from "react";
import homeService1 from "../../../../assets/homeService1.png";
import homeService2 from "../../../../assets/homeService2.png";
import homeService3 from "../../../../assets/homeService3.png";
import homeService4 from "../../../../assets/homeService4.png";
import homeService5 from "../../../../assets/homeService5.png";
import homeService6 from "../../../../assets/homeService6.png";
import homeService7 from "../../../../assets/homeService7.png";
import homeService8 from "../../../../assets/homeService8.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import DotsComponent from "../../../comman/components/dotsComponent";
import ServiceCardComponents from "../../../comman/components/serviceCardComponents";



const serviceData = [
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
  const [countImg, setCountImg] = useState(0);
  const handleNextImage = () => {
    setCountImg((prev) => (prev + 1) % serviceData.length);
  };
  const handleDotClick = (index) => {
    if (index !== countImg) {
      setCountImg(index);
    }
  };
  const handlePrevImage = () => {
    setCountImg((prev) => (prev - 1 + serviceData.length) % serviceData.length);
  };


  return (
    <div>
      <section className=" dark:bg-gray-900 flex flex-col space-y-4 w-full md:max-w-screen-2xl mx-auto  relative">
        <div className="px-4 md:px-12  max-w-screen-2xl relative z-10">
          <SectionMainHeader className="mb-6">
            Discover Our Unique Offerings
          </SectionMainHeader>
        </div>
        {/* service cards */}
        <ServiceCardComponents
          serviceData={serviceData}
          countImg={countImg}
          handleNextImage={handleNextImage}
          handlePrevImage={handlePrevImage}
        />
        {/* dots */}
        <DotsComponent
          serviceData={serviceData}
          handleDotClick={handleDotClick}
          countImg={countImg}
        />
      </section >
    </div >
  );
};

export default HomeServicesSection;
