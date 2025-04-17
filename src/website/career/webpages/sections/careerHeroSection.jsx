
import workWithUs1 from "../../../../assets/workWithUs1.png";
import workWithUs2 from "../../../../assets/workWithUs2.png";
import workWithUs3 from "../../../../assets/workWithUs3.png";
import workWithUs4 from "../../../../assets/workWithUs4.png";
import workWithUs5 from "../../../../assets/workWithUs5.png";
import workWithUs6 from "../../../../assets/workWithUs6.png";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";

function CareerHeroSections() {
  return (
    <div className="pt-14 mt-6 ">
      <section className="relative bg-white  dark:bg-gray-900 ">
        <div className="relative z-10  mx-auto   pt-16 ">
          <SectionMainHeader
            className={'mb-1'}
          >
            Work At ABROAED
          </SectionMainHeader>

          <p className="font-bold text-2xl text-[#52525B] dark:text-gray-400">
            Connecting You to a World of Possibilities
          </p>
          <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:grid-rows-[auto] sm:mt-10">
            <img
              className="col-span-2 mb-4 sm:mb-0 rounded-lg h-full object-cover"
              src={workWithUs1}
              alt="content gallery 1"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg h-full object-cover"
              src={workWithUs2}
              alt="content gallery 2"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg h-full object-cover"
              src={workWithUs3}
              alt="content gallery 3"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg h-full object-cover"
              src={workWithUs4}
              alt="content gallery 4"
            />
            <img
              className="col-span-2 rounded-lg h-full object-cover"
              src={workWithUs5}
              alt="content gallery 5"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg h-full object-cover"
              src={workWithUs6}
              alt="content gallery 6"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareerHeroSections;