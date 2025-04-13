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
import TeamTable from "../tables/teamTable";
import filter_list from "../../../assets/filter_list.png";
import { AddButton } from "../../../commons/components/buttons/addButton";
import { getRoles } from "../../../api/api";

function Teams() {
  const dispatch = useDispatch();
  const { teams, totalPages, page } = useSelector((state) => state.teams);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [modalType, setModalType] = useState("");
  const [editData, setEditData] = useState(null);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const [roles, setRoles] = useState([]);

  const handleOpenAddModal = () => {
    try {
      setModalType("add");
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenEditModal = () => {
    try {
      setModalType("edit");
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    try {
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (teamId) => {
    try {
      dispatch(deleteTeamRequest(teamId));
      setCurrentPage(1);
      dispatch(fetchTeamsRequest(1));
      setDropdownVisible(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    try {
      if (currentPage < totalPages) {
        const pageExists = teams.some((item) => item.index === currentPage + 1);

        if (!pageExists) {
          dispatch(fetchTeamsRequest(currentPage + 1));
        }

        setCurrentPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    try {
      if (currentPage > 1) {
        const pageExists = teams.some((item) => item.index === currentPage - 1);

        if (!pageExists) {
          dispatch(fetchTeamsRequest(currentPage - 1));
        }

        setCurrentPage((prev) => prev - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTeam = (data) => {
    try {
      dispatch(addTeamRequest(data));
      // Reset currentPage to 1 and fetch the updated teams
      setCurrentPage(1);
      dispatch(fetchTeamsRequest(1));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTeam = (id, data) => {
    try {
      dispatch(editTeamRequest(id, data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetEditData = (data) => {
    try {
      setEditData(data);
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchData() {
    try {
      const list = await getRoles();

      if (list.status === 200) {
        setRoles(list.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (teams.length === 0) {
      dispatch(fetchTeamsRequest(page));
      setCurrentPage(1);
    }

    fetchData();
  }, [dispatch, page, teams, editData]);

  return (
    <>
      <AddTeamMember
        isOpen={isModalOpen && modalType === "add"}
        onClose={handleCloseModal}
        onAddTeam={handleAddTeam}
        roles={roles}
      />
      <UpdateTeamMember
        isOpen={isModalOpen && modalType === "edit"}
        onClose={handleCloseModal}
        data={editData}
        onUpdateTeam={handleUpdateTeam}
        roles={roles}
      />

      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
        <section className="py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative sm:rounded-lg">
            <div className="dark:border-gray-700 mx-4">
              <div className="flex justify-between py-3">
                <div className="w-full flex space-y-3 md:space-y-0">
                  {/* <form className="w-full md:max-w-sm flex-1 md:mr-4">
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
                  </div> */}
                </div>

                {isWriteAccess && (
                  <AddButton
                    onClick={handleOpenAddModal}
                    label={" New Team Member"}
                  />
                )}
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
