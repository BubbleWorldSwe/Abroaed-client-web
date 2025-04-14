/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { CheckIcon } from "lucide-react";
import { useState } from "react";
import LoginModal from "../../../comman/modals/loginModal";
import { useSelector } from "react-redux";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

function TestPrepBatchDetaileSection({
  testPrepsDetails,
  onClickPayment,
  disabledPayment
}) {
  const [openModal, setOpenModal] = useState(false);
  const { studentToken } = useSelector((state) => state.auth);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <LoginModal isOpen={openModal} onClose={handleClose} />
      <div className="relative">
        <div className="   flex flex-col gap-6">
          {/* Content */}
          <div className="relative z-10">
            <SectionMainHeader
              className="mb-2"
            >
              Batches
            </SectionMainHeader>
            <div className=" border-t border-gray-300"></div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-3 pt-10 ">
              {testPrepsDetails?.batches?.map((data, index) => (
                <div
                  key={index}
                  className="flex hover:scale-[1.01] transition-all ease-in-out delay-100 flex-col px-8 mx-auto w-full text-start text-gray-900 bg-white rounded-lg border border-gray-200 shadow-xl dark:border-gray-700 py-4  "
                >
                  <h3 className="mb-2 text-[32px] font-bold">
                    {data.batchName}
                  </h3>
                  <div className="flex justify-center items-baseline my-4">
                    <span className="mr-2 text-[32px] font-bold">
                      ₹ {data.fees}
                    </span>
                    {/* <span className="text-gray-500">/month</span> */}
                  </div>
                  <button
                    onClick={() =>
                      studentToken ? onClickPayment(data) : setOpenModal(true)
                    }
                    className={`bg-yellow-primary hover:bg-primary-500 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-[22px] px-5 py-2.5 text-center`}
                  >
                    Enroll Now
                  </button>
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

                  <p className="font-semibold text-base mb-3 mt-2">
                    {" "}
                    Features you'll love{" "}
                  </p>

                  <ul role="list" className="mb-8 space-y-2 text-left">
                    {data.features?.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckIcon color={"gray-primary"} size={14} />
                        <span className="text-[12px] text-[#52525B] font-normal ">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPrepBatchDetaileSection;
