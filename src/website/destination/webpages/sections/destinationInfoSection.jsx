/* eslint-disable react/prop-types */

import { Element } from "react-scroll";

function DestinationInfoSection({ destinationDetails }) {
  return (
    <Element name="overview">
      <div className="relative z-10">
        <section className="dark:bg-gray-900 relative px-10 mx-auto">
          <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 lg:py-10">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Why Study in {destinationDetails?.countryId?.name} ?
              </h2>
              <p className="mb-4">{destinationDetails?.description || "----"}</p>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default DestinationInfoSection;
