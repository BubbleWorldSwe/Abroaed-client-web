import { useEffect, useState } from "react";
import AddTeamMember from "../modals/addTeamMemberModal";
import UpdateTeamMember from "../modals/updateTeamMemberModal";

import { useDispatch, useSelector } from "react-redux";
import {
  addTeamRequest,
  deleteTeamRequest,
  editTeamRequest,
  fetchTeamsRequest,
} from "../../../redux/actions/teamActions";
import { fetchRolesRequest } from "../../../redux/actions/rolesActions";
import TeamTable from "../tables/teamTable";
import filter_list from "../../../assets/filter_list.png";
import { AddButton } from "../../../commons/components/buttons/addButton";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

function Teams() {
  const dispatch = useDispatch();
  const { teams, totalPages, page } = useSelector((state) => state.team);

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const [modalType, setModalType] = useState("");
  const [editData, setEditData] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const handleOpenAddModal = () => {
    setModalType("add");
    setIsModalOpen(true);
  };

  const handleOpenEditModal = () => {
    setModalType("edit");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (teamId) => {
    dispatch(deleteTeamRequest(teamId));
    setCurrentPage(1);
    dispatch(fetchTeamsRequest(1));
    setDropdownVisible(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = teams.some((item) => item.index === currentPage + 1);

      if (!pageExists) {
        dispatch(fetchTeamsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = teams.some((item) => item.index === currentPage - 1);

      if (!pageExists) {
        dispatch(fetchTeamsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleAddTeam = (data) => {
    dispatch(addTeamRequest(data));
    // Reset currentPage to 1 and fetch the updated teams
    setCurrentPage(1);
    dispatch(fetchTeamsRequest(1));
  };

  const handleUpdateTeam = (id, data) => {
    dispatch(editTeamRequest(id, data));
  };

  const handleSetEditData = (data) => {
    setEditData(data);
  };

  useEffect(() => {
    if (teams.length === 0) {
      dispatch(fetchTeamsRequest(page));
      setCurrentPage(1);
    }
    dispatch(fetchRolesRequest());
  }, [dispatch, page, teams, editData]);

  return (
    <>
      <AddTeamMember
        isOpen={isModalOpen && modalType === "add"}
        onClose={handleCloseModal}
        setIsDone={setIsDone}
        onAddTeam={handleAddTeam}
      />
      <UpdateTeamMember
        isOpen={isModalOpen && modalType === "edit"}
        onClose={handleCloseModal}
        data={editData}
        onUpdateTeam={handleUpdateTeam}
      />

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
                <AddButton
                  onClick={handleOpenAddModal}
                  label={" Add New Team Member"}
                />
              </div>
            </div>
            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <TeamTable
                handleDelete={handleDelete}
                handleOpenEditModal={handleOpenEditModal}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                currentPage={currentPage}
                onSetEditData={handleSetEditData}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Teams;
