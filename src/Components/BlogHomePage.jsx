import React from "react";

function BlogHomePage() {
  return (
    <div>
      <aside
        aria-label="Related articles"
        className="py-8 bg-gray-50 lg:py-16 dark:bg-gray-800 antialiased"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="w-full  justify-between items-center py-8 flex ">
            <h2 className="mb-8 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Category Name
            </h2>
            <button className="bg-yellow-300 h-[50px] hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              view all
            </button>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Flowbite enables IT to automate Apple device configuration
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">How AI is transforming your smartphone</a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Android, ChromeOS, and the future of app discovery
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
          </div>

          <div className="w-full  justify-between items-center py-8 flex ">
            <h2 className="mb-8 mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Category Name
            </h2>
            <button className="bg-yellow-300 h-[50px] hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              view all
            </button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-1.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Flowbite enables IT to automate Apple device configuration
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">How AI is transforming your smartphone</a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
            <article>
              <a href="#">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg"
                  className="mb-5 w-full max-w-full rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="#">
                  Android, ChromeOS, and the future of app discovery
                </a>
              </h2>
              <a
                href="#"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read more
              </a>
            </article>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default BlogHomePage;
