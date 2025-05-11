/* eslint-disable react/prop-types */
import { cardDetails } from "../../../pathways/program/data";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { motion } from "framer-motion";

const Cards = ({ header = "", img }) => {
  return (
    <div className="w-full  relative hover:scale-[1.01] transition-all  duration-300 ease-in-out  h-[14rem] flex items-end justify-center text-center min-h-36  border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}

    >
      {/* <div
        className="absolute inset-0 bg-black  opacity-40 rounded-lg"
        style={{
          mixBlendMode: "multiply",
          // backgroundColor: 
        }}
      ></div> */}
      <div className="absolute inset-0 bg-gradient-to-l from-gray-600 to-black opacity-60 z-0 rounded-lg"></div>

      <div className="py-2 px-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="overflow-hidden"
        >
          <div className="flex">
            <h5
              className="text-[24px] md:text-[24px] font-cinzel text-white font-semibold bg-clip-text text-transparent z-10 flex  w-full "
            >
              {header}
            </h5>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

const AbroaedPlusWhyChoose = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 relative ">
        <div className=" ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <SectionMainHeader
              className={'mb-4'}
            >
              Why Choose ABROAED<sup>+</sup>?
            </SectionMainHeader>
            <PrimaryBodyText
              text={` We’re your study abroad wingman, making sure you nail every step—no
            stress, no guesswork. From unlimited home counselling and home
            tutors for English tests to guaranteed offers and killer loan rates,
            we’ve got you covered. With 24/7 support, mock interviews, and
            personalized attention in small cohorts, we ensure you’re fully
            prepared. Plus, we help you connect with alumni mentors and get
            priority admission offers.`}

            />
          </motion.div>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 mb-5 mt-10">
            {cardDetails.map((item, index) => (
              <Cards header={item.key} text={item.value} img={item.img} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbroaedPlusWhyChoose;
