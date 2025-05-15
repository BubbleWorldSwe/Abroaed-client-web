/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";


function LanguagePrepAbout({ languagePrepsDetails }) {
  return (
    <div className="relative  z-10 ">
      <div className=" mt-8 flex flex-col  gap-6">
        <header className=" not-format">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <SectionMainHeader
              className="mb-2"
            >
              About {languagePrepsDetails?.productName}
            </SectionMainHeader>
            <PrimaryBodyText>
              {languagePrepsDetails?.about}
            </PrimaryBodyText>
          </motion.div>
        </header>
      </div>
    </div>
  );
}

export default LanguagePrepAbout;
