import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExpensesDestModal from "../../../Components/Modals/ExpensesDestModal";

function ExpensesDest() {
  const expensesSection = {
    content: [
      {
        AvgTutionFee: 15000, // Average tuition fee in USD
        AvgRent: 800, // Average monthly rent in USD
        AvgFoodExpense: 300, // Average food expenses per month
        AvgTransportExpense: 100, // Average transportation cost per month
        MiscExpense: 200, // Miscellaneous expenses
      },
    ],
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null); // Data to be edited

  const handleOpenModal = (data = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditData(null);
    setIsModalOpen(false);
  };

  const {
    AvgTutionFee,
    AvgRent,
    AvgFoodExpense,
    AvgTransportExpense,
    MiscExpense,
  } = expensesSection.content[0] || {};

  return (
    <div className=" bg-white   dark:border-gray-700 dark:bg-gray-800">


      {/* {expensesSection.content.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No content added</p>
      ) : ( */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { key: "Average Tuition Fee(per year)", value: AvgTutionFee },
          { key: "Average Rental Expenses (per month)", value: AvgRent },
          { key: "Average Food Expense", value: AvgFoodExpense },
          { key: "Average Transport Costs (per month)", value: AvgTransportExpense },
          { key: "Misc. Expenses", value: MiscExpense },
        ].map((item, index) => (
          <div key={index} className="text-left">
            <p className="text-base font-semibold  text-gray-700 dark:text-gray-400">
              {item.key}
            </p>
            <p className="text-sm font-medium text-gray-600 dark:text-white">
              {item.value || "N/A"}
            </p>
          </div>
        ))}
      </div>
      {/* ) */}
      {/* } */}
      {/* <div className="flex items-center gap-4 mt-6">
        <button
          type="button"
          onClick={() => handleOpenModal(expensesSection.content[0])}
          className="inline-flex text-sm items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
        >
          <svg
            className="mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
            />
          </svg>
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleOpenModal()}
          className="mt-4 py-2 px-3 text-xs font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add
        </button>
      </div> */}
      {/* {isModalOpen && (
        <ExpensesDestModal
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          editData={editData}
        />
      )} */}
    </div>
  );
}

export default ExpensesDest;
