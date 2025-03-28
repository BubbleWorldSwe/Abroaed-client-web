/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";


const CollegeScholarshipSection = ({ collegeDetails }) => {
  return (
    <div className="relative py-14">
      <section className=" dark:bg-gray-900 relative px-7 mx-auto">
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols  lg:px-6">
          <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
            <SectionMainHeader className={`mb-10`}>
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
                    <thead className={`text-[22px]  text-gray-primary font-semibold  border-b-2 border-gray-400 `}>
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
                            className={`px-4 py-3 font-semibold text-[18px] text-gray-primary  dark:text-white`}
                          >
                            {item.name}
                          </th>
                          <td className={`px-4 py-3 text-base font-normal text-gray-primary`}>{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <div>
            <PrimaryBodyText className="mb-4">
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
