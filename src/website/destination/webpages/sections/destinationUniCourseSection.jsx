/* eslint-disable react/prop-types */
import vectorleftNose from "../../../../assets/vectorleftNose.png"; // Add your blob image here.
// import { courses, universities } from "../../data";
import UniversityDetailsCard from "../../components/destinationUniversityDetailsCard";
import CourseCard from "../../components/destinationCourseCard";
import { Element } from "react-scroll";

function DestinationUniCoursersSection({
  destinationDetails,
  collegesList,
  coursesList,
  source,
  onAddLead,
}) {
  return (
    <Element name="top-universities">
      <div className="relative">
        {/* Blob Background */}
        <section className="px-10 pt-12 mx-auto">
          <div
            className="absolute right-0 top-20 h-full w-1/2 bg-cover bg-no-repeat -z-10"
            style={{
              backgroundImage: `url(${vectorleftNose})`,
            }}
          ></div>
          <div className=" px-4 py-6 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
            {/* Content */}
            <div className="relative z-10">
              <h2 className={`mb-2 text-[45px]  font-extrabold text-gray-primary dark:text-white`}>
                Top Universities in {destinationDetails?.countryId?.name}
              </h2>
              <div className=" border-t border-gray-300"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10">
                {collegesList.map((item, index) => (
                  <UniversityDetailsCard item={item} key={index} />
                ))}
              </div>
            </div>

            <Element name="popular-course">
              <div className=" pt-5 ">
                <h2 className={`mb-2 text-[45px]  font-extrabold text-gray-primary dark:text-white`}>
                  Popular Courses in {destinationDetails?.countryId?.name}
                </h2>
                <div className="my-1 border-t border-gray-300"></div>
                <p className="font-semibold  text-[#52525B] text-[22px] mt-4">
                  With world-class universities, experienced faculties, and
                  multiple opportunities in different fields, the{" "}
                  {destinationDetails?.countryId?.name} is a top choice among
                  international students. Know all the popular study ABROAED
                  courses of {destinationDetails?.countryId?.name} universities
                  so you can make the best of your career choice
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
                  {coursesList.map((course, index) => (
                    <CourseCard
                      course={course}
                      key={index}
                      source={source}
                      onAddLead={onAddLead}
                    />
                  ))}
                </div>
              </div>
            </Element>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default DestinationUniCoursersSection;
