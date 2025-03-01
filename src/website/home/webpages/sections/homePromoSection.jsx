import cover from "../../../../assets/cover.jpg";
import vectorDownNose from "../../../../assets/vectorDownNose.png";
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
      <section className="bg-white dark:bg-gray-900 relative px-10 mx-auto">
        <div className="py-10 px-4 mx-auto max-w-screen-2xl  lg:px-3  z-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mx-auto  ">
            {/* Left Side: Text and Image */}
            <div className="flex flex-col justify-start items-start z-10">
              <div className="text-start ">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-black dark:text-white m-4">
                  Have Queries? Need Help
                </h1>
                <p className="text-#52525B ml-4 mb-3">
                  Our counsellor will get in touch with you and will guide you
                  through all the details of filling applications and preparing
                  documents, so that you can focus on yourself, leaving all the
                  hassle for us to handle.
                </p>
                <div className="flex justify-center lg:justify-start mt-2 p-4">
                  <img
                    className="rounded-lg max-w-full"
                    src={cover}
                    alt="Counselling session"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-96 left-0 z-0">
              <img
                className="rounded-lg max-w-full "
                src={vectorDownNose}
                alt="Counselling session"
              />
            </div>
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
