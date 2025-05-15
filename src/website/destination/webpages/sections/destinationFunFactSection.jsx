/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import DestinationFunFactCard from "../../components/destinationFunFactCard";
import locationIconWhite from "../../../../assets/locationIconWhite.png";
import schoolIconWhite from "../../../../assets/schoolIconWhite.png";
import languageIconWhite from "../../../../assets/languageIconWhite.png";
import currencyIconWhite from "../../../../assets/currencyIconWhite.png";
import callIconWhite from "../../../../assets/callIconWhite.png";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { MotionComponent } from "../../../comman/components/motionComponent";

const DestinationFunFactSection = ({ items, destinationDetails }) => {
  const list = [
    {
      title: "Capital",
      value: destinationDetails?.capital,
      icon: locationIconWhite,
    },
    {
      title: "Global Exposure",
      value: destinationDetails?.intrStudents,
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
    <div className="relative  z-10">
      <section className="antialiased ">
        <div className=" ">
          <div className="flex items-center justify-center text-center">
            <MotionComponent>
              <SectionMainHeader className="mb-1 md:mb-5">
                Fun Facts
              </SectionMainHeader>
            </MotionComponent>
          </div>
          <div className="mt-5 md:mt-10 space-y-6">
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
