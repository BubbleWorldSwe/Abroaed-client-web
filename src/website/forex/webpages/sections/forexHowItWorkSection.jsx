
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

function ForexHowItWorks() {
  return (
    <div className="relative">
      <div className=" relative z-10">
        <section className="dark:bg-gray-900">
          <div className="pt-10">
            <div className="">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="overflow-hidden"
              >
                <SectionMainHeader className={`mb-5`}>
                  How it Works?
                </SectionMainHeader>
                <PrimaryBodyText className="mb-4">
                  ABROAED  plays a pivotal role in supporting students with their financial preparations for studying abroad. Recognizing the complex financial requirements involved in student remittance and  overseas education—such as tuition payments, living expenses, travel costs, and regulatory compliance—the Forex team provides tailored currency exchange solutions designed specifically for students and their families.
                </PrimaryBodyText>
                <PrimaryBodyText className="mb-4">
                  To ensure a smooth and personalized experience, Forex works hand-in-hand with ABROAED, we are here to help break it down and make it easier. ABROAED team acts as a direct support channel, helping students navigate the foreign exchange process, from securing competitive exchange rates to choosing the right forex products like prepaid travel cards and wire transfers.              </PrimaryBodyText>
                <PrimaryBodyText className="mb-4">
                  ABROAED team ensure that students are financially prepared before they leave for their international studies. This collaboration not only simplifies the process but also offers peace of mind to students and their families—knowing they are backed by an experienced and trusted partner every step of the way.              </PrimaryBodyText>
              </motion.div>
            </div>

          </div>

        </section>
      </div>

    </div>

  );
}

export default ForexHowItWorks;