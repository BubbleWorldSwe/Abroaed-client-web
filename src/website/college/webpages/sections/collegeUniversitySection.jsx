/* eslint-disable react/prop-types */
import dark from "../../../../assets/dark.png";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

const CollegeUniversitySection = ({ collegeDetails }) => {
  return (
    <div>
      <section className="dark:bg-gray-900 relative">
        <div className=" relative z-10">
          <div className=" text-center">
            <SectionMainHeader className={`mb-4`}>
              {collegeDetails?.name} at a Glance
            </SectionMainHeader>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-5 pl-12" style={{ minWidth: "max-content" }}>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="hover:scale-[1.01] transition-all ease-in-out delay-100 md:w-[30vw]
                                         h-[25rem] relative rounded-2xl overflow-hidden"
                  >
                    {/* Background Image with Overlay */}
                    <div className="relative w-full h-full">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={dark}
                        alt={`Service ${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
                      {/* Overlay */}
                    </div>

                    {/* Text Content */}
                    {/* <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                                               <div>
                                                   <p className="text-gray-200 lg:mb-2 sm:text-xl">Explore</p>
                                                   <h1 className="mb-4 text-3xl font-bold text-white">
                                                       This is our service
                                                   </h1>
                                               </div>
                                               <button
                                                   type="button"
                                                   onClick={() => setModalOpen(true)}
                                                   className="w-12 h-12 flex items-center justify-center font-medium bg-black bg-opacity-40 rounded-full hover:bg-opacity-60 focus:outline-none transition-all"
                                               >
                                                   <svg
                                                       className="w-5 h-5 text-white"
                                                       aria-hidden="true"
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       fill="none"
                                                       viewBox="0 0 18 18"
                                                   >
                                                       <path
                                                           stroke="currentColor"
                                                           strokeLinecap="round"
                                                           strokeLinejoin="round"
                                                           strokeWidth="2"
                                                           d="M9 1v16M1 9h16"
                                                       />
                                                   </svg>
                                               </button>
                                           </div> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeUniversitySection;
