/* eslint-disable react/prop-types */

import { Element } from "react-scroll";
import SectionMainHeader from "../../../typographies/sectionMainHeader";
import PrimaryBodyText from "../../../typographies/primaryBodyText";

function DestinationInfoSection({ destinationDetails }) {
  return (
    <Element name="overview">
      <div className="relative z-10">
        <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
          <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-14">
            <SectionMainHeader
              className="mb-5"
            >
              Why Study in {destinationDetails?.countryId?.name} ?
            </SectionMainHeader>

            <PrimaryBodyText>
              {destinationDetails?.description || "----"}
            </PrimaryBodyText>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default DestinationInfoSection;
