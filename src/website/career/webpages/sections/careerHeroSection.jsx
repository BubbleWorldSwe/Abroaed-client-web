
import blobImage from "../../../../assets/Vector.png";
import workWithUs1 from "../../../../assets/workWithUs1.png";
import workWithUs2 from "../../../../assets/workWithUs2.png";
import workWithUs3 from "../../../../assets/workWithUs3.png";
import workWithUs4 from "../../../../assets/workWithUs4.png";
import workWithUs5 from "../../../../assets/workWithUs5.png";
import workWithUs6 from "../../../../assets/workWithUs6.png";

function CareerHeroSections() {
  return (
    <div className="pt-20 mt-10">
      <section className="relative bg-white  dark:bg-gray-900 ">
        {/* Background Image */}
        <div className="absolute top-0 left-[-100px] z-0">
          <img
            src={blobImage}
            alt="Background blog image"
            className="w-full opacity-100"
          />
        </div>
        <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-2xl lg:px-12 sm:text-center lg:py-16 ">
          <h2 className={`mb-4 text-[52px]  font-extrabold text-gray-primary dark:text-white`}>
            Work At ABROAED
          </h2>
          <p className="font-bold text-2xl text-[#52525B]  md:px-20 lg:px-38 xl:px-48 dark:text-gray-400">
            Connecting You to a World of Possibilities
          </p>
          <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
            <img
              className="col-span-2 mb-4 sm:mb-0 rounded-lg"
              src={workWithUs1}
              alt="content gallery 1"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src={workWithUs2}
              alt="content gallery 2"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src={workWithUs3}
              alt="content gallery 3"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
              src={workWithUs4}
              alt="content gallery 4"
            />
            <img
              className="col-span-2 rounded-lg"
              src={workWithUs5}
              alt="content gallery 5"
            />
            <img
              className="hidden col-span-1 sm:block rounded-lg"
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