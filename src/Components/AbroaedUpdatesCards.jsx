
import image from "../assets/dark.png";


function AbroadUpdatesCards() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative">
        <div className="py-8 px-4 mx-auto  max-w-screen-2xl lg:py-24 dark:bg-gray-800 antialiased  relative z-20">
          <div className="flex flex-col items-start justify-center ">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
              Latest Updates
            </h2>
            <p>Laborum amet veniam proident non officia ullamco ullamco quis.</p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto max-w-screen-2xl">
            <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
              <a href="#">
                <img
                  className="mb-5 rounded-lg"
                  src={image}

                  alt="office laptop working"
                />
              </a>
              {/* <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3> */}
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div className=" text-end">

                <button
                  type="submit"
                  className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                >
                  Read
                </button>
              </div>
            </article>
            <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
              <a href="#">
                <img
                  className="mb-5 rounded-lg"
                  src={image}

                  alt="office laptop working"
                />
              </a>
              {/* <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3> */}
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div className=" text-end">

                <button
                  type="submit"
                  className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                >
                  Read
                </button>
              </div>
            </article>
            <article className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
              <a href="#">
                <img
                  className="mb-5 rounded-lg"
                  src={image}

                  alt="office laptop working"
                />
              </a>
              {/* <div className="flex items-center mb-3 space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Leos avatar"
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Aug 15, 2021 · 16 min read
                </div>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
              <a href="#">Our first office</a>
            </h3> */}
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div className=" text-end">

                <button
                  type="submit"
                  className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                >
                  Read
                </button>
              </div>
            </article>
            {/* Repeat other articles */}
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default AbroadUpdatesCards;