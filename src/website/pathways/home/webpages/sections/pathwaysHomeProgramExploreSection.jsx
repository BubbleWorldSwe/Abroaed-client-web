import dark from '../../../../../assets/dark.png'

const PathwayHomeProgramExplore = () => {
    return (
        <div className="relative mx-auto px-10 ">
            <div className="mx-auto w-full px-2 my-10 max-w-screen-2xl relative z-10">
                <section className="dark:bg-gray-900">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Explore Top Programs
                    </h2>
                    <div className="py-10">
                        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                            {Array(3).fill().map((_, index) => (
                                <div
                                    key={index}
                                    className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
                                            <div className="">
                                                <p>University name</p>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    Luxury Apartment

                                                </h5>
                                            </div>
                                            <div>
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z" />
                                                </svg>

                                            </div>
                                        </div>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere.
                                        </p>
                                        <div className="flex justify-between align-middle">
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                <strong>Program</strong> Undergraduate
                                            </p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                <strong>Duration</strong> 24 months
                                            </p>
                                        </div>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            <strong>Intake</strong> January
                                        </p>
                                        <div >
                                            <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="py-2.5 w-full px-5 me-2 mb-2 text font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-700 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Enquire Now</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" text-center">
                        <button
                            type="submit"
                            className="py-3 px-10 text-md font-900 mt-4 text-center text-black rounded-lg bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                        >
                            View All
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PathwayHomeProgramExplore;