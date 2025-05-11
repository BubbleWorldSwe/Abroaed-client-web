/* eslint-disable react/prop-types */

import { useMediaQuery } from "react-responsive";
import PrimaryBodyText from "../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../styleComponents/secondaryTitle";
import { motion } from "framer-motion";

const TextComponent = ({ text, heading }) => {

  const isMobile = useMediaQuery({ maxWidth: 786 });
  const initialX = isMobile ? 4 : -30






  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}

    >
      <div className="">
        <SecondaryTitle
          className="mb-4"
        >
          {heading}
        </SecondaryTitle>
        <PrimaryBodyText>
          {text}
        </PrimaryBodyText>

      </div>
    </motion.div>
  )
};


export default TextComponent;
