import { useEffect, useState } from "react";
import AddTeamMember from "../modals/addTeamMemberModal";
import { useDispatch, useSelector } from "react-redux";
import filter_list from "../../../assets/filter_list.png";
import UpdateTeamMember from "../modals/updateTeamMemberModal";
import ConfirmModal from "../../../common/modal/confirmModal";
import {
  deleteTeamRequest,
  fetchTeamsRequest,
} from "../../../redux/actions/teamActions";
import { fetchRolesRequest } from "../../../redux/actions/rolesActions";
import TeamTable from "../tables/teamTable";


function Teams() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [modalType, setModalType] = useState("");
  const [page, setPage] = useState(1);
  const { teams, totalPages } = useSelector((state) => state.team);
  const [editData, setEditData] = useState(null);
  const dispatch = useDispatch();
  const [isDone, setIsDone] = useState(false)
  const handleOpenAddModal = () => {
    setEditMode(false);
    setModalType("add");
    setSelectedMember(null);
    setIsModalOpen(true);
  };
  const handleOpenEditModal = (member, data) => {
    setDropdownVisible(false)
    setEditData(data);
    setEditMode(true);
    setModalType("edit");
    setSelectedMember(member);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  const handleLoadMoreData = (page) => {
    setPage(page);
    dispatch(fetchTeamsRequest(page));
  };
  const handleDelete = (teamId) => {
    dispatch(deleteTeamRequest(teamId));
    setDropdownVisible(null);
  };

  useEffect(() => {
    dispatch(fetchTeamsRequest(page));
    dispatch(fetchRolesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      <AddTeamMember
        isOpen={isModalOpen && modalType === "add"}
        onClose={handleCloseModal}
        editMode={editMode}
        memberToEdit={selectedMember}
        setIsDone={setIsDone}
      />
      <UpdateTeamMember
        isOpen={isModalOpen && modalType === "edit"}
        onClose={handleCloseModal}
        editMode={editMode}
        memberToEdit={selectedMember}
        data={editData}
      />
      <ConfirmModal
        isOpen={isDone}
        onClose={() => setIsDone(false)}
        text={"Member Added!"}
      />
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className="py-5  flex-grow ">
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
                <div className="flex gap-2">
                  <button
                    onClick={handleOpenAddModal}
                    type="button"
                    className="w-full whitespace-nowrap md:w-auto flex items-center justify-center py-2 px-4 text-sm font-semibold  text-gray-700 focus:outline-none bg-[#EDBD05] rounded-lg border border-gray-200 hover:bg-yellow-300   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="w-6 h-6 p-1 text-gray-600 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
            </div>

            <div className="flex-grow mt-1 overflow-auto bg-white dark:bg-gray-800 px-5">
              <TeamTable
                teams={teams}
                handleDelete={handleDelete}
                handleOpenEditModal={handleOpenEditModal}
                dropdownVisible={dropdownVisible}
                setDropdownVisible={setDropdownVisible}
              />

              {totalPages > page && (
                <div className="flex justify-center items-center py-4">
                  <a
                    className="text-center font-bold text-yellow-600 hover:underline"
                    onClick={() => handleLoadMoreData(page + 1)}
                  >
                    Load More
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Teams;
