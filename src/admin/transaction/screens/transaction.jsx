import { useState } from "react";
import filter_list from "../../../assets/filter_list.png"
import { studentPayments } from "../data";
import TransactionTable from "../tables/transactionTable";
import { Download } from "lucide-react";

const Transaction = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col ">
      <section className="py-5   flex-grow">
        <div className="flex flex-col h-screen py-2 mx-auto max-w-screen-2xl  dark:bg-gray-800 relative ">
          <div className=" dark:border-gray-700 py-3 flex justify-between text-center mx-4">
            <div className="w-full  flex  space-y-3 md:space-y-0 md:flex-row ">
              <form className="w-full md:max-w-sm flex-1 md:mr-4">
                <label
                  htmlFor="default-search"
                  className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search Transactions"
                    required=""
                  />

                </div>
              </form>
              <div className="flex items-center space-x-4">
                <img src={filter_list} alt="filterIcon" />
              </div>
            </div>
            <div >
              <button
                className="bg-[#F4F4F5] py-2 border border-[#D4D4D8] rounded  px-3 text-sm flex text-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
          <div className="flex-grow mt-2 overflow-auto bg-white dark:bg-gray-800 px-5">
            <TransactionTable
              studentPayments={studentPayments}
              dropdownVisible={dropdownVisible}
              setDropdownVisible={setDropdownVisible}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transaction;