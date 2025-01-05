import React from 'react'

const WorkOpportunities = () => {
    return (
        <div className="relative ">


            <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <div className='py-10'>
                        <h2 className="mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Work Opportunities in United Kingdom
                        </h2>
                        <p className='mb-10'>
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                        </p>

                    </div>
                    <div className='py-5'>

                        <h3 className="mb-2  text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Part-Time Work Opportunities
                        </h3>
                        <p>
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                        </p>
                    </div>
                    <div className='py-5'>

                        <h3 className="mb-2 mt-5 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
                            Post Study Work Opportunities
                        </h3>
                        <p>
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                            Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 ">
                        {Array(12).fill().map((_, index) => (
                            <div
                                key={index}
                                className="w-full  bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                            >
                                <div className="p-5">
                                    <div className="flex justify-between">
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            Profession Name
                                        </h5>
                                    </div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Average Yearly Salary
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WorkOpportunities;