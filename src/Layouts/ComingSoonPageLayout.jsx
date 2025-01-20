import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import { Spotlight } from "../Components/SpotLight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import comingSoon from '../assets/comingSoon.svg'
import AppStore from "../assets/AppStore.png"
import playStore from "../assets/PlayStore.png"
import InfiniteMovingCards from "../Components/InfiniteMovingCards";

const carouselItems = [
  {
    title: "Study Abroad Consultation",
    description: "Get expert guidance on selecting the right course and destination.",
    imgSrc: slider1,
  },
  {
    title: "Visa Assistance",
    description: "Receive step-by-step support for your visa application process.",
    imgSrc: slider2,
  },
  {
    title: "Document Management",
    description: "Efficiently manage and submit your application documents online.",
    imgSrc: slider3,
  },
  {
    title: "Test Preparation",
    description: "Prepare for language and standardized tests with expert coaching.",
    imgSrc: slider1,
  },
  {
    title: "Accommodation Assistance",
    description: "Find the perfect accommodation near your university.",
    imgSrc: slider2,
  },
  {
    title: "Post-Arrival Support",
    description: "Receive assistance with settling in after you arrive at your destination.",
    imgSrc: slider3,
  },
];

const SlidingComponent = () => {
  return (
    <div className="flex gap-10 justify-between" >
      {carouselItems.map((item, index) => (
        <div key={index} className="w-96  shadow-2xl bg-opacity-5 p-4 rounded-lg bg-slate-700 	">
          <div>
            <div className="flex gap-3">
              <svg
                className="mb-2 h-8 w-8 text-[#fbba18] dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <h3

                className="mb-2 font-inter text-xl font-semibold  dark:text-white"
              >
                {item.title}
              </h3>


            </div>
            <p className="text-md font-inter text-white">
              {item.description}
            </p>
          </div>

        </div>
      ))}
    </div>
  )
}
const texts = [
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
]
const SlidingHeader = () => {
  return (
    <div className="flex gap-10 " >
      {texts.map((item, index) => (
        <div key={index} className=" whitespace-nowrap space-x-8 	">
          <div className="list-item list-disc text-white text-lg font-medium">
            {item}
          </div>

        </div>
      ))}
    </div>
  )
}

