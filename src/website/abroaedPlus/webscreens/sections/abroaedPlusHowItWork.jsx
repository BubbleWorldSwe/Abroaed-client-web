import PrimaryBodyText from "../../../styleComponents/primaryBodyText";
import SecondaryTitle from "../../../styleComponents/secondaryTitle";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import { AbroaedServices } from "../../data";
import blackYellowAngle from "../../../../assets/blackYellowAngle.png"
const AbroaedPlusHowItWork = () => {
  return (
    <div className="relative">
      <div className="  flex flex-col gap-6 ">
        {/* Content */}
        <div className="relative z-10">
          <div className="pb-5">
            <SectionMainHeader className={'mb-2'} text="How It Works?" />
            <PrimaryBodyText>
              At ABROAED<sup>+</sup>, we simplify your study abroad journey into clear,
              actionable steps, ensuring you’re supported every step of the way,
              from planning to settling in your dream destination.
            </PrimaryBodyText>

          </div>
          <div className="">
            <SecondaryTitle
              className={'mb-2'}
              text={`Step 1: Dream & Discover`}
            />
            <PrimaryBodyText
              text={` Your journey begins with unlimited home counselling, where our
              experts help you explore study abroad options, identify the right
              country, university, and course, and create a personalized
              roadmap. Next, we focus on test preparation—home tutors for
              English proficiency tests (IELTS/PTE/TOEFL) coaching ensure you
              achieve top scores. Simultaneously, we work on comprehensive
              profile building, helping you craft standout applications with
              strong SOPs, LORs, and resumes.`}
            />

          </div>
          <div className="py-4">
            <SecondaryTitle
              className={'mb-2'}
            >
              Step 2: Apply & Secure
            </SecondaryTitle>
            <PrimaryBodyText>
              Once you’re ready, we guide you through the application process,
              ensuring you submit error-free applications to your dream
              universities. With guaranteed offers and priority admission
              support, you’ll secure your spot hassle-free. We also assist with
              education loans at competitive interest rates and provide guidance
              on managing finances. Post-admission, our country-specific coaches
              and 24/7 student support help you with visa processing,
              accommodation, and settling in. We will also help you connect with
              alumni mentors for insider tips and guidance.
            </PrimaryBodyText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {AbroaedServices.map((service, index) => (
              <div
                key={index}
                className="w-full relative hover:scale-[1.01] transition-all duration-300 ease-in-out bg-gray-primary text-white min-h-56 flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <h5 className={`mb-2 text-[24px] md:text-[28px] font-medium tracking-tight  dark:text-white`}>
                      {service.title}
                    </h5>
                  </div>
                  <p className="mb-3  text-[16px] md:text-[20px] font-normal dark:text-gray-400">
                    {service.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
};

export default AbroaedPlusHowItWork;
