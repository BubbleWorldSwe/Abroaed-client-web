/* eslint-disable react/prop-types */

import { Element } from "react-scroll";

function DestinationInfoSection({ destinationDetails }) {
  return (
    <Element name="overview">
      <div className="relative z-10">
        <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
          <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 py-14">
            <h2 className="mb-5 text-[45px]  font-extrabold text-[#27272A] dark:text-white">
              Why Study in {destinationDetails?.countryId?.name} ?
            </h2>
            <p className="text-sm text-[#27272A] font-normal">{destinationDetails?.description || "----"}</p>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default DestinationInfoSection;
