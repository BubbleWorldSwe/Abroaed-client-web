/* eslint-disable react/prop-types */


function LanguagePrepAbout({ languagePrepsDetails }) {
  return (
    <div className="relative z-10 mx-auto px-12">
      <div className="mx-auto  max-w-screen-2xl mt-8 py-4 flex flex-col gap-6">
        <header className="mb-4 lg:mb-6 not-format">
          <h2 className={`mb-5 text-[45px]  font-extrabold text-gray-primary dark:text-white`}>
            About {languagePrepsDetails?.productName}
          </h2>
          <p className={`text-[18px] text-gray-primary font-normal`}>            {languagePrepsDetails?.about}
          </p>
        </header>
      </div>
    </div>
  );
}

export default LanguagePrepAbout;
