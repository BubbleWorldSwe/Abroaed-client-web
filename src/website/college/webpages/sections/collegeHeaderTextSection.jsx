import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const CollegeHeaderTextSection = () => {
  return (
    <div className="relative">
      <div className=" relative z-10">
        <section className="dark:bg-gray-900">
          <div className="pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden"
            >
              <SectionMainHeader className="mb-4">
                Choosing the Right College Made Easy at ABROAED
              </SectionMainHeader>
              <PrimaryBodyText className={""}>
                Selecting the perfect college is one of the most important steps
                when planning to study abroad, and it can sometimes feel
                overwhelming. With so many options to consider—from courses and
                campus facilities to location, affordability, and student
                support—making the right choice is crucial. That’s why at
                ABROAED, we simplify the process for you, helping you find the
                best college fit even before you start your journey!
              </PrimaryBodyText>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollegeHeaderTextSection;
