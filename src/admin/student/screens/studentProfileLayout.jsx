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
  addStudentDocuments,
  addStudentPrepsBatches,
  addStudentSavedPrefrences,
  addStudentTransaction,
  editStudentLeadRequest,
  editStudentRequest,
  setSelectedStudent,
  setStudentDataLoading,
} from "../../../redux/actions/studentsActions";

import UpdateStudentPersonalInfo from "../modals/updateStudentPersonalInfoModal";
import UpdateStudentAdditionInfo from "../modals/updateStudentAdditionInfoModal";
import StudentAssignTeamModal from "../modals/studentAssignTeamModal";
import StartApplicationModal from "../modals/startApplicationModal";
import { getTeamsByMembers } from "../../../api/teamsApi";
import {
  getAllColleges,
  getColleges,
  getCollegesByDestinationId,
} from "../../../api/collegesApi";
import {
  getStudentApplications,
  getStudentDocuments,
  getStudentPrepsBatches,
  getStudentSavedPreferences,
  getStudentTransactions,
  setCreateStudentApplication,
  setDeleteStudentDocument,
  setDeleteStudentTransaction,
  setUpdateStudentApplication,
  setUpdateStudentDocuments,
  setUpdateStudentTransaction,
  setUploadStudentDocuments,
} from "../../../api/studentsApi";
import { toast } from "react-toastify";
import { getLeadDetailsById } from "../../../api/leadsApi";
import UpdateApplicationModal from "../modals/updateApplicationModal";
import UpdateDocApplicationModal from "../modals/uploadDocumentApplicationModal";
import { statusSequence } from "../../../constants/values";
import StatusConfirmationModal from "../modals/statusConfirmationModal";
import { fetchTransactionsRequest } from "../../../redux/actions/transactionActions";
import { setAddTransaction } from "../../../api/transactionApi";
import StudentUploadDocument from "../modals/studentUploadDocumentModal";
import RequestDocumentModal from "../modals/requestDocumentModal";
import DocStatusConfirmationModal from "../modals/docStatusConfirmationModal";
import AddCommentModal from "../modals/addCommentsModal";
import StudentAvailedServices from "../components/studentAvailedServices";
import StudentTransactionModal from "../modals/studentTransactionModal";
import ActivityLoader from "../../../commons/components/loader/activityLoader";

