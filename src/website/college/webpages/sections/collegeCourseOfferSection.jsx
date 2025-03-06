/* eslint-disable react/prop-types */
import CollegeCourseCard from "../../components/collegeCourseCard";

const CollegeCourseOfferSection = ({ collegeDetails }) => {
  return (
    <div className="relative">
      {/* Blob Background */}
      <section className="px-10 mx-auto">
        <div className=" px-4  flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
          {/* Content */}
          <div className="relative z-10 mt-10">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Course Offerings
            </h2>
            <div className="my-1 border-t border-gray-300"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
              {collegeDetails?.courses?.map((course, index) => (
                <CollegeCourseCard course={course} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeCourseOfferSection;
