/* eslint-disable react/prop-types */
import { Edit, EllipsisVertical, Eye, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { setSelectedCollege } from "../../../redux/actions/collegeActions";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { TableNoData } from "../../../commons/components/table/tableNoData";

const CollegeTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
  onUpdate,
}) => {
  const dispatch = useDispatch();
  const { colleges, totalPages } = useSelector((state) => state.colleges);
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { isWriteAccess } = useSelector((state) => state.auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const handleSubmit = (status, id) => {
    try {
      onUpdate({ status: status }, id);
      setDropdownVisible(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
  };

  const handleViewDetails = (college) => {
    try {
      dispatch(setSelectedCollege(college));
      navigate(`/admin/colleges/${encodeURIComponent(college._id)}`, {
        state: college,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <CheckboxField
                onClick={(e) => e.stopPropagation()}
                id={`checkbox-college-all`}
                htmlFor={`checkbox-college-all`}
              />
            </th>
            <th scope="col" className="px-4 py-3">
              College Name
            </th>
            <th scope="col" className="px-4 py-3">
              Location
            </th>

            <th scope="col" className="px-4 py-3">
              Website
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3">
              Entity Type
            </th>

            <th scope="col" className="px-4 py-3"></th>
          </tr>
        </thead>

        <tbody>
          {colleges?.length > 0 ? (
            colleges?.map(
              (item) =>
                item?.index === currentPage &&
                item?.data.map((college, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-3 w-4">
                      <CheckboxField
                        onClick={(e) => e.stopPropagation()}
                        id={`checkbox-college-${index}`}
                        htmlFor={`checkbox-college-${index}`}
                      />
                    </td>

                    <th
                      scope="row"
                      className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {college.name}
                    </th>

                    <td className="px-4 py-3">
                      {college.city}, {college?.destinationId?.countryId?.name}
                    </td>

                    <td className="px-4 py-3">
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {college.website}
                      </a>
                    </td>
                    <td className="px-4 py-3">{college?.entityType}</td>
                    <td className="px-4 py-3">
                      {college?.status === "draft" ? "Draft" : "Published"}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="focus:outline-none"
                        onClick={(e) => handleDropdownToggle(e, index)}
                      >
                        <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      </button>
                      {dropdownVisible === index && (
                        <div
                          ref={dropdownRef}
                          className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${
                            dropdownDirection === "up"
                              ? "bottom-full mb-2"
                              : "mt-2"
                          }`}
                        >
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <button
                                type="button"
                                onClick={() => handleViewDetails(college)}
                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Eye className="w-5 h-5" />
                                <span>View Details</span>
                              </button>
                            </li>
                            {isWriteAccess && (
                              <>
                                <li>
                                  <button
                                    onClick={() =>
                                      handleSubmit(
                                        college?.status === "draft"
                                          ? "publish"
                                          : "draft",
                                        college._id
                                      )
                                    }
                                    className="flex items-center gap-2 py-2 px-4 dark:hover:bg-gray-600"
                                  >
                                    <Edit className="w-4 h-4" />
                                    <span>
                                      {college?.status === "draft"
                                        ? "Publish Page"
                                        : "Withdraw Page"}
                                    </span>
                                  </button>
                                </li>
                                <li>
                                  <button
                                    type="button"
                                    /*  onClick={() => {
                                handleDelete(college._id);
                                setDropdownVisible(null);
                              }} */
                                    onClick={() => {
                                      setDeleteId(college._id);
                                      setIsModalOpen(!isModalOpen);
                                      //setDropdownVisible(null);
                                    }}
                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete</span>
                                  </button>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
            )
          ) : (
            <TableNoData colSpan={8} />
          )}
        </tbody>
        <tfoot className="w-full">
          <tr className="bg-gray-200 dark:bg-gray-700 dark:text-gray-400"></tr>
        </tfoot>
        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={colleges}
          colSpan={8}
        />
      </table>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading="Delete!"
        onDelete={() => {
          handleDelete(deleteId);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default CollegeTable;
