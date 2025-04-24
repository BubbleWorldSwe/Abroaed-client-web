import { useEffect, useRef, useState } from "react";
// import slider1 from "../assets/slider1.png";
// import slider2 from "../assets/slider2.png";
// import slider3 from "../assets/slider3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppStore from "../assets/AppStore.png";
import playStore from "../assets/gPlayStore.png";
import InfiniteMovingCards from "../components/InfiniteMovingCards";
import documentAdd from "../assets/documentAdd.png";
import handMoney from "../assets/handMoney.png";
// import homeSmileAngle from "../assets/homeSmileAngle.png";
import passport from "../assets/passport.png";
import squareAcademicCap from "../assets/squareAcademicCap.png";
import diversity from "../assets/diversity.png";
import iPhoneIcon from "../assets/iPhoneIcon.png";
import homeIcon from "../assets/homeIcon.png";
import ModalLayout from "../components/Modals/ModalLayout";
const carouselItems = [
  {
    title: "Home Counselling",
    description:
      "Expert guidance from the comfort of your home to kickstart your study overseas journey.",
    imgSrc: homeIcon,
  },
  {
    title: "Designated Mentor",
    description:
      "One-on-one guidance to navigate every step of your study-ABROAED journey with confidence.",
    imgSrc: diversity,
  },
  {
    title: "Scholarship Assistance",
    description:
      "Identify and secure scholarships for their study-ABROAED journey",
    imgSrc: squareAcademicCap,
  },
  {
    title: "Visa & Accommodation",
    description:
      "End-to-end support for visa applications and finding comfortable housing overseas.",
    imgSrc: passport,
  },
  {
    title: "Finance & FOREX",
    description:
      "Simplifying overseas payments and currency exchanges with tailored financial solutions.",
    imgSrc: handMoney,
  },
  {
    title: "Customised SOP & LORs",
    description:
      "Get guidance to craft personalized SOP and LORs that stand out.",
    imgSrc: documentAdd,
  },
  {
    title: "Home Counselling",
    description:
      "Expert guidance from the comfort of your home to kickstart your study overseas journey.",
    imgSrc: homeIcon,
  },
  {
    title: "Personalised Mentor",
    description:
      "One-on-one guidance to navigate every step of your study-ABROAED journey with confidence.",
    imgSrc: diversity,
  },
  {
    title: "Scholarship Assistance",
    description:
      "Identify and secure scholarships for their study-ABROAED journey",
    imgSrc: squareAcademicCap,
  },
  {
    title: "Visa & Accommodation",
    description:
      "End-to-end support for visa applications and finding comfortable housing overseas.",
    imgSrc: passport,
  },
  {
    title: "Finance & FOREX",
    description:
      "Simplifying overseas payments and currency exchanges with tailored financial solutions.",
    imgSrc: handMoney,
  },
  {
    title: "Customised SOP & LORs",
    description:
      "Get guidance to craft personalized SOP and LORs that stand out.",
    imgSrc: documentAdd,
  },
  {
    title: "Home Counselling",
    description:
      "Expert guidance from the comfort of your home to kickstart your study overseas journey.",
    imgSrc: homeIcon,
  },
  {
    title: "Personalised Mentor",
    description:
      "One-on-one guidance to navigate every step of your study-ABROAED journey with confidence.",
    imgSrc: diversity,
  },
  {
    title: "Scholarship Assistance",
    description:
      "Identify and secure scholarships for their study-ABROAED journey",
    imgSrc: squareAcademicCap,
  },
  {
    title: "Visa & Accommodation",
    description:
      "End-to-end support for visa applications and finding comfortable housing overseas.",
    imgSrc: passport,
  },
  {
    title: "Finance & FOREX",
    description:
      "Simplifying overseas payments and currency exchanges with tailored financial solutions.",
    imgSrc: handMoney,
  },
  {
    title: "Customised SOP & LORs",
    description:
      "Get guidance to craft personalized SOP and LORs that stand out.",
    imgSrc: documentAdd,
  },
  {
    title: "Home Counselling",
    description:
      "Expert guidance from the comfort of your home to kickstart your study overseas journey.Get expert guidance on selecting the right course and destination.",
    imgSrc: homeIcon,
  },
  {
    title: "Personalised Mentor",
    description:
      "One-on-one guidance to navigate every step of your study-ABROAED journey with confidence.",
    imgSrc: diversity,
  },
  {
    title: "Scholarship Assistance",
    description:
      "Identify and secure scholarships for their study-ABROAED journey",
    imgSrc: squareAcademicCap,
  },
  {
    title: "Visa & Accommodation",
    description:
      "End-to-end support for visa applications and finding comfortable housing overseas.",
    imgSrc: passport,
  },
  {
    title: "Finance & FOREX",
    description:
      "Simplifying overseas payments and currency exchanges with tailored financial solutions.",
    imgSrc: handMoney,
  },
  {
    title: "Customised SOP & LORs",
    description:
      "Get guidance to craft personalized SOP and LORs that stand out.",
    imgSrc: documentAdd,
  },
  {
    title: "Home Counselling",
    description:
      "Expert guidance from the comfort of your home to kickstart your study overseas journey.",
    imgSrc: homeIcon,
  },
  {
    title: "Personalised Mentor",
    description:
      "One-on-one guidance to navigate every step of your study-ABROAED journey with confidence.",
    imgSrc: diversity,
  },
  {
    title: "Scholarship Assistance",
    description:
      "Identify and secure scholarships for their study-ABROAED journey",
    imgSrc: squareAcademicCap,
  },
  {
    title: "Visa & Accommodation",
    description:
      "End-to-end support for visa applications and finding comfortable housing overseas.",
    imgSrc: passport,
  },
  {
    title: "Finance & FOREX",
    description:
      "Simplifying overseas payments and currency exchanges with tailored financial solutions.",
    imgSrc: handMoney,
  },
  {
    title: "Customised SOP & LORs",
    description:
      "Get guidance to craft personalized SOP and LORs that stand out.",
    imgSrc: documentAdd,
  },
];

