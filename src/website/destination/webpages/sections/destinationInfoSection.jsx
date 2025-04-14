/* eslint-disable react/prop-types */

import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";

function DestinationInfoSection({ destinationDetails }) {
  return (
    <Element name="overview">
      <div className="relative  z-10">
        <section className="dark:bg-gray-900 relative ">
          <div className="  lg:grid lg:grid-cols-1 pt-14">
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
