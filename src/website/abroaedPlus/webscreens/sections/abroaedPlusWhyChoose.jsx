/* eslint-disable react/prop-types */
import { cardDetails } from "../../../pathways/program/data";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

const Cards = ({ header = "", img }) => {
  return (
    <div className="w-full  relative hover:scale-[1.01] transition-all duration-300 ease-in-out  h-[14rem] flex justify-center items-center min-h-36  border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}

    >
      <div
        className="absolute inset-0 bg-black  opacity-40 rounded-lg"
        style={{
          mixBlendMode: "multiply",
          // backgroundColor: 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-l from-gray-600 to-black opacity-60 z-0 rounded-lg"></div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h5
            className="text-[24px] md:text-[28px] font-cinzel text-white font-semibold bg-clip-text text-transparent z-10 flex justify-center items-center w-full text-center"
          >
            {header}
          </h5>
        </div>
      </div>

    </div>
  );
};

const AbroaedPlusWhyChoose = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 relative ">
        <div className=" ">
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
