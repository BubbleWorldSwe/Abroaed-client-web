/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AssignTeamModal from "../modals/assignTeamMemberModal";
import filter_list from "../../../assets/filter_list.png";
import { leadsData } from "../data";
import LeadTable from "../tables/leadTable";
import AppointmentModal from "../modals/appointmentModal";
import UpdateLeadStatus from "../modals/updateLeadStatusModal";
import AddLeadModal from "../modals/addLeadModal";
import { AddButton } from "../../../commons/components/buttons/addButton";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllDestinationsRequest } from "../../../redux/actions/destinationActions";
import {
  addLeadRequest,
  deleteLeadRequest,
  editLeadRequest,
  fetchLeadsRequest,
  searchLeadsRequest,
} from "../../../redux/actions/leadsActions";
import { fetchAllTeamsRequest } from "../../../redux/actions/teamActions";
import { getRoles } from "../../../api/api";
import { getTeamsByMembers } from "../../../api/teamsApi";

function Leads() {
  const dispatch = useDispatch();
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);

  const { leads, totalPages, total } = useSelector((state) => state.leads);

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showAppointmentModal, setshowAppointmentModal] = useState(false);
  const [showTeamModal, setshowTeamModal] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [rolesList, setRolesList] = useState([]);

  const [membersList, setMembersList] = useState([]);

  const [query, setQuery] = useState("");

  const handleScheduleAppointment = (member) => {
    try {
      setSelectedMember(member);
      setshowAppointmentModal(true);
      setDropdownVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    try {
      const value = e.target.value;
      setQuery(value);
      if (value.trim() === "") {
        dispatch(fetchLeadsRequest(currentPage));
        setCurrentPage(1);
      } else {
        dispatch(searchLeadsRequest(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignTeamMember = (member) => {
    try {
      setSelectedMember(member);
      setshowTeamModal(true);
      setDropdownVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateTeamMember = (member) => {
    try {
      setSelectedMember(member);
      setShowUpdateModal(true);
      setDropdownVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpenAddModal = () => {
    try {
      setIsAddModalOpen(true);
      // setModalType(modalType);
      setDropdownVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  async function fetchData() {
    try {
      dispatch(fetchAllDestinationsRequest());
      dispatch(fetchAllTeamsRequest());
      const list = await getTeamsByMembers();

      if (list.status === 200) {
        setRolesList(list.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddLead = (data) => {
    try {
      //  setIsAddModalOpen(false);
      console.log("handleAddLead");
      console.log(data);

      dispatch(addLeadRequest(data));
      setCurrentPage(1);
      dispatch(fetchLeadsRequest(1));
      handleCloseAddModal();
    } catch (error) {
      console.log(error);
    }
  };

  async function onUpdate(data, id) {
    try {
      console.log(data, id);
      dispatch(editLeadRequest(id, data));
      setshowAppointmentModal(false);
      setShowUpdateModal(false);
      setshowTeamModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = (id) => {
    console.log("handleDelete " + id);
    dispatch(deleteLeadRequest(id));
    setCurrentPage(1);
    dispatch(fetchLeadsRequest(1));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const pageExists = leads.some((item) => item.index === currentPage + 1);

      if (!pageExists) {
        dispatch(fetchLeadsRequest(currentPage + 1));
      }

      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const pageExists = leads.some((item) => item.index === currentPage - 1);

      if (!pageExists) {
        dispatch(fetchLeadsRequest(currentPage - 1));
      }

      setCurrentPage((prev) => prev - 1);
    }
  };

  console.log(leads?.length, " Lead Length", leads);

  useEffect(() => {
    if (leads?.length === 0) {
      console.log("fetchLeadsRequest");
      dispatch(fetchLeadsRequest(currentPage));
    }
    fetchData();
  }, [dispatch, currentPage, total]);

  return (
    <>
      {showTeamModal && (
        <AssignTeamModal
          leadId={selectedMember?._id}
          leadName={selectedMember?.name}
          team={{
            counsellor: selectedMember?.counsellor,
            backendManager: selectedMember?.backendManager,
            mentor: selectedMember?.mentor,
          }}
          onClose={() => setshowTeamModal(false)}
          filledData={{ assignTeamMembers: selectedMember?.assignTeamMembers }}
          rolesList={rolesList}
          membersList={membersList}
          setMembersList={setMembersList}
          onUpdate={onUpdate}
        />
      )}

      {showAppointmentModal && (
        <AppointmentModal
          leadId={selectedMember?._id}
          onClose={() => setshowAppointmentModal(false)}
          onUpdate={onUpdate}
          filledData={{
            appointmentType: selectedMember?.scheduleDetails?.appointmentType,
            preferredSlot: selectedMember?.scheduleDetails?.preferredSlot,
          }}
        />
      )}
      {showUpdateModal && (
        <UpdateLeadStatus
          leadId={selectedMember?._id}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={onUpdate}
          filledData={{
            servicerType: selectedMember?.servicerType,
            planType: selectedMember?.planType,
            billableAmount: selectedMember?.billableAmount,
            status: selectedMember?.status,
            remark: selectedMember?.remark,
          }}
        />
      )}
      <AddLeadModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAddLead={handleAddLead}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900 ">
        {/* Adjust padding and spacing */}

        <section className="font-rethink flex-grow py-5">
          <div className="flex flex-col  py-2 mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative ">
            <div className=" dark:border-gray-700 mx-4">
              <div className="flex justify-between  py-3">
                <div className="w-full  flex  space-y-1 md:space-y-0  ">
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
                        placeholder="Search Leads"
                        required=""
                        value={query}
                        onChange={handleSearch}
                      />
                    </div>
                  </form>
                  <div className="flex items-center space-x-4">
                    <img src={filter_list} alt="filterIcon" />
                  </div>
                </div>

                {isWriteAccess && (
                  <AddButton onClick={handleOpenAddModal} label={" New Lead"} />
                )}
              </div>
            </div>
          </div>
          <div className="flex-grow  overflow-auto bg-white dark:bg-gray-800 px-5">
            <LeadTable
              handleAssignTeamMember={handleAssignTeamMember}
              handleScheduleAppointment={handleScheduleAppointment}
              handleUpdateTeamMember={handleUpdateTeamMember}
              dropdownVisible={dropdownVisible}
              setDropdownVisible={setDropdownVisible}
              currentPage={currentPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              handleDelete={handleDelete}
              onUpdate={onUpdate}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Leads;
