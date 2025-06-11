import BlogCard from "../../../comman/components/blogCard";
import BlogHomeArticleCard from "../../comoponents/blogHomeArticleCard";

const BlogHomeBlogsSection = ({
  category,
  blogs,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="relative z-10">
      <section className="dark:bg-gray-900 relative px-4 md:px-12 py-5 pb-16 mx-auto">
        <div className="mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1">
          {/* Category Selection - Centered & Scrollable on Overflow */}
          <div className="w-full flex justify-center">
            <div className="flex gap-4 items-center py-4 px-2 max-w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-4 mx-auto">
                <button
                  className={`whitespace-nowrap flex-shrink-0 px-5 py-2 rounded-lg border-2 ${
                    selectedCategory === "all"
                      ? "bg-gray-primary text-white border-none"
                      : "bg-white text-gray-primary border-gray-600 hover:bg-gray-primary hover:text-white"
                  }`}
                  onClick={() => onCategoryChange("all")}
                >
                  All Posts
                </button>

                {category.map((data, i) => (
                  <button
                    key={i}
                    className={`whitespace-nowrap flex-shrink-0 px-5 py-2 rounded-lg border-2 ${
                      selectedCategory === data._id
                        ? "bg-gray-primary text-white border-none"
                        : "bg-white text-gray-primary border-gray-600 hover:bg-gray-primary hover:text-white"
                    }`}
                    onClick={() => onCategoryChange(data._id)}
                  >
                    {data?.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Articles */}
          <div className="grid mb-5 grid-cols-1 pt-5 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {blogs.length > 0 ? (
              blogs.map((data, index) => (
                <BlogCard key={index} article={data} />
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">
                No blogs available.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogHomeBlogsSection;
