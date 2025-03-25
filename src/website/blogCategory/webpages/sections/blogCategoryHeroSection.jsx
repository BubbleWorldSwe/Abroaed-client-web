
const BlogCategoryHeroSection = () => {
    return (
        <div className="">
            <div
                className="absolute top-0 left-0 right-0 p-28 z-0"
                style={{
                    background: `linear-gradient(to bottom, rgba(255, 252, 194, 1), rgba(255, 252, 194, 0.8),rgba(255, 252, 194, 0.1))`,
                }}
            ></div>
            <div className=" px-14 mx-auto rounded-lg">
                <article
                    className="relative w-full h-screen bg-cover bg-center rounded-lg "
                    style={{
                        backgroundImage:
                            "url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png')",
                    }}
                >
                    {/* Overlay for the background image */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

                    {/* Content Box */}
                    <div className="absolute bottom-0 rounded-tr-xl rounded-bl-lg left-0  z-10 p-6 bg-white text-black max-w-6xl  shadow-lg ">
                        {/* Author Details */}
                        <div className="flex items-center mb-2 space-x-2">

                            <div className="font-medium">
                                <div className="text-sm font-normal text-gray-500">
                                    Aug 15, 2021 · 16 min read
                                </div>
                            </div>
                        </div>
                        {/* Title */}
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">
                            <a href="#" className={`text-[36px] text-gray-primary font-extrabold`}>
                                Blog Title: Lorem Ipsum Dolor Sit Amet, Lorem Ispum Dolor Sit Amet
                            </a>
                        </h3>
                        {/* Description */}
                        <p className="mb-4  font-normal text-[#71717A] text-base ">
                            Over the past year, Volosoft has undergone many changes! After
                            months of preparation and some hard work, we moved to our new
                            office.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default BlogCategoryHeroSection