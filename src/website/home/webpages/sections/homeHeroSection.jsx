import { useMemo, useState } from "react";
// import homeHeroImg from "../../../../assets/homeHeroImg.png";
import { TextGenerateEffect } from "../../components/TextGenerateEffect";
import homeVideoHero from "../../../../assets/homeVideoHero.mp4"
import BookCounsellingModal from "../../../comman/modals/bookCounsellingModal";

function HomeHeroSection() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const textEffect = useMemo(
    () => (
      <TextGenerateEffect
        headings={[
          "Study abroad with ABROAED",
          "Get Dream Scholarships!",
          "Explore limitless opportunities.",
        ]}
        className="mb-2 font-normal  text-[#D4D4D8] opacity-80  text-xs"
        typingSpeed={100}
        pauseDuration={1000}
      />
    ),
    []
  );

  const handleClickBookNow = () => {
    setIsOpenModal(true)
  }
  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  return (
    <>
      {isOpenModal && (<BookCounsellingModal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />)}
      <div className="font-rethink">
        <section
          className="relative h-[100vh]  bg-cover flex  bg-center"
          style={{
            opacity: "1",
          }}
        >
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={homeVideoHero} type="video/mp4" />
          </video>

          <div
            className="absolute inset-0 bg-black opacity-60"
            style={{ mixBlendMode: "multiply" }}
          ></div>
          {/* <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30 z-0"></div> */}
          <div className="absolute  top-1/2 md:top-1/3 flex flex-col items-end justify-start  mx-auto px-4 lg:flex-row ">
            <div className="text-start   text-white lg:w-2/3 px-1 lg:px-8">
              <p className="">
                {textEffect}
              </p>
              <h1 className="mb-3 text-[42px]  font-medium tracking-tight leading-none text-white md:text-[75px]">
                From Here to Anywhere-Dream Big, Study Global
              </h1>
              <div className="w-52">
                <button
                  type="submit"
                  className="py-4 rounded-full w-full whitespace-nowrap px-10 mx-auto text-[20px] font-semibold text-center text-[#432205]  bg-yellow-primary hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                  onClick={handleClickBookNow}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeHeroSection;
