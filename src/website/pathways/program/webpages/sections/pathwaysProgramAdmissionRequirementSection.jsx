import check_circle from '../../../../../assets/check_circle.png'

const PathwaysProgramAdmissionRequirementSection = () => {
    return (
        <div className="relative ">
            <section className=" dark:bg-gray-900 relative px-8 mx-auto">
                <div className="gap-8 items-center px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-5 lg:px-6">
                    <div className=" dark:text-gray-400">
                        <h2 className={`mb-2 text-[45px]  font-extrabold text-gray-primary dark:text-white`}>
                            Admission Requirements
                        </h2>
                        <p className={`text-gray-primary font-semibold text-[22px]`}>
                            Here are the major requirements to study in the USA, which you need to ensure while applying to a USA university:            </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  ">
                        {/* Top Row: 3 Cards */}
                        {Array(6).fill().map((_, idx) => (
                            <div
                                key={idx}
                                className="flex items-center space-x-4 p-1">


                                <div className="flex space-x-8 justify-between">
                                    <img
                                        className=" object-contain"
                                        src={check_circle}
                                        alt={""}
                                    />

                                    <p className="  text-[#52525B] text-[20px] font-normal  dark:text-gray-400 py-1">

                                        ACT/SAT/LSAT for UG programs, GMAT/GRE scores for PG programs
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PathwaysProgramAdmissionRequirementSection