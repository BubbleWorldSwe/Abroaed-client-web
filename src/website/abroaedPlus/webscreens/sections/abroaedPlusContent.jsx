import PrimaryBodyText from "../../../styleComponents/primaryBodyText"
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import { motion } from "framer-motion";

const AbroaedPlusContent = () => {
    return (
        <div className="relative z-10">
            <section className="dark:bg-gray-900 relative pt-14">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className=" ">
                        <SectionMainHeader
                            className={'mb-4'}
                        >
                            About ABROAED<sup>+</sup>
                        </SectionMainHeader>
                        <PrimaryBodyText
                            text=""
                            className={``}
                        >
                            ABROAED<sup>+</sup> is your ultimate study abroad companion, offering end-to-end support to simplify your global education journey. From choosing the right country, university, and course to acing IELTS/PTE/TOEFL, securing loans, and managing finances, we’ve got you covered. Avoid hidden costs (up to ₹4 Lakh+), confusing paperwork, and stress. With expert guidance, personalized plans, and a supportive student community, ABROAED<sup>+</sup> ensures your journey is smooth, saving you time, money, and effort. Your dream university awaits!
                        </PrimaryBodyText>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

export default AbroaedPlusContent