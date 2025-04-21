/* eslint-disable react/prop-types */
import HomeKpiMatrixCard from "../../components/homeKpiMatrixCard";
import { kpiCards } from "../../data";

const HomeKpiMatrixSection = ({ title, header, subtitle }) => {
  return (
    <div className=" w-full">
      <section className=" dark:bg-gray-900 relative ">
        <div className=" mt-10 relative z-10">
          <div className="  mb-8 lg:mb-16 ">
            <p className="font-semibold mb-2 text-[22px] text-[#52525B]  dark:text-gray-400">
              {title}
            </p>
            <h2 className={`mb-4  text-[32px] md:text-[45px] font-extrabold text-gray-primary dark:text-white`}>
              {header}
            </h2>
            <p className="font-semibold  text-justify text-[16px] text-[#52525B]  dark:text-gray-400">
              {subtitle}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden">
            {kpiCards.map((member, index) => (
              <HomeKpiMatrixCard key={index} {...member} />
            ))}
          </div>

          <div className="mt-6 text-end">
            {/* <button
              type="button"
              className="bg-inherit focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              Explore more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeKpiMatrixSection;
