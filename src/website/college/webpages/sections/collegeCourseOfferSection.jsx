/* eslint-disable react/prop-types */
import { MotionComponent } from "../../../comman/components/motionComponent";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import CollegeCourseCard from "../../components/collegeCourseCard";
import { motion } from "framer-motion";

const CollegeCourseOfferSection = ({
  collegeDetails,
  source,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
  entity,
}) => {
  return (
    <div className="relative">
      {/* Blob Background */}
      <section className="">
        <div className="">
          <MotionComponent>
            <SectionMainHeader>Course Offerings</SectionMainHeader>
            <div className="my-1 border-t border-gray-300"></div>
          </MotionComponent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:pt-10 pt-6">
              {collegeDetails?.courses?.map((course, index) => (
                <CollegeCourseCard
                  course={course}
                  key={index}
                  source={source}
                  onAddLead={onAddLead}
                  addToSavedPreferences={addToSavedPreferences}
                  removeFromSavedPreferences={removeFromSavedPreferences}
                  entity={entity}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollegeCourseOfferSection;
