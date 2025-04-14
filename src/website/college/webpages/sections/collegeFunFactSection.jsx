/* eslint-disable react/prop-types */
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import CollegeFunFactCard from "../../components/collegeFunFactCard";

const CollegeFunFactSection = ({ collegeDetails }) => {
  const items = [
    { title: "Established", desc: collegeDetails?.establishmentYear },
    { title: "Ranking", desc: collegeDetails?.ranking },
    { title: "Intake", desc: collegeDetails?.intake },
    { title: "Total Students", desc: collegeDetails?.totalStudents },
    { title: "Intr. Students", desc: collegeDetails?.internationalStudent },
    { title: "Student:Teacher", desc: collegeDetails?.studentTeacherRatio },
  ];

  return (
    <div className="relative z-10">
      <section className="   antialiased dark:bg-gray-900 ">
        <div className="">
          <div className="flex items-center justify-center text-center">
            <SectionMainHeader >
              Fun Facts
            </SectionMainHeader>
          </div>
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 ">
              {items?.map((item, idx) => (
                <CollegeFunFactCard
                  icon={item?.icon}
                  title={item?.title}
                  desc={item?.desc}
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
export default CollegeFunFactSection;
