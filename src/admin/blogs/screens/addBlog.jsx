/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import TextEditer from "../components/textEditer";
import { TextInputField } from "../../../commons/components/inputFields/textInputField";
import { SelectField } from "../../../commons/components/inputFields/selectField";
import { getBlogsCategory } from "../../../api/blogsApi";

import ReactQuill from "react-quill";
import { ModalCloseButton } from "../../../commons/components/buttons/modalCloseButton";
import { ModalSubmitButton } from "../../../commons/components/buttons/modalSubmitButton";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addBlogRequest } from "../../../redux/actions/blogActions";

const AddBlog = () => {
  const [formData, setFormData] = useState({ content: "" });

  const [blogsCategory, setBlogsCategory] = useState([]);
  const dispatch = useDispatch();

  const handleChangeContent = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      content: value,
    }));
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log("e.target.name");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const addBlog = () => {
    try {
      console.log("Add");
      const { title, category, content } = formData;

      if (!title || !category || !content) {
        toast.error("Please fill out all fields.");
        return;
      }

      dispatch(addBlogRequest(formData));
      //onAddAccommodation(formData);
    } catch (error) {
      console.log(error);
    }
  };

  const publishBlog = () => {
    try {
      console.log("Add");
      const { title, category, content } = formData;

      if (!title || !category || !content) {
        toast.error("Please fill out all fields.");
        return;
      }

      dispatch(addBlogRequest({ ...formData, status: "publish" }));
      //onAddAccommodation(formData);
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchData() {
    try {
      const list = await getBlogsCategory();

      if (list.status === 200) {
        setBlogsCategory(list.data.result);
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
      <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
        <section className=" py-3 sm:py-5 flex-grow">
          <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-xl">Add New Blog</div>
              <div className="space-x-2">
                {/*    <button className="px-4 py-2 bg-gray-200 rounded-lg">
                  Preview
                </button> */}
                <button
                  onClick={addBlog}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save Draft
                </button>
                <button
                  onClick={publishBlog}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Publish
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              Last Updated Feb 21, 2025
            </div>
            <div className="w-full mx-auto my-6 p-4 border rounded-lg shadow-lg bg-white">
              <TextInputField
                label="Title"
                name="title"
                value={formData?.title}
                onChange={handleChange}
                placeholder={"Enter Title"}
              />
              <div className="my-5 mb-6">
                <SelectField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={blogsCategory.map((data) => ({
                    label: data?.name,
                    value: data?._id,
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
                  onChange={handleChangeContent}
                  className="border-none"
                  style={{
                    minHeight: "300px",
                  }}
                />
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
    </>
  );
};

export default AddBlog;
