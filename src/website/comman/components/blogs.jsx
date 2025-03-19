import { articles } from "../data";
import BlogCard from "./blogCard";

const Blogs = () => {
  return (
    <section className=" dark:bg-gray-900 relative px-10 mx-auto">
      <div className=" px-3 mx-auto py-16  max-w-screen-2xl  dark:bg-gray-800 antialiased  relative">
        <div className="flex flex-col items-start justify-center mb-10">
          <p className="font-semibold text-[#52525B] text-base dark:text-gray-400">
            The Latest
          </p>
          <h2 className=" text-[45px]  font-extrabold text-[#27272A] dark:text-white">
            Abroaed Updates
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto max-w-screen-2xl">
          {articles.map((article, idx) => (
            <BlogCard article={article} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
