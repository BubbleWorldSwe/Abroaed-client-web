/* eslint-disable react/prop-types */
import vectorLeftFlat from "../../../../assets/vectoreLeftFlat.png";
import HomeKpiMatrixCard from "../../components/homeKpiMatrixCard";
import { kpiCards } from "../../data";

const HomeKpiMatrixSection = ({ title, header, subtitle }) => {
  return (
    <div className="my-10">
      <section className="bg-white dark:bg-gray-900 relative px-10 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  lg:px-3 relative z-10">
          <div className="max-w-screen-sm text-left mb-8 lg:mb-16">
            <p className="font-medium text-[16px] text-black lg:mb-2 dark:text-gray-400">
              {title}
            </p>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {header}
            </h2>
            <p className="font-light text-[16px] text-black lg:mb-16 sm:text-md dark:text-gray-400">
              {subtitle}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-hidden">
            {kpiCards.map((member, index) => (
              <HomeKpiMatrixCard key={index} {...member} />
            ))}
          </div>

          <div className="mt-6 text-end">
            <button
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
            </button>
          </div>
        </div>
        <div className="absolute top-20 left-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={vectorLeftFlat}
            alt="Decorative vector"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeKpiMatrixSection;
