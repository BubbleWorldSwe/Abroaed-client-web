import PlayStore from "../../../../assets/PlayStore.png";
import PhoneImg from "../../../../assets/PhoneImg.png";
function HomeDownloadApp() {
  return (
    <div>
      <section className=" dark:bg-gray-900 h-[75vh] flex justify-center items-end ">
        <div className="  mx-auto px-10 py-5 z-10">
          <div className=" shadow-lg relative bg-[#F4F4F5]  items-center max-w-screen-2xl  mx-auto  xl:gap-16 md:grid md:grid-cols-2  lg:px-3">
            <div className="px-8 py-10">
              <h2 className="mb-4 text-5xl  font-extrabold text-[#27272A] dark:text-white">
                For Convenient Access to Study Abroaed Resources
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
            <div className="absolute -bottom-9 right-32">
              <img
                className="hidden mx-auto w-full h-[35rem]  md:flex"
                src={PhoneImg}
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
