import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
import { editLeadRequest } from "../../../redux/actions/leadsActions";
import AppointmentModal from "../modals/appointmentModal";

const LeadProfileLayout = () => {
  const { id } = useParams();
  const leadProfile = useSelector((state) => state?.leads?.selectedLead);
  const dispatch = useDispatch();

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

  return (
    <>
      {/* Modals */}
      <UpdateLeadPersonalInfo
        isOpen={modal === "personal"}
        onClose={() => handleModal(null)}
        onUpdate={onUpdate}
        leadId={id}
        filledData={{
          firstName: leadProfile?.user?.firstName,
          lastName: leadProfile?.user?.lastName,
          email: leadProfile?.user?.email,
          mobile: leadProfile?.user?.mobile,
          address: leadProfile?.user?.address,
        }}
      />
      <UpdateLeadAdditionInfo
        isOpen={modal === "addition"}
        onClose={() => handleModal(null)}
        onUpdate={onUpdate}
        leadId={id}
        filledData={{
          highestEducation: leadProfile?.user?.userDetail?.highestEducation,
          preferredDestination:
            leadProfile?.user?.userDetail?.preferredDestination?._id,
          applyingFor: leadProfile?.user?.userDetail?.applyingFor,
          targetYear: leadProfile?.user?.userDetail?.targetYear,
        }}
      />
      {modal === "assignTeam" && (
        <AssignTeamModal
          isOpen={modal === "assignTeam"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdate}
          leadId={id}
          filledData={{ assignTeamMembers: leadProfile?.assignTeamMembers }}
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
          <LeadAssignTeam onOpenModal={() => handleModal("assignTeam")} />
          <LeadScheduleAppointment
            onOpenModal={() => handleModal("appointment")}
          />

          <LeadDocumentLibrary />
          <LeadSavePreference />
        </section>
      </div>
    </>
  );
};

export default LeadProfileLayout;
