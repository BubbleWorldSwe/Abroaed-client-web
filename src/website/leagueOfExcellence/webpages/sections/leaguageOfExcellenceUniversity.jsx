/* eslint-disable react/prop-types */
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import UniversityCardDetails from "../../components/universityCardDetails";
import { universities } from "../../data";

const LeaguageOfExcellenceUniversity = ({
  selectCountry,
  onFormSubmit,
}) => {
  return (
    <section>
      <div className="relative px-8 md:px-12 mx-auto max-w-screen-2xl z-10">
        <SectionMainHeader className="mb-2">
          Top Universities in {selectCountry?.name}
        </SectionMainHeader>
        <div className=" border-t border-gray-300"></div>
      </div>
      <div className="flex gap-10 pl-10 md:pl-14 pt-8 md:pt-10 overflow-x-auto   scrollbar-hide">
        {universities[selectCountry.code]?.map((item, index) => (
          <div key={index} className=" snap-start">
            <UniversityCardDetails onAddLead={onFormSubmit} item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeaguageOfExcellenceUniversity;
