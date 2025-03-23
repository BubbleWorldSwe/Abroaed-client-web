import { COLORS } from "../../../../../constants/colors"


function PathwaysProgramEligibilityCriteria() {
    return (
        <div className="relative">
            <section className="px-10  mx-auto">
                <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl mt-5">
                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="mb-2 text-[45px]  font-extrabold text-gray-900 dark:text-white">
                            Eligibility Criteria
                        </h2>
                        <div className=" border-t border-gray-300"></div>
                        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10  py-10">
                            {Array(2).fill().map((_, index) => (
                                <div
                                    key={index}
                                    className=" bg-white border py-2 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <div className="p-5">

                                        <h5 className={`mb-5 text-[32px]  font-bold tracking-tight text-[${COLORS.GRAY_PRIMARY}] dark:text-white`}>
                                            {/* {item.name} */}
                                            University Name
                                        </h5>
                                        <div className="mb-2 px-6 ">
                                            <div>
                                                <ul className="list-disc text-[16px] text-[#52525B] font-normal ">
                                                    <li className="mb-2">
                                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere.
                                                    </li>
                                                    <li>
                                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere.
                                                    </li>
                                                </ul>
                                            </div>
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

export default PathwaysProgramEligibilityCriteria