import { AbroaedServices } from "../../data";

const AbroaedPlusHowItWork = () => {
  return (
    <div className="relative px-10 mx-auto">
      <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
        {/* Content */}
        <div className="relative z-10">
          <div className="pb-5">
            <h2
              className="text-[#52525B] text-[18px]  font-normal"
            >
              How It Works?
            </h2>
            <p
              className="text-[#52525B] text-[18px]  font-normal"
            >
              At ABROAED+, we simplify your study abroad journey into clear,
              actionable steps, ensuring you’re supported every step of the way,
              from planning to settling in your dream destination.
            </p>
          </div>
          <div className="py-5">
            <h3 className="mb-2  text-[32px]  font-bold text-gray-900 dark:text-white">
              Step 1: Dream & Discover
            </h3>
            <p
              className="text-[#52525B] text-[18px]  font-normal"
            >
              Your journey begins with unlimited home counselling, where our
              experts help you explore study abroad options, identify the right
              country, university, and course, and create a personalized
              roadmap. Next, we focus on test preparation—home tutors for
              English proficiency tests (IELTS/PTE/TOEFL) coaching ensure you
              achieve top scores. Simultaneously, we work on comprehensive
              profile building, helping you craft standout applications with
              strong SOPs, LORs, and resumes.{" "}
            </p>
          </div>
          <div className="py-5">
            <h3 className="mb-2  text-[32px]  font-bold text-gray-900 dark:text-white">
              Step 2: Apply & Secure
            </h3>
            <p
              className="text-[#52525B] text-[18px]  font-normal"
            >
              Once you’re ready, we guide you through the application process,
              ensuring you submit error-free applications to your dream
              universities. With guaranteed offers and priority admission
              support, you’ll secure your spot hassle-free. We also assist with
              education loans at competitive interest rates and provide guidance
              on managing finances. Post-admission, our country-specific coaches
              and 24/7 student support help you with visa processing,
              accommodation, and settling in. We will also help you connect with
              alumni mentors for insider tips and guidance.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            {AbroaedServices.map((service, index) => (
              <div
                key={index}
                className="w-full bg-black min-h-56 flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="p-5 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
                  }}
                >
                  <div className="flex justify-between">
                    <h5 className={`mb-2 text-[28px] font-bold tracking-tight  dark:text-white`}>
                      {service.title}
                    </h5>
                  </div>
                  <p className="mb-3 font-semibold  text-[22px] dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroaedPlusHowItWork;
