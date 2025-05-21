/* eslint-disable react/prop-types */
import {
  Edit2,
  EllipsisVertical,
  Eye,
  PaintbrushVerticalIcon,
  Trash2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { TableFooter } from "../../../commons/components/table/tableFooter";
import { CheckboxField } from "../../../commons/components/inputFields/checkboxField";
import DeleteConfirmationModal from "../../../commons/modal/deleteConfirmationModal";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, formatDateTime } from "../../../utils/helper";
import { setSelectedBlog } from "../../../redux/actions/blogActions";
import { useNavigate } from "react-router-dom";
import { TableNoData } from "../../../commons/components/table/tableNoData";
import { toast } from "react-toastify";

const BlogsTable = ({
  currentPage,
  handleNextPage,
  handlePrevPage,
  handleDelete,
  changeStatus,
}) => {
  const { isWriteAccess } = useSelector((state) => state.auth);
  const { blogs, totalPages } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownDirection, setDropdownDirection] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownVisible(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleUpdateStatus = (status, id, blog) => {
    try {
      if (status === "publish" && (!blog?.image || !blog?.content)) {
        toast.error("Add image and content to publish page");
        return;
      }
      changeStatus(id, status);
      //  onUpdate({ status: status }, id);
      //  setDropdownVisible(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditBlogs = (blog) => {
    try {
      console.log(blog);
      dispatch(setSelectedBlog(blog));

      navigate(`/admin/blogs/editBlog/${encodeURIComponent(blog._id)}`, {
        state: blog,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewBlogs = (blog) => {
    try {
      dispatch(setSelectedBlog(blog));

      navigate(`/admin/blogs/blogDetails/${encodeURIComponent(blog._id)}`, {
        state: blog,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDropdownToggle = (e, index) => {
    e.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);
    setDropdownDirection("down");
  };

  return (
    <>
      <table className="w-full border-2 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Title
            </th>
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Category
            </th>
            <th scope="col" className="px-4 py-3 min-w-[10rem]">
              Status
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Author
            </th>
            <th scope="col" className="px-4 py-3 min-w-[14rem]">
              Created At
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 ? (
            blogs.map(
              (item) =>
                item.index === currentPage &&
                item.data.map((blog, index) => (
                  <tr
                    key={index}
                    className="border-b  dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td
                      className="px-4 py-3"
                      onClick={() => handleViewBlogs(blog)}
                    >
                      {blog?.title}
                    </td>
                    <td className="px-4 py-3">{blog?.category?.name}</td>
                    <td className="px-4 py-3">
                      {blog?.status === "draft" ? "Draft" : "Published"}
                    </td>
                    <td className="px-4 py-3">
                      {blog?.createdBy
                        ? `${blog?.createdBy?.firstName} ${blog?.createdBy?.lastName}`
                        : `---`}
                    </td>
                    <td className="px-4 py-1">
                      <span className="bg-[#F3F4F6] px-2 py-1 rounded-md">
                        {formatDateTime(blog?.createdAt)}
                      </span>
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
                                onClick={() => handleViewBlogs(blog)}
                                className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                <Eye className="w-4 h-4" />
                                <span>View blog</span>
                              </button>
                            </li>
                            {isWriteAccess && (
                              <>
                                <li>
                                  <button
                                    type="button"
                                    onClick={() => handleEditBlogs(blog)}
                                    className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <Edit2 className="w-4 h-4" />
                                    <span>Edit Blog</span>
                                  </button>
                                </li>
                                <li>
                                  {blog?.status === "publish" ? (
                                    <button
                                      type="button"
                                      onClick={
                                        () =>
                                          handleUpdateStatus(
                                            "draft",
                                            blog?._id,
                                            blog
                                          )
                                        //  changeStatus(blog?._id, "draft")
                                      }
                                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      <PaintbrushVerticalIcon className="w-4 h-4" />
                                      <span>Save as Draft</span>
                                    </button>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={
                                        () =>
                                          handleUpdateStatus(
                                            "publish",
                                            blog?._id,
                                            blog
                                          )
                                        // changeStatus(blog?._id, "publish")
                                      }
                                      className="flex items-center gap-2 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      <PaintbrushVerticalIcon className="w-4 h-4" />
                                      <span>Publish Blog</span>
                                    </button>
                                  )}
                                </li>

                                <li>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setDeleteId(blog);
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
            <TableNoData colSpan={7} />
          )}
        </tbody>
        <TableFooter
          totalPages={totalPages}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          tableData={blogs}
          colSpan={7}
        />
      </table>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`Delete : ${deleteId?.title}`}
        onDelete={() => {
          handleDelete(deleteId?._id);
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default BlogsTable;
