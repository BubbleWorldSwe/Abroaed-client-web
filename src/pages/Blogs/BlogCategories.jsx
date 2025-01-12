
import { useNavigate } from "react-router-dom";
import dark from "../../assets/dark.png"

const BlogCategories = ({ categoryName }) => {
  return (
    <div>
      <section className=" dark:bg-gray-900 relative">
        <div className="py-2 px-4 mx-auto  max-w-screen-2xl lg:py-4   dark:bg-gray-800 antialiased">
          <div className="flex justify-between ">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              {categoryName}
            </h2>
            <div className=" ">
              <a
                href={`/blog/category/${categoryName}`} // Corrected template literal usage
                type="submit"
                className="flex items-center justify-center gap-2 py-3 px-5 mt-4 text-md font-bold text-gray-600 bg-yellow-200 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
              >
                View All
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
          <div className="py-10">
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
              {Array(3).fill().map((_, index) => (
                <div
                  key={index}
                  className="max-w-full bg-white border border-gray-200 rounded-lg shadow-3xl dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full h-56 object-cover"
                      src={dark}
                      alt={'name'}
                    />
                  </a>
                  <div className="p-5">
                    <div className="flex justify-between align-middle">
                      <p className="text-base font-inter text-gray-700">University name</p>
                    </div>
                    <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex justify-between align-middle">
                      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        Undergraduate
                      </p>

                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default BlogCategories;