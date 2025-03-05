/* eslint-disable react/no-unescaped-entities */

import { benefits } from "../../data"


function CareerJobSection() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 relative py-16  px-14 mx-auto">
                <div className="py-10 px-1 mx-auto max-w-screen-2xl   relative z-10">
                    <h1 className="mb-3 text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-white">
                        We'd Love to work with someone like you!
                    </h1>
                    <h2 className=" text-xl font-semibold leading-tight text-gray-500  lg:text-2xl dark:text-white">
                        Category Name
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {benefit.heading}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {benefit.text}
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