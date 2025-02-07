/* eslint-disable react/no-unescaped-entities */

function TestPrepBatchDetaileSection() {
    return (
        <div className="relative mx-auto px-10">
            <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Batches
                    </h2>
                    <div className="my-4 border-t border-gray-300"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-3 py-10 ">
                        {Array(3).fill().map((_, index) => (
                            <div key={index} className="flex flex-col p-6 mx-auto w-full text-start text-gray-900 bg-white rounded-lg border border-gray-200 shadow-xl dark:border-gray-700 xl:p-8 dark:text-white dark:bg-gray-800">
                                <h3 className="mb-4 text-2xl font-semibold">Batch Name</h3>
                                <div className="flex justify-center items-baseline my-4">
                                    <span className="mr-2 text-4xl font-bold">₹ 29</span>
                                    {/* <span className="text-gray-500">/month</span> */}
                                </div>
                                <a href="#" className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-sm rounded-lg text-2xl px-5 py-2.5 text-center dark:focus:ring-primary-900">Enroll Now</a>
                                <div className="flex justify-between items-baseline my-4 w-9/12 ">
                                    <p className=""><strong>Duration :</strong> <span className="text-gray-500">8 months</span></p>
                                    <p className=""><strong>Seats:</strong> <span className="text-gray-500">100</span></p>
                                </div>
                                <p className="font-semibold text-lg mb-3 mt-2"> Features you'll love </p>

                                <ul role="list" className="mb-8 space-y-4 text-left">
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Individual configuration</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>No setup, monthly, or hidden fees</span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Team size: <span className="font-semibold">1 developer</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Premium support: <span className="font-semibold">6 months</span></span>
                                    </li>
                                    <li className="flex items-center space-x-3">

                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Free updates: <span className="font-semibold">6 months</span></span>
                                    </li>
                                </ul>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPrepBatchDetaileSection