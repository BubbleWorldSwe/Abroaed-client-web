import PlayStore from "../../../../assets/PlayStore.png";
import iPhoneIcon from "../../../../assets/iPhoneIcon.png";
function HomeDownloadApp() {
  return (
    <div>
      <section className=" dark:bg-gray-900 h-[80vh] flex justify-center items-end relative">
        <div className="relative  mx-auto px-10 z-10">
          <div className=" shadow-lg bg-[#F4F4F5]  items-center max-w-screen-2xl  mx-auto  xl:gap-16 md:grid md:grid-cols-2  lg:px-3">
            <div className="px-5 py-8">
              <h2 className="mb-4 text-5xl  font-extrabold text-[#27272A] dark:text-white">
                For Convenient Access to Study Abroad Resources
              </h2>
              <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Download Our App
              </h2>
              <p className="mb-6 font-normal max-w-lg text-[#52525B] text-sm dark:text-gray-400">
                Download now for personalized coaching, exclusive services, and
                seamless study-abroad preparation.
              </p>
              <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <img src={PlayStore} alt="googlePic" />
              </div>
            </div>
            <div className="absolute bottom-0 right-32">
              <img
                className="hidden mx-auto w-64  md:flex"
                src={iPhoneIcon}
                alt="mobile app"
              />
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-5 left-0" >
          <img
            className="rounded-lg  z-0"
            src={vectorRightNoseCurve}
            alt="Counselling session"
          />
        </div> */}
      </section>
    </div>
  );
}

export default HomeDownloadApp;
