/* eslint-disable react/prop-types */
import { plans } from "../../data";
import { useState } from "react";
import FeatureLOEModal from "../../modals/featureLOEModal";
import SectionMainHeader from "../../../typographies/sectionMainHeader";

const LeaguageOfExcellenceExplorePlan = ({ onFormSubmit, source, entity }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseAddModal = () => {
    setOpenModal(false);
  };

  const handleOpenAddModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <FeatureLOEModal
        onFormSubmit={onFormSubmit}
        source={source}
        entity={entity}
        isOpen={openModal}
        onClose={handleCloseAddModal}
      />
      <div className="relative z-10 py-5">
        <section className="dark:bg-gray-900 relative px-6 md:px-12 mx-auto">
          <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-6 md:py-14">
            <SectionMainHeader className="">Explore Plans</SectionMainHeader>
            <hr className="" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 hover:scale-[1.02] py-10 border  bg-[#26262A] text-white  rounded-[12px] shadow-md w-full md:w-1/3 border-[#D4D4D8] "
                                }`}
              >
                {plan.recommended && (
                  <div className="absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                {/* <div className="w-full  px-2 mx-auto bg-yellow-primary"> */}
                <div className="text-[32px] bg-[#323238] mb-4   rounded-xl   md:text-[57px]  font-extrabold    text-center ">
                  {plan.name}
                </div>
                {/* </div> */}
                <p className="text-[18px]  md:text-[32px] text-center font-bold mb-1 " >
                  {plan.price}
                </p>
                <p className=" text-lg mb-3 text-center ">{plan.title}</p>

                {/* <button
                                    className={`w-full mt-4 py-4 rounded-full text-[18px] font-semibold 
                                     hover:text-white border border-gray-500
                                    hover:bg-black  
                                    `}
                                >
                                    {plan.buttonText}
                                </button> */}

                <div className="mt-6 bg-[#323238] rounded-xl p-2">
                  <h4 className="text-[18px]  md:text-[25px] font-semibold">
                    Features you’ll love
                  </h4>
                  <ul className="mt-1 space-y-1 list-disc px-5 ">
                    {plan.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="text-[12px] md:text-base list-item items-center gap-1 text-white"
                      >
                        {/* <Check size={16} /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div >

          <div className="flex justify-center mt-10">
            <button
              className={`bg-yellow-primary hover:bg-yellow-300 text-[16px] md:text-xl text-[#432205] px-6 py-3  font-semibold rounded-lg`}
              onClick={handleOpenAddModal}
            >
              See full feature comparison
            </button>
          </div>
        </section >
      </div >
    </>
  );
};

export default LeaguageOfExcellenceExplorePlan;
