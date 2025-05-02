import { useEffect, useState } from "react";

import TransactionTable from "../tables/transactionTable";

import AddTransactionModal from "../modals/addTransactionModal";
import { AddButton } from "../../../commons/components/buttons/addButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransactionRequest,
  deleteTransactionRequest,
  fetchTransactionsRequest,
  editTransactionRequest,
} from "../../../redux/actions/transactionActions";
import { getAllStudents } from "../../../api/studentsApi";

const Transaction = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { transactions, totalPages } = useSelector(
    (state) => state.transactions
  );

  const [students, setStudents] = useState([]);

  const handleOpenModal = (transaction = null) => {
    setEditData({
      date: transaction?.date,
      user: transaction?.user?._id,
      amount: transaction?.amount,
      mode: transaction?.mode,
      description: transaction?.description,
      _id: transaction?._id,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditData(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = transactions.some(
        (item) => item.index === currentPage + 1
      );

      if (!pageExists) {
        dispatch(fetchTransactionsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = transactions.some(
        (item) => item.index === currentPage - 1
      );

      if (!pageExists) {
        dispatch(fetchTransactionsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleTransaction = (data) => {
    // debugger;
    try {
      if (editData && data?._id) {
        const { _id, ...transactionData } = data;
        dispatch(editTransactionRequest(editData?._id, transactionData));
      } else {
        dispatch(addTransactionRequest(data));
      }

      dispatch(fetchTransactionsRequest(1));
      setCurrentPage(1);

      handleCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTransactionRequest(id));
    setCurrentPage(1);
    dispatch(fetchTransactionsRequest(1));
  };

  async function fetchData() {
    try {
      const list = await getAllStudents();

      if (list.status === 200) {
        setStudents(list?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (transactions?.length === 0) {
      dispatch(fetchTransactionsRequest(currentPage));
    }

    fetchData();
  }, [dispatch, transactions, currentPage]);

  return (
    <>
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleTransaction}
        initialData={editData}
        studentsList={students}
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col ">
        <section className="py-5 flex-grow">
          <div className="flex flex-col h-screen py-2 mx-auto max-w-screen-2xl dark:bg-gray-800 relative ">
            <div className="dark:border-gray-700 py-3 flex justify-between text-center mx-4">
              <div className="w-full flex space-y-3 md:space-y-0 md:flex-row ">
                {/*  <form className="w-full md:max-w-sm flex-1 md:mr-4">
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
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search Transactions"
                      required=""
                    />
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <img src={filter_list} alt="filterIcon" />
                </div> */}
              </div>
              {isWriteAccess && (
                <AddButton
                  onClick={() => handleOpenModal()}
                  label={"Add Transaction"}
                />
              )}
            </div>
            <div className="flex-grow mt-2 overflow-auto bg-white dark:bg-gray-800 px-5">
              <TransactionTable
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleDelete={handleDelete}
                handleEdit={handleOpenModal}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Transaction;
