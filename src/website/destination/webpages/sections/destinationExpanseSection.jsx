import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";

/* eslint-disable react/prop-types */
const DestinationExpansesSection = ({ destinationDetails }) => {
  return (
    <Element name="expense">
      <div className="relative">
        <section className=" dark:bg-gray-900 relative ">
          <div className=" ">
            <div className="">
              <SectionMainHeader
                className="mb-2"
              >
                Expenses
              </SectionMainHeader>

              <PrimaryBodyText
                className={'font-semibold'}
                style={{ fontSize: '18px' }}
              >
                Here’s a list of the minimum amount you should expect for living
                expenses in the {destinationDetails?.countryId?.name}:
              </PrimaryBodyText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-6 ">
              <div className="">
                <SecondaryTitle
                  className="mb-2"
                >
                  Cost of Studying
                </SecondaryTitle>
                <PrimaryBodyText >
                  Here’s a list of the minimum amount you should expect for
                  studying in the {destinationDetails?.countryId?.name}:
                </PrimaryBodyText>
                <p className="mb-1 text-[18px] font-semibold w-10/12 text-[#52525B] ">

                </p>
                <section className="  pt-6">
                  <div className=" w-full">
                    <div className=" dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full bg-white  text-sm text-left text-gray-500 border-4 border-[#E4E4E7] dark:text-gray-400">
                          <thead className="text-base  text-[#71717A] font-bold  bg-[#E4E4E7] dark:bg-gray-700 ">
                            <tr>
                              <th scope="col" className="px-4 py-3">
                                Degree Type
                              </th>
                              <th scope="col" className="px-4 py-3">
                                Average Annual Fees (in{" "}
                                {destinationDetails?.countryId?.currency})
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {destinationDetails?.expenses?.map(
                              (data, i) =>
                                i < 3 && (
                                  <tr
                                    key={i}
                                    className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                  >
                                    <th
                                      scope="row"
                                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                      {data.label}
                                    </th>
                                    <td className="px-4 py-3"> {data.value}</td>
                                  </tr>
                                )
                            )}
                          </tbody>
                        </table>
                        <nav
                          className="bg-[#E4E4E7] md:items-center space-y-3 md:space-y-0 p-4"
                          aria-label="Table navigation"
                        ></nav>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div >
                <SecondaryTitle
                  className="mb-4"
                >
                  Cost of Living
                </SecondaryTitle>
                <PrimaryBodyText >
                  Here’s the basic cost of living:
                </PrimaryBodyText>
                <section className=" dark:bg-gray-900 py-3 sm:py-5">
                  <div className="">
                    <div className=" dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full bg-white  text-sm text-left text-gray-500 border-4 border-[#E4E4E7] dark:text-gray-400">
                          <thead className="text-base  text-[#71717A] font-bold  bg-[#E4E4E7] dark:bg-gray-700 ">
                            <tr>
                              <th scope="col" className="px-4 py-3">
                                Heading
                              </th>
                              <th scope="col" className="px-4 py-3">
                                Monthly Costs
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {destinationDetails?.expenses?.map(
                              (data, i) =>
                                i >= 3 && (
                                  <tr
                                    key={i}
                                    className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                  >
                                    <th
                                      scope="row"
                                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                      {data.label}
                                    </th>
                                    <td className="px-4 py-3"> {data.value}</td>
                                  </tr>
                                )
                            )}
                          </tbody>
                        </table>
                        <nav
                          className="bg-[#E4E4E7] md:items-center space-y-3 md:space-y-0 p-4"
                          aria-label="Table navigation"
                        ></nav>
                      </div>
                    </div>
                  </div>
                </section>
              </div>


            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default DestinationExpansesSection;
