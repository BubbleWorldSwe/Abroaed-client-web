/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import vector from "../../../assets/kpiVector.png";
import { motion } from "framer-motion";

const HomeKpiMatrixCard = ({
  cardName,
  name,
  role,
  description,
  socialLinks,
}) => (
  <div className="w-full hover:scale-[1.01] transition-all ease-in-out delay-100 h-[10rem] md:h-[14rem] font-cinzel relative bg-gray-primary rounded-lg overflow-hidden flex flex-col justify-center items-center p-6">
    <img
      className="absolute right-0 top-0 h-full object-contain z-0"
      src={vector}
      alt="Decorative vector"
    />
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h1
        className="text-[24px] md:text-[32px] max-w-sm leading-tight font-medium text-white  bg-clip-text text-transparent z-10 flex justify-center items-center w-full text-center"
        style={{
          // backgroundImage: "linear-gradient(91.57deg, #FFDF00 0%, rgba(255, 223, 0, 0.5) 100%)",
        }}
      >
        {cardName}
      </h1>
    </motion.div>
  </div >
);

export default HomeKpiMatrixCard;
