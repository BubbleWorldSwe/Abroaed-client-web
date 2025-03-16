import { useParams } from "react-router-dom";
import DocumentLibrary from "../components/documentLibrary";
import StudentAdditionalDetails from "../components/studentAdditionalDetails";
import StudentApplication from "../components/studentApplication";
import StudentAssignTeam from "../components/studentAssignTeam";
import StudentPersonalDetails from "../components/studentPersonDetails";
import StudentProfile from "../components/studentProfile";
import StudentSavedPreference from "../components/studentSavedPreference";
import StudentTransaction from "../components/studentTransaction";
import StudentLangPrep from "../tables/studentLangPrepTable";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  editStudentLeadRequest,
  editStudentRequest,
} from "../../../redux/actions/studentsActions";
import UpdateStudentPersonalInfo from "../modals/updateStudentPersonalInfoModal";
import UpdateStudentAdditionInfo from "../modals/updateStudentAdditionInfoModal";

import StudentAssignTeamModal from "../modals/studentAssignTeamModal";
import { getTeamsByMembers } from "../../../api/teamsApi";
import { getCollegesByDestinationId } from "../../../api/collegesApi";

const StudentProfileLayout = () => {
  const { id } = useParams();

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  console.log(studentProfile?.user?.userDetail?.preferredDestination?._id);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(null);
  const [collegesList, setCollegesList] = useState([]);

  const [membersList, setMembersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);

  const handleModal = (modalType) => {
    setModal(modalType);
  };

  async function onUpdateLead(data, id) {
    try {
      console.log(data, id);
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

      if (list.status === 200) {
        setRolesList(list.data);
      }

      const destId =
        studentProfile?.user?.userDetail?.preferredDestination?._id;

      if (destId) {
        const college = await getCollegesByDestinationId(destId);

        if (college.status === 200) {
          setCollegesList(college.data.result);
        }
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
          {studentProfile?.user?.userDetail?.preferredDestination?._id && (
            <StudentApplication collegesList={collegesList} />
          )}

          <StudentLangPrep />
          <StudentTransaction />
          {/* <StudentAdditionalServices /> */}
        </section>
      </div>
    </>
  );
};

export default StudentProfileLayout;
