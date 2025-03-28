/* eslint-disable react/prop-types */
import vectorRightFlat from "../../../../assets/vectorRightFlat.png";
import SectionMainHeader from "../../../typographies/sectionMainHeader";

import { cardDetails } from "../../data";

const Cards = ({ header = "", text = "" }) => {
  return (
    <div className=" relative bg-black bg-opacity-80 text-white flex-shrink-0 h-36 overflow-y-auto border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="">
          <h5 className={`mb-2 text-[22px] font-semibold   dark:text-white`}>
            {header}
          </h5>
          <p className="text-[18px]">{text}</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 overflow-hidden z-0">
        <img
          className="rounded-lg w-full h-full object-contain"
          src={vectorRightFlat}
          alt="Counselling session"
        />
      </div>
    </div>
  );
};

const WhyChooseOurHomeCounselling = () => {
  return (
    <div className=" mx-auto px-6  md:px-12">
      <div className="mx-auto w-full px-2 max-w-screen-2xl relative z-10">
        <section className="dark:bg-gray-900">
          <div className="py-8 ">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <SectionMainHeader className={`mb-7 leading-tight md:leading-normal tracking-tighter md:tracking-normal `}>
                Why Choose Our Home counselling?
              </SectionMainHeader>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-10   mb-5 mt-10  mx-auto ">
              {cardDetails.map((item, index) => (
                <Cards header={item.key} text={item.value} key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseOurHomeCounselling;
