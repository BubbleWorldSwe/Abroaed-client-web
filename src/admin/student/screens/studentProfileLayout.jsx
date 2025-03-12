import { useParams } from "react-router-dom";
import DocumentLibrary from "../components/documentLibrary";
import StudentAdditionalDetails from "../components/studentAdditionalDetails";
// import StudentAdditionalServices from "../components/studentAdditionalServices";
import StudentApplication from "../components/studentApplication";
import StudentAssignTeam from "../components/studentAssignTeam";
// import StudentDocumentLibrary from "../components/studentDocumentLibrary";
import StudentPersonalDetails from "../components/studentPersonDetails";
import StudentProfile from "../components/studentProfile";
import StudentSavedPreference from "../components/studentSavedPreference";
import StudentTransaction from "../components/studentTransaction";
import StudentLangPrep from "../tables/studentLangPrepTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addStudentApplication,
  editStudentLeadRequest,
  editStudentRequest,
  setSelectedStudent,
} from "../../../redux/actions/studentsActions";
import { editLeadsStudentRequest } from "../../../redux/actions/leadsActions";
import UpdateLeadPersonalInfo from "../../lead/modals/updateLeadPersonalInfoModal";
import UpdateStudentPersonalInfo from "../modals/updateStudentPersonalInfoModal";
import UpdateStudentAdditionInfo from "../modals/updateStudentAdditionInfoModal";

import StudentAssignTeamModal from "../modals/studentAssignTeamModal";
import { getTeamsByMembers } from "../../../api/teamsApi";
import { getCollegesByDestinationId } from "../../../api/collegesApi";
import {
  getStudentApplications,
  setCreateStudentApplication,
} from "../../../api/studentsApi";
import { toast } from "react-toastify";
import { getLeadDetailsById } from "../../../api/leadsApi";

const StudentProfileLayout = () => {
  const { id } = useParams();

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );
  console.log(studentProfile.applications);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(null);
  const [collegesList, setCollegesList] = useState([]);

  const [membersList, setMembersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);

  const [openApplicatinModal, setOpenApplicationModal] = useState(false);

  const [studentApplication, setStudentApplication] = useState([]);

  const handleModal = (modalType) => {
    setModal(modalType);
  };

  async function onUpdateLead(data, id) {
    try {
      // console.log(data, id);
      dispatch(editStudentLeadRequest(id, data));
      handleModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function onUpdateStudent(data, userId) {
    try {
      dispatch(editStudentRequest(userId, data, id));
      handleModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const list = await getTeamsByMembers();
      const lead = await getLeadDetailsById(id);
      const data = await getStudentApplications(id);

      console.log(data.data?.result);

      if (lead.status === 200) {
        //dispatch(setSelectedStudent(lead.data));
        dispatch(setSelectedStudent(lead.data));
      }

      if (list.status === 200) {
        setRolesList(list.data);
      }

      if (data.status === 200) {
        setStudentApplication(data.data?.result);
        dispatch(addStudentApplication(data.data?.result));
      } else {
        dispatch(addStudentApplication([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCollegesList(destId) {
    try {
      setCollegesList([]);
      const college = await getCollegesByDestinationId(destId);

      if (college.status === 200) {
        setCollegesList(college.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createStudentApplication(appData) {
    try {
      const data = await setCreateStudentApplication(appData);

      if (data.status === 200) {
        dispatch(addStudentApplication(data.data));
        console.log("Added Successfully");
        toast.success(data.message);
        setOpenApplicationModal(false);
      } else {
        toast.error(data.message);
        // setOpenApplicationModal(false);
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
      {modal === "personal" && (
        <UpdateStudentPersonalInfo
          isOpen={modal === "personal"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdateStudent}
          userId={studentProfile?.user?._id}
          filledData={{
            firstName: studentProfile?.user?.firstName,
            lastName: studentProfile?.user?.lastName,
            email: studentProfile?.user?.email,
            mobile: studentProfile?.user?.mobile,
            address: studentProfile?.user?.address || "",
          }}
        />
      )}

      {modal === "addition" && (
        <UpdateStudentAdditionInfo
          isOpen={modal === "addition"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdateStudent}
          leadId={id}
          userId={studentProfile?.user?._id}
          filledData={{
            highestEducation:
              studentProfile?.user?.userDetail?.highestEducation,
            preferredDestination:
              studentProfile?.user?.userDetail?.preferredDestination?._id,
            applyingFor: studentProfile?.user?.userDetail?.applyingFor,
            targetYear: studentProfile?.user?.userDetail?.targetYear,
          }}
        />
      )}

      {modal === "assignTeam" && (
        <StudentAssignTeamModal
          isOpen={modal === "assignTeam"}
          onClose={() => handleModal(null)}
          onUpdate={onUpdateLead}
          leadId={id}
          filledData={{ assignTeamMembers: studentProfile?.assignTeamMembers }}
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
          onUpdate={onUpdateLead}
          filledData={{
            appointmentType: leadProfile?.scheduleDetails?.appointmentType,
            preferredSlot: leadProfile?.scheduleDetails?.preferredSlot,
          }}
        />
      )}
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className="max-w-7xl  p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
          <StudentProfile />
          <StudentPersonalDetails onOpenModal={() => handleModal("personal")} />
          <StudentAdditionalDetails
            onOpenModal={() => handleModal("addition")}
          />
          <StudentAssignTeam
            onOpenModal={() => handleModal("assignTeam")}
            onUpdate={onUpdateLead}
          />
          <DocumentLibrary />
          {/* <StudentDocumentLibrary /> */}
          <StudentSavedPreference />
          <StudentApplication
            collegesList={collegesList}
            getCollegesList={fetchCollegesList}
            leadId={id}
            studentApplication={studentApplication}
            addApplication={createStudentApplication}
            isOpen={openApplicatinModal}
            onClose={() => setOpenApplicationModal(false)}
            onOpen={() => setOpenApplicationModal(true)}
          />

          <StudentLangPrep />
          <StudentTransaction />
          {/* <StudentAdditionalServices /> */}
        </section>
      </div>
    </>
  );
};

export default StudentProfileLayout;
