/* eslint-disable react/prop-types */
import { Element } from "react-scroll";

const DestinationScholarshipSection = ({ destinationDetails }) => {
  return (
    <Element name="scholarships">
      <div className="relative ">
        <section className=" dark:bg-gray-900 relative px-7 mx-auto">
          <div className="gap-8 items-center  px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols  lg:px-6">
            <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-10 text-[45px]  font-extrabold text-[#27272A] dark:text-white">
                Scholarships & Financial Aid
              </h2>
              <p className="mb-4 text-[22px] font-semibold text-[#27272A]">
                For Study in {destinationDetails?.countryId?.name}, the amount
                of money available and the type of award varies between
                institutions. Certain research programs may provide up to 100%
                of the tuition fee besides covering a part of your living
                expenditures. Here are some popular government scholarship
                programs you can apply to study in{" "}
                {destinationDetails?.countryId?.name} as an Indian student:
              </p>
            </div>
            <section className=" dark:bg-gray-900  ">
              <div className=" w-full ">
                <div className=" dark:bg-gray-800 relative   overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full   text-left  border-t-2 border-gray-400  dark:text-gray-400">
                      <thead className="text-[22px]  text-[#27272A] font-semibold  border-b-2 border-gray-400 ">
                        <tr>
                          <th scope="col" className="px-4 py-3 ">
                            Name of Scholarship
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
                        {destinationDetails?.scholarships.map((item, index) => (
                          <tr
                            key={index}
                            className="border-b-2 border-gray-400  dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              className="px-4 py-3 font-semibold text-[22px] text-[#27272A]  dark:text-white"
                            >
                              <p

                              >
                                {item.name}
                              </p>
                              {/* <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline cursor-pointer"
                              >
                                {item.name}
                              </a> */}
                            </th>
                            <td className="px-4 py-3 text-base font-normal text-[#27272A] ">{item.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
            <div className="pb-10">
              <p className="mb-4 text-[#27272A] font-normal text-base ">
                If you want to bring down your educational expenses, it is best
                to apply to various scholarships available for Indian students.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default DestinationScholarshipSection;
