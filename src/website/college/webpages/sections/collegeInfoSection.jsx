/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const CollegeInfoSection = ({ header, text1, text2, collegeDetails }) => {
  return (
    <div className="relative z-10">
      <section className="">
        <div className="pt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <SectionMainHeader className={`mb-4`}>
              Why Study at {collegeDetails?.name}?
            </SectionMainHeader>
            <PrimaryBodyText className="mb-4 ">{text1}</PrimaryBodyText>
            <PrimaryBodyText>{collegeDetails?.description}</PrimaryBodyText>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default CollegeInfoSection;
