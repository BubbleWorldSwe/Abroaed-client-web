

const BlogHoro = () => {
    return (
        <div>
            <section className=" dark:bg-gray-900 relative">
                <div
                    className="absolute top-0 left-0 right-0 p-24 z-0"
                    style={{
                        background: `linear-gradient(to bottom, rgba(34,197,94,0.5), rgba(34,197,94,0.4), rgba(255,255,255,0.1))`, // Green at the top, light yellow at the bottom
                    }}
                ></div>
                <div className="py-4 px-4 mx-auto  max-w-screen-2xl lg:py-14   dark:bg-gray-800 antialiased  relative z-20">
                    <article
                        className="relative  h-screen bg-cover bg-center rounded-lg shadow-lg border-b-4 "
                        style={{
                            backgroundImage:
                                "url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png')",
                        }}
                    >
                        {/* Overlay for the background image */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

                        {/* Content Box */}
                        <div className="absolute bottom-0 left-0 z-10 p-6 bg-white text-black max-w-lg rounded-lg shadow-lg m-4">
                            {/* Author Details */}
                            <div className="flex items-center mb-3 space-x-2">
                                <img
                                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                    alt="Jese Leos avatar"
                                />
                                <div className="font-medium">
                                    <div className="text-gray-700">Jese Leos</div>
                                    <div className="text-sm font-normal text-gray-500">
                                        Aug 15, 2021 · 16 min read
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                                <a href="#" className="hover:underline">
                                    Our first office
                                </a>
                            </h3>

                            {/* Description */}
                            <p className="mb-4 text-gray-700">
                                Over the past year, Volosoft has undergone many changes! After
                                months of preparation and some hard work, we moved to our new
                                office.
                            </p>

                            {/* Read More Link */}
                            <a
                                href="#"
                                className="inline-flex items-center font-medium text-primary-600 hover:text-primary-500"
                            >
                                Read more
                                <svg
                                    className="ml-1 w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </article>
                </div>

            </section>
        </div>
    )
}

export default BlogHoro;