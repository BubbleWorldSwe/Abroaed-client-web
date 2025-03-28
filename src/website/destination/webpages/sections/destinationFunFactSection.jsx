/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import DestinationFunFactCard from "../../components/destinationFunFactCard";
import locationIconWhite from "../../../../assets/locationIconWhite.png";
import schoolIconWhite from "../../../../assets/schoolIconWhite.png";
import languageIconWhite from "../../../../assets/languageIconWhite.png";
import currencyIconWhite from "../../../../assets/currencyIconWhite.png";
import callIconWhite from "../../../../assets/callIconWhite.png";
import SectionMainHeader from "../../../typographies/sectionMainHeader";

const DestinationFunFactSection = ({ items, destinationDetails }) => {

  const list = [
    {
      title: destinationDetails.title,
      value: destinationDetails?.capitalId?.name,
      icon: locationIconWhite,
    },
    {
      title: "Global Exposure",
      value: destinationDetails?.internationalStudent,
      icon: schoolIconWhite,
    },
    {
      title: "Language",
      value: destinationDetails?.language,
      icon: languageIconWhite,
    },

    {
      title: "Currency",
      value: destinationDetails?.currency,
      icon: currencyIconWhite,
    },
    {
      title: "Dialing Code",
      value: destinationDetails?.dialcode,
      icon: callIconWhite,
    },
  ];

  return (
    <div className="relative z-10">
      <section className=" py-8 antialiased dark:bg-gray-900 md:py-2">
        <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0">
          <div className="flex items-center justify-center text-center">
            <SectionMainHeader
              className="mb-5"
            >
              Fun Facts
            </SectionMainHeader>
          </div>
          <div className="mt-10 space-y-6">
            <div className="flex flex-col md:flex-row  justify-center flex-wrap gap-5 ">
              {list?.map((item, idx) => (
                <DestinationFunFactCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.value}
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationFunFactSection;
