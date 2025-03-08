/* eslint-disable react/prop-types */
import { Element } from "react-scroll";

const DestinationWorkOpportunitiesSection = ({ destinationDetails }) => {
  return (
    <Element name="work-opportunities">
      <div className="relative px-8 mx-auto">
        <div className=" px-4 py-6 flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
          {/* Content */}
          <div className="relative">
            <div className="py-1">
              <h2 className="mb-2 text-[45px]  font-extrabold text-[#27272A] dark:text-white">
                Work Opportunities in {destinationDetails?.countryId?.name}
              </h2>
              <p className="mb-8 font-normal text-sm text-[#27272A]">
                Studying in the {destinationDetails?.countryId?.name} offers a
                variety of experiences. The cultural and traditional values of
                the
                {destinationDetails?.countryId?.name} attract several
                international students every year. The popular areas of
                employment in {destinationDetails?.countryId?.name} are as
                follows:
              </p>
            </div>
            <div className="py-1">
              <h3 className="mb-2  text-[32px]  font-bold text-[#27272A] dark:text-white">
                Part-Time Work Opportunities
              </h3>
              <p className="text-sm font-normal text-[#27272A] ">
                {destinationDetails?.workOpportunities?.partTimeStudents}
              </p>
            </div>
            <div className="py-5">
              <h3 className="mb-2  text-[32px]  font-bold text-[#27272A] dark:text-white">
                Post Study Work Opportunities
              </h3>
              <p className="text-sm font-normal text-[#27272A] ">
                {destinationDetails?.workOpportunities?.postDegreeOpportunity}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 ">
              {destinationDetails?.workOpportunities?.professions?.map(
                (data, index) => (
                  <div
                    key={index}
                    className="w-full  bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="p-5">
                      <div className="flex justify-between">
                        <h5 className="mb-2 text-[28px] font-bold  text-[#27272A] dark:text-white">
                          {data?.professionName}
                        </h5>
                      </div>
                      <p className="mb-3 font-semibold text-[#52525B] text-[22px] dark:text-gray-400">
                        {data?.salary}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
            {destinationDetails?.workOpportunities?.additionalInformation && (
              <p className="my-10 text-sm font-normal text-[#27272A]">
                {destinationDetails?.workOpportunities?.additionalInformation}
              </p>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default DestinationWorkOpportunitiesSection;
