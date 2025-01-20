

import InfiniteMovingCards from "./InfiniteMovingCards";


const items = [
  {
    quote: "This service was a game-changer for my career goals.",
    name: "Alex Johnson",
    title: "Master’s Applicant",
  },
  {
    quote: "Thanks to ABROAED, I secured a spot in my dream university!",
    name: "Priya Patel",
    title: "MBA Applicant",
  },
  {
    quote: "Guided me through every step. Highly recommend!",
    name: "Li Wei",
    title: "Undergraduate Applicant",
  },
  // Add more testimonials as needed
];

const SlidingComponent =()=>{
  return(
    <div className="flex gap-10 justify-between" >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[350px] h-[250px] max-w-full bg-white relative rounded-2xl border border-b-0 flex-shrink-0  px-8 py-6 md:w-[450px]"
          >
            <div className="gap-8 py-6 sm:flex sm:items-start">
              <div className="min-w-0 flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-0.5">
                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>

                      <svg
                        className="h-4 w-4 shrink-0 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {item.title}
                  </p>
                </div>

                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  It’s fancy, amazing keyboard, matching accessories. Super
                  fast, batteries last more than usual, everything runs perfect
                  in this computer. Highly recommend!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}
const TestimonialsSection = () => {
  return (
    <div className="w-full h-[400px] overflow-hidden items-center bg-yellow-50 bg-gray-100 py-8 flex gap-3">
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
          component={<SlidingComponent/>}
          items={[]}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
