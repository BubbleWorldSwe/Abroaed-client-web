import homeQuery from "../../../../assets/homeQuery.png";
import Tabs, {
  HomeForm,
  VirtualForm,
  VisitUsForm,
} from "../../../../Components/AnimatedTabs";
const tabData = [
  { title: "Home", value: "home", content: <HomeForm /> },
  { title: "Virtual", value: "virtual", content: <VirtualForm /> },
  { title: "Visit Us", value: "visit", content: <VisitUsForm /> },
];

function HomePromoSection() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative px-10 mx-auto h-full">
        <div className="py-16 px-4 mx-auto max-w-screen-2xl  lg:px-3  z-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-28 mx-auto  ">
            {/* Left Side: Text and Image */}
            <div className="flex flex-col gap-3 justify-center">
              {/* <div className="text-start "> */}
              <h1 className="text-5xl font-bold  text-black dark:text-white ">
                Need Clarifications on Your Study Abroad Plans?
              </h1>
              <p className="text-[#52525B] font-semibold text-base">
                Our study abroad consultants will reach out to you and guide you
                through every step of the application process and document
                preparation, allowing you to focus on what matters most while we
                handle all the details and ensure a smooth experience easing
                into your global transition.
              </p>
              <div className="flex justify-center  lg:justify-start ">
                <img
                  className="rounded-lg w-full h-[45vh] object-cover"
                  src={homeQuery}
                  alt="Counselling session"
                />
              </div>
              <div className="flex justify-center text-center">
                <button className="py-2 px-3 border-2 rounded-lg  border-[#27272A] text-[#71717A]">
                  Learn About Home Counselling
                </button>
              </div>
              {/* </div> */}
            </div>
            {/* <div className="absolute top-96 left-0 z-0">
              <img
                className="rounded-lg max-w-full "
                src={vectorDownNose}
                alt="Counselling session"
              />
            </div> */}
            {/* Right Side: Form */}
            <div className="flex flex-col justify-start items-end">
              <Tabs tabs={tabData} className="w-full lg:w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePromoSection;
