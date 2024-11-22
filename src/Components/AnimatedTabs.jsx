"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

function Tabs() {
  const tabOptions = [
    { title: "Home Counselling", value: "home", content: <HomeForm /> },
    {
      title: "Virtual Counselling",
      value: "virtual",
      content: <VirtualForm />,
    },
    { title: "Visit Us", value: "visit", content: <VisitUsForm /> },
  ];

  const [activeTab, setActiveTab] = useState(tabOptions[0].value);

  return (
    <div className="flex flex-col items-center w-full rounded-lg p-8">
      {/* Tabs Row */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabOptions.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-6 py-2 rounded-full font-semibold transition-all duration-300",
              activeTab === tab.value
                ? "bg-yellow-200 dark:bg-yellow-800 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Form */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-screen-md"
      >
        {tabOptions.find((tab) => tab.value === activeTab)?.content}
      </motion.div>
    </div>
  );
}

export default Tabs;

// Home Counselling Form Component
// Shared Tailwind styles for input fields
const inputStyles =
  "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

// Home Counselling Form
export const HomeForm = () => (
  <form className="space-y-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
    <FormFields />
    <TermsAndConditions />
    <button
      type="submit"
      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Book Now
    </button>
  </form>
);

// Virtual Counselling Form
export const VirtualForm = () => (
  <form className="space-y-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
    <FormFields />
    <CalendarField />
    <TermsAndConditions />
    <button
      type="submit"
      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Book Now
    </button>
  </form>
);

// Visit Us Form
export const VisitUsForm = () => (
  <form className="space-y-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
    <FormFields />
    <CalendarField />
    <TermsAndConditions />
    <button
      type="submit"
      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Book Now
    </button>
  </form>
);

// Shared form fields component
const FormFields = () => (
  <>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        First Name
      </label>
      <input
        type="text"
        className={inputStyles}
        placeholder="First Name"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Last Name
      </label>
      <input
        type="text"
        className={inputStyles}
        placeholder="Last Name"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Email ID
      </label>
      <input
        type="email"
        className={inputStyles}
        placeholder="Email ID"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Contact Number
      </label>
      <input
        type="tel"
        className={inputStyles}
        placeholder="Contact Number"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Highest Qualification
      </label>
      <input
        type="text"
        className={inputStyles}
        placeholder="Highest Qualification"
        required
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Preferred Study Destination
      </label>
      <select multiple className={`${inputStyles}`} required>
        <option>USA</option>
        <option>Canada</option>
        <option>Australia</option>
        <option>UK</option>
        <option>Germany</option>
        <option>France</option>
        <option>Others</option>
      </select>
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        When Do You Plan to Study?
      </label>
      <input type="month" className={inputStyles} required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Preferred Study Level
      </label>
      <select className={inputStyles} required>
        <option>UG</option>
        <option>PG</option>
        <option>PHD</option>
        <option>Others</option>
      </select>
    </div>
  </>
);

// Calendar component for date and time slot selection (used in Virtual and Visit Us forms)
const CalendarField = () => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Preferred Date & Time Slot
    </label>
    <input type="datetime-local" className={inputStyles} required />
  </div>
);

// Terms and Conditions component
const TermsAndConditions = () => (
  <div className="flex items-start mt-4">
    <input
      type="checkbox"
      className="w-4 h-4 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      required
    />
    <label className="ml-2 text-sm font-light text-gray-500 dark:text-gray-400">
      I agree to Abroaed Terms and privacy policy. Please contact me by phone,
      email, or SMS to assist with my enquiry. I would like to receive updates
      and offers from Abroaed.
    </label>
  </div>
);
