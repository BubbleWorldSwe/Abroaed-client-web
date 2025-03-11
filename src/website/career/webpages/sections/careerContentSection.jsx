
import CardComponent from "../../../aboutUs/components/cardComponent";
import { careerData } from "../../data"

const CareerContentSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative px-12 mx-auto">
        <div className=" px-4 mx-auto max-w-screen-2xl  lg:px-3 relative z-10">
          <div className="flex flex-col gap-6 ">
            <h2 className="text-[45px] w-full text-[#27272A] text-center font-extrabold ">
              Life at Abroaed: What It&apos;s Really Like Working Here
            </h2>
            <p className=" text-[#27272A] dark:text-gray-400 font-normal text-sm">
              If you’re someone who loves to take on challenges, learn new things, and be part of a team that feels like family, then Abroaed is the place for you.  Abroaed is the haven for those who wants a job that’s not just about the tasks but also about making a real impact, we’ve got your back.            </p>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 lg:gap-16 px-6 mx-auto lg:grid-cols-2">
            <div className="hidden lg:block">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] roundedR-lg"></div>
                <div className="rounded-[2.5rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                    className="dark:hidden w-[272px] h-[572px]"
                    alt=""
                  />
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                    className="hidden dark:block w-[272px] h-[572px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div> */}
          <div className="mt-2 px-10 mx-auto">
            {careerData.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>)
}

export default CareerContentSection;