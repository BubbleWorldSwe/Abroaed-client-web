/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";


function LanguagePrepAbout({ languagePrepsDetails }) {
  return (
    <div className="relative  z-10 ">
      <div className=" mt-8 flex flex-col  gap-6">
        <header className=" not-format">
          <SectionMainHeader
            className="mb-2"
          >
            About {languagePrepsDetails?.productName}
          </SectionMainHeader>
          <PrimaryBodyText>
            {languagePrepsDetails?.about}
          </PrimaryBodyText>
        </header>
      </div>
    </div>
  );
}

export default LanguagePrepAbout;
