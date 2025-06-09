/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";
import { motion } from "framer-motion";
import { MotionComponent } from "../../../comman/components/motionComponent";

const DestinationWorkOpportunitiesSection = ({ destinationDetails }) => {
  return (
    <Element name="work-opportunities">
      <div className="relative">
        <div className=" flex flex-col gap-6">
          {/* Content */}
          <div className="relative">
            <div className="py-1">
              <MotionComponent>
                <SectionMainHeader className="mb-2">
                  Work Opportunities in {destinationDetails?.countryId?.name}
                </SectionMainHeader>
              </MotionComponent>
              <MotionComponent>
                <PrimaryBodyText
                  className={"mb-2 md:mb-8"}
                  // style={{ fontSize: '22px' }}
                >
                  Studying in the {destinationDetails?.countryId?.name} offers a
                  variety of experiences. The cultural and traditional values of
                  the {destinationDetails?.countryId?.name} attract several
                  international students every year. The popular areas of
                  employment in {destinationDetails?.countryId?.name} are as
                  follows:
                </PrimaryBodyText>
              </MotionComponent>
            </div>

            <div className="">
              <MotionComponent>
                <SecondaryTitle className="mb-2">
                  Part-Time Work Opportunities
                </SecondaryTitle>
                <PrimaryBodyText
                // className={'font-semibold'}
                // style={{ fontSize: '22px' }}
                >
                  {destinationDetails?.workOpportunities?.partTimeStudents}
                </PrimaryBodyText>
              </MotionComponent>
            </div>
            <div className="py-4">
              <MotionComponent>
                <SecondaryTitle className="mb-2">
                  Post Study Work Opportunities
                </SecondaryTitle>

                <PrimaryBodyText
                  className={"mb-5"}
                  // style={{ fontSize: '22px' }}
                >
                  {destinationDetails?.workOpportunities?.postDegreeOpportunity}
                </PrimaryBodyText>
              </MotionComponent>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {destinationDetails?.workOpportunities?.professions?.map(
                (data, index) => (
                  <div
                    key={index}
                    className="w-full hover:scale-[1.01] transition-all ease-in-out delay-100 h-[8rem] md:h-[8.5rem] bg-gray-primary flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: false, amount: 0.3 }}
                      className=""
                    >
                      <div className="p-5 h-full flex flex-col items-center justify-center">
                        <h5
                          className={`mb-2 text-[24px] md:text-[28px] font-bold  text-[#e8e8eb]  dark:text-white line-clamp-1`}
                        >
                          {data?.professionName}
                        </h5>
                        <p className=" font-semibold text-[#ede5e5] text-[18px] md:text-[22px] ">
                          {data?.salary} (in {destinationDetails?.currency})
                        </p>
                      </div>
                    </motion.div>
                  </div>
                )
              )}
            </div>
            {destinationDetails?.workOpportunities?.additionalInformation && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="overflow-hidden"
              >
                <PrimaryBodyText
                  className={"mt-4 md:my-10"}
                  // style={{ fontSize: '1px' }}
                >
                  {" "}
                  {destinationDetails?.workOpportunities?.additionalInformation}
                </PrimaryBodyText>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DestinationWorkOpportunitiesSection;
