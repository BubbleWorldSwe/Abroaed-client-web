/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import check_circle from "../../../../assets/check_circle.png";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const DestinationAdmissionRequirementSection = ({ destinationDetails }) => {
  return (
    <Element name="admission-requirements">
      <div className="relative">
        <section className=" dark:bg-gray-900 relative ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <div className="gap-8 items-center">
              <div className=" dark:text-gray-400">
                <SectionMainHeader
                  className="mb-2"
                >
                  Admission Requirements
                </SectionMainHeader>

                <PrimaryBodyText
                  className={'font-semibold'}
                  style={{ fontSize: '18px' }}
                >
                  Here are the major requirements to study in the{" "}
                  {destinationDetails?.countryId?.name}, which you need to ensure
                  while applying to a {destinationDetails?.countryId?.name}{" "}
                  university:
                </PrimaryBodyText>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2  mt-4">
                {/* Top Row: 3 Cards */}
                {destinationDetails?.admissionRequirements?.map((data, index) => (
                  <div key={index} className="flex items-center space-x-4 ">
                    <div className="flex space-x-8 justify-between">
                      <img
                        className=" object-contain"
                        src={check_circle}
                        alt={""}
                      />
                      <PrimaryBodyText
                        className="py-1"
                      >
                        {data.name}
                      </PrimaryBodyText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Element >
  );
};

export default DestinationAdmissionRequirementSection;
