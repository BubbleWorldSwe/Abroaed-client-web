import { scholarships } from "../../data";

const CollegeScholarshipSection = ({ collegeDetails }) => {
  return (
    <div className="relative z-10">
      <section className=" dark:bg-gray-900 relative px-10 mx-auto">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-16 lg:px-6">
          <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 dark:text-white">
              Scholarships & Financial Aid
            </h2>
            <p className="mb-4 text-black ">
              For Study in {collegeDetails?.destinationId?.countryId?.name}, the
              amount of money available and the type of award varies between
              institutions. Certain research programs may provide up to 100% of
              the tuition fee besides covering a part of your living
              expenditures. Here are some popular government scholarship
              programs you can apply to study in{" "}
              {collegeDetails?.destinationId?.countryId?.name} as an Indian
              student:
            </p>
          </div>
          <section className=" dark:bg-gray-900  ">
            <div className=" w-full ">
              <div className=" dark:bg-gray-800 relative   overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full  text-sm text-left text-gray-500 border-t-2 border-gray-400  dark:text-gray-400">
                    <thead className="text-xs  text-gray-700 uppercase border-b-2 border-gray-400 dark:bg-gray-700 dark:text-gray-400">
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
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.name}
                          </th>
                          <td className="px-4 py-3">{item.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <div>
            <p className="mb-4 text-black ">
              If you want to bring down your educational expenses, it is best to
              apply to various scholarships available for Indian students.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeScholarshipSection;
