import vectorRightRing from "../../../../assets/vectorRightRing.png";
import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";
import { steps } from "../../data";

const TestPrepSimplifyThings = () => {
  return (
    <div className="relative mx-auto px-10">
      <div className="mx-auto w-full px-3 max-w-screen-2xl relative z-10">
        <section className="dark:bg-gray-900">
          <div className="py-8 lg:py-16">
            <div className="">
              <SectionMainHeader
                className="mb-5"
              >
                How We Simplify Things?
              </SectionMainHeader>
              <PrimaryBodyText
              >
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tristique felis non odio accumsan laoreet. Integer
                cursus libero placerat ex volutpat posuere. Quisque non nisl
                ultricies, volutpat mauris sed, venenatis dui. Integer eget
                eleifend augue, ac consequat dui. Nam arcu libero, blandit vel
                ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales
                tincidunt. Praesent pharetra nisi placerat diam fringilla, ac
                fermentum erat commodo. Quisque semper arcu sit amet auctor
                consequat. Mauris diam urna, dignissim sed metus eu, congue
                porttitor nisi. Nulla facilisi.
              </PrimaryBodyText>

            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 py-5">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="flex relative flex-col gap-1 h-full w-200 p-6 bg-black border border-gray-200 rounded-lg shadow"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
                    style={{
                      left: "auto", // Ensure it starts from the right edge
                      right: 0, // Anchor the gradient to the right
                      width: "70%", // Adjust the width of the gradient area
                      height: "100%", // Full height to cover the parent div
                    }}
                  ></div>
                  <div>
                    <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                      {step.step}
                    </span>
                  </div>
                  <h5 className="mb-2 text-[32px] font-bold tracking-tight text-[#FFFFFF]">
                    {step.heading}
                  </h5>
                  <p className="font-normal text-white text-base dark:text-gray-400">
                    {step.description}
                  </p>
                  <div className="absolute top-0 right-0">
                    <img src={vectorRightRing} alt="vector" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div >
    </div >
  );
};

export default TestPrepSimplifyThings;
