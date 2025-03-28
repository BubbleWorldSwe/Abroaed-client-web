import { steps } from "../../data"
import vectorRightRing from "../../../../assets/vectorRightRing.png"
import SectionMainHeader from "../../../typographies/sectionMainHeader"
import PrimaryBodyText from "../../../typographies/primaryBodyText"

const HomeCounsellingHowItWork = () => {
    return (
        <div className="relative mx-auto px-5 md:px-12 bg-white">
            <div className="mx-auto w-full px-2 max-w-screen-2xl relative z-10">
                <section className="dark:bg-gray-900">
                    <div className="py-8 lg:py-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <SectionMainHeader className={`mb-3 md:mb-7 `}>
                                How It Works?
                            </SectionMainHeader>
                            <PrimaryBodyText className={`mb-4 `}>
                                Track work across the enterprise through an open, collaborative
                                platform. Link issues across Jira and ingest data from other
                                software development tools, so your IT support and operations
                                teams have richer contextual information to rapidly respond to
                                requests, incidents, and changes.
                            </PrimaryBodyText>
                            <PrimaryBodyText className={`mb-4 `}>
                                Deliver great service experiences fast - without the complexity of
                                traditional ITSM solutions. Accelerate critical development work,
                                eliminate toil, and deploy changes with ease.
                                Deliver great service experiences fast - without the complexity of
                                traditional ITSM solutions. Accelerate critical development work,
                                eliminate toil, and deploy changes with ease.
                            </PrimaryBodyText>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 py-5">
                            {steps.map((step) => (
                                <div
                                    key={step.step}
                                    className="flex relative flex-col gap-1 h-full w-200 p-6 bg-black border border-gray-200 rounded-lg shadow"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
                                        style={{
                                            left: "auto",
                                            right: 0,
                                            width: "70%",
                                            height: "100%",
                                        }}
                                    ></div>
                                    <div>
                                        <span className="block text-[45px] md:text-[57px] font-extrabold text-[#FFFFFF] ">
                                            {step.step}
                                        </span>
                                    </div>
                                    <h5 className="mb-2 text-[24px] md:text-[32px] font-bold tracking-tight text-[#FFFFFF]">
                                        {step.heading}
                                    </h5>
                                    <p className="font-normal text-white text-sm md:text-base dark:text-gray-400">
                                        {step.description}
                                    </p>
                                    <div className="absolute top-0 right-0">
                                        <img src={vectorRightRing} alt="vector" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
            </div>

        </div>
    )
}

export default HomeCounsellingHowItWork