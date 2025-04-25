import { useMemo, useState } from "react";
// import homeHeroImg from "../../../../assets/homeHeroImg.png";
import { TextGenerateEffect } from "../../components/TextGenerateEffect";
import homeVideoHero from "../../../../assets/homeVideoHero.mp4"
import BookCounsellingModal from "../../../comman/modals/bookCounsellingModal";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

function HomeHeroSection() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate()
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
          <div className="absolute  top-1/2 md:top-1/3   mx-auto px-4  ">
            <div className="text-start   text-white lg:w-2/3 lg:px-8">
              <p className="">
                {textEffect}
              </p>
              <h1 className="mb-6 md:mb-3 text-[42px]  font-medium  leading-none  text-white md:text-[75px]">
                From Here to Anywhere-Dream Big, Study Global
              </h1>

            </div>
            <div className="w-full  flex  flex-col  gap-6 md:flex-row justify-between md:items-center  md:pl-8 mt-20">
              <button
                type="submit"
                className="py-1 md:py-3 md:w-52 rounded-xl w-44 whitespace-nowrap px-8  text-[20px] font-semibold text-center text-[#432205]  bg-yellow-primary hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-500"
                onClick={handleClickBookNow}
              >
                Book Now
              </button>
              <button
                onClick={() => navigate('/aboutUs')}
                className=" hover:bg-white hover:bg-opacity-20 px-1 md:px-4 py-2 rounded-full transition-opacity flex justify-start items-center gap-2">
                <Play className="text-white" size={15} />
                <p className="text-white text-sm md:text-base">Why we build ABROAED ? </p>
              </button>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}

export default HomeHeroSection;
