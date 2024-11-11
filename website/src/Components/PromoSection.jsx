// PromoSection.js
import React from "react";
import { motion } from "framer-motion";
import LampContainer from "./LampContainer";
import man from "../assets/rb_7493.png";
function PromoSection() {
  return (
    <div>
      <section className=" flex flex-col items-center px-4">
        <div className="flex flex-col md:flex-row items-center mx-auto rounded-lg bg-slate-950 dark:bg-gray-800  ">
          {/* Left Side: Image */}
          <div className="md:hidden lg:flex  justify-center w-full md:w-1/2 mb-4 md:mb-0">
            <img className="rounded-lg" src={man} alt="store image" />
          </div>

          {/* Right Side: Text Content Wrapped with LampContainer */}
          <LampContainer className="w-full  text-center">
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mb-3 text-2xl font-inter font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
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
              className="mb-6 font-inter text-gray-500 dark:text-gray-400"
            >
              Our counsellor will get in touch with you and will guide you
              through all the details of filling applications and preparing
              documents, so that you can focus on yourself, leaving all the
              hassle for us to handle.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              href="#"
              className="inline-flex max-w-[250px] items-center justify-center rounded-lg bg-yellow-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            >
              Book now
            </motion.a>
          </LampContainer>
        </div>
      </section>
    </div>
  );
}

export default PromoSection;
