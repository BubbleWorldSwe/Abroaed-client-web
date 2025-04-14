import vectorRightRing from "../../../../assets/vectorRightRing.png";
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { testPrepFeatures } from "../../data";

const TestPrepSimplifyThings = () => {

  return (
    <div className="">
      <div className="relativ z-10">
        <section className="dark:bg-gray-900">
          <div className="">
            <div className="">
              <SectionMainHeader
                className="mb-5"
              >
                How We Simplify Things?
              </SectionMainHeader>
              <PrimaryBodyText
              >
                We transform language test preparation from stressful to strategic. Our expert coaches and smart technology help you conquer IELTS, TOEFL, PTE, TestDaf, and TEF with confidence. Through personalized study plans, AI-powered mock tests with instant feedback, and proven test-taking strategies, we target your weak areas to maximize scores. With flexible online classes and visa-focused coaching, we prepare you for both the exam and your study abroad journey. Join thousands who've boosted their scores by 20%+ within a month with our ith our results-driven system.
              </PrimaryBodyText>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {testPrepFeatures.map((step, index) => (
                <div
                  key={index}
                  className="flex relative hover:scale-[1.01] transition-all ease-in-out delay-100 flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-lg  pointer-events-none"
                    style={{
                      left: "auto",
                      right: 0,
                      width: "70%",
                      height: "100%",
                    }}
                  ></div>
                  <div>
                    {/* <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                      {index + 1}
                    </span> */}
                  </div>
                  <h5 className="mb-2 text-[24px] md:text-[32px] font-bold tracking-tight leading-tight text-[#FFFFFF]">
                    {step.title}
                  </h5>
                  <p className="font-normal text-white text-base dark:text-gray-400">
                    {step.text}
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
