import { useEffect, useState } from "react";
import TestPrepRegistrationContent from "./TestPrepRegistrationContent";
import TestPrepOverviewContent from "./TestPrepOverviewContent";
import TestPrepTips from "./TestPrepTips";
import TestPrepFee from "./TestPrepFee";
import image from "../../../../assets/dark.png";
import { tabNames } from "../../data";

function TestPrepHero({ testPrepsDetails }) {
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
  }, [activeTab]);

  return (
    <div className="font-rethink">
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Text Content */}
        <div className="absolute bottom-8 left-11 p-6 rounded-lg shadow-lg max-w-2xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">
            {testPrepsDetails?.productName}
          </h1>
          <p className="font-light text-white md:text-lg xl:text-xl">
            {testPrepsDetails?.about}
            <br />
            <a
              className="font-medium text-primary-600 hover:underline"
              href="#"
            >
              Twitter
            </a>{" "}
            or our{" "}
            <a className="font-medium text-primary-600 hover:underline" href="">
              blog
            </a>{" "}
            for the latest updates.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TestPrepHero;