function ComingSoonPageLayout() {
  const [email, setEmail] = useState("");

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tickerPosition, setTickerPosition] = useState(100); // Initial position off-screen

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPosition((prev) => (prev <= -100 ? 100 : prev - 1)); // Reset when it moves off-screen
    }, 20); // Adjust the interval to control the speed

    return () => clearInterval(interval);
  }, []);




  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwiTmWtausR8K5D--Z-gfnY5bSzRJ0kKt_so_6oGRhwIEE1Vm43Fm6Xlv7BgYgzRlKDkg/exec",
        {
          method: "POST",
          body: JSON.stringify({ name, email }),
          headers: { "Content-Type": "application/json" },
          mode: "no-cors", // This avoids CORS errors but suppresses response content
        }
      );

      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data.");
    }
  };


  const words = ["coming", "soon!"];
  const belowWorld = ["launching", "early", "2025."];
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full  text-white  overflow-hidden bg-[#323030]"
    // style={{ backgroundImage: `url(${comingSoon})` }}
    >
      <div className="overflow-hidden bg-black  bg-opacity-80 text-white ">
        <InfiniteMovingCards
          component={<SlidingHeader />}
          items={[]}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
      <section className="min-h-screen flex  mt-4 md:mt-16 items-center flex-col justify-center w-full px-1 sm:px-8 "
      >
        <div className="text-center px-4 sm:px-8 lg:px-16 mb-7">
          <h3 className="mb-6 text-center text-3xl font-bold text-yellow-500 sm:text-3xl md:text-4xl lg:text-6xl">
            <span
              className="text-white font-cinzel tracking-[0.15em] text-[32px] sm:text-[42px] md:text-[64px] lg:text-[114px] font-extrabold leading-[40px] sm:leading-[52px] md:leading-[84px] lg:leading-[128px] decoration-skip-ink"
            >
              ABROA
            </span>
            <span
              style={{ color: '#fbba18' }}
              className="font-cinzel text-[32px] sm:text-[42px] md:text-[64px] lg:text-[114px] font-extrabold leading-[40px] sm:leading-[52px] md:leading-[84px] lg:leading-[128px] tracking-[0.05em]"
            >
              ED
            </span>

          </h3>
          <h5 className="text-white lg:text-4xl md:text-xl font-cinzel font-semibold mb-1 md:mb-7">
            The World is Waiting
          </h5>
        </div>

        <div className="grid grid-col-1 md:grid-cols-2  gap-5 w-full px-20">
          <div className=" ">
            <form className="max-w-sm mx-auto">
              <p className="text-white text-lg mt-5 mb-2 text-center">Get notified when we get live!</p>

              <div className="mb-3">
                <label htmlFor="name" className="block mb-2 text-base font-medium text-white dark:text-white">Name*</label>
                <input
                  type="name"
                  id="name"
                  className="bg-black border-none bg-opacity-40 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  placeholder="John"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="block mb-2 text-base font-medium text-white dark:text-white">Email*</label>
                <input
                  type="email"
                  id="email"
                  className="bg-black border-none bg-opacity-40 text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mobile" className="block mb-2 text-base font-medium text-white dark:text-white">Mobile*</label>
                <input
                  type="tel"
                  id="mobile"
                  className="bg-black border-none bg-opacity-40 text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                  placeholder="+91 9999999999"
                  required
                />
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full  font-medium rounded-lg text-lg px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-yellow-400"
                  style={{
                    backgroundColor: '#FDDA24',
                    color: '#000', // Adjust text color for better contrast
                  }}
                >
                  Notify Me
                </button>
              </div>
            </form>

          </div>
          <div className="  flex flex-col justify-end ">
            <div className=" relative  bg-black w-full  py-5 px-4 shadow-xl rounded-lg mx-auto max-w-screen-5xl ">
              <div className="max-w-sm">
                <h2 className="mb-4 text-lg  md:text-3xl  font-extrabold text-gray-300 dark:text-white">
                  Join Waitlist for ABROAED mobile app.
                </h2>
                <div className='flex flex-col md:flex-row gap-5 p-2 '>
                  <div >
                    <img src={playStore} alt='googlePlayStoreIcon' className='' />
                  </div>
                  <div>
                    <img src={AppStore} alt='googlePlayStoreIcon' className='' />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-12 hidden h-80 md:flex">
                <img
                  className="hidden mx-auto w-64  md:flex object-contain"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/iphone-mockup.png"
                  alt="mobile app"
                />

              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full mx-auto py-10">
          <h6 className="text-white text-xl font-semibold opacity-80 mb-5">What’s in store for you?</h6>
          <div className="overflow-x-auto">
            <div className="flex space-x-5" style={{ minWidth: 'max-content' }}>
              <InfiniteMovingCards
                component={<SlidingComponent />}
                items={[]}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
          {/* <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="mt-8 grid grid-cols-2 gap-4 dark:border-gray-700 sm:mt-8 sm:border-t sm:border-gray-200 sm:pt-8 lg:gap-8">
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-yellow-700 dark:text-yellow-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  <h3 className="mb-2 font-inter text-xl font-semibold text-yellow-500 dark:text-white">
                    Personalized Counseling
                  </h3>
                  <p className="text-md font-inter text-white">
                    Get personalized guidance on choosing the right courses and
                    universities.
                  </p>
                </div>
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-yellow-700 dark:text-yellow-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                    />
                  </svg>
                  <h3 className="mb-2 font-inter text-xl font-semibold text-yellow-500 dark:text-white">
                    Exclusive Updates
                  </h3>
                  <p className="text-md font-inter text-white">
                    Sign up to receive exclusive news and updates about our
                    services.
                  </p>
                </div>
              </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default ComingSoonPageLayout;
