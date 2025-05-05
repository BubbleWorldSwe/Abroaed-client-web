/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

const CollegeInfoSection = ({ header, text1, text2, collegeDetails }) => {
  return (
    <div className="relative z-10">
      <section className="">
        <div className="pt-10">
          <SectionMainHeader className={`mb-4`}>
            Why Study at {collegeDetails?.name}?
          </SectionMainHeader>
          <PrimaryBodyText className="mb-4 ">{text1}</PrimaryBodyText>
          <PrimaryBodyText>{collegeDetails?.description}</PrimaryBodyText>
        </div>
      </section>
    </div>
  );
};

export default CollegeInfoSection;
