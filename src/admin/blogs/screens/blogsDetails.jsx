import { useDispatch, useSelector } from "react-redux";
import BlogImageSection from "../components/blogImgSection";
import { uploadBlogImageRequest } from "../../../redux/actions/blogActions";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
import { useState } from "react";
import ImagePreviewModalContent from "../../../commons/modal/imagePreviewModalContent";

const BlogsDetails = () => {
  const blogDetails = useSelector((state) => state?.blogs?.selectedBlog);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  return (
    <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
      <section className="py-3 sm:py-5 flex-grow">
        <div className="flex py-2 flex-col mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative sm:rounded-lg">
          <div className="w-full mx-auto my-6 border rounded-lg shadow-lg bg-white overflow-hidden">
            <div className="relative w-full h-64 bg-gradient-to-r from-yellow-200 to-blue-500 cursor-pointer">
              {blogDetails?.image && (
                <img
                  src={`${IMAGE_BASE_URL}/${blogDetails?.image}`}
                  alt="Blog"
                  className="w-full h-full object-cover"
                  onClick={() => setShowPreviewModal(true)}
                />
              )}
              {showPreviewModal && (
                <ImagePreviewModalContent
                  // imagePreview={imagePreview}
                  imageUrl={blogDetails?.image}
                  onClose={() => setShowPreviewModal(false)}
                />
              )}
            </div>
            <div className="p-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {blogDetails.title}
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Category: {blogDetails.category?.name}
              </p>
              <hr className="mb-4" />

              <div
                className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogDetails.content }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsDetails;
