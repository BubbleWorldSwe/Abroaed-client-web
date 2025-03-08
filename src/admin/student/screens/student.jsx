import { useEffect, useState } from "react";
import filter_list from "../../../assets/filter_list.png";
import StudentTable from "../tables/studentTable";
import { studentsData } from "../data";
// import AddStudentModal from "../modals/addStudentModal";
import ServiceTypePlanStudent from "../modals/serviceTypePlanStudentModal";
import AssignTeamMemberStudentModal from "../modals/assignTeamMemberStudentModal";
import ConfirmModal from "../../../commons/modal/confirmModal";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllDestinationsRequest } from "../../../redux/actions/destinationActions";
import { fetchStudentsRequest } from "../../../redux/actions/studentsActions";

function Student() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [next, setNext] = useState(false);
  const [done, setDone] = useState(false);
  const [modalType, setModalType] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { students, totalPages } = useSelector((state) => state.students);

  console.log(students);

  const handleOpenAddModal = (modalType) => {
    setIsAddModalOpen(true);
    setModalType(modalType);
    setDropdownVisible(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  async function fetchData() {
    try {
      dispatch(fetchAllDestinationsRequest());
    } catch (error) {
      console.log(error);
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = students.some(
        (item) => item.index === currentPage + 1
      );

      if (!pageExists) {
        dispatch(fetchStudentsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = students.some(
        (item) => item.index === currentPage - 1
      );

      if (!pageExists) {
        dispatch(fetchStudentsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (students?.length === 0) {
      console.log("fetchStudentsRequest");
      dispatch(fetchStudentsRequest(currentPage));
    }
    // fetchData();
  }, [dispatch, students, currentPage]);

  return (
    <>
      {/* <AddStudentModal
        isOpen={isAddModalOpen && modalType === "add"}
        onClose={handleCloseAddModal}
        setNext={setNext}
      /> */}
      <ServiceTypePlanStudent
        isOpen={next}
        setIsOpen={setNext}
        onClose={() => setNext(false)}
        setDone={setDone}
        setIsAddModalOpen={setIsAddModalOpen}
      />
      <ConfirmModal
        isOpen={done}
        onClose={() => setDone(false)}
        text={modalType === "add" ? "Student Added!" : "Team Assigned!"}
      />
      <AssignTeamMemberStudentModal
        isOpen={isAddModalOpen && modalType === "assign"}
        onClose={handleCloseAddModal}
        setDone={setDone}
      />
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className=" py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
            <div className=" dark:border-gray-700 mx-4">
              <div className="flex justify-between  py-3">
                <div className="w-full  flex  space-y-3 md:space-y-0  ">
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
                        placeholder="Search Teams"
                        required=""
                      />
                    </div>
                  </form>
                  <div className="flex items-center space-x-4">
                    <img src={filter_list} alt="filterIcon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <StudentTable
                Students={studentsData}
                handleOpenAddModal={handleOpenAddModal}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
                currentPage={currentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Student;
