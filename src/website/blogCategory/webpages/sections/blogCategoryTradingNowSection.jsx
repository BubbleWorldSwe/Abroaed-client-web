
const BlogCategoryTradingNowSection = () => {

    const blogPosts = [
        { id: 1, title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet" },
        { id: 2, title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet" },
        { id: 3, title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet" },
        { id: 4, title: "Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet" },
    ];
    return (
        <div>
            <div className="relative z-10">
                <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
                    <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
                        <aside
                            aria-label="Related articles"
                            className="  dark:bg-gray-800 antialiased"
                        >
                            <div className="px-4 mx-auto  flex justify-between">
                                <div className="w-3/4">
                                    <h2 className="mb-8 text-[45px] font-extrabold text-[#27272A] ">
                                        Trending Now in
                                    </h2>
                                    <article className="flex gap-5 mb-8">
                                        <div className="w-2/5 flex-shrink-0  rounded-xl">
                                            <img
                                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png"
                                                className=" object-cover h-60 w-full rounded-xl "
                                                alt="Image 1"
                                            />
                                        </div>
                                        <div className="flex flex-col  p-2">
                                            <p className="mb-2 text-sm font-semibold  text-[#52525B] dark:text-white">
                                                Blog Category • Date • Time To Read
                                            </p>
                                            <h2 className="mb-1 text-[#27272A] leading-tight  text-[22px] font-semibold dark:text-gray-400">
                                                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                                                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                                            </h2>
                                            <p

                                                className="text-base font-normal text-[#71717A]"
                                            >
                                                One line hook/ brief of the article.
                                            </p>
                                        </div>
                                    </article>
                                    <article className="flex gap-5 mb-8">
                                        <div className="w-2/5 flex-shrink-0  rounded-xl">
                                            <img
                                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png"
                                                className=" object-cover h-60 w-full rounded-xl "
                                                alt="Image 2"
                                            />
                                        </div>
                                        <div className="flex flex-col  p-2">
                                            <p className="mb-2 text-sm font-semibold  text-[#52525B] dark:text-white">
                                                Blog Category • Date • Time To Read
                                            </p>
                                            <h2 className="mb-1 text-[#27272A] leading-tight text-[22px] font-semibold dark:text-gray-400">
                                                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                                                Dolor Sit Amet
                                            </h2>
                                            <p

                                                className="text-base font-normal text-[#71717A]"
                                            >
                                                One line hook/ brief of the article.
                                            </p>
                                        </div>
                                    </article>
                                    <article className="flex gap-5 mb-8">
                                        <div className="w-2/5 flex-shrink-0  rounded-xl">
                                            <img
                                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png"
                                                className=" object-cover h-60 w-full rounded-xl "
                                                alt="Image 3"
                                            />
                                        </div>
                                        <div className="flex flex-col  p-2">
                                            <p className="mb-2 text-sm font-semibold  text-[#52525B] dark:text-white">
                                                Blog Category • Date • Time To Read
                                            </p>
                                            <h2 className="mb-1 text-[#27272A] leading-tight text-[22px] font-semibold dark:text-gray-400">
                                                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                                                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
                                            </h2>
                                            <p

                                                className="text-base font-normal text-[#71717A]"
                                            >
                                                One line hook/ brief of the article.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className=" w-1/4 px-6 py-5 mb-6 rounded-xl shadow-lg border border-gray-200 bg-white">
                                    <h3 className="mb-4 text-[32px] font-bold text-[#27272A] dark:text-white ">
                                        Most Popular
                                    </h3>
                                    <div>
                                        {blogPosts.map((post) => (
                                            <div key={post.id} className="border-b pb-4 mb-4">
                                                <p className="text-[#52525B] font-semibold text-sm mb-2">Date • Time To Read</p>
                                                <div className="flex items-center text-[18px] text-[#27272A] font-semibold space-x-3">
                                                    <span className="text-lg font-semibold">{post.id}</span>
                                                    <p className="font-semibold">{post.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </aside>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default BlogCategoryTradingNowSection