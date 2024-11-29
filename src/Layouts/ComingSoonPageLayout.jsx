import React, { useRef, useState } from "react";
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

function ComingSoonPageLayout() {
  const [email, setEmail] = useState("");
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      title: "Study Abroad Consultation",
      description:
        "Get expert guidance on selecting the right course and destination.",
      imgSrc: slider1,
    },
    {
      title: "Visa Assistance",
      description:
        "Receive step-by-step support for your visa application process.",
      imgSrc: slider2,
    },
    {
      title: "Document Management",
      description:
        "Efficiently manage and submit your application documents online.",
      imgSrc: slider3,
    },
  ];

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

  const words = ["Coming", "Soon!", "Launching", "Early", "2025."];

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
    <div>
      <section className="min-h-screen flex items-center justify-center w-full bg-slate-950 px-6 sm:px-8 py-4">
        <div className="w-full h-full">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
            <div className="lg:w-1/2 w-full">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              <div>
                <motion.h1
                  className="mb-6 text-4xl font-inter font-bold text-yellow-500 sm:text-5xl md:text-6xl lg:text-7xl"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      variants={wordVariants}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
                <p className="mb-8 text-lg font-inter text-gray-300 sm:text-xl md:text-2xl">
                  Your Dream Study Abroad Journey Begins Here.
                  <br /> Personalized Counseling and Services Coming Soon.
                </p>
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-base text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 sm:rounded-md"
                      placeholder="Enter your email to stay updated"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 font-inter rounded-lg bg-yellow-700 text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

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
            </div>

            <div className="relative flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]  overflow-hidden rounded-lg shadow-lg relative">
                {/* {carouselItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 z-10 transform transition-all duration-700 ease-in-out ${
                      currentIndex === index
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                  >
                    <div className="rounded-[22px] h-full p-8 bg-white dark:bg-zinc-900 shadow-lg flex flex-col items-center text-center space-y-6">
                      <a href="#">
                        <img
                          className="w-full max-w-xs mx-auto mb-4 h-60 object-cover rounded-lg"
                          src={item.imgSrc}
                          alt={item.title}
                        />
                      </a>

                      <a
                        href="#"
                        className="font-inter font-semibold text-2xl text-gray-900 hover:underline dark:text-white"
                      >
                        {item.title}
                      </a>

                      <p className="font-inter text-gray-600 dark:text-gray-300 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))} */}
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000, // Auto-slide every 2 seconds
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  loop={true}
                  className="relative"
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {carouselItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="rounded-[22px] border border-4 border-yellow-500 h-full p-8 bg-white dark:bg-zinc-900 shadow-lg flex flex-col items-center text-center space-y-6">
                        <a href="#">
                          <img
                            className="w-full max-w-xs mx-auto mb-4 h-60 object-cover rounded-full bg-yellow-300"
                            src={item.imgSrc}
                            alt={item.title}
                          />
                        </a>
                        <p className="font-inter font-semibold text-2xl text-gray-900 hover:underline dark:text-white">
                          {item.title}
                        </p>
                        <p className="font-inter text-gray-600 dark:text-gray-300 text-lg">
                          {item.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}

                  {/* Navigation buttons */}

                  <div className=" absolute top-1/2 left-0 transform -translate-y-1/2 text-white z-10">
                    <button
                      onClick={() => swiperRef.current?.slidePrev()}
                      class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg
                        aria-hidden="true"
                        class="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="sr-only">Previous</span>
                    </button>
                  </div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white z-10">
                    <button
                      onClick={() => swiperRef.current?.slideNext()}
                      class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg
                        class="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoonPageLayout;
