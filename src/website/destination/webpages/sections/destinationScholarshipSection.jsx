/* eslint-disable react/prop-types */
import { Element } from "react-scroll";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import { MotionComponent } from "../../../comman/components/motionComponent";
const DestinationScholarshipSection = ({ destinationDetails }) => {
  return (
    <Element name="scholarships">
      <div className="relative">
        <section className="  ">

          <div className="flex flex-col gap-2 md:gap-6  text-gray-500 sm:text-lg ">
            <MotionComponent>
              <SectionMainHeader className="">
                Scholarships & Financial Aid
              </SectionMainHeader>
            </MotionComponent>
            <MotionComponent>
              <PrimaryBodyText
                className={"font-semibold"}
                style={{ fontSize: "18px" }}
              >
                For Study in {destinationDetails?.countryId?.name}, the amount
                of money available and the type of award varies between
                institutions. Certain research programs may provide up to 100%
                of the tuition fee besides covering a part of your living
                expenditures. Here are some popular government scholarship
                programs you can apply to study in{" "}
                {destinationDetails?.countryId?.name} as an Indian student:
              </PrimaryBodyText>
            </MotionComponent>
          </div>


          <MotionComponent>
            <div className="w-full mt-5">
              <div className="dark:bg-gray-800 relative overflow-x-auto rounded-lg">
                <table className="w-full text-left border-t-2 border-gray-400 dark:text-gray-400 min-w-[600px]">
                  <thead className="text-[18px] sm:text-[22px] text-gray-primary font-semibold border-b-2 border-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3 whitespace-nowrap">
                        Name of Scholarship
                      </th>
                      <th scope="col" className="px-4 py-3 whitespace-nowrap">
                        Description
                      </th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {destinationDetails?.scholarships.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b-2 border-gray-400 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-semibold text-[16px] sm:text-[18px] text-gray-primary dark:text-white break-words"
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline cursor-pointer"
                          >
                            {item.name}
                          </a>
                        </th>
                        <td className="px-4 py-3 text-base font-normal text-gray-primary break-words">
                          {item.description}
                        </td>
                        <td className="px-4 py-3"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </MotionComponent>


          <div className="pt-4">
            <PrimaryBodyText>
              If you want to bring down your educational expenses, it is
              best to apply to various scholarships available for Indian
              students.
            </PrimaryBodyText>
          </div>

          {/* </MotionComponent> */}
        </section>
      </div>
    </Element>
  );
};

export default DestinationScholarshipSection;
