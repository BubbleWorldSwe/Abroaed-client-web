import { testData } from "../data";
import TestPrepTable from "../tables/testPrepTable";
import filter_list from "../../../assets/filter_list.png";
import { useEffect, useState } from "react";
import AddProductTestPrepModal from "../modals/addProductTestPrepModal";
import ConfirmModal from "../../../commons/modal/confirmModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addTestPrepRequest,
  deleteTestPrepRequest,
  fetchTestPrepsRequest,
} from "../../../redux/actions/testPrepsActions";
import { AddButton } from "../../../commons/components/buttons/addButton";

const TestPrep = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { isWriteAccess } = useSelector((state) => state.auth);
  const { testPreps, totalPages } = useSelector((state) => state.testPreps);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDone, setIsDone] = useState(false);
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddTestPrep = (data) => {
    //  setIsAddModalOpen(false);
    console.log("handleAddTestPrep");
    console.log(data);

    dispatch(addTestPrepRequest(data));
    setCurrentPage(1);
    dispatch(fetchTestPrepsRequest(1));
    handleCloseAddModal();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = testPreps.some(
        (item) => item.index === currentPage + 1
      );

      if (!pageExists) {
        dispatch(fetchTestPrepsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = testPreps.some(
        (item) => item.index === currentPage - 1
      );

      if (!pageExists) {
        dispatch(fetchTestPrepsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleDelete = (id) => {
    console.log("handleDelete " + id);
    dispatch(deleteTestPrepRequest(id));
    setCurrentPage(1);
    dispatch(fetchTestPrepsRequest(1));
  };

  useEffect(() => {
    if (testPreps?.length === 0) {
      console.log("fetchTestPrepsRequest");
      dispatch(fetchTestPrepsRequest(currentPage));
    }
  }, [dispatch, testPreps, currentPage]);

  return (
    <>
      <AddProductTestPrepModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        setIsDone={setIsDone}
        onAddTestPreps={handleAddTestPrep}
      />
      <ConfirmModal
        isOpen={isDone}
        onClose={() => setIsDone(false)}
        text="Product Added!"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col ">
        <section className=" py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
            <div className=" dark:border-gray-700 mx-4">
              <div className="flex justify-between  py-3">
                <div className="w-full  flex  space-y-3 md:space-y-0  ">
                  {/*    <form className="w-full md:max-w-sm flex-1 md:mr-4">
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
                        placeholder="Search Teams"
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
                    onClick={handleOpenAddModal}
                    label={"New Product"}
                  />
                )}
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <TestPrepTable
                tests={testData}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestPrep;
