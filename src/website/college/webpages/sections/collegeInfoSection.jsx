/* eslint-disable react/prop-types */

const CollegeInfoSection = ({ header, text1, text2, collegeDetails }) => {
  return (
    <div className="relative z-10">
      <section className="dark:bg-gray-900 relative px-10 mx-auto">
        <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 lg:py-16">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Why Study at {collegeDetails?.name}?
            </h2>
            <p className="mb-4">{text1}</p>
            <p>{collegeDetails?.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeInfoSection;
