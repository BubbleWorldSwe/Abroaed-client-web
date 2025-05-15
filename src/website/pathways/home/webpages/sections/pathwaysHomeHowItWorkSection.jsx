import vectorRightRing from "../../../../../assets/vectorRightRing.png"
import PrimaryBodyText from "../../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../../styleComponents/sectionMainHeader";
import { steps } from "../../data";
import { motion } from "framer-motion";

const PathwaysHomeHowItWorkSection = () => {
    return (
        <div className="relative ">
            <div className="w-full relative z-10">
                <section>
                    <div className="pt-10">
                        <div >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="overflow-hidden"
                            >
                                <SectionMainHeader className={`mb-2 md:mb-6`}>
                                    What is Pathways Program?
                                </SectionMainHeader>
                                <PrimaryBodyText>
                                    At ABROAED, we offer specialized pathway programs that begin in India (both online and onsite) and seamlessly transition to partner universities abroad. These structured programs are designed to provide students with a smooth and strategic route to international education. By starting their academic journey in India, students can build a strong foundation while gradually adapting to global academic standards, language proficiency, and cultural nuances.
                                </PrimaryBodyText>
                                <PrimaryBodyText className="mt-2">
                                    Our pathway solutions also offer a cost-effective approach, significantly reducing the financial burden of studying abroad. With personalized guidance and partnerships with top institutions worldwide, ABROAED ensures that each student is fully prepared—academically and emotionally—for their international transition.
                                </PrimaryBodyText>
                                <PrimaryBodyText className="mt-2 font-semibold text-[20px]">
                                    Stay Tuned, Coming Soon!
                                </PrimaryBodyText>
                            </motion.div>
                        </div>
                        <div className="mt-4 md:mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 ">
                            {steps.map((step) => (
                                <div
                                    key={step.step}
                                    className="flex hover:scale-[1.01] transition-all ease-in-out delay-100 relative flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                                >
                                    <div
                                        className="absolute rounded-lg inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
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
                                        className=""
                                    >
                                        <h5 className="mb-2 text-[24px] md:text-[32px] font-bold tracking-tight text-[#FFFFFF]">
                                            {step.heading}
                                        </h5>
                                        <p className="font-normal text-white text-base dark:text-gray-400">
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

export default PathwaysHomeHowItWorkSection