import { useState } from "react";
import exploreDirectImg from "../../../../assets/exploreDirectImg.png";
import explorePathImg from "../../../../assets/explorePathImg.png";
import VectorleftNose from "../../../../assets/vectorleftNose.png";

const HomePathwaySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverOn, setHoverOn] = useState(null);
  return (
    <div className=" ">
      <section className="dark:bg-gray-900 relative px-10 mx-auto  h-full">
        <div className=" px-4 mx-auto max-w-screen-2xl lg:py-4 lg:px-3 h-[600px] relative z-10 ">
          <div className="flex md:flex-row flex-col gap-4 h-[70vh]">
            {/* Left Child */}
            <div
              className="relative flex-grow basis-[50%] group hover:basis-[90%] transition-all duration-300 ease-in-out rounded-lg overflow-hidden"
              onMouseEnter={() => {
                setIsHovered(true);
                setHoverOn("direct");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setHoverOn("direct");
              }}
            >
              <img
                className="w-full h-full object-dark"
                src={exploreDirectImg}
                alt="Direct"
              />
              <div className="absolute bottom-3 left-10 px-5">
                <p className="text-gray-200 lg:mb-2 text-base">Explore</p>
                <h1 className="mb-2 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                  Direct
                </h1>
                {hoverOn === "direct" && isHovered && (
                  <div className="bg-opacity-50 flex items-center justify-center text-white text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Our Direct Programs are designed to make your study abroad experience simple and stress-free. We guide you through each step of the application process to top universities, ensuring everything goes smoothly. With expert guidance, personalized assistance, and partnerships with prestigious international institutions, we ensure you land in the right program suited to your career goals. Experience the world-class education you deserve with ease and confidence, all under the professional guidance of Abroaed.                  </div>
                )}
              </div>
            </div>

            {/* Right Child */}
            <div
              className="relative flex-grow basis-[50%] group hover:basis-[90%] transition-all duration-300 ease-in-out rounded-lg overflow-hidden"
              onMouseEnter={() => {
                setIsHovered(true);
                setHoverOn("pathways");
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setHoverOn("pathways");
              }}
            >
              <img
                className="w-full h-full object-dark"
                src={explorePathImg}
                alt="Pathways"
              />
              <div className="absolute bottom-3 left-10 px-5">
                <p className="text-gray-200 lg:mb-2 text-base">Explore</p>
                <h1 className="mb-2 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                  Pathways
                </h1>
                {hoverOn === "pathways" && isHovered && (
                  <div className="bg-opacity-50 flex items-center justify-center text-white text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Our Pathways Programs provide an opportunity to study a part of your degree in India and complete it overseas at top international universities. With the guidance of our visa overseas consultant, this flexible study approach makes your transition easy and cost-effective, allowing you to gain the benefits of both local and global education. It provides you with a strong foundation and enhances your career prospects on the global stage. With Abroaed, you’ll never lose sight of the right track.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-96 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-dark"
            src={VectorleftNose}
            alt="Counselling session"
          />
        </div>
      </section>
      {/* <div className="h-[35px]"></div> */}
    </div>
  );
};

export default HomePathwaySection;
