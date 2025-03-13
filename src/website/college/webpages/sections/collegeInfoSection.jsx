/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const CollegeInfoSection = ({ header, text1, text2, collegeDetails }) => {
  return (
    <div className="relative z-10">
      <section className="dark:bg-gray-900 relative px-12 mx-auto">
        <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 lg:py-16">
          <div className="">
            <h2 className="mb-4 text-[45px] font-extrabold text-[#27272A] ">
              Why Study at {collegeDetails?.name}?
            </h2>
            <p className="mb-4 font-normal  text-sm">{text1}</p>
            <p className="text-sm font-normal" >{collegeDetails?.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeInfoSection;
