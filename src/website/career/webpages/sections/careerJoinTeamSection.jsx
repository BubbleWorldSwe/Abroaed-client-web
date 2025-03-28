import { benefits } from "../../data";
import vectorRightFlat from "../../../../assets/vectorRightFlat.png"
import SectionMainHeader from "../../../typographies/sectionMainHeader";
import SecondaryTitle from "../../../typographies/secondaryTitle";
function CareerJoinTeam() {
  return (
    <div>
      <div className="mt-2 py-8 flex flex-col gap-2 mx-auto max-w-screen-2xl px-14  bg-white dark:bg-gray-900">
        <header className="mb-4 flex flex-col gap-1 lg:mb-6 not-format">
          <SectionMainHeader
            className=''
          >
            Why you should join our awesome team ?
          </SectionMainHeader>
          <SecondaryTitle
            style={{ color: "#52525B", fontSize: "24px" }}
          >
            We want to feel like home when you are working at ABROAED & for that
            we have curated a great set of benefits for you.{" "}
          </SecondaryTitle>
        </header>
        <div className="grid grid-cols-1  md:grid-cols-3  gap-6 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}

              className=" relative w-full h-[15rem] bg-black bg-opacity-80 overflow-y-auto flex flex-col flex-grow-0 p-6  text-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div
                // style={{
                //   backgroundImage:
                //     "linear-gradient(91.57deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)",
                // }}
                className="text-white">
                {/* <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img> */}
                <h5 className="mt-2   leading-tight text-[28px] font-bold   dark:text-white"
                >
                  {benefit.heading}
                </h5>
                <p className="font-semibold   text-sm mt-3  dark:text-gray-400">
                  {benefit.text}
                </p>
                {/* <p className="text-sm">Location, India</p> */}

              </div>
              <div className="absolute right-0 w-32 top-20 bottom-0 overflow-hidden z-0">
                <img
                  className="rounded-lg w-full h-full object-contain"
                  src={vectorRightFlat}
                  alt="Counselling session"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CareerJoinTeam;
