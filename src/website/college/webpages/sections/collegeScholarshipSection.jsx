/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

const CollegeScholarshipSection = ({ collegeDetails }) => {
  return (
    <div className="relative ">
      <section className=" dark:bg-gray-900 relative ">
        <div className="">
          <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
            <SectionMainHeader className={`mb-2 md:mb-10`}>
              Scholarships & Financial Aid
            </SectionMainHeader>
            <PrimaryBodyText className={`mb-4`}>
              For Study in {collegeDetails?.destinationId?.countryId?.name}, the
              amount of money available and the type of award varies between
              institutions. Certain research programs may provide up to 100% of
              the tuition fee besides covering a part of your living
              expenditures. Here are some popular government scholarship
              programs you can apply to study in{" "}
              {collegeDetails?.destinationId?.countryId?.name} as an Indian
              student:
            </PrimaryBodyText>
          </div>
          <section className=" dark:bg-gray-900  ">
            <div className=" w-full ">
              <div className=" dark:bg-gray-800 relative   overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full   text-left  border-t-2 border-gray-400  dark:text-gray-400">
                    <thead
                      className={`text-[22px]  text-gray-primary font-semibold  border-b-2 border-gray-400 `}
                    >
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Description
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {collegeDetails?.scholarships?.map((item, index) => (
                        <tr
                          key={index}
                          className="border-b-2 border-gray-400  dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-4 py-3 font-semibold text-[18px] text-gray-primary dark:text-white"
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-yellow-500 hover:underline"
                            >
                              {item.name}
                            </a>
                          </th>

                          <td
                            className={`px-4 py-3 text-base font-normal text-gray-primary`}
                          >
                            {item.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <div>
            <PrimaryBodyText className="pt-4">
              If you want to bring down your educational expenses, it is best to
              apply to various scholarships available for Indian students.
            </PrimaryBodyText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeScholarshipSection;
