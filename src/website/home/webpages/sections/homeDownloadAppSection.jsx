import iPhoneIcon from "../../../../assets/iPhoneIcon.png";
import playStore from "../../../../assets/gPlayStore.png";
import AppStore from "../../../../assets/AppStore.png";
function HomeDownloadApp() {
  return (
    <div>
      <section className=" dark:bg-gray-900 h-[75vh]  mt-24  flex justify-center items-end ">
        <div className="  mx-auto px-10 py-5 z-10 ">
          <div className=" shadow-lg rounded-xl relative bg-[#26262A]  items-center max-w-screen-2xl  mx-auto  xl:gap-16 md:grid md:grid-cols-2  lg:px-3">
            <div className="px-8 py-8">
              <h2 className="mb-2 text-[45px]  font-extrabold text-white leading-tight dark:text-white">
                For Convenient Access to Study Abroaed Resources
              </h2>
              <h2 className="mb-4 text-[32px] tracking-tight font-extrabold text-white dark:text-white">
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
