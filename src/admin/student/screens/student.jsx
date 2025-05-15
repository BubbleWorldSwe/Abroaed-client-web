import { useEffect, useState } from "react";
import filter_list from "../../../assets/filter_list.png";
import StudentTable from "../tables/studentTable";

// import AddStudentModal from "../modals/addStudentModal";
import ServiceTypePlanStudent from "../modals/serviceTypePlanStudentModal";
import AssignTeamMemberStudentModal from "../modals/assignTeamMemberStudentModal";
import ConfirmModal from "../../../commons/modal/confirmModal";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllDestinationsRequest } from "../../../redux/actions/destinationActions";
import {
  editStudentLeadRequest,
  fetchStudentsRequest,
  searchStudentsRequest,
} from "../../../redux/actions/studentsActions";

import { getTeamsByMembers } from "../../../api/teamsApi";
import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityLoader from "../../../commons/components/loader/activityLoader";

function Student() {
  const location = useLocation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [next, setNext] = useState(false);
  const [done, setDone] = useState(false);
  const [modalType, setModalType] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [showTeamModal, setshowTeamModal] = useState(false);

  const { students, totalPages, loading } = useSelector(
    (state) => state.students
  );
  const [query, setQuery] = useState("");

  const [rolesList, setRolesList] = useState([]);

  const [membersList, setMembersList] = useState([]);

  const handleOpenAddModal = (modalType) => {
    setIsAddModalOpen(true);
    setModalType(modalType);
    setDropdownVisible(false);
  };

  async function fetchData() {
    try {
      dispatch(fetchAllDestinationsRequest());

      const list = await getTeamsByMembers();

      if (list.status === 200) {
        setRolesList(list.data);
      }
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

  async function onUpdate(data, id) {
    try {
      console.log(data, id);
      dispatch(editStudentLeadRequest(id, data));

      setshowTeamModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAssignTeamMember = (member) => {
    setSelectedMember(member);
    setshowTeamModal(true);
    setDropdownVisible(false);
  };

  const handleSearch = async (value) => {
    try {
      setQuery(value);

      const trimmedValue = value.trim();

      if (trimmedValue === "") {
        setCurrentPage(1);
        dispatch(fetchStudentsRequest(1));
        return;
      }

      if (trimmedValue.length < 2) {
        toast.error("Please enter at least 2 characters to search.");
        return;
      }

      dispatch(searchStudentsRequest(trimmedValue));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (students?.length === 0) {
      console.log("fetchStudentsRequest");
      dispatch(fetchStudentsRequest(currentPage));
    }
  }, [dispatch, currentPage, students]);

  useEffect(() => {
    dispatch(fetchStudentsRequest(currentPage));
  }, [location.pathname]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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

      {showTeamModal && (
        <AssignTeamMemberStudentModal
          leadId={selectedMember?._id}
          onClose={() => setshowTeamModal(false)}
          filledData={{ assignTeamMembers: selectedMember?.assignTeamMembers }}
          rolesList={rolesList}
          membersList={membersList}
          setMembersList={setMembersList}
          onUpdate={onUpdate}
        />
      )}
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className=" py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
            <div className=" dark:border-gray-700 mx-4">
              <div className="flex justify-between  py-3">
                <div className="w-full  flex  space-y-1 md:space-y-0  ">
                  <form className="w-full md:max-w-sm flex-1 md:mr-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search size={16} />
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search Leads"
                        required=""
                        value={query}
                        onChange={(e) => {
                          const value = e.target.value;
                          setQuery(value);
                          if (value.trim() === "") {
                            handleSearch("");
                          }
                        }}
                      />
                    </div>
                  </form>
                  <div
                    className="bg-[#EDBD05] p-2 rounded-md cursor-pointer"
                    onClick={() => handleSearch(query)} // pass query on click
                  >
                    <Search color="black" size={22} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <StudentTable
                handleAssignTeamMember={handleAssignTeamMember}
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
      <ActivityLoader loading={loading} />
    </>
  );
}

export default Student;
