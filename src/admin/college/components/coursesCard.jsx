/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { TableNoData } from "../../../commons/components/table/tableNoData";

function CoursesCard({ onEdit, onUpdate }) {
  const collegeDetails = useSelector((state) => state.colleges.selectedCollege);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const { isWriteAccess } = useSelector((state) => state.auth);
  const handleEditClick = (data) => {
    onEdit(data);
  };

  function handleDeleteClick(id) {
    try {
      console.log("Delete courses : " + id);

      const updatedScholarships = collegeDetails.courses.filter(
        (course) => course._id !== id
      );
      const coursesWithoutId = updatedScholarships.map(
        ({ _id, ...rest }) => rest
      );
      //console.log(coursesWithoutId);

      onUpdate({ courses: coursesWithoutId });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("details updated in ScholarshipsDest ");
    console.log(collegeDetails.courses);
  }, [collegeDetails]);

  return (
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Course Level</th>
              <th className="px-4 py-3">Duration</th>
              {isWriteAccess && <th className="px-4 py-3"></th>}
            </tr>
          </thead>
          <tbody>
            {collegeDetails?.courses?.length > 0 ? (
              collegeDetails?.courses?.map((data, i) => (
                <tr
                  key={i}
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className=" px-4 py-3 font-semibold">{data?.name}</td>
                  <td className=" px-4 py-3">{data?.courseLevel}</td>
                  <td className=" px-4 py-3">{data?.duration}</td>
                  {isWriteAccess && (
                    <td className="text-center w-[100px]">
                      <div className="flex items-center justify-center space-x-5">
                        <img
                          src={pencil}
                          alt="Edit"
                          className="w-5 h-5 cursor-pointer"
                          onClick={() => handleEditClick(data)}
                        />
                        <img
                          src={trash}
                          alt="Delete"
                          className="w-5 h-5 cursor-pointer"
                          //  onClick={() => handleDeleteClick(data?._id)}
                          onClick={() => {
                            setDeleteId(data?._id);
                            setIsModalOpen(!isModalOpen);
                          }}
                        />
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <TableNoData colSpan={4} />
            )}
          </tbody>
        </table>
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDeleteClick(deleteId);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}

export default CoursesCard;
