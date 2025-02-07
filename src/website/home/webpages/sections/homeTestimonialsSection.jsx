import InfiniteMovingCards from "../../../../Components/InfiniteMovingCards";
import HomeTestimonialCard from "../../components/homeTestimonialCard";
import { items } from "../../data";

const HomeTestimonialsSection = () => {
  return (
    <div className="w-full h-[400px] overflow-hidden items-center  bg-gray-100 py-8 flex gap-3">
      <div className="flex flex-col w-1/4 items-start justify-center pl-12">
        <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-left text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="mb-6 lg:mb-8 text-md tracking-tight font-light text-left text-gray-900 dark:text-white">
          Thousands of stories <br />
          of growth
        </p>
      </div>

      <div className="w-3/4">
        <InfiniteMovingCards
          component={<HomeTestimonialCard items={items} />}
          items={[]}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default HomeTestimonialsSection;
