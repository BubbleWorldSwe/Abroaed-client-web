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
    <div className="w-full overflow-hidden bg-gray-100 py-8">
      <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Testimonials
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default TestimonialsSection;
