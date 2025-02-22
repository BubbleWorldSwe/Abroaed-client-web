/* eslint-disable react/no-unescaped-entities */

function LanguagePrepAbout({ languagePrepsDetails }) {
  return (
    <div className="relative z-10 mx-auto px-10">
      <div className="mx-auto  max-w-screen-2xl mt-8 py-4 flex flex-col gap-6">
        <header className="mb-4 lg:mb-6 not-format">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            About {languagePrepsDetails?.productName}
          </h2>
          <p className="mt-3 font-inter text-lg text-gray-800">
            {languagePrepsDetails?.about}
          </p>
        </header>
        <div className="relative overflow-x-auto ">
          <div className="flex  items-center justify-center  mx-auto ">
            <table className="w-full max-w-4xl text-sm text-left border-4 rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-600 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Heading
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Language
                  </th>
                  <td className="px-6 py-4">
                    {languagePrepsDetails?.language}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Exam Types
                  </th>
                  <td className="px-6 py-4">
                    {languagePrepsDetails?.exampTypes}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Exam Components
                  </th>
                  <td className="px-6 py-4">
                    {languagePrepsDetails?.exampComponents}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="m-0 p-0" colSpan={3}>
                    <nav
                      className="bg-[#E4E4E7]  w-full  md:space-y-0 p-4"
                      aria-label="Table navigation"
                    ></nav>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/*  Delete this record  */}

          <div className="flex flex-col gap-6 mt-8">
            <header className="mb-4 lg:mb-6 not-format">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Exam Types
              </h2>
              <p className="mt-3 font-inter text-lg text-gray-700">
                {languagePrepsDetails?.exampTypes}
              </p>
            </header>
            <header className="mb-4 lg:mb-6 not-format">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                Exam Components
              </h2>
              <p className="mt-3 font-inter text-lg text-gray-500">
                {languagePrepsDetails?.exampComponents}
              </p>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguagePrepAbout;
