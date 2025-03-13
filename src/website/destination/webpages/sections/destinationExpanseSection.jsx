import { Element } from "react-scroll";

/* eslint-disable react/prop-types */
const DestinationExpansesSection = ({ destinationDetails }) => {
  return (
    <Element name="expense">
      <div className="relative">
        <section className=" dark:bg-gray-900 relative px-7 mx-auto">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-16 lg:px-6">
            <div className="">
              <h2 className="mb-4 text-[45px]  font-extrabold text-[#27272A] dark:text-white">
                Expenses
              </h2>
              <p className=" text-[#27272A] font-semibold text-[22px]">
                Here’s a list of the minimum amount you should expect for living
                expenses in the {destinationDetails?.countryId?.name}:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 ">
              <div>
                <h2 className="mb-4 text-[32px]  font-bold text-[#27272A] dark:text-white">
                  Cost of Studying
                </h2>
                <p className="mb-1 text-[22px] font-semibold w-10/12 text-[#52525B] ">
                  Here’s a list of the minimum amount you should expect for
                  studying in the {destinationDetails?.countryId?.name}:
                </p>
                <section className=" dark:bg-gray-900 py-3 sm:py-5">
                  <div className=" w-11/12 ">
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
                                    className="border-b text-base text-[#27272A] font-normal  dark:border-gray-700"
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
              <div>
                <h2 className="mb-4 text-[32px]  font-bold text-[#27272A] dark:text-white">
                  Cost of Living
                </h2>
                <p className=" text-[#27272A] font-semibold text-[22px]">
                  Here’s the basic cost of living.
                  <br /> <br />
                </p>
                <section className=" dark:bg-gray-900 py-3 sm:py-5">
                  <div className=" w-11/12 ">
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
                                    className="border-b text-base text-[#27272A] font-normal  dark:border-gray-700"
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

              <div></div>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default DestinationExpansesSection;
