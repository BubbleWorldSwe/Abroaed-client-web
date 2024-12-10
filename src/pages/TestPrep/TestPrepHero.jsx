import React, { useEffect, useState } from "react";
import TestPrepRegistrationContent from "./TestPrepRegistrationContent";
import TestPrepOverviewContent from "./TestPrepOverviewContent";
import TestPrepTips from "./TestPrepTips";
import TestPrepFee from "./TestPrepFee";

function TestPrepHero() {
  const tabNames = [
    "Overview",
    "Registration",
    "Servers",
    "Fee Structure",
    "Test Centers",
    "Test Dates",
    "Syllabus",
    "Prep Tips",
  ];

  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const [activeTabContent, setActiveTabContent] = useState(null);

  // Mapping tabs to their content using a function to make it more robust
  const getTabContent = (tab) => {
    switch (tab) {
      case "Overview":
        return <TestPrepOverviewContent />;
      case "Registration":
        return <TestPrepRegistrationContent />;
      case "Fee Structure":
        return <TestPrepFee />;
      case "Test Centers":
        return <div>Test Centers Content</div>;
      case "Servers":
        return <div>Servers Content</div>;
      case "Test Dates":
        return <div>Test Dates Content</div>;
      case "Syllabus":
        return <div>Syllabus Content</div>;
      case "Prep Tips":
        return <TestPrepTips />;
      default:
        return <div>No content available</div>;
    }
  };

  // UseEffect to update tab content when active tab changes
  useEffect(() => {
    // Set the content for the active tab
    const content = getTabContent(activeTab);
    setActiveTabContent(content);
    console.log("active tab", activeTab);
  }, [activeTab]);

  return (
    <div>
      <section className="bg-gray-50  antialiased dark:bg-gray-900 md:pb-16">
        <div className="bg-[url('https://www.britishcouncil.org.tr/sites/default/files/ielts-registration-39516.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[url('https://flowbite.s3.amazonaws.com/blocks/e-commerce/hero-ecommcerce-image-dark.jpg')]">
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
            {tabNames.map((tab) => (
              <div
                key={tab}
                className={`text-center h-full flex items-center justify-center ${
                  activeTab === tab
                    ? "text-primary-700 font-bold"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                <button
                  id={`tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}
                  type="button"
                  className={`
        w-full 
        py-2 
        px-3 
        rounded-lg 
        text-lg 
        font-semibold 
        hover:bg-gray-100 
        focus:outline-none 
        focus:ring-2 
        focus:ring-primary-300 
        transition-all 
        duration-200 
        ${
          activeTab === tab
            ? "text-primary-700 bg-primary-100"
            : "text-gray-900 dark:text-white hover:text-primary-700"
        }
      `}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 px-4"> {activeTabContent}</div>
      </section>
    </div>
  );
}

export default TestPrepHero;
