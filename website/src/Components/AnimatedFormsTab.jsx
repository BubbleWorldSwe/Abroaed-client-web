"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

function Tabs({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full min-h-[600px] rounded-lg p-8">
        <div
          className={cn(
            "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full ",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => moveSelectedTabToTop(idx)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-6 py-2 rounded-full text-white font-semibold transition-all duration-300",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-yellow-200 dark:bg-yellow-800 rounded-full",
                    activeTabClassName
                  )}
                />
              )}
              <span className="relative block text-black">{tab.title}</span>
            </button>
          ))}
        </div>
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("mt-8 w-full", contentClassName)}
        />
      </div>
    </>
  );
}

export default Tabs;

const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -30 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

// Form Components
// HomeForm Component
export const HomeForm = () => (
  <form className="space-y-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      Home Form
    </h2>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Name
      <input
        type="text"
        className="block w-full px-3 py-2 mt-1 rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </label>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Address
      <input
        type="text"
        className="block w-full px-3 py-2 mt-1 rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </label>
    <button
      type="submit"
      className="py-3 px-5 mt-4 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Submit
    </button>
  </form>
);

// VirtualForm Component
export const VirtualForm = () => (
  <form className="space-y-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      Virtual Meeting Form
    </h2>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Email
      <input
        type="email"
        className="block w-full px-3 py-2 mt-1 rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </label>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Date for Virtual Meeting
      <input
        type="date"
        className="block w-full px-3 py-2 mt-1 rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </label>
    <button
      type="submit"
      className="py-3 px-5 mt-4 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Submit
    </button>
  </form>
);

// VisitUsForm Component
export const VisitUsForm = () => (
  <form className="space-y-8 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
      Visit Us Form
    </h2>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Contact Number
      <input
        type="tel"
        className="block w-full px-3 py-2 mt-1 rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </label>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Preferred Visit Date
      <input
        type="date"
        className="block w-full px-3 py-2 mt-1 rounded-lg shadow-sm bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </label>
    <button
      type="submit"
      className="py-3 px-5 mt-4 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Submit
    </button>
  </form>
);
