import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToSection,
  updateItemInSection,
} from "../../slices/collegeSectionSlice";
import FinancialAidModal from "../../Components/Modals/FinancialAidCollegeModal";
import pencil from '../../assets/pencil.png'
function FinancialAidTable() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const financialAid = useSelector((state) =>
    state.collegeSections.sections.find(
      (section) => section.title === "Financial Aid and Scholarships"
    )
  );
  console.log("first", financialAid);
  const handleAddClick = () => {
    setCurrentData(null);
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (index) => {
    setCurrentData(financialAid.content[index]);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    if (editingIndex !== null) {
      dispatch(
        updateItemInSection({
          sectionTitle: "Financial Aid and Scholarships",
          itemIndex: editingIndex,
          updatedItem: data,
        })
      );
    } else {
      dispatch(
        addItemToSection({
          sectionTitle: "Financial Aid and Scholarships",
          newItem: data,
        })
      );
    }
    setIsModalOpen(false);
  };

  // Filter valid scholarships with at least one meaningful field
  const validScholarships = financialAid?.content?.filter(
    (scholarship) =>
      scholarship.scholarshipName || scholarship.link || scholarship.description
  );

  return (
     <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
         <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-sm text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                              <th  class="px-4 py-3">Scholarship Name</th>
                              <th  class="px-4 py-3 whitespace-nowrap">Last Edited</th>
                              <th  class="px-4 py-3">
                                   </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class=" px-4 py-3">
                                  <div class="flex items-center">
                                  Scholarship - Engineering
                                         </div>
                              </td>
                              <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <div class="flex items-center">
                                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full"/>
                                      <span>Jan 12,2030</span>
                                  </div>
                              </th>
                             
                              <td className="px-4 py-3">
                              <img src={pencil} alt="iMac Front Image" class="w-5 h-5 mr-3 "/>
    
    
                                 </td>
                              </tr>
                          </tbody>
                  </table>
              </div>
         </div>
  );
}

export default FinancialAidTable;
