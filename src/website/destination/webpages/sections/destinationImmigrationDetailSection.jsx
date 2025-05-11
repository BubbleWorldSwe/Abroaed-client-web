/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import DestinationImmigrationDetailsCard from "../../components/destinationImmigrationDetailsCard";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const DestinationImmigrationDetailsSection = ({ destinationDetails }) => {
  return (
    <Element name="immigration-details">
      <div className="relative ">
        <div className="   flex flex-col gap-6">
          {/* Content */}
          <div className="relative">

            <SectionMainHeader
              className="mb-2"
            >
              Immigration Details
            </SectionMainHeader>
            <div className="my-4 border-t border-gray-300"></div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex gap-5 py-2 overflow-x-auto flex-nowrap">
                {destinationDetails?.immigrations.map((data, index) => (
                  <DestinationImmigrationDetailsCard data={data} key={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DestinationImmigrationDetailsSection;
