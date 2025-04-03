import vectorRightRing from "../../../../assets/vectorRightRing.png";
import PrimaryBodyText from "../../../typographies/primaryBodyText";
import SectionMainHeader from "../../../typographies/sectionMainHeader";
import { languagePrepSimplifyCards } from "../../data";

const LanguagePrepSimplifyThings = () => {

  return (
    <div className="relative mx-auto px-10">
      <div className="mx-auto w-full px-2 max-w-screen-2xl relative z-10">
        <section className="dark:bg-gray-900">
          <div className="py-5">
            <div className="">
              <SectionMainHeader
                className="mb-2"
              >
                How We Simplify Things?
              </SectionMainHeader>
              <PrimaryBodyText>
                Whether you want to learn German, French, Italian, or English, we build real fluency for real life. Our expert coaches and AI-driven tools don't just teach—they personalize to fit your learning style, helping you refine grammar with pinpoint precision, build vocabulary just as a native speaker would, and perfect listening/speaking with practice. Whether it is for preparing for university seminars, high-stakes workplace communication, or effortless everyday conversations, our personalised lessons close the gap between knowledge in a textbook to living the language with confidence.
              </PrimaryBodyText>

            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 py-5">
              {languagePrepSimplifyCards?.map((data, i) => (
                <div
                  key={i}
                  className="flex relative flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50  pointer-events-none"
                    style={{
                      left: "auto",
                      right: 0,
                      width: "70%",
                      height: "100%",
                    }}
                  ></div>
                  <div>
                    <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                      {i + 1}
                    </span>
                  </div>
                  <h5 className="mb-2 text-[32px] font-bold tracking-tight leading-tight text-[#FFFFFF]">
                    {data.title}
                  </h5>
                  <p className="font-normal text-white text-base dark:text-gray-400">
                    {data.text}
                  </p>
                  <div className="absolute top-0 right-0">
                    <img src={vectorRightRing} alt="vector" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LanguagePrepSimplifyThings;
