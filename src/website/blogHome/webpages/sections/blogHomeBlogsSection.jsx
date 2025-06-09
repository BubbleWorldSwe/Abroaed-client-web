import BlogCard from "../../../comman/components/blogCard";
import BlogHomeArticleCard from "../../comoponents/blogHomeArticleCard";

const BlogHomeBlogsSection = ({
  category,
  blogs,
  selectedCategory,
  onCategoryChange,
}) => {
  console.log(selectedCategory);
  return (
    <div className="relative z-10">
      <section className="dark:bg-gray-900 relative px-12 py-5 pb-16 mx-auto">
        <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
          {/* Category Selection */}
          <div className="w-full flex justify-center gap-5 items-center py-5">
            <button
              className={`px-5 py-2 rounded-lg border-2 ${
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
                className={`px-5 py-2 rounded-lg border-2 ${
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

          {/* Blog Articles */}
          <div className="grid mb-5 grid-cols-1 pt-5 gap-8 sm:grid-cols-2 xl:grid-cols-3 ">
            {blogs.length > 0 ? (
              blogs.map((data, index) => (
                <BlogCard key={index} article={data} />
              ))
            ) : (
              <p className="text-center text-gray-400">No blogs available.</p>
            )}
          </div>

          {/*   <div className="flex justify-center items-center mt-5">
            <button className="px-3 py-2 bg-gray-600 text-white hover:bg-gray-300 rounded-lg ">
              Load More
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default BlogHomeBlogsSection;
