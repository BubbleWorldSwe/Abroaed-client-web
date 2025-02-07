import { useEffect, useState } from "react";
import AddTeamMember from "../modals/addTeamMemberModal";
import UpdateTeamMember from "../modals/updateTeamMemberModal";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteTeamRequest,
  fetchTeamsRequest,
} from "../../../redux/actions/teamActions";
import { fetchRolesRequest } from "../../../redux/actions/rolesActions";
import TeamTable from "../tables/teamTable";
import filter_list from "../../../assets/filter_list.png";

function Teams() {
  const dispatch = useDispatch();
  const { teams, totalPages, page } = useSelector((state) => state.team);

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalType, setModalType] = useState("");
  const [editData, setEditData] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const handleOpenAddModal = () => {
    setEditMode(false);
    setModalType("add");
    setSelectedMember(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (member, data) => {
    setDropdownVisible(false);
    setEditMode(true);
    setModalType("edit");
    setSelectedMember(member);
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const handleDelete = (teamId) => {
    dispatch(deleteTeamRequest(teamId));
    setCurrentPage(1);
    dispatch(fetchTeamsRequest(1));
    setDropdownVisible(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      if (!teams.some((item) => item.index === currentPage + 1)) {
        dispatch(fetchTeamsRequest(currentPage + 1));
      }
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      if (!teams.some((item) => item.index === currentPage - 1)) {
        dispatch(fetchTeamsRequest(currentPage - 1));
      }
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleAddSuccess = () => {
    // Reset currentPage to 1 and fetch the updated teams
    setCurrentPage(1);
    dispatch(fetchTeamsRequest(1));
  };

  useEffect(() => {
    if (teams.length === 0) {
      dispatch(fetchTeamsRequest(page));
      setCurrentPage(1);
    }
    dispatch(fetchRolesRequest());
  }, [dispatch, page]);

  return (
    <>
      <AddTeamMember
        isOpen={isModalOpen && modalType === "add"}
        onClose={handleCloseModal}
        editMode={editMode}
        memberToEdit={selectedMember}
        setIsDone={setIsDone}
        onAddSuccess={handleAddSuccess}
      />
      <UpdateTeamMember
        isOpen={isModalOpen && modalType === "edit"}
        onClose={handleCloseModal}
        editMode={editMode}
        memberToEdit={selectedMember}
        data={editData}
      />
      {/*  <ConfirmModal
        isOpen={isDone}
        onClose={() => setIsDone(false)}
        text="Member Added!"
      /> */}
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <section className="py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative sm:rounded-lg">
            <div className="dark:border-gray-700 mx-4">
              <div className="flex justify-between py-3">
                <div className="w-full flex space-y-3 md:space-y-0">
                  <form className="w-full md:max-w-sm flex-1 md:mr-4">
                    <label htmlFor="default-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
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
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Search Teams"
                      />
                    </div>
                  </form>
                  <div className="flex items-center space-x-4">
                    <img src={filter_list} alt="Filter" />
                  </div>
                </div>
                <button
                  onClick={handleOpenAddModal}
                  type="button"
                  className="flex items-center justify-center py-2 px-4 text-sm font-semibold text-gray-700 bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600"
                >
                  <svg
                    className="w-6 h-6 p-1 text-gray-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7 7V5"
                    />
                  </svg>
                  New Team Member
                </button>
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <TeamTable
                teams={teams}
                handleDelete={handleDelete}
                handleOpenEditModal={handleOpenEditModal}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Teams;
