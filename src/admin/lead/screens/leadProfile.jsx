import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LeadAdditionInfo from "../components/leadAdditionInfo";
import LeadAssignTeam from "../components/leadAssignTeam";
import LeadDocumentLibrary from "../components/leadDocumentLibrary";
import LeadPersonalDetails from "../components/leadPersonalDetails";
import LeadProfile from "../components/leadProfile";
import LeadSavePreference from "../components/leadSavePreference";
import LeadScheduleAppointment from "../components/leadScheduleAppointment";
import UpdateLeadPersonalInfo from "../modals/updateLeadPersonalInfoModal";
import UpdateLeadAdditionInfo from "../modals/updateLeadAdditionInfoModal";
import AssignTeamModal from "../modals/assignTeamMemberModal";
import {
  addLeadSavedPrefrences,
  editLeadRequest,
  editLeadsStudentRequest,
} from "../../../redux/actions/leadsActions";
import AppointmentModal from "../modals/appointmentModal";
import { getTeamsByMembers } from "../../../api/teamsApi";
import LeadSavedPreference from "../components/leadSavedPreference";
import { getLeadSavedPrefrences } from "../../../api/leadsApi";

const LeadProfileLayout = () => {
  const { id } = useParams();
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  const dispatch = useDispatch();

  const [membersList, setMembersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);

  // Generic modal state
  const [modal, setModal] = useState(null);

  // Unified modal handler
  const handleModal = (modalType) => {
    setModal(modalType);
  };

  async function onUpdate(data, id) {
    try {
      console.log(data, id);
      dispatch(editLeadRequest(id, data));
      handleModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function onUpdateStudent(data, userId) {
    try {
      dispatch(editLeadsStudentRequest(userId, data, id));
      handleModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const list = await getTeamsByMembers();
      fetchLeadSavedPefrences();

      if (list.status === 200) {
        setRolesList(list.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchLeadSavedPefrences() {
    try {
      const list = await getLeadSavedPrefrences(id);

      if (list.status === 200) {
        dispatch(addLeadSavedPrefrences(list.data?.result));
      } else {
        dispatch(addLeadSavedPrefrences([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Modals */}
      {modal === "personal" && (
        <UpdateLeadPersonalInfo
          isOpen={modal === "personal"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdateStudent}
          userId={leadProfile?.user?._id}
          filledData={{
            firstName: leadProfile?.user?.firstName,
            lastName: leadProfile?.user?.lastName,
            email: leadProfile?.user?.email,
            mobile: leadProfile?.user?.mobile,
            address: leadProfile?.user?.address || "",
          }}
        />
      )}
      {modal === "addition" && (
        <UpdateLeadAdditionInfo
          isOpen={modal === "addition"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdateStudent}
          leadId={id}
          userId={leadProfile?.user?._id}
          filledData={{
            highestEducation: leadProfile?.user?.userDetail?.highestEducation,
            preferredDestination:
              leadProfile?.user?.userDetail?.preferredDestination?._id,
            applyingFor: leadProfile?.user?.userDetail?.applyingFor,
            targetYear: leadProfile?.user?.userDetail?.targetYear,
          }}
        />
      )}
      {modal === "assignTeam" && (
        <AssignTeamModal
          isOpen={modal === "assignTeam"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdate}
          leadId={id}
          filledData={{ assignTeamMembers: leadProfile?.assignTeamMembers }}
          rolesList={rolesList}
          membersList={membersList}
          setMembersList={setMembersList}
        />
      )}

      {modal === "appointment" && (
        <AppointmentModal
          isOpen={modal === "appointment"}
          leadId={id}
          onClose={() => handleModal(null)}
          onUpdate={onUpdate}
          filledData={{
            appointmentType: leadProfile?.scheduleDetails?.appointmentType,
            preferredSlot: leadProfile?.scheduleDetails?.preferredSlot,
          }}
        />
      )}

      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
        <section className="max-w-7xl p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
          <LeadProfile />
          <LeadPersonalDetails onOpenModal={() => handleModal("personal")} />
          <LeadAdditionInfo onOpenModal={() => handleModal("addition")} />
          <LeadAssignTeam
            onOpenModal={() => handleModal("assignTeam")}
            onUpdate={onUpdate}
          />
          <LeadScheduleAppointment
            onOpenModal={() => handleModal("appointment")}
          />

          {/*    <LeadDocumentLibrary /> */}
          <LeadSavedPreference />
        </section>
      </div>
    </>
  );
};

export default LeadProfileLayout;
