/* eslint-disable no-constant-condition */
import { useState } from "react";
import TextEditer from "../components/textEditer";

const BlogsDetails = () => {
  const [text, setText] = useState("Lorem ipsum...");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col ">
      <section className=" py-3 sm:py-5 flex-grow">
        <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative  sm:rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold text-xl">How to prepare for IELTS</div>
            <div className="space-x-2">
              <button className="px-4 py-2 bg-gray-200 rounded-lg">
                Preview
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Save Draft
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
                Publish
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500 mb-4">
            Last Updated Feb 21, 2025
          </div>
          <TextEditer />

          <div className="flex justify-between text-sm text-gray-400">
            <span>100 words</span>
            <span>Draft</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsDetails;
