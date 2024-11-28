import React, { useState } from "react";
import { BackgroundGradient } from "../Components/bgGradient";
import { motion } from "framer-motion";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";

function ComingSoonPageLayout() {
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the email for registration
    alert(`Thanks for registering! We'll keep you updated at ${email}`);
  };

  return (
    <div>
      <section className="h-full flex items-center justify-center w-full bg-slate-950 px-4 sm:py-4 xl:px-0">
        <div className=" h-full max-w-screen-xl px-4  sm:py-16 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-24">
            <div className="w-1/2 md:w-full">
              <div>
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Coming Soon! Launching Early 2025.
                </h1>
                <p className="mb-6 flex items-center text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                  Your Dream Study Abroad Journey Begins Here.
                  <br /> Personalized Counseling and Services Coming Soon.
                </p>
                <form className="w-full" onSubmit={handleSubmit}>
                  <div className="flex items-center space-x-4">
                    <input
                      type="email"
                      id="email"
                      className="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-base text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 sm:rounded-md"
                      placeholder="Enter your email to stay updated"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-lg bg-primary-700 text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 dark:border-gray-700 sm:mt-8 sm:border-t sm:border-gray-200 sm:pt-8 lg:gap-8">
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500"
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
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Personalized Counseling
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get personalized guidance on choosing the right courses and
                    universities.
                  </p>
                </div>
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-primary-700 dark:text-primary-500"
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
                  <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                    Exclusive Updates
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sign up to receive exclusive news and updates about our
                    services.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-full">
              <div className="relative h-[500px] overflow-hidden">
                {carouselItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 z-10 transform transition-all duration-700 ease-in-out ${
                      currentIndex === index
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                  >
                    <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
                      <a href="#">
                        <img
                          className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                          src={item.imgSrc}
                          alt={item.title}
                        />
                      </a>

                      <span className="me-2 inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        <svg
                          className="me-1.5 h-3 w-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                          ></path>
                        </svg>
                        Service Available
                      </span>

                      <a
                        href="#"
                        className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
                      >
                        {item.title}
                      </a>

                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>

                      <a
                        href="#"
                        title=""
                        className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
                      >
                        Learn More
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          ></path>
                        </svg>
                      </a>
                    </BackgroundGradient>
                  </motion.div>
                ))}

                <button
                  onClick={handlePrev}
                  className="absolute z-[999] left-0 top-1/2 transform -translate-y-1/2 "
                >
                  <span class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
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
                  </span>
                </button>

                <button
                  onClick={handleNext}
                  className="absolute z-[999] right-0 top-1/2 transform -translate-y-1/2 "
                >
                  <span class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      aria-hidden="true"
                      class="h-7 w-7"
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
                    <span class="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComingSoonPageLayout;
