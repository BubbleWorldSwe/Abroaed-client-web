/* eslint-disable react/prop-types */
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import CollegeCourseCard from "../../components/collegeCourseCard";

const CollegeCourseOfferSection = ({
  collegeDetails,
  source,
  onAddLead,
  addToSavedPreferences,
  removeFromSavedPreferences,
}) => {
  return (
    <div className="relative">
      {/* Blob Background */}
      <section className="">
        <div className="">
          <SectionMainHeader>
            Course Offerings
          </SectionMainHeader>
          <div className="my-1 border-t border-gray-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:pt-10 pt-6">
            {collegeDetails?.courses?.map((course, index) => (
              <CollegeCourseCard
                course={course}
                key={index}
                source={source}
                onAddLead={onAddLead}
                addToSavedPreferences={addToSavedPreferences}
                removeFromSavedPreferences={removeFromSavedPreferences}
              />
            ))}
          </div>
        </div>
      </section >
    </div >
  );
};

export default CollegeCourseOfferSection;
