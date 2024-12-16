import React, { useState } from "react";
import DeleteModal from "../../Components/Modals/DeleteModal";
import { useDispatch, useSelector } from "react-redux";

import AddOverviewContentModal from "../../Components/Modals/AddOverviewContentModal";
import OverviewCard from "./OverviewCard";
import MediaGalleryCard from "./MediaGalleryCard";
import CoursesCard from "./CoursesCard";
import FinancialAidCard from "./FinancialAidCard";
import FAQsCard from "./FAQsCard";

function CollegePage() {
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
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={handleDeleteSection}
        title={sections[selectedSectionIndex]?.title || ""}
      />

      <AddOverviewContentModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
      />
      <main className="min-h-screen flex flex-col gap-4 overflow-y-auto p-4 bg-gray-150 dark:bg-gray-900">
        <OverviewCard />
        <MediaGalleryCard />
        <CoursesCard />
        <FinancialAidCard />
        <FAQsCard />
      </main>
    </div>
  );
}

export default CollegePage;
