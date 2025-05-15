import essentialDeveloper from "../../../../assets/essentialDeveloper.png";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";
import { motion } from "framer-motion";

function AboutUsCtaSection() {
  return (
    <div>
      <section className="bg-white">
        <div className=" rounded-lg bg-gray-100">
          <div className="mx-auto flex flex-col md:flex-row justify-between px-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}

            >
              <div className="max-w-2xl flex flex-col gap-3 py-14">
                <SecondaryTitle>
                  Did Our Story Strike a Chord?
                </SecondaryTitle >
                <PrimaryBodyText>
                  If so, we’d love to have you onboard. Join a passionate team
                  that values both expertise and dedication. Together, we can
                  shape the future of students and open doors to new possibilities
                  and experiences.
                </PrimaryBodyText>

                <a
                  href="/careers"
                  className="inline-flex mt-4 w-full md:w-1/3 items-center justify-center rounded-lg bg-yellow-primary hover:bg-gray-primary hover:text-white px-5 py-3 text-center text-base font-semibold text-black  focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Explore Oppurtunities
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}

            >
              <div className="">
                <img
                  src={essentialDeveloper}
                  alt="developer-pic"
                  className="object-cover w-96"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsCtaSection;
