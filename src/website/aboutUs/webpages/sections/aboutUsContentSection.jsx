/* eslint-disable react/prop-types */

import { aboutUs } from "../../data";

function AboutUsContentSection() {


  const TextComponent = ({ text, heading }) => (
    <div>
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-700">{text}</p>
    </div>
  );

  const ImageComponent = ({ imgFirst, imgUrl }) => (
    <div className={`flex ${imgFirst ? "justify-start" : "justify-end"} `}>
      <img
        src={imgUrl}
        alt="Night Scene"
        className="w-4/5 rounded-lg shadow-lg"
      />
    </div>
  );

  const CardSection = ({ imgFirst, text, heading, imgUrl }) => (
    <div className="grid md:grid-cols-2 gap-10 mt-14 items-center justify-center">
      {imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
      <TextComponent text={text} heading={heading} />
      {!imgFirst && <ImageComponent imgFirst={imgFirst} imgUrl={imgUrl} />}
    </div>
  );

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 relative px-10 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl  lg:px-3 relative z-10">
          <div className="flex flex-col gap-6 py-4">
            <h2 className="text-5xl w-full items-center text-left  font-extrabold ">
              Our Story
            </h2>
            <p className=" text-gray-700 dark:text-gray-400 ">
              Abroaed, established in 2025 under the prestigious 55-year legacy of IMM Business School, provides personalized guidance through your study overseas process in Delhi NCR. Our philosophy revolves around empowering students to unlock their full potential. Our focus is on holistic support and a promise of growth for every student.
            </p>
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
            {aboutUs.map((item, index) => (
              <CardSection key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsContentSection;
