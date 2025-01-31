import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToSection,
  updateItemInSection,
  deleteItemFromSection,
} from "../../slices/collegeSectionSlice";
import pencil from '../../assets/pencil.png'
import FAQsCollegeModal from "../../Components/Modals/FAQsCollegeModal";

function FAQsCard() {
  // const dispatch = useDispatch();

  const faqs = {
    content: [
      {
        question: "What programs does the college offer?",
        answer: "We offer a variety of undergraduate and graduate programs across multiple disciplines.",
      },
      {
        question: "How can I apply for admission?",
        answer: "You can apply online through our official website by submitting the required documents and fees.",
      },
      {
        question: "Is there any financial aid available?",
        answer: "Yes, we provide various scholarships and financial aid options for eligible students.",
      },
      {
        question: "What are the accommodation options for students?",
        answer: "We offer on-campus dormitories as well as assistance for off-campus housing.",
      },
      {
        question: "How can I contact the admissions office?",
        answer: "You can reach us at admissions@college.edu or call us at +1-123-456-7890.",
      },
    ],
  };

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ question: "", answer: "" });

  // Open modal for adding new FAQ
  const handleAddFAQ = () => {
    setFormData({ question: "", answer: "" });
    setEditIndex(null);
    setShowModal(true);
  };

  // Open modal for editing existing FAQ
  const handleEditFAQ = (index) => {
    setFormData(faqs.content[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  // Handle deleting FAQ
  const handleDeleteFAQ = (index) => {
    // dispatch(deleteItemFromSection({ sectionTitle: "FAQs", itemIndex: index }));
  };

  // Handle form submission
  const handleSaveFAQ = (data) => {
    // if (editIndex !== null) {
    //   dispatch(
    //     updateItemInSection({
    //       sectionTitle: "FAQs",
    //       itemIndex: editIndex,
    //       updatedItem: data,
    //     })
    //   );
    // } else {
    //   dispatch(
    //     addItemToSection({
    //       sectionTitle: "FAQs",
    //       newItem: data,
    //     })
    //   );
    // }
    setShowModal(false);
  };

  // const validFAQs = faqs?.content?.filter((faq) => faq.question || faq.answer);

  // if (!faqs || !validFAQs || validFAQs.length === 0) {
  //   return (
  //     <div className="  bg-white  ">
  //       <div className="px-8">
  //         <table className="table-auto w-full   bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg">
  //           <tbody>
  //             <tr className="border-b border-gray-300 dark:border-gray-700">
  //               <td className="px-6 py-4 text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
  //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  //               </td>
  //               <td className=" text-center border-b  dark:border-gray-700">
  //                 <img src={pencil} alt="Edit Icon" className="w-7 h-5 cursor-pointer" />
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>

  //       {showModal && (
  //         <FAQsCollegeModal
  //           formData={formData}
  //           setFormData={setFormData}
  //           onClose={() => setShowModal(false)}
  //           onSave={handleSaveFAQ}
  //         />
  //       )}
  //     </div>
  //   );
  // }

  return (
    <div className="px-8 py-5">
      <table className="table-auto w-full   bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg">
        <tbody>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <td className="px-6 py-4 text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </td>
            <td className=" text-center border-b  dark:border-gray-700">
              <img src={pencil} alt="Edit Icon" className="w-7 h-5 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FAQsCard;
