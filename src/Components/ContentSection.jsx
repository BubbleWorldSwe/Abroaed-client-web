import React from "react";

function ContentSection() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl flex flex-col gap-3 px-4 py-8 mx-auto sm:py-16 lg:py-24">
          <div className="flex flex-col gap-2 py-4">
            <h2 className="text-3xl w-full items-center text-left  font-extrabold leading-tight text-black sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
              Our app helps users easily track their expenses and create a
              budget. With a user-friendly interface, the app allows users to
              quickly input their income and expenses, and then automatically
              categorizes them for easy tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div>
              <div id="deviceTabContent" className="mt-8">
                <div id="ios" role="tabpanel" aria-labelledby="ios-tab">
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div>
                      <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                        Flowbite in iOS: Take control of your finances with us
                      </h2>
                      <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                        Our app helps users easily track their expenses and
                        create a budget. With a user-friendly interface, the app
                        allows users to quickly input their income and expenses,
                        and then automatically categorizes them for easy
                        tracking.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                      <ul className="space-y-4">
                        <li className="flex items-center gap-2.5">
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                            <svg
                              aria-hidden="true"
                              className="w-3.5 h-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-base font-medium text-gray-900 dark:text-white">
                            Continuous integration and deployment
                          </span>
                        </li>

                        <li className="flex items-center gap-2.5">
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                            <svg
                              aria-hidden="true"
                              className="w-3.5 h-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-base font-medium text-gray-900 dark:text-white">
                            Development workflow
                          </span>
                        </li>

                        <li className="flex items-center gap-2.5">
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                            <svg
                              aria-hidden="true"
                              className="w-3.5 h-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-base font-medium text-gray-900 dark:text-white">
                            Knowledge management
                          </span>
                        </li>
                      </ul>

                      <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                        Flow Budget takes the hassle out of budgeting and
                        empowers users to take control of their finances
                      </h3>
                    </div>

                    <div>
                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Check out the iOS app features
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 ml-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2.5rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                    className="dark:hidden w-[272px] h-[572px]"
                    alt=""
                  />
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                    className="hidden dark:block w-[272px] h-[572px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:gap-16 lg:grid-cols-2">
            <div className="hidden lg:block">
              <img
                className="object-cover w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-1.png"
                alt="Feature illustration"
              />
              <img
                className="hidden object-cover w-full dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
                alt="Feature illustration"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                  We invest in the world's potential
                </h2>
                <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Flowbite Budget
                  </span>{" "}
                  is a mobile app that helps users easily track their expenses
                  and create a budget.
                </p>
                <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                  With a user-friendly interface, the app allows users to
                  quickly input their income and expenses, and then
                  automatically categorizes them for easy tracking.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                <ul className="space-y-4">
                  <li className="flex items-center gap-2.5">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      Dynamic reports and dashboards
                    </span>
                  </li>

                  <li className="flex items-center gap-2.5">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      Templates for everyone
                    </span>
                  </li>

                  <li className="flex items-center gap-2.5">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      Development workflow
                    </span>
                  </li>

                  <li className="flex items-center gap-2.5">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      Limitless business automation
                    </span>
                  </li>

                  <li className="flex items-center gap-2.5">
                    <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      Knowledge management
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  title=""
                  className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Start building
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  title=""
                  className="px-5 py-2.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  Get a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContentSection;
