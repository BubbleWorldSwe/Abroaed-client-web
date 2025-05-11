/* eslint-disable react/prop-types */

import vectorRightFlat from "../../../assets/vectorRightFlat.png";
import { motion } from "framer-motion";

const DestinationFunFactCard = ({ icon, title, desc }) => {
  return (
    <>
      <div className=" md:w-[427px] hover:scale-[1.01] transition-all ease-in-out delay-100 sm:min-w-max bg-gray-primary relative z-10 overflow-hidden rounded-lg p-4  py-8">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  rounded-lg pointer-events-none"
          style={{
            left: "auto", // Ensure it starts from the right edge
            right: 0, // Anchor the gradient to the right
            width: "70%", // Adjust the width of the gradient area
            height: "100%", // Full height to cover the parent div
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}

        >
          <div className="flex items-center gap-4">

            <div  >
              <img
                src={icon}
                alt="icons"
              />
            </div>
            <div className="flex flex-col   text-left">
              <p className="text-[24px] md:text-[32px] text-[#FFFFFF] font-bold">{title}</p>
              <p className="text-[18px] md:text-[22px] text-[#F4F4F5] font-semibold dark:text-gray-400">{desc}</p>
            </div>
          </div>
        </motion.div>
        <div className="absolute right-0 top-0">
          <img src={vectorRightFlat} />
        </div>
      </div>
    </>
  );
};

export default DestinationFunFactCard;
