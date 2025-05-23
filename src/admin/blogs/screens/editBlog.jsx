import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import {
  editBlogRequest,
  uploadBlogImageRequest,
} from "../../../redux/actions/blogActions";
import { getBlogsCategory } from "../../../api/blogsApi";
import { useNavigate } from "react-router-dom";
import BlogImageSection from "../components/blogImgSection";
import ActivityLoader from "../../../commons/components/loader/activityLoader";

const EditBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogDetails = useSelector((state) => state?.blogs?.selectedBlog);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    status: "",
  });
  const [blogsCategory, setBlogsCategory] = useState([]);
  const { loading } = useSelector((state) => state.blogs);
  async function onUploadImage(data) {
    try {
      // console.log(data);
      dispatch(
        uploadBlogImageRequest(blogDetails._id, {
          files: data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const handleSubmit = () => {
    const { title, category, content } = formData;
    if (!title || !category || !content) {
      toast.error("Please fill out all fields.");
      return;
    }
    dispatch(editBlogRequest(blogDetails?._id, formData));
  };

  const publishBlog = (status) => {
    console.log("status", status);
    try {
      if (
        status === "publish" &&
        (!blogDetails?.image || !blogDetails?.content)
      ) {
        toast.error("Add image and content to publish page");
        return;
      }

      dispatch(editBlogRequest(blogDetails?._id, { status }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (blogDetails) {
      setFormData({
        title: blogDetails.title || "",
        category: blogDetails.category?._id || blogDetails.category,
        content: blogDetails.content || "",
        status: blogDetails.status || "",
      });
    }
  }, [blogDetails]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getBlogsCategory();
        if (list.status === 200) {
          setBlogsCategory(list.data.result);
        }
      } catch (error) {
        console.error("Error fetching blog categories:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
        <section className="py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative sm:rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-xl">Edit Blog</div>
              <div className="space-x-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                  onClick={() =>
                    navigate(
                      `/admin/blogs/blogDetails/${encodeURIComponent(
                        blogDetails._id
                      )}`,
                      {
                        state: blogDetails,
                      }
                    )
                  }
                >
                  Preview
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save Blog
                </button>
                {blogDetails.status === "draft" ? (
                  <button
                    onClick={() => publishBlog("publish")}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Publish Blog
                  </button>
                ) : (
                  <button
                    onClick={() => publishBlog("draft")}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Save as Draft
                  </button>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Last Updated{" "}
              {new Date(blogDetails.updatedAt).toLocaleDateString()}
            </div>
            <div className="w-full mx-auto my-6 border rounded-lg shadow-lg bg-white">
              <BlogImageSection onUploadImage={onUploadImage} />
              <div className="p-4">
                <TextInputField
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                  type={"text"}
                />
                <div className="my-5 mb-6">
                  <SelectField
                    label="Category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    options={blogsCategory.map((data) => ({
                      label: data.name,
                      value: data._id,
                    }))}
                    required
                  />
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <div className="rounded-lg border-none bg-[#F4F4F5] p-2">
                  <ReactQuill
                    value={formData.content}
                    onChange={handleContentChange}
                    className="border-none"
                    style={{ minHeight: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>
        {`
          .ql-toolbar {
            background-color: F4F4F5 !important; 
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border-width: 0px !important;
          }
          
          .ql-container {
            border: none !important;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
          
          .ql-editor {
            background-color: white !important;  
            min-height: 300px;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 10px;
          }
        `}
      </style>
      <ActivityLoader loading={loading} />
    </>
  );
};

export default EditBlog;
