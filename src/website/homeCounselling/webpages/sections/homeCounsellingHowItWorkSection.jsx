import { steps } from "../../data"
import vectorRightRing from "../../../../assets/vectorRightRing.png"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import { motion } from "framer-motion";

const HomeCounsellingHowItWork = () => {
    return (
        <div className="relative">
            <div className=" relative  z-10">
                <section className="dark:bg-gray-900">
                    <div className="pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="overflow-hidden"
                        >
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
                        </motion.div>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 ">
                            {steps.map((step) => (
                                <div
                                    key={step.step}
                                    className="flex relative flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-lg  pointer-events-none"
                                        style={{
                                            left: "auto",
                                            right: 0,
                                            width: "70%",
                                            height: "100%",
                                        }}
                                    ></div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <h5 className="mb-2 text-[24px] md:text-[32px] font-bold tracking-tight text-[#FFFFFF]">
                                            {step.heading}
                                        </h5>
                                        <p className="font-normal text-white text-sm md:text-base dark:text-gray-400">
                                            {step.description}
                                        </p>
                                    </motion.div>
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