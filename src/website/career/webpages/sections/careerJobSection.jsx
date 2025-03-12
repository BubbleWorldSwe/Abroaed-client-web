/* eslint-disable react/no-unescaped-entities */

function CareerJobSection() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 relative py-16  px-14 mx-auto">
                <div className="py-7 px-1 mx-auto max-w-screen-2xl   relative z-10">
                    <h1 className="mb-6 text-[45px] font-extrabold  text-[#27272A]  dark:text-white">
                        We'd Love to work with someone like you!
                    </h1>
                    <h2 className=" text-[32px] font-bold  text-[#52525B]   dark:text-white">
                        Category Name
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {Array(6).fill().map((_, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <h5 className="mb-2 text-[32px] font-bold tracking-tight text-gray-900 dark:text-white">
                                Job Title

                            </h5>
                            <p className="font-normal text-gray-700 text-sm dark:text-gray-400">

                            </p>
                            <p>Location, India</p>
                        </a>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default CareerJobSection