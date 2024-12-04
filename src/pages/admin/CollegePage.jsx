import React, { useState } from "react";
import DeleteModal from "../../Components/Modals/DeleteModal";

const sections = [
  {
    title: "Overview",
    content:
      " Stunning graphics, lightning-fast load times, and an impressive game library. The new controller's haptic feedback adds a whole new level of immersion. Truly a next-gen experience!",
  },
  { title: "Media Gallery", content: "Some content for media gallery" },
  { title: "Financial Aid and Scholarships", content: "" },
  { title: "Courses", content: "Some content for courses" },
  { title: "FAQs", content: "" },
];

function CollegePage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to manage Add modal open/close
  const [titlecaller, setTitleCaller] = useState(false); // State to manage Add modal open/close
  const [selectedSection, setSelectedSection] = useState(null); // State to manage Add modal open/close

  const handleOpenDeleteModal = (section) => {
    setSelectedSection(section);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCloseModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedSection(null);
  };

  const handleOpenAddModal = (title) => {
    console.log("title calling", title);
    setTitleCaller(title);
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <div>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCloseModal}
        onConfirm={() => {
          // if (selectedSection) {
          //   handleCancelBooking(selectedBooking._id);
          // }
          handleDeleteCloseModal();
        }}
        title={selectedSection?.title}
      />
      {/* <main class="pb-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <header class="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative">
          <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
          <div class="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
            <span class="block mb-4 text-gray-300">
              Published in{" "}
              <a href="#" class="font-semibold text-white hover:underline">
                World News
              </a>
            </span>
            <h1 class="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl">
              Harvard University
            </h1>
            <p class="text-lg font-normal text-gray-300">Boston, USA</p>
          </div>
        </header>
        <div class="flex relative z-20 justify-between p-6 -m-36 mx-4 max-w-screen-xl bg-white dark:bg-gray-800 rounded xl:-m-32 xl:p-9 xl:mx-auto">
          <article class=" w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div class="flex flex-col lg:flex-row justify-between lg:items-center">
              <div class="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
                <span>
                  By{" "}
                  <a
                    href="#"
                    class="text-gray-900 dark:text-white hover:underline no-underline font-semibold"
                  >
                    Jese Leos
                  </a>
                </span>
                <span class="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full"></span>
                <span>
                  <time
                    class="font-normal text-gray-500 dark:text-gray-400"
                    pubdate
                    datetime="2022-03-08"
                    title="August 3rd, 2022"
                  >
                    August 3, 2022, 2:20am EDT
                  </time>
                </span>
              </div>
              <aside aria-label="Share social media">
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Delete
                  </button>
                </div>
              </aside>
            </div>
            <p class="lead">
              Flowbite is an open-source library of UI components built with the
              utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </p>

            <h3>Understanding typography</h3>
            <h4>Type properties</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h4>Measurement from the baseline</h4>
            <p>
              A typeface is a collection of letters. While each letter is
              unique, certain shapes are shared across letters. A typeface
              represents shared patterns across a collection of letters.
            </p>
            <h3>Type classification</h3>
            <h4>Serif</h4>
            <p>
              A serif is a small shape or projection that appears at the
              beginning or end of a stroke on a letter. Typefaces with serifs
              are called serif typefaces. Serif fonts are classified as one of
              the following:
            </p>
            <h4>Old-Style serifs</h4>

            <h3>Laying the best for successful prototyping</h3>
            <p>
              A serif is a small shape or projection that appears at the
              beginning:
            </p>
          </article>
        </div>
      </main> */}
      <main className="min-h-screen flex flex-col gap-4 overflow-y-auto p-4 bg-gray-150 dark:bg-gray-900">
        {sections.map((section, index) => (
          <div class="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div class="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex">
              <div class="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                <div class="flex items-center gap-4">
                  <a></a>
                  <div>
                    <span class="bg-gray-100 text-gray-800 text-xs font-medium mb-1.5 inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                      <svg
                        class="me-1 h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                        />
                      </svg>
                      19 Jan 2024
                    </span>
                    <a
                      href="#"
                      class="dark:text-white block hover:underline font-semibold mb-2 text-gray-900 sm:mb-0"
                    >
                      {section.title}
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-0.5">
                <svg
                  class="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              </div>
            </div>
            <p class="mb-4 items-center sm:flex sm:flex-wrap xl:flex text-gray-500 dark:text-gray-400 pt-4">
              {section.content ? (
                <p className="text-gray-700 dark:text-gray-300">
                  {section.content}
                </p>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No content added
                </p>
              )}
            </p>
            {section.content ? (
              <div class="flex items-center gap-4">
                <button
                  type="button"
                  data-modal-target="editReviewModal"
                  data-modal-toggle="editReviewModal"
                  class="inline-flex text-sm items-center font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  <svg
                    class="me-1 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    />
                  </svg>
                  Edit
                </button>
                <button
                  id="deleteReviewButton"
                  data-modal-target="deleteReviewModal"
                  data-modal-toggle="deleteReviewModal"
                  type="button"
                  onClick={() => handleOpenDeleteModal(section)}
                  class="inline-flex text-sm items-center font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  <svg
                    class="me-1 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => handleOpenAddModal(section.title)}
                className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Add
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default CollegePage;
