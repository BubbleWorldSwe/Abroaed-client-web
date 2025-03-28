import { useSelector } from "react-redux";

const BlogsDetails = () => {
  const blogDetails = useSelector((state) => state?.blogs?.selectedBlog);

  return (
    <div className="min-h-screen font-rethink bg-white dark:bg-gray-900 flex flex-col">
      <section className="py-3 sm:py-5 flex-grow">
        <div className="flex py-2 flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative sm:rounded-lg">
          <div className="w-full mx-auto my-6 p-4 border rounded-lg shadow-lg bg-white">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {blogDetails.title}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Category: {blogDetails.category?.name}
            </p>
            <hr className="mb-4" />
            <div className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
              {blogDetails.content}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsDetails;
