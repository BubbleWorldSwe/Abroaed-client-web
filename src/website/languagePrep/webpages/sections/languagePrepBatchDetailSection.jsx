/* eslint-disable react/no-unescaped-entities */

import { CheckCheck, CheckIcon } from "lucide-react";

function LanguagePrepBatchDetaileSection({ languagePrepsDetails }) {
  return (
    <div className="relative mx-auto px-10">
      <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
        {/* Content */}
        <div className="relative z-10">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Batches
          </h2>
          <div className="my-4 border-t border-gray-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-3 py-10 ">
            {languagePrepsDetails?.batches?.map((data, index) => (
              <div
                key={index}
                className="flex flex-col p-6 mx-auto w-full text-start text-gray-900 bg-white rounded-lg border border-gray-200 shadow-xl dark:border-gray-700 xl:p-8 dark:text-white dark:bg-gray-800"
              >
                <h3 className="mb-4 text-2xl font-semibold">
                  {data.batchName}
                </h3>
                <div className="flex justify-center items-baseline my-4">
                  <span className="mr-2 text-4xl font-bold">₹ {data.fees}</span>
                  {/* <span className="text-gray-500">/month</span> */}
                </div>
                <a
                  href="#"
                  className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-sm rounded-lg text-2xl px-5 py-2.5 text-center dark:focus:ring-primary-900"
                >
                  Enroll Now
                </a>
                <div className="flex justify-between items-baseline mt-5 mb-2 w-9/12 ">
                  <p className="">
                    <strong>Duration :</strong>{" "}
                    <span className="text-gray-500">
                      {data.duration} months
                    </span>
                  </p>
                  <p className="">
                    <strong>Seats:</strong>{" "}
                    <span className="text-gray-500">{data.seats}</span>
                  </p>
                </div>

                <p className="font-semibold text-lg mb-3 mt-2">
                  {" "}
                  Features you'll love{" "}
                </p>

                <ul role="list" className="mb-8 space-y-2 text-left">
                  {data.features?.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckIcon color="green" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguagePrepBatchDetaileSection;
