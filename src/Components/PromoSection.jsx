import React from "react";
import { motion } from "framer-motion";
import LampContainer from "./LampContainer";
import man from "../assets/hands.png";
import Tabs, { HomeForm, VirtualForm, VisitUsForm } from "./AnimatedTabs";
const tabData = [
  { title: "Home", value: "home", content: <HomeForm /> },
  { title: "Virtual", value: "virtual", content: <VirtualForm /> },
  { title: "Visit Us", value: "visit", content: <VisitUsForm /> },
];

function  PromoSection() {
  return (
    <div>
      <section className="px-4 py-8 ">
        <div className="flex flex-col  lg:flex-row items-center mx-auto max-w-7xl space-y-8 lg:space-y-0 lg:space-x-8 rounded-lg">
          {/* Left Side: Text and Image */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Upper Div: Animation and Text */}
            <div className="text-center lg:text-left">
              <LampContainer>
                <motion.h1
                  initial={{ opacity: 0.5, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="mb-3 text-2xl font-inter font-bold leading-tight tracking-tight text-black dark:text-white md:text-4xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text "
                >
                  We are here to help you. <br />
                  Book your Home Counselling session today!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="font-inter text-black dark:text-gray-400"
                >
                  Our counsellor will get in touch with you and will guide you
                  through all the details of filling applications and preparing
                  documents, so that you can focus on yourself, leaving all the
                  hassle for us to handle.
                </motion.p>
              </LampContainer>
            </div>

            {/* Bottom Div: Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                className="rounded-lg max-w-full"
                src={man}
                alt="Counselling session"
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex w-full lg:w-1/2 justify-center lg:justify-end">
            <Tabs
              tabs={tabData}
              containerClassName="mb-4"
              activeTabClassName="bg-gray-200 dark:bg-zinc-800"
              tabClassName="hover:bg-gray-300 dark:hover:bg-zinc-700"
              contentClassName="transition-opacity duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PromoSection;
