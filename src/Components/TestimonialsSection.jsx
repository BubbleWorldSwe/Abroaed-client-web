// src/components/TestimonialsSection.js
import React from "react";
import InfiniteMovingCards from "./InfiniteMovingCards";

const testimonials = [
  {
    quote: "This service was a game-changer for my career goals.",
    name: "Alex Johnson",
    title: "Master’s Applicant",
  },
  {
    quote: "Thanks to ABROAED, I secured a spot in my dream university!",
    name: "Priya Patel",
    title: "MBA Applicant",
  },
  {
    quote: "Guided me through every step. Highly recommend!",
    name: "Li Wei",
    title: "Undergraduate Applicant",
  },
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  return (
    <div className="w-full h-[400px] overflow-hidden items-center bg-[#FCF6CD] bg-gray-100 py-8 flex gap-3">
      <div className="flex flex-col w-1/4 items-start justify-center ">
        <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="mb-6 lg:mb-8 text-md  tracking-tight font-light flex items-start text-center text-gray-900 dark:text-white">
          Thousands of stories <br />
          of growth
        </p>
      </div>
      <div className="w-3/4">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
