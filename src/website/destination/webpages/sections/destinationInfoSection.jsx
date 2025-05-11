/* eslint-disable react/prop-types */

import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import { motion } from "framer-motion";

function DestinationInfoSection({ destinationDetails }) {
  return (
    <Element name="overview">
      <div className="relative  z-10">
        <section className="dark:bg-gray-900 relative ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <div className="  lg:grid lg:grid-cols-1 pt-14">
              <SectionMainHeader
                className="mb-5"
              >
                Why Study in {destinationDetails?.countryId?.name} ?
              </SectionMainHeader>

              <PrimaryBodyText>
                {destinationDetails?.description || "----"}
              </PrimaryBodyText>
            </div>
          </motion.div>
        </section>
      </div>
    </Element>
  );
}

export default DestinationInfoSection;
