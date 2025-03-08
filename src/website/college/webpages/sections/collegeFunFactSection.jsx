/* eslint-disable react/prop-types */
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
      <section className=" py-4  antialiased dark:bg-gray-900 px-12 mx-auto">
        <div className=" max-w-screen-2xl px-4 2xl:px-0">
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl font-semibold text-gray-900 dark:text-white">
              Fun Facts
            </p>
          </div>
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
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
