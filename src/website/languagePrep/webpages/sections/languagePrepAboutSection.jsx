/* eslint-disable react/prop-types */

import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";


function LanguagePrepAbout({ languagePrepsDetails }) {
  return (
    <div className="relative z-10 mx-auto px-12">
      <div className="mx-auto  max-w-screen-2xl mt-8 flex flex-col py-2 gap-6">
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
