import  { useState, useRef, useMemo } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import HoverBorderGradient from "./Button";
import coverVideo from "../assets/video.mp4";


function HeroSection() {
  const [isFormActive, setIsFormActive] = useState(false);
  const formRef = useRef(null);

  const handleMouseEnter = () => setIsFormActive(true);
  const handleMouseLeave = () => setIsFormActive(false);

  // Memoize TextGenerateEffect to prevent re-renders
  const textEffect = useMemo(
    () => (
      <TextGenerateEffect
        headings={[
          "Study Abroad with ABROAED.",
          "Get Dream Scholarships!",
          "Explore limitless opportunities.",
        ]}
        className="mb-4 font-extrabold leading-tight tracking-tight text-primary-900 font-inter dark:text-white lg:text-6xl"
        typingSpeed={100}
        pauseDuration={1000}
      />
    ),
    []
  );

  return (
    <div className="mb-4">
      <section className="relative bg-gray-50 pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full z-0"
          style={{ opacity: 0.7 }}
        >
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-gray-900 opacity-70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen mx-auto px-8 lg:flex-row lg:space-x-8">
          <div className="text-center lg:text-left text-white lg:w-1/2 px-4 lg:px-8">
            {textEffect}

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent font-inter bg-clip-text bg-gradient-to-r to-black from-yellow-300">
                Global Dreams.
              </span>
              <h1 className="mb-4 font-inter text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                We invest in every{" "}
                <span className="underline font-inter underline-offset-3 decoration-8 decoration-yellow-200 dark:decoration-yellow-600">
                  student's potential
                </span>
              </h1>
              <p className="text-lg font-inter font-normal text-gray-900 lg:text-xl dark:text-gray-400">
                95% of our students get an admit in less than 4 weeks
              </p>
            </h1>

            <HoverBorderGradient
              containerClassName="mx-auto lg:mx-0"
              className="text-black bg-yellow-500 font-inter"
              duration={1.5}
              clockwise={true}
            >
              Enquire Now
            </HoverBorderGradient>
          </div>

          {/* <div
            ref={formRef}
            className={`w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg border border-yellow-800 transition duration-500
              ${
                isFormActive
                  ? "bg-white dark:bg-gray-800"
                  : "bg-white/10 dark:bg-gray-800/40"
              }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Get in Touch
            </h2>

            <div className="mb-4">
              <Label htmlFor="first-name">First Name</Label>
              <Input
                type="text"
                id="first-name"
                placeholder="Bonnie"
                isFormActive={isFormActive}
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="last-name">Last Name</Label>
              <Input
                type="text"
                id="last-name"
                placeholder="Green"
                isFormActive={isFormActive}
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="email">Your Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="name@example.com"
                isFormActive={isFormActive}
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                type="tel"
                id="phone-number"
                placeholder="+12 345 6789"
                isFormActive={isFormActive}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 px-5 text-sm font-medium text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-yellow-800"
            >
              Send Message
            </button>
          </div> */}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      </section>
    </div>
  );
}

export default HeroSection;
