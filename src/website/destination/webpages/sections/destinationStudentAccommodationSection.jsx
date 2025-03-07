/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import AccommodationCard from "../../../comman/components/accommodationCard";

const DestinationStudentAccommodationsSection = ({
  accommodationList,
  destinationDetails,
  onAddLead,
  source,
}) => {
  return (
    <Element name="accommodation">
      <div className="relative  px-10 mx-auto">
        <section className=" dark:bg-gray-900 relative">
          <div className="gap-8 items-center py-2 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols  lg:px-6">
            <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className=" text-4xl  font-extrabold text-gray-900 dark:text-white">
                Popular Student Accommodations
              </h2>
              <div className="my-5 border-t border-gray-300"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {accommodationList.slice(0, 4).map((item, index) => (
                <AccommodationCard
                  item={item}
                  key={index}
                  onAddLead={onAddLead}
                  source={source}
                />
              ))}
            </div>
            <div className="text-center ">
              <a
                href={`/accomodation/${destinationDetails._id}`}
                className="w-full"
              >
                <button
                  type="submit"
                  className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
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
