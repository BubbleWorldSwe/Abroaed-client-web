import { accommodations } from "../../data";
import PathwaysAccommodationCard from "../../components/pathwaysAccommodationCard"
import SectionMainHeader from "../../../../styleComponents/sectionMainHeader";

const PathwaysProgramStudentAccommodationSection = () => {
  return (
    <div className="relative py-10  px-10 mx-auto">
      <section className=" dark:bg-gray-900 relative">
        <div className="gap-8 items-center py-2 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols  lg:px-6">
          <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
            <SectionMainHeader className={`mb-10`}>
              Popular Student Accommodations
            </SectionMainHeader>
            <div className="my-5 border-t-2 border-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {accommodations.slice(0, 4).map((item, index) => (
              <PathwaysAccommodationCard
                item={item}
                key={index}
                onAddLead={() => { }}
                source={'New Delhi'}
              />
            ))}
            <div></div>
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
            >
              View All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathwaysProgramStudentAccommodationSection;
