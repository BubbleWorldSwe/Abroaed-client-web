/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import AccommodationCard from "../../../comman/components/accommodationCard";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

const DestinationStudentAccommodationsSection = ({
  accommodationList,
  destinationDetails,
  onAddLead,
  source,
  addToSavedPreferences,
  removeFromSavedPreferences,
}) => {
  return (
    <Element name="accommodation">
      <div className="relative ">
        <section className=" dark:bg-gray-900 relative">
          <div className="">
            <div className="font  text-gray-500  dark:text-gray-400">
              <SectionMainHeader className="mb-6 md:mb-10">
                Popular Student Accommodations
              </SectionMainHeader>
              <div className="my-5 border-t-2 border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {accommodationList.slice(0, 4).map((item, index) => (
                <AccommodationCard
                  item={item}
                  key={index}
                  onAddLead={onAddLead}
                  source={source}
                  addToSavedPreferences={addToSavedPreferences}
                  removeFromSavedPreferences={removeFromSavedPreferences}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href={`/accomodation/${destinationDetails._id}`}
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
          </div>
        </section>
      </div>
    </Element>
  );
};

export default DestinationStudentAccommodationsSection;
