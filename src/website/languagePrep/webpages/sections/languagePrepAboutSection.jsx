/* eslint-disable react/no-unescaped-entities */

function LanguagePrepAbout({ languagePrepsDetails }) {
  return (
    <div className="relative z-10 mx-auto px-10">
      <div className="mx-auto  max-w-screen-2xl mt-8 py-4 flex flex-col gap-6">
        <header className="mb-4 lg:mb-6 not-format">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            About {languagePrepsDetails?.productName}
          </h2>
          <p className="mt-3 font-inter text-lg text-gray-800">
            {languagePrepsDetails?.about}
          </p>
        </header>
      </div>
    </div>
  );
}

export default LanguagePrepAbout;
