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
  addStudentApplication,
  addStudentPrepsBatches,
  addStudentSavedPrefrences,
  addStudentTransaction,
  editStudentLeadRequest,
  editStudentRequest,
  setSelectedStudent,
} from "../../../redux/actions/studentsActions";
import { editLeadsStudentRequest } from "../../../redux/actions/leadsActions";
import UpdateStudentPersonalInfo from "../modals/updateStudentPersonalInfoModal";
import UpdateStudentAdditionInfo from "../modals/updateStudentAdditionInfoModal";
import StudentAssignTeamModal from "../modals/studentAssignTeamModal";
import StartApplicationModal from "../modals/startApplicationModal";
import { getTeamsByMembers } from "../../../api/teamsApi";
import { getCollegesByDestinationId } from "../../../api/collegesApi";
import {
  getStudentApplications,
  getStudentPrepsBatches,
  getStudentSavedPreferences,
  getStudentTransactions,
  setCreateStudentApplication,
  setUpdateStudentApplication,
} from "../../../api/studentsApi";
import { toast } from "react-toastify";
import { getLeadDetailsById } from "../../../api/leadsApi";
import UpdateApplicationModal from "../modals/updateApplicationModal";
import UpdateDocApplicationModal from "../modals/uploadDocumentApplicationModal";
import { statusSequence } from "../../../constants/values";
import StatusConfirmationModal from "../modals/statusConfirmationModal";
import { fetchTransactionsRequest } from "../../../redux/actions/transactionActions";
import { setAddTransaction } from "../../../api/transactionApi";

const StudentProfileLayout = () => {
  const { isWriteAccess } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const [modal, setModal] = useState(null);
  const [collegesList, setCollegesList] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  const [openApplicatinModal, setOpenApplicationModal] = useState(false);
  const [updateApplicatinModal, setUpdateApplicationModal] = useState(false);
  const [updateDocModal, setUpdateDocModal] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState(null);

  const [changeStatusModal, setChangeStatusModal] = useState(null);

  const [transactionModal, setTransactionModal] = useState(false);

  const handleModal = (modalType) => {
    setModal(modalType);
  };

  async function onUpdateLead(data, id) {
    try {
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

  async function createStudentTransaction(transData) {
    try {
      const data = await setAddTransaction(transData);

      if (data.status === 200) {
        // dispatch(addStudentTransaction(transData));
        fetchStudentTransactions();
        toast.success(data.message);
        setTransactionModal(false);
        dispatch(fetchTransactionsRequest(1));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const list = await getTeamsByMembers();
      const lead = await getLeadDetailsById(id);
      fetchStudentApplications();
      fetchStudentTransactions();
      fetchStudentSavedPefrences();
      fetchStudentPrepsBatches();

      if (lead.status === 200) {
        dispatch(setSelectedStudent(lead.data));
      }

      if (list.status === 200) {
        setRolesList(list.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentApplications() {
    try {
      const data = await getStudentApplications(id);

      if (data.status === 200) {
        dispatch(addStudentApplication(data.data?.result));
      } else {
        dispatch(addStudentApplication([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentTransactions() {
    try {
      const list = await getStudentTransactions(studentProfile?.user?._id);

      if (list.status === 200) {
        dispatch(addStudentTransaction(list.data?.result));
      } else {
        dispatch(addStudentTransaction([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentSavedPefrences() {
    try {
      const list = await getStudentSavedPreferences(id);

      if (list.status === 200) {
        dispatch(addStudentSavedPrefrences(list.data?.result));
      } else {
        dispatch(addStudentSavedPrefrences([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentPrepsBatches() {
    try {
      const list = await getStudentPrepsBatches(id);

      if (list.status === 200) {
        dispatch(addStudentPrepsBatches(list.data?.result));
      } else {
        dispatch(addStudentPrepsBatches([]));
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
        fetchStudentApplications();
        toast.success(data.message);
        setOpenApplicationModal(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateStudentApplication(appData) {
    try {
      const data = await setUpdateStudentApplication(
        appData,
        selectedApplication?._id
      );

      console.log(data);

      if (data.status === 200) {
        fetchStudentApplications();
        toast.success(data.message);
        setUpdateApplicationModal(false);
        setUpdateDocModal(false);
        setChangeStatusModal(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getNextStatus = (currentStatus) => {
    if (currentStatus === "application_filled") {
      return ["rejected", "offer_letter_received"];
    }

    const currentIndex = statusSequence.indexOf(currentStatus);
    return currentIndex !== -1 && currentIndex < statusSequence.length - 1
      ? [statusSequence[currentIndex + 1]]
      : [];
  };

  console.log(selectedApplication);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Modals */}
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

      <StartApplicationModal
        isOpen={openApplicatinModal}
        onClose={() => setOpenApplicationModal(false)}
        collegesList={collegesList}
        getCollegesList={fetchCollegesList}
        leadId={id}
        addApplication={createStudentApplication}
        selectedApplication={selectedApplication}
        setSelectedApplication={setSelectedApplication}
      />

      <UpdateApplicationModal
        isOpen={updateApplicatinModal}
        onClose={() => setUpdateApplicationModal(false)}
        collegesList={collegesList}
        getCollegesList={fetchCollegesList}
        leadId={id}
        updateApplication={updateStudentApplication}
        selectedApplication={selectedApplication}
        setSelectedApplication={setSelectedApplication}
        filledData={{
          college: selectedApplication?.college?._id,
          courseName: selectedApplication?.courseName,
          intake: selectedApplication?.intake,
          lead: id,
        }}
      />

      <UpdateDocApplicationModal
        isOpen={updateDocModal}
        onClose={() => setUpdateDocModal(false)}
        collegesList={collegesList}
        getCollegesList={fetchCollegesList}
        leadId={id}
        updateApplication={updateStudentApplication}
        selectedApplication={selectedApplication}
        setSelectedApplication={setSelectedApplication}
        filledData={{
          additionalDocuments: selectedApplication?.additionalDocuments,
        }}
      />

      <StatusConfirmationModal
        isOpen={changeStatusModal}
        onClose={() => setChangeStatusModal(false)}
        heading="Change Status!"
        onSubmit={(selectedStatus) => {
          updateStudentApplication({ status: selectedStatus });
        }}
        title={
          selectedApplication?.status === "awaiting_response"
            ? "Select the next status for this application:"
            : "Are you sure you want to move to the next step?"
        }
        options={getNextStatus(selectedApplication?.status)}
      />
      {/* Page Content */}
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
        <section className="max-w-7xl p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
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
          <StudentSavedPreference />
          <StudentApplication
            onOpen={() => setOpenApplicationModal(true)}
            selectedApplication={selectedApplication}
            setSelectedApplication={setSelectedApplication}
            onOpenUpdate={() => setUpdateApplicationModal(true)}
            onOpenDocUpdate={() => setUpdateDocModal(true)}
            onOpenStatusModal={() => setChangeStatusModal(true)}
          />
          <StudentLangPrep />
          <StudentTransaction
            studentId={studentProfile?.user?._id}
            onSave={createStudentTransaction}
          />
        </section>
      </div>
    </>
  );
};

export default StudentProfileLayout;
