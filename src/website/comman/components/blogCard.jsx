/* eslint-disable react/prop-types */

import image from "../../../assets/dark.png";

const BlogCard = ({ article }) => {
  return (
    <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 flex flex-col h-full">
      <a href="#">
        <img
          className="mb-5 rounded-lg"
          src={image}
          alt="office laptop working"
        />
      </a>

      <div
        className="mb-3 dark:text-gray-400 line-clamp-3 flex-grow"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/*  <p className="mb-3 dark:text-gray-400">{article.content}</p> */}
      <div className="flex justify-end items-end mt-auto">
        <a
          href={`/blog/${article._id}`}
          type="submit"
          className="py-2 px-4 text-md font-bold text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
        >
          Read more
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
