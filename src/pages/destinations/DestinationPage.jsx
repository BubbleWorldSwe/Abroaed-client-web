import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverviewDest from "./OverviewDest";
import AdmissionTimelineDest from "./AdmissionTimelineDest";
import AdmissionReqDest from "./admissionReqDest";
import ExpensesDest from "./ExpensesDest";
import ScholarshipsDest from "./ScholarshipsDest";
import DestinationFAQ from "./DestinationFAQ";

function DestinationPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to manage Add modal open/close
  const [titlecaller, setTitleCaller] = useState(false); // State to manage Add modal open/close
  const [selectedSection, setSelectedSection] = useState(null); // State to manage Add modal open/close
  const sections = useSelector((state) => state.collegeSections.sections); // Access sections from Redux store
  const dispatch = useDispatch();
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(null);

  const handleOpenDeleteModal = (index) => {
    setSelectedSectionIndex(index);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedSectionIndex(null);
  };

  const handleDeleteSection = () => {
    handleDeleteCloseModal();
  };
  const handleOpenAddModal = () => setIsAddModalOpen(true);

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <main className="min-h-screen flex flex-col gap-4 overflow-y-auto p-4 bg-gray-150 dark:bg-gray-900">
        <OverviewDest />
        <AdmissionTimelineDest />
        <AdmissionReqDest />
        <ExpensesDest />
        <ScholarshipsDest />
        <DestinationFAQ />
      </main>
    </div>
  );
}

export default DestinationPage;
