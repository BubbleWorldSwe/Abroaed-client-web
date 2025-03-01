import { useState } from 'react';
import exploreDirectImg from '../../../../assets/exploreDirectImg.png'
import explorePathImg from '../../../../assets/explorePathImg.png'
import VectorleftNose from '../../../../assets/vectorleftNose.png'


const HomePathwaySection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverOn, setHoverOn] = useState(null);
  return (
    <div>
      <section className="dark:bg-gray-900 relative  h-full">
        <div className="py-4 px-4 mx-auto max-w-screen-2xl lg:py-4 lg:px-6 h-[600px] relative z-10 ">
          <div className="flex gap-4 h-[70vh]">
            {/* Left Child */}
            <div className="relative flex-grow basis-[50%] group hover:basis-[90%] transition-all duration-300 ease-in-out rounded-lg overflow-hidden"
              onMouseEnter={() => {
                setIsHovered(true)
                setHoverOn('direct')
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setHoverOn('direct')
              }}
            >
              <img
                className="w-full h-full object-dark"
                src={exploreDirectImg}
                alt="Direct"
              />
              <div className="absolute bottom-3 left-10 px-5">
                <p className="text-gray-200 lg:mb-2 sm:text-xl">Explore</p>
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                  Direct
                </h1>
                {hoverOn === 'direct' && isHovered && (<div className="bg-opacity-50 flex items-center justify-center text-white text-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                </div>)}
              </div>
            </div>

            {/* Right Child */}
            <div className="relative flex-grow basis-[50%] group hover:basis-[90%] transition-all duration-300 ease-in-out rounded-lg overflow-hidden"
              onMouseEnter={() => {
                setIsHovered(true)
                setHoverOn("pathways")
              }}
              onMouseLeave={() => {
                setIsHovered(false)
                setHoverOn("pathways")
              }}
            >
              <img
                className="w-full h-full object-dark"
                src={explorePathImg}
                alt="Pathways"
              />
              <div className="absolute bottom-3 left-10 px-5">
                <p className="text-gray-200 lg:mb-2 sm:text-xl">Explore</p>
                <h1 className="mb-2 text-5xl tracking-tight font-extrabold text-white dark:text-white">
                  Pathways
                </h1>
                {hoverOn === 'pathways' && isHovered && (<div className="bg-opacity-50 flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                </div>)}
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
    </div>
  );
};

export default HomePathwaySection;
