
const StudentLangPrep = () => {
    return (
        <div className="bg-white dark:bg-gray-900 flex flex-col shadow-lg  p-5 mb-3 ">
            <div className="flex py-2 flex-col  mx-auto w-full bg-white dark:bg-gray-800 relative  sm:rounded-lg">
                <h2 className="text-2xl py-2 font-semibold  mb-3">Language/ Test Preps</h2>
                <div
                    className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800  shadow rounded"
                >
                    <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4"></th>
                                <th scope="col" className="px-4 py-3 min-w-[14rem]">
                                    Type
                                </th>
                                <th scope="col" className="px-4 py-3 min-w-[10rem]">
                                    Name
                                </th>
                                <th scope="col" className="px-4 py-3 min-w-[7rem]">
                                    Batch Name                                        </th>

                                <th scope="col" className="px-4 py-3 min-w-[7rem]">
                                    Mode
                                </th>
                                <th scope="col" className="px-4 py-3 min-w-[7rem]">
                                    Batch Duration
                                </th>
                                <th scope="col" className="px-4 py-3 min-w-[7rem]">
                                    Enrollment Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2].map((member, index) => (
                                <tr
                                    key={index}
                                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <td className="px-4 py-3 w-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                onClick="event.stopPropagation()"
                                                className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="checkbox-table-search-1"
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th

                                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                                    >
                                        Language Prep
                                    </th>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        French
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Starter Batch
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Online
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        3 months
                                    </td>
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        DD/MM/YYYY
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-gray-500 text-sm py-2 text-center mt-2">
                        Showing 20 results
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StudentLangPrep