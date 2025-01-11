

const BlogTranding = () => {
  return (
    <div>
      <section className=" dark:bg-gray-900 relative">
        <div className="py-2   w-full lg:py-16   dark:bg-gray-800 antialiased  relative z-20">
          <aside
            aria-label="Related articles"
            className="py-8 lg:py-24  w-full dark:bg-gray-800 antialiased"
          >
            <div className="px-4 mx-auto max-w-screen-2xl flex justify-between">
              <div className="w-3/4">
                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                  Trending Now
                </h2>
                <article className="flex mb-8">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                      className="mr-5 w-32 h-32 max-w-fullalign-middle rounded-full"
                      alt="Image 1"
                    />
                  </a>
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">Our first office</a>
                    </h2>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Over the past year, Volosoft has undergone many changes! After
                      months of preparation.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                      Read in 2 minutes
                    </a>
                  </div>
                </article>
                <article className="flex mb-8">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                      className="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
                      alt="Image 2"
                    />
                  </a>
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">Enterprise design tips</a>
                    </h2>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Over the past year, Volosoft has undergone many changes! After
                      months of preparation.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                      Read in 12 minutes
                    </a>
                  </div>
                </article>
                <article className="flex">
                  <a href="#" className="shrink-0">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                      className="mr-5 w-32 h-32 max-w-full align-middle rounded-full"
                      alt="Image 3"
                    />
                  </a>
                  <div className="flex flex-col justify-center">
                    <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      <a href="#">We partnered up with Google</a>
                    </h2>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Over the past year, Volosoft has undergone many changes! After
                      months of preparation.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                      Read in 8 minutes
                    </a>
                  </div>
                </article>
              </div>
              <div className=" w-1/4 p-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">
                  Latest news
                </h4>
                <div className="mb-6">
                  <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    Our first office
                  </h5>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes! After
                    months of preparation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    Read in 9 minutes
                  </a>
                </div>
                <div className="mb-6">
                  <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    Enterprise Design tips
                  </h5>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes! After
                    months of preparation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    Read in 14 minutes
                  </a>
                </div>
                <div className="mb-6">
                  <h5 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white">
                    Our first project with React
                  </h5>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Over the past year, Volosoft has undergone many changes! After
                    months of preparation.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    Read in 4 minutes
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>

      </section>
    </div>
  )
}

export default BlogTranding;