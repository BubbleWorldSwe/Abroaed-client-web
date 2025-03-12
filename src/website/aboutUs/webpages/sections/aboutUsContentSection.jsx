
import CardComponent from "../../components/cardComponent";
import { aboutUs } from "../../data";

function AboutUsContentSection() {

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative px-10 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  lg:px-3 relative z-10">
          <div className="flex flex-col gap-6 py-4">
            <h2 className="text-5xl w-full items-center text-left text-[#27272A]  font-extrabold ">
              Our Story
            </h2>
            <p className=" text-[#263238]   font-semibold text-[18px] ">
              Abroaed, established in 2025 under the prestigious 55-year legacy of IMM Business School, provides personalized guidance through your study overseas process in Delhi NCR. Our philosophy revolves around empowering students to unlock their full potential. Our focus is on holistic support and a promise of growth for every student.            </p>
          </div>

          <div className="mt-2 px-10 mx-auto">
            {aboutUs.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsContentSection;
