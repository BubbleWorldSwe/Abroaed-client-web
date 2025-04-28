
import vectorRightRing from "../../../../assets/vectorRightRing.png"
import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { steps } from "../../../finance copy/data";

function ForexHowItWorks() {
  return (
    <div className="relative">
      <div className=" relative z-10">
        <section className="dark:bg-gray-900">
          <div className="pt-10 ">
            <div className="">
              <SectionMainHeader className={`mb-5`}>
                ABROAED Team
              </SectionMainHeader>
              <PrimaryBodyText >
                Studying abroad can feel like a huge deal when it comes to managing your finances, but ABROAED Consultancy is here to help break it down and make it easier. We assist you through the simple three-step process so you&apos;re fully equipped with financial preparations for your study abroad. Understand your financial requirements, and best available funding options, and ensure that you feel comfortable with your financial planning. With our aid, you can concentrate on your academics while we manage all the necessary bookkeeping.
              </PrimaryBodyText>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 py-5">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="flex relative hover:scale-[1.01] transition-all ease-in-out delay-100 flex-col gap-1 h-full w-200 p-6 bg-gray-primary border border-gray-200 rounded-lg shadow"
                >
                  <div
                    className="absolute  inset-0 bg-gradient-to-r from-transparent to-black/50 rounded-lg  pointer-events-none"
                    style={{
                      left: "auto",
                      right: 0,
                      width: "70%",
                      height: "100%",
                    }}
                  ></div>
                  <div>
                    {/* <span className="block text-[57px] font-extrabold text-[#FFFFFF] ">
                      {step.step}
                    </span> */}
                  </div>
                  <h5 className="mb-2 text-[24px] md:text-[32px] font-bold tracking-tight text-[#FFFFFF]">
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
      </div>

    </div>

  );
}

export default ForexHowItWorks;