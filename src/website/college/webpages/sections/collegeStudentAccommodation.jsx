/* eslint-disable react/prop-types */
import AccommodationCard from "../../../comman/components/accommodationCard";
import { MotionComponent } from "../../../comman/components/motionComponent";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const CollegeStudentAccommodation = ({
  accommodationList,
  source,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
  entity,
}) => {
  return (
    <>
      <div className="relative">
        <section className=" dark:bg-gray-900 relative">
          <div className="">
            <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
              <MotionComponent>
                <SectionMainHeader className={`mb-5`}>
                  Popular Student Accommodations
                </SectionMainHeader>
                <div className="my-2 border-t border-gray-300"></div>
              </MotionComponent>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-6 md:pt-10">
                {accommodationList?.slice(0, 4).map((item, index) => (
                  <AccommodationCard
                    item={item}
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
            <div className="text-center mt-2">
              <button
                type="submit"
                className={`py-3 px-10 text-base font-semibold mt-4 text-center text-gray-primary rounded-lg bg-yellow-primary hover:bg-gray-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500`}
              >
                View All
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CollegeStudentAccommodation;
