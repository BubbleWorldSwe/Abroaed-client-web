import React, { useState } from "react";
import TestPrepContent from "./TestPrepContent";

// Tab content components
function Overview() {
  return <TestPrepContent />;
}

function Registration() {
  return <div>Registration Content</div>;
}

function Fees() {
  return <div>Fees Content</div>;
}

function TestCenters() {
  return <div>Test Centers Content</div>;
}

function Servers() {
  return <div>Servers Content</div>;
}

function TestDates() {
  return <div>Test Dates Content</div>;
}

function Syllabus() {
  return <div>Syllabus Content</div>;
}

function PrepTips() {
  return <div>Prep Tips Content</div>;
}

function TestPrepHero() {
  const [activeTab, setActiveTab] = useState("Overview");

  // Mapping tabs to their content
  const tabContent = {
    Overview: <Overview />,
    Registration: <Registration />,
    Fees: <Fees />,
    "Test Dates": <TestDates />,
    Syllabus: <Syllabus />,
    "Prep Tips": <PrepTips />,
    "Test Centers": <TestCenters />,
  };

  return (
    <div>
      <section className="bg-gray-50 pb-8 antialiased dark:bg-gray-900 md:pb-16">
        <div className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-light.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-dark.jpg')]">
          <div className="relative z-10 mx-auto max-w-2xl px-4 pb-32 pt-8 text-center text-white lg:pt-16 xl:px-0">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-primary-900 dark:text-white lg:text-6xl">
              IELTS - one test, countless opportunities
            </h1>
            <p className="mb-6 font-light text-primary-800 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              The world’s leading test of English for international higher
              education and migration.
            </p>
            <a
              href="#"
              className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="-mt-20 px-4">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 rounded-lg border border-gray-200 bg-white py-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-3 md:grid-cols-4 md:p-8 lg:grid-cols-8">
            {Object.keys(tabContent).map((tab) => (
              <div
                key={tab}
                className={`text-center h-full items-center flex ${
                  activeTab === tab
                    ? "text-primary-700 font-bold"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <button
                  className="mb-2 text-lg font-semibold hover:underline"
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 px-4">
          {/* Render the content for the active tab */}
          {tabContent[activeTab]}
        </div>
      </section>
    </div>
  );
}

export default TestPrepHero;