const StudentProfileLayout = () => {
  const { isWriteAccess } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();

  const studentProfile = useSelector(
    (state) => state?.students?.selectedStudent
  );

  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState(null);
  const [collegesList, setCollegesList] = useState([]);
  const [membersList, setMembersList] = useState([]);
  const [rolesList, setRolesList] = useState([]);
  const [openApplicatinModal, setOpenApplicationModal] = useState(false);
  const [updateApplicatinModal, setUpdateApplicationModal] = useState(false);
  const [updateDocModal, setUpdateDocModal] = useState(false);

  const [transactionModal, setTransactionModal] = useState(false);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [changeStatusModal, setChangeStatusModal] = useState(null);
  const [docChangeStatusModal, setDocChangeStatusModal] = useState(null);

  const [docCommentModal, setDocCommentModal] = useState(false);

  const [selectedDoc, setSelectedDoc] = useState(null);

  const { loading } = useSelector((state) => state.students);

  const handleModal = (modalType) => {
    setModal(modalType);
  };

  async function onUpdateLead(data, id) {
    try {
      dispatch(editStudentLeadRequest(id, data));
      fetchData();
      handleModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function onUpdateStudent(data, userId) {
    try {
      dispatch(editStudentRequest(userId, data, id));
      fetchData();
      handleModal(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function createStudentTransaction(transData) {
    try {
      const data = await setAddTransaction(transData);

      if (data?.status === 200) {
        // dispatch(addStudentTransaction(transData));
        fetchStudentTransactions();
        toast.success(data?.message);
        setTransactionModal(false);
        dispatch(fetchTransactionsRequest(1));
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentApplications() {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await getStudentApplications(id);

      if (data?.status === 200) {
        dispatch(addStudentApplication(data?.data?.result));
      } else {
        dispatch(addStudentApplication([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentDocuments() {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await getStudentDocuments(id);

      if (data?.status === 200) {
        dispatch(addStudentDocuments(data?.data?.result));
      } else {
        dispatch(addStudentDocuments([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentTransactions() {
    try {
      dispatch(setStudentDataLoading(true));
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
      dispatch(setStudentDataLoading(true));
      const list = await getStudentSavedPreferences(studentProfile?.user?._id);

      if (list.status === 200) {
        dispatch(addStudentSavedPrefrences(list.data?.result));
      } else {
        dispatch(addStudentSavedPrefrences([]));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateStudentTransaction(updatedData) {
    try {
      dispatch(setStudentDataLoading(true));
      const { _id, ...transactionData } = updatedData;

      const data = await setUpdateStudentTransaction(
        selectedTransaction?._id,
        transactionData
      );

      if (data?.status === 200) {
        fetchStudentTransactions();
        toast.success(data?.message);
        setTransactionModal(false);
        setSelectedTransaction(null);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudentPrepsBatches() {
    try {
      dispatch(setStudentDataLoading(true));
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
        setCollegesList(college.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createStudentApplication(appData) {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await setCreateStudentApplication(appData);

      if (data?.status === 200) {
        dispatch(addStudentApplication(data?.data));
        fetchStudentApplications();
        toast.success(data?.message);
        setOpenApplicationModal(false);
      } else {
        toast.error(data?.message);
        dispatch(setStudentDataLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function uploadStudentDocument(fileData) {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await setUploadStudentDocuments(id, fileData);
      //

      if (data?.status === 200) {
        dispatch(addStudentApplication(data?.data));
        toast.success(data?.message);
        setUpdateDocModal(false);
        setOpenModal(false);
        fetchData();
      } else {
        toast.error(data?.message);
        dispatch(setStudentDataLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateUploadStudentDocument(docId, fileData) {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await setUpdateStudentDocuments(docId, fileData);

      if (data?.status === 200) {
        fetchData();
        toast.success(data?.message);
        setUpdateDocModal(false);
      } else {
        toast.error(data?.message);
        dispatch(setStudentDataLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteStudentDocument(id) {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await setDeleteStudentDocument(id);

      if (data?.status === 200) {
        fetchData();
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
        dispatch(setStudentDataLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteStudentTransaction(id) {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await setDeleteStudentTransaction(id);

      if (data?.status === 200) {
        fetchStudentTransactions();
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
        dispatch(setStudentDataLoading(false));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateStudentApplication(appData) {
    try {
      dispatch(setStudentDataLoading(true));
      const data = await setUpdateStudentApplication(
        appData,
        selectedApplication?._id
      );

      console.log(data);

      if (data?.status === 200) {
        fetchStudentApplications();
        toast.success(data?.message);
        setUpdateApplicationModal(false);
        setUpdateDocModal(false);
        setChangeStatusModal(false);
        setDocCommentModal(false);
      } else {
        toast.error(data?.message);
        dispatch(setStudentDataLoading(false));
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

  async function fetchData() {
    try {
      const list = await getTeamsByMembers();
      const lead = await getLeadDetailsById(id);

      fetchStudentApplications();
      fetchStudentTransactions();
      fetchStudentSavedPefrences();
      fetchStudentPrepsBatches();
      fetchStudentDocuments();

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

      <RequestDocumentModal
        isOpen={updateDocModal}
        onClose={() => {
          setUpdateDocModal(false);
          setSelectedDoc(null);
        }}
        leadId={id}
        requestDocument={uploadStudentDocument}
        filledData={{
          applicationId: selectedDoc?.applicationId?._id,
          lead: id,
          type: selectedDoc?.type,
          title: selectedDoc?.title,
          status: selectedDoc?.status,
          deadline: selectedDoc?.deadline,
          _id: selectedDoc?._id,
        }}
        updateDocument={(data) => {
          updateUploadStudentDocument(selectedDoc?._id, data);
        }}
      />

      <DocStatusConfirmationModal
        selectedDoc={selectedDoc}
        isOpen={docChangeStatusModal}
        onClose={() => setDocChangeStatusModal(false)}
        heading="Change Status!"
        onSubmit={(data) => {
          updateUploadStudentDocument(selectedDoc?._id, data);
        }}
        title={
          "Select 'Approve' if the document is valid, or 'Reject' with a reason if it's not."
        }
      />

      <StudentUploadDocument
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        collegesList={collegesList}
        getCollegesList={fetchCollegesList}
        uploadDocument={uploadStudentDocument}
      />

      <AddCommentModal
        isOpen={docCommentModal}
        onClose={() => setDocCommentModal(false)}
        leadId={id}
        updateApplication={updateStudentApplication}
        filledData={{
          comments: selectedApplication?.comments,
          _id: selectedApplication?._id,
        }}
      />

      <StudentTransactionModal
        isOpen={transactionModal}
        onClose={() => {
          setTransactionModal(false);
          setSelectedTransaction(null); // Reset selected on close
        }}
        studentId={studentProfile?.user?._id}
        onSave={createStudentTransaction}
        selectedTransaction={selectedTransaction}
        onUpdate={updateStudentTransaction}
        initialData={selectedTransaction}
      />

      {/* Page Content */}
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
        <section className="max-w-7xl p-3 px-5 flex flex-col gap-4 sm:py-5 flex-grow">
          <StudentProfile />
          <StudentPersonalDetails onOpenModal={() => handleModal("personal")} />
          <StudentAvailedServices />
          <StudentAdditionalDetails
            onOpenModal={() => handleModal("addition")}
          />

          <StudentAssignTeam
            onOpenModal={() => handleModal("assignTeam")}
            onUpdate={onUpdateLead}
          />

          <DocumentLibrary
            handleOpenUploadModal={() => {
              setOpenModal(true);
            }}
            requestedDocument={() => {
              setSelectedDoc(null);
              setUpdateDocModal(true);
            }}
            deleteDocument={deleteStudentDocument}
            setSelectedDoc={(data) => {
              setUpdateDocModal(!updateDocModal);
              setSelectedDoc(data);
            }}
            openStatusModal={(data) => {
              setSelectedDoc(data);
              setDocChangeStatusModal(!docChangeStatusModal);
            }}
          />
          <StudentSavedPreference />
          <StudentApplication
            onOpen={() => setOpenApplicationModal(true)}
            selectedApplication={selectedApplication}
            setSelectedApplication={setSelectedApplication}
            onOpenUpdate={() => setUpdateApplicationModal(true)}
            onOpenDocUpdate={() => setUpdateDocModal(true)}
            onOpenStatusModal={() => setChangeStatusModal(true)}
            onOpenCommentModal={() => setDocCommentModal(true)}
          />

          <StudentTransaction
            studentId={studentProfile?.user?._id}
            onSave={createStudentTransaction}
            handleDelete={deleteStudentTransaction}
            onOpen={() => {
              setSelectedTransaction(null); // new transaction
              setTransactionModal(true);
            }}
            onEdit={(transaction) => {
              setSelectedTransaction(transaction);
              setTransactionModal(true);
            }}
            isOpen={transactionModal}
          />

          <StudentLangPrep />
        </section>
      </div>
      <ActivityLoader loading={loading} />
    </>
  );
};

export default StudentProfileLayout;
