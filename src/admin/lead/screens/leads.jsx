/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AssignTeamModal from "../modals/assignTeamMemberModal";
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
import { getTeamsByMembers } from "../../../api/teamsApi";
import { Search } from "lucide-react";
import { toast } from "react-toastify";
import ActivityLoader from "../../../commons/components/loader/activityLoader";
import { useLocation } from "react-router-dom";

function Leads() {
  const dispatch = useDispatch();
  const { isWriteAccess } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);

  const { leads, totalPages, loading } = useSelector((state) => state.leads);
  const location = useLocation();
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

  const handleSearch = (value) => {
    try {
      setQuery(value);

      const trimmedValue = value.trim();

      if (trimmedValue === "") {
        setCurrentPage(1);
        dispatch(fetchLeadsRequest(1));
        return;
      }

      if (trimmedValue.length < 2) {
        toast.error("Please enter at least 2 characters to search.");
        return;
      }

      dispatch(searchLeadsRequest(trimmedValue));
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
      dispatch(addLeadRequest(data, "Lead Added Sucessfully"));
      setCurrentPage(1);
      // dispatch(fetchLeadsRequest(1));
      handleCloseAddModal();
    } catch (error) {
      console.log(error);
    }
  };

  async function onUpdate(data, id) {
    try {
      dispatch(editLeadRequest(id, data));
      setshowAppointmentModal(false);
      setShowUpdateModal(false);
      setshowTeamModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function onAssignTeam(data, id) {
    try {
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

  useEffect(() => {
    if (leads?.length === 0) {
      dispatch(fetchLeadsRequest(currentPage));
    }
  }, [dispatch, currentPage, leads]);

  useEffect(() => {
    fetchData(); // Call fetchData once on mount
  }, []);

  useEffect(() => {
    if (selectedMember) {
      // console.log("selectedMember Updated");
      const updated = leads.find((lead) => lead._id === selectedMember._id);

      console.log(updated);
      if (updated) {
        console.log("selectedMember Updated");
        setSelectedMember(updated);
      }
    }
  }, [leads]);

  useEffect(() => {
    dispatch(fetchLeadsRequest(currentPage));
  }, [location.pathname]);

  return (
    <>
      {showTeamModal && (
        <AssignTeamModal
          leadId={selectedMember?._id}
          leadName={`${selectedMember?.user?.firstName} ${selectedMember?.user?.lastName}`}
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
          onUpdate={onAssignTeam}
          selectedMember={selectedMember}
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
      <ActivityLoader loading={loading} />
    </>
  );
}

export default Leads;
