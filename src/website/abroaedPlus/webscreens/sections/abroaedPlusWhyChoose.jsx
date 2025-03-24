/* eslint-disable react/prop-types */
import { cardDetails } from "../../../pathways/program/data";
import vectorOutlinedRightFlat from "../../../../assets/vectorOutlinedRightFlat.png";

const Cards = ({ header = "" }) => {
  return (
    <div className="w-full relative bg-black h-[14rem] flex justify-center items-center min-h-36  border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h5
            // className={`mb-2 text-[24px] font-semibold   dark:text-white `}
            className="text-4xl font-semibold bg-clip-text text-transparent z-10 flex justify-center items-center w-full text-center"
            style={{
              backgroundImage:
                "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
            }}
          >
            {header}
          </h5>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 overflow-hidden z-0">
        <img
          className="rounded-lg w-full h-full object-contain"
          src={vectorOutlinedRightFlat}
          alt="Counselling session"
        />
      </div>
    </div>
  );
};

const AbroaedPlusWhyChoose = () => {
  return (
    <div>
      <section className="dark:bg-gray-900 relative px-12 mx-auto">
        <div className=" mx-auto max-w-screen-2xl py-8">
          <h2 className={`text-[45px] font-extrabold text-gray-primary mb-4 `}>
            Why Choose ABROA<span style={{ color: "#fbba18" }}>ED</span>
            <sup>+</sup> ?
          </h2>
          <p className={`font-normal mb-4 text-gray-primary text-lg  dark:text-gray-400`}>
            We’re your study abroad wingman, making sure you nail every step—no
            stress, no guesswork. From unlimited home counselling and home
            tutors for English tests to guaranteed offers and killer loan rates,
            we’ve got you covered. With 24/7 support, GRE/GMAT prep, and
            personalized attention in small cohorts, we ensure you’re fully
            prepared. Plus, we help you connect with alumni mentors and get
            priority admission offers.{" "}
          </p>
          <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5 mb-5 mt-10">
            {cardDetails.map((item, index) => (
              <Cards header={item.key} text={item.value} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbroaedPlusWhyChoose;
