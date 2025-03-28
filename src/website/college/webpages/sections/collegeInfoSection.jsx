/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";


const CollegeInfoSection = ({ header, text1, text2, collegeDetails }) => {
  return (
    <div className="relative z-10">
      <section className="dark:bg-gray-900 relative px-12 mx-auto">
        <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 lg:py-16">
          <div className="">
            <SectionMainHeader className={`mb-4`}>
              Why Study at {collegeDetails?.name}?
            </SectionMainHeader>
            <PrimaryBodyText className="mb-4 ">{text1}</PrimaryBodyText>
            <PrimaryBodyText >{collegeDetails?.description}</PrimaryBodyText>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeInfoSection;
