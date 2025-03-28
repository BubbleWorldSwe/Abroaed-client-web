/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import DestinationImmigrationDetailsCard from "../../components/destinationImmigrationDetailsCard";
import SectionMainHeader from "../../../typographies/sectionMainHeader";

const DestinationImmigrationDetailsSection = ({ destinationDetails }) => {
  return (
    <Element name="immigration-details">
      <div className="relative px-10 py-10 mx-auto">
        <div className=" px-4  flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
          {/* Content */}
          <div className="relative">

            <SectionMainHeader
              className="mb-2"
            >
              Immigration Details
            </SectionMainHeader>
            <div className="my-4 border-t border-gray-300"></div>
            <div className="flex gap-5 py-2 overflow-x-auto flex-nowrap">
              {destinationDetails?.immigrations.map((data, index) => (
                <DestinationImmigrationDetailsCard data={data} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DestinationImmigrationDetailsSection;
