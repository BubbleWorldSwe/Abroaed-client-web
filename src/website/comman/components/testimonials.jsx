import SectionMainHeader from "../../typographies/sectionMainHeader";
import TestimonialsCard from "./testimonialsCard";

const Testimonials = () => {
  const videos = ["Ez8F0nW6S-w", "4wSL3KHSAns", "S_xwQNHOuSI"];
  return (
    <section className="  dark:bg-gray-900 relative">
      <div className="  ">
        <div className=" max-w-screen-sm text-start mb-4 lg:mb-10 ">
          <p className="font-semibold text-[#52525B] text-base dark:text-gray-400">
            100+ Success Stories
          </p>
          <SectionMainHeader >
            Read Our Success Stories
          </SectionMainHeader>
        </div>
        <div className="grid  gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((data, i) => (
            <TestimonialsCard key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
