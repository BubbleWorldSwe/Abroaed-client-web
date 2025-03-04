import PlayStore from '../../../../assets/PlayStore.png'
import iPhoneIcon from "../../../../assets/iPhoneIcon.png"
function HomeDownloadApp() {
  return (
    <div>
      <section className=" dark:bg-gray-900 h-[70vh] flex justify-center items-end relative">
        <div className="relative shadow-lg z-10">
          <div className="gap-8 bg-[#F4F4F5] items-center pt-20  px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2  lg:px-6">
            <div className="">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Lorem Ipsum Dolor
              </h2>
              <h2 className="mb-4 text-xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Get the Abroaed Mobile App.
              </h2>
              <p className="mb-6 font-light text-gray-500 text-base dark:text-gray-400">
                Abroaed helps you connect with friends and communities of people who
                share your interests. Connecting with your friends and family as well as
                discovering new ones is easy with features like Groups.
              </p>
              <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <img
                  src={PlayStore}
                  alt='googlePic'
                />
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
