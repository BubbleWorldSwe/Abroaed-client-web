/* eslint-disable react/prop-types */
// import { courses, universities } from "../../data";
import UniversityDetailsCard from "../../components/destinationUniversityDetailsCard";
import CourseCard from "../../components/destinationCourseCard";
import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import { motion } from "framer-motion";
import { MotionComponent } from "../../../comman/components/motionComponent";

function DestinationUniCoursersSection({
  destinationDetails,
  collegesList,
  coursesList,
  source,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
  entity,
}) {
  return (
    <Element name="top-universities">
      <div className="relative">
        <section className=" ">
          <div className="  flex flex-col gap-2 mt-5">
            {/* Content */}
            <div className="relative z-10">
              <MotionComponent>
                <SectionMainHeader className="mb-2">
                  Top Universities in {destinationDetails?.countryId?.name}
                </SectionMainHeader>
              </MotionComponent>
              <div className=" border-t border-gray-300"></div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
                  {collegesList.map(
                    (item, index) =>
                      index < 12 && (
                        <UniversityDetailsCard
                          addToSavedPreferences={addToSavedPreferences}
                          removeFromSavedPreferences={
                            removeFromSavedPreferences
                          }
                          item={item}
                          key={index}
                        />
                      )
                  )}
                </div>
                {collegesList?.length >= 12 && (
                  <div className="text-center mb-8">
                    <a
                      href={`/collegesList/${destinationDetails._id}`}
                      className="w-full"
                    >
                      <button
                        type="submit"
                        className={`py-3 px-10 text-base font-semibold mt-4 text-center text-gray-primary rounded-lg hover:bg-gray-primary hover:text-white bg-yellow-primary  focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500`}
                      >
                        View All
                      </button>
                    </a>
                  </div>
                )}
              </motion.div>
            </div>

            <Element name="popular-course">
              <div className="">
                <MotionComponent>
                  <SectionMainHeader className="mb-2">
                    Popular Courses in {destinationDetails?.countryId?.name}
                  </SectionMainHeader>
                </MotionComponent>
                <div className="my-1 border-t border-gray-300"></div>
                <MotionComponent>
                  <PrimaryBodyText className={"mt-4"}>
                    With world-class universities, experienced faculties, and
                    multiple opportunities in different fields, the{" "}
                    {destinationDetails?.countryId?.name} is a top choice among
                    international students. Know all the popular study ABROAED
                    courses of {destinationDetails?.countryId?.name}{" "}
                    universities so you can make the best of your career choice
                  </PrimaryBodyText>
                </MotionComponent>
                <p className="font-semibold  text-[#52525B] text-[22px] mt-4"></p>
                <MotionComponent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {coursesList.map((course, index) => (
                      <CourseCard
                        course={course}
                        key={index}
                        source={source}
                        entity={entity}
                        onAddLead={onAddLead}
                        addToSavedPreferences={addToSavedPreferences}
                        removeFromSavedPreferences={removeFromSavedPreferences}
                      />
                    ))}
                  </div>
                </MotionComponent>
              </div>
            </Element>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default DestinationUniCoursersSection;