const SlidingComponent = () => {
  return (
    <div className="flex gap-10 justify-between">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className="w-96   shadow-2xl  p-4 rounded-lg bg-[#26262A] 	"
        >
          <div>
            <div className="flex gap-3">
              <div>
                <img src={item.imgSrc} alt={`image-${index}`} />
              </div>
              <h3 className="mb-2  font-rethink text-base font-semibold  dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-md font-rethink text-white opacity-60">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
const texts = [
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
  "COMING SOON",
  "LAUNCHING EARLY 2025",
];
const SlidingHeader = () => {
  return (
    <div className=" flex justify-between gap-4">
      {texts.map((item, index) => (
        <div
          key={index}
          className=" whitespace-nowrap  flex items-center justify-center text-center gap-4 "
        >
          <div className="p-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="text-white text-lg font-medium font-rethink flex-shrink-0 whitespace-nowrap overflow-visibl max-w-min">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tickerPosition, setTickerPosition] = useState(100); // Initial position off-screen
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPosition((prev) => (prev <= -100 ? 100 : prev - 1)); // Reset when it moves off-screen
    }, 20); // Adjust the interval to control the speed

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzAmkN343OGaUNk7PDzzAvjqi5J38-Xf_aP7guPux7qY5tpWJhMG0Yqj6XDYPKxjYQPiA/exec",
        {
          method: "POST",
          body: JSON.stringify({ name, email, phone }),
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
        }
      );
      setOpenModal(true);
      setEmail("");
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting data.");
    }
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const words = ["coming", "soon!"];
  const belowWorld = ["launching", "early", "2025."];
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each word
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const ConfirmModal = ({ onClick }) => (
    <div className="flex flex-col gap-3 justify-center ">
      <p className="text-black text-2xl text-center">
        Thanks for submitting your information
      </p>
    </div>
  );

  return (
    <div
      className="relative w-full  text-white p-0  overflow-hidden bg-[#323238]"
      // style={{ backgroundImage: `url(${comingSoon})` }}
    >
      <div className="overflow-hidden bg-black  bg-opacity-80  ">
        <InfiniteMovingCards
          component={<SlidingHeader />}
          items={[]}
          direction="right"
          speed="superSlow"
          pauseOnHover={false}
        />
      </div>

      <div className=" w-full">
        <div className="flex justify-center max-w-[1440px] mx-auto">
          <section className="min-h-screen  flex mt-4 md:mt-16 items-center flex-col lg:justify-center md:justify-between w-full px-10 ">
            <div className="text-center mx-auto px-1  lg:px-16 sm:mb-2  md:mb-5">
              <h3 className="mb-3 text-center text-3xl font-bold text-yellow-500 sm:text-3xl md:text-4xl lg:text-6xl">
                <span className="text-white font-cinzel tracking-[0.15em] text-[32px] sm:text-[42px] md:text-[64px] lg:text-[114px] font-extrabold leading-[40px] sm:leading-[52px] md:leading-[84px] lg:leading-[128px] decoration-skip-ink">
                  ABROA
                </span>
                <span
                  style={{ color: "#fbba18" }}
                  className="font-cinzel text-[32px] sm:text-[42px] md:text-[64px] lg:text-[114px] font-extrabold leading-[40px] sm:leading-[52px] md:leading-[84px] lg:leading-[128px] tracking-[0.05em]"
                >
                  ED
                </span>
              </h3>
              <h5 className="text-white lg:text-4xl md:text-xl font-taviraj font-medium mb-1 md:mb-3">
                The World is Waiting
              </h5>
            </div>
            <div className="grid w-full mx-auto grid-col-1 md:grid-cols-2 lg:gap-1 md:gap-10  lg:px-20 md:px-10  ">
              <div className="max-w-lg ">
                <form className="  " onSubmit={handleSubmit}>
                  <p className="text-white text-lg mt-5 mb-2 text-center font-rethink">
                    Get notified when we get live!
                  </p>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="block font-rethink mb-2 text-base font-medium text-white dark:text-white"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      maxLength={30}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-[#26262A] border-none bg-opacity-40 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block font-rethink mb-2 text-base font-medium text-white dark:text-white"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-[#26262A] border-none bg-opacity-40 text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="mobile"
                      className="block mb-2 font-rethink text-base font-medium text-white dark:text-white"
                    >
                      Mobile*
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      value={phone}
                      maxLength={10}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-[#26262A] border-none bg-opacity-40 text-white text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                      placeholder="+91 9999999999"
                      required
                    />
                  </div>

                  <div className="mt-7">
                    <button
                      type="submit"
                      // onClick={(e) => handleSubmit(e)}
                      className="w-full font-rethink bg-yellow-primary text-gray-primary font-medium rounded-lg text-lg px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-yellow-400"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
              </div>
              {/* <div className=""> */}
              <div className=" hidden lg:flex flex-col justify-end  ">
                <div
                  className={`relative  bg-[#26262A] w-full  py-5 px-4 shadow-xl rounded-lg mx-auto max-w-screen-5xl `}
                >
                  <div className="lg:max-w-xs  ">
                    <h2 className="mb-4 text-lg md:text-center  font-rethink md:px-6 lg:px-1 lg:text-start   lg:text-3xl  font-extrabold text-gray-300 dark:text-white">
                      Join Waitlist for ABROAED mobile app.
                    </h2>
                    <div className="flex flex-col md:flex-row gap-5 p-2 ">
                      <div>
                        <img
                          src={playStore}
                          alt="googlePlayStoreIcon"
                          className=""
                        />
                      </div>
                      <div>
                        <img
                          src={AppStore}
                          alt="googlePlayStoreIcon"
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 md:hidden  sm:right-4 md:right-5 hidden h-80 lg:flex">
                    {/* <div className=""> */}
                    <img
                      className="hidden mx-auto w-64  md:flex object-contain"
                      src={iPhoneIcon}
                      alt="mobile app"
                    />
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="w-full h-full mx-auto px-1 py-10">
              <h6 className="text-white text-xl font-semibold opacity-70 mb-5 font-rethink">
                What’s in store for you?
              </h6>
              <div className="overflow-x-auto">
                <div className="flex " style={{ minWidth: "max-content" }}>
                  <InfiniteMovingCards
                    component={<SlidingComponent />}
                    items={[]}
                    direction="right"
                    speed="slow"
                    pauseOnHover={true}
                  />
                </div>
              </div>

              <div className="mt-10  lg:hidden bg-[#26262A] w-full py-5 px-4 shadow-xl rounded-lg mx-auto max-w-screen-5xl">
                <div className="max-w-xs lg:block md:flex justify-center text-center md:px-5">
                  <h2 className="mb-4 text-center font-rethink md:px-6 lg:px-1 lg:text-start lg:text-3xl font-extrabold text-gray-300 dark:text-white">
                    Join Waitlist for ABROAED mobile app.
                  </h2>
                  <div className="flex gap-5 px-4">
                    <div>
                      <img
                        src={playStore}
                        alt="googlePlayStoreIcon"
                        className=""
                      />
                    </div>
                    <div>
                      <img
                        src={AppStore}
                        alt="googlePlayStoreIcon"
                        className=" "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="mt-8 grid grid-cols-2 gap-4 dark:border-gray-700 sm:mt-8 sm:border-t sm:border-gray-200 sm:pt-8 lg:gap-8">
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-yellow-700 dark:text-yellow-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  <h3 className="mb-2 font-inter text-xl font-semibold text-yellow-500 dark:text-white">
                    Personalized counselling
                  </h3>
                  <p className="text-md font-inter text-white">
                    Get personalized guidance on choosing the right courses and
                    universities.
                  </p>
                </div>
                <div>
                  <svg
                    className="mb-2 h-8 w-8 text-yellow-700 dark:text-yellow-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                    />
                  </svg>
                  <h3 className="mb-2 font-inter text-xl font-semibold text-yellow-500 dark:text-white">
                    Exclusive Updates
                  </h3>
                  <p className="text-md font-inter text-white">
                    Sign up to receive exclusive news and updates about our
                    services.
                  </p>
                </div>
              </div>
          </div> */}
            </div>
          </section>
        </div>
      </div>

      <ModalLayout
        onClose={handleClose}
        component={<ConfirmModal onClick={handleClose} />}
        openModal={openModal}
      />
    </div>
  );
}

export default ComingSoonPage;
