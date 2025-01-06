import dark from "../../assets/dark.png"

const BlogCardsSection = () => {
    return (
        <div>
            <section className=" dark:bg-gray-900 relative">
                <div className="py-2 px-4 mx-auto  max-w-screen-2xl lg:py-3   dark:bg-gray-800 antialiased  relative z-20">
                    <div className="">
                        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
                            {Array(3).fill().map((_, index) => (
                                <div
                                    key={index}
                                    className="max-w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
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
            </section>
        </div>
    )
}

export default BlogCardsSection;