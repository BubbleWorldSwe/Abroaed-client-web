/* eslint-disable react/prop-types */
import { EllipsisVertical, Eye, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDate, formatDateTime } from "../../../utils/helper";
import { TableFooter } from "../../../commons/components/table/tableFooter";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import { setSelectedLanguagePrep } from "../../../redux/actions/languagePrepsActions";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";

const LanguagePrepTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
}) => {
  const { loading, languagePreps, totalPages, total } = useSelector(
    (state) => state.languagePreps
  );

  const { isWriteAccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  const handleViewDetails = (languagePrep) => {
    dispatch(setSelectedLanguagePrep(languagePrep));
    navigate(`/admin/langPrep/${encodeURIComponent(languagePrep._id)}`, {
      state: languagePrep,
    });
  };

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
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
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Product Name
            </th>
            {/*   <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Language
            </th> */}
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Created By
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Last Updated
            </th>

            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {languagePreps?.map(
            (item) =>
              item?.index === currentPage &&
              item?.data.map((language, index) => (
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
                    {language.productName}
                  </th>

                  {/* <td className="px-4 py-3">{language.language}</td> */}
                  <td className="px-4 py-3">
                    <span className="p-1 bg-[#eaeaef]">
                      {formatDate(language.createdAt)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      rel="noopener noreferrer"
                      className="p-1 bg-[#eaeaef] hover:underline rounded"
                    >
                      {formatDateTime(language.createdAt)}
                    </a>
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
                              onClick={() => handleViewDetails(language)}
                              className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              <Eye className="w-4 h-4" />
                              <span>View Details</span>
                            </button>
                          </li>
                          {isWriteAccess && (
                            <li>
                              <button
                                type="button"
                                /*  onClick={() => {
                              handleDelete(language._id);
                              setDropdownVisible(null);
                            }} */

                                onClick={() => {
                                  setDeleteId(language._id);
                                  setIsModalOpen(!isModalOpen);
                                  //setDropdownVisible(null);
                                }}
                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                              </button>
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))
          )}
        </tbody>
        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={languagePreps}
          colSpan={6}
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
    </>
  );
};

export default LanguagePrepTable;
