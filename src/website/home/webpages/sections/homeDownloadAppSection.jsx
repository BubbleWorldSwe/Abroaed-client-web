import iPhoneIcon from "../../../../assets/iPhoneIcon.png";
import playStore from "../../../../assets/gPlayStore.png";
import AppStore from "../../../../assets/AppStore.png";
function HomeDownloadApp() {
  return (
    <div>
      <section className=" dark:bg-gray-900    items-end ">
        <div className="  mx-auto  md:px-14 py-5 z-10 max-w-screen-2xl  px-10 flex flex-col justify-between   min-h-[80vh]">
          <h2
            className={` text-[28px] md:text-[45px]   z-10 font-extrabold text-gray-primary dark:text-white`}
          >
            For Convenient Access to Study Abroad Resources
          </h2>

          <div className=" shadow-lg rounded-xl  relative bg-[#26262A]  items-center max-w-screen-2xl    xl:gap-16 md:grid md:grid-cols-2  lg:px-5">
            <div className="px-8 py-8">
              {/* <h2 className="mb-2 text-[22px] md:text-[45px]  font-extrabold text-white leading-tight dark:text-white">
                For Convenient Access to Study Abroad Resources
              </h2> */}
              <h2 className="mb-4 text-[20px] md:text-[32px] tracking-tight font-extrabold text-white dark:text-white">
                Download Our App
              </h2>
              <p className="mb-4 font-normal max-w-lg text-white text-sm dark:text-gray-400">
                Download now for personalized coaching, exclusive services, and
                seamless study-abroad preparation.
              </p>
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
            <div className="absolute bottom-0 right-32">
              <img
                className="hidden mx-auto w-52  md:flex object-contain"
                src={iPhoneIcon}
                alt="mobile app"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeDownloadApp;
