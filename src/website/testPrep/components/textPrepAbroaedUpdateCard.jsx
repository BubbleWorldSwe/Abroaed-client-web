/* eslint-disable react/prop-types */

const TextPrepAbroaedUpdateCard = ({ article }) => {
  return (
    <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
      <img
        className="mb-5 rounded-lg"
        src={article.image}
        alt="office laptop working"
      />
      <p className="mb-3 text-gray-500 dark:text-gray-400">{article.content}</p>
      <div className="text-end">
        <button
          type="submit"
          className="py-3 px-3 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
        >
          Read more
        </button>
      </div>
    </article>
  );
};

export default TextPrepAbroaedUpdateCard;
