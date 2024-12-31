import React from "react";

function HowItWorks() {
  const steps = [
    {
      step: 1,
      heading: "Check for Loan",
      description:
        "Start by checking your eligibility and loan options. This ensures you’re making the right financial decisions.Cillum sunt eiusmod ipsum eiusmod ut ea excepteur labore aute enim sint incididunt.",
    },
    {
      step: 2,
      heading: "Choose Your Lender",
      description:
        "Select the lender that offers the best rates and terms for your specific needs. Compare carefully to maximize benefits.Cillum sunt eiusmod ipsum eiusmod ut ea excepteur labore aute enim sint incididunt.",

    },
    {
      step: 3,
      heading: "Check Available Limit",
      description:" Confirm the amount you can borrow based on your financial profile. This step helps you plan effectively.   Cillum sunt eiusmod ipsum eiusmod ut ea excepteur labore aute enim sint incididunt. ",
    },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 lg:py-16 lg:px-8">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              How It Works?
            </h2>
            <p className="mb-4 font-light">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <p className="mb-4 font-medium">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col justify-between h-200 w-200 p-6 bg-black border border-gray-200 rounded-lg shadow"
              >
                <div>
                  <span className="block text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {step.step}
                  </span>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">
                    {step.heading}
                  </h5>
                </div>
                <p className="font-normal text-white dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;