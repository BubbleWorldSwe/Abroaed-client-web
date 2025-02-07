import { articles } from "../../home/data";

function AbroaedUpdatesSection() {
  return (

    <section className=" dark:bg-gray-900 relative px-10 mx-auto">
      <div className="py-8 px-4 mx-auto  max-w-screen-2xl lg:py-24 dark:bg-gray-800 antialiased  relative z-20">
        <div className="flex flex-col items-start justify-center ">
          <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Latest Updates
          </h2>
          <p>Laborum amet veniam proident non officia ullamco ullamco quis.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto max-w-screen-2xl">
          {articles.map((article, idx) => (
            <article key={idx} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
              <a href="#">
                <img
                  className="mb-5 rounded-lg"
                  src={article.image}
                  alt="office laptop working"
                />
              </a>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                {article.content}
              </p>
              <div className="text-end">
                <button
                  type="submit"
                  className="py-3 px-3 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

  );
}

export default AbroaedUpdatesSection;