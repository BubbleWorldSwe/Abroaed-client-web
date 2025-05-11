/* eslint-disable react/prop-types */
import vectorRightFlat from "../../../../assets/vectorRightFlat.png";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

import { cardDetails } from "../../data";
import { MotionComponent } from "../../../comman/components/motionComponent";

const Cards = ({ header = "", text = "" }) => {
  return (
    <div className=" relative bg-gray-primary text-white flex-shrink-0 h-60 md:h-36 overflow-y-auto border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="overflow-hidden"
        >
          <div className="">
            <h5 className={`mb-2 text-[22px] font-semibold   dark:text-white`}>
              {header}
            </h5>
            <p className="text-[18px]">{text}</p>
          </div>
        </motion.div>
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
    <div className="">
      <div className="relative z-10">
        <section className="dark:bg-gray-900">
          <div className="">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <MotionComponent>

                <SectionMainHeader className={`md:mb-6 leading-tight md:leading-normal tracking-tighter md:tracking-normal `}>
                  Why Choose Our Home Counsellors?
                </SectionMainHeader>
              </MotionComponent>
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10   mb-5 md:mt-10 mt-4 mx-auto ">
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
