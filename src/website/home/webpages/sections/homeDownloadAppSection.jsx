import iPhoneIcon from "../../../../assets/iPhoneIcon.png";
import playStore from "../../../../assets/gPlayStore.png";
import AppStore from "../../../../assets/AppStore.png";
// import AppStoreButton from "../../../ comman / components / appStoreButton";
function HomeDownloadApp() {
  return (
    <div>
      <section className=" dark:bg-gray-900    items-end ">
        <div className="   z-10  flex flex-col justify-between">
          <h2
            className={` text-[28px] mb-10 md:text-[45px]  max-w-screen-md leading-tight  z-10 font-extrabold text-gray-primary dark:text-white`}
          >
            For Convenient Access to Study Abroad Resources
          </h2>

          <div className=" shadow-lg rounded-xl  relative bg-[#26262A]  items-center max-w-screen-2xl     md:grid md:grid-cols-2  lg:px-5">
            <div className="px-8 py-16 pb-32">
              <h2 className="mb-4 text-[24px] md:text-[56px] tracking-tight font-medium text-white dark:text-white">
                Download Our App
              </h2>
              <p className="mb-6 font-normal max-w-lg text-white text-[18px] dark:text-gray-400">
                Download now for personalized coaching, exclusive services, and
                seamless study-abroad preparation.
              </p>
              <div className="flex flex-col md:flex-row gap-5 pt-6   ">
                <div>
                  <img
                    src={playStore}
                    alt="googlePlayStoreIcon"
                    className="w-40 h-14"
                  />
                </div>
                <div>
                  <img
                    src={AppStore}
                    alt="googlePlayStoreIcon"
                    className="w-40 h-14"
                  />
                </div>
                {/* < AppStoreButton /> */}
              </div>
            </div>
            <div className="absolute bottom-0 right-32">
              <img
                className="hidden mx-auto w-64  md:flex object-contain"
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
