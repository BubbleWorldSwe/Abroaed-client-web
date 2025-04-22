/* eslint-disable react/prop-types */
import { plans } from "../../data";
import { useState } from "react";
import FeatureLOEModal from "../../modals/featureLOEModal";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

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
        title="League of Excellence"
      />
      <div className="relative z-10">
        <section >
          <div className="  lg:grid lg:grid-cols-1 pb-10 ">
            <SectionMainHeader className="">Explore Plans</SectionMainHeader>
            <hr className="" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative px-6  hover:scale-[1.01] transition-all duration-300 ease-in-out py-10 border  bg-[#26262A] text-white  rounded-[12px] shadow-md w-full md:w-1/3 border-[#D4D4D8] "
                                }`}
              >
                {plan.recommended && (
                  <div className="absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                {/* <div className="w-full  px-2 mx-auto bg-yellow-primary"> */}
                <div className="text-[32px] bg-[#4a4a52] bg-opacity-80 mb-2   rounded-xl   md:text-[42px]  font-medium    text-center ">
                  {plan.name}
                </div>
                {/* </div> */}
                <p className="text-[18px]  md:text-[32px] text-center font-normal  " >
                  {plan.price} <spna className="text-lg">(Inc. of GST)</spna>
                </p>
                <p className=" text-lg  text-center font-normal ">{plan.title}</p>

                {/* <button
                                    className={`w-full mt-4 py-4 rounded-full text-[18px] font-semibold 
                                     hover:text-white border border-gray-500
                                    hover:bg-black  
                                    `}
                                >
                                    {plan.buttonText}
                                </button> */}

                <div className="mt-4 bg-[#4a4a52] bg-opacity-80 rounded-xl p-2">
                  <h4 className="text-[18px]  md:text-[25px] font-medium">
                    Features you’ll love
                  </h4>
                  <ul className="mt-1 space-y-1 list-disc px-5 ">
                    {plan.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="text-[12px] md:text-sm list-item items-center font-normal gap-1 text-white"
                      >
                        {/* <Check size={16} /> */}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-2 left-6">
                  <p>* T&C apply </p>
                </div>
              </div>
            ))}
          </div >

          <div className="flex justify-center mt-10">
            <button
              className={`bg-yellow-primary hover:bg-gray-primary hover:text-white text-[16px] md:text-xl text-[#432205] px-6 py-3  font-semibold rounded-lg`}
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
