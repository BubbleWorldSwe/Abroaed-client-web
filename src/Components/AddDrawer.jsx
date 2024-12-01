import React from "react";

function AddDrawer({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          // Close the drawer when clicking on the overlay
        >
          <div
            id="addReviewDrawer"
            className={`fixed right-0 top-0 z-40 h-screen w-full max-w-md overflow-y-auto bg-white p-4 transition-transform antialiased dark:bg-gray-800 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            tabIndex="-1"
            aria-labelledby="addReviewDrawer-label"
          >
            <h5
              id="addReviewDrawer-label"
              class="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400"
            >
              Add a review
            </h5>
            <button
              type="button"
              onClick={onClose}
              data-drawer-dismiss="addReviewDrawer"
              aria-controls="addReviewDrawer"
              class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
            <form action="#">
              <h4 class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Please choose the product:
              </h4>
              <div class="divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 mb-4">
                <div class="flex items-center gap-6 p-4">
                  <div>
                    <input
                      id="product4"
                      type="checkbox"
                      value=""
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label for="product4" class="sr-only">
                      {" "}
                      Product 4{" "}
                    </label>
                  </div>

                  <div class="flex items-center gap-6">
                    <div>
                      <a
                        href="#"
                        class="flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                      >
                        <img
                          class="h-auto max-h-full w-full dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                          alt="imac image"
                        />
                        <img
                          class="hidden h-auto max-h-full w-full dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                          alt="imac image"
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                      >
                        {" "}
                        PC APPLE iMac (2023)
                      </a>
                      <dl class="mt-2 sm:flex items-center gap-2.5">
                        <dt class="text-base font-normal text-gray-500 dark:text-gray-400 lg:w-36">
                          Order Number:
                        </dt>
                        <dd class="text-base font-normal text-gray-500 dark:text-gray-400">
                          <a href="#" class="hover:underline">
                            #737423642
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-6 p-4">
                  <div>
                    <input
                      id="product5"
                      type="checkbox"
                      value=""
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label for="product5" class="sr-only">
                      {" "}
                      Product 5{" "}
                    </label>
                  </div>

                  <div class="flex items-center gap-6">
                    <div>
                      <a
                        href="#"
                        class="mb-4 flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                      >
                        <img
                          class="h-auto max-h-full w-full dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                          alt="imac image"
                        />
                        <img
                          class="hidden h-auto max-h-full w-full dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                          alt="imac image"
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                      >
                        {" "}
                        Apple Watch SE
                      </a>
                      <dl class="mt-2 sm:flex items-center gap-2.5">
                        <dt class="text-gray-500 dark:text-gray-400 lg:w-36">
                          Order Number:
                        </dt>
                        <dd class="text-base font-normal text-gray-500 dark:text-gray-400">
                          <a href="#" class="hover:underline">
                            #45632736
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-6 p-4">
                  <div>
                    <input
                      id="product6"
                      type="checkbox"
                      value=""
                      class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label for="product6" class="sr-only">
                      {" "}
                      Product 6{" "}
                    </label>
                  </div>

                  <div class="flex items-center gap-6">
                    <div>
                      <a
                        href="#"
                        class="flex aspect-square h-14 w-14 shrink-0 items-center sm:mb-0"
                      >
                        <img
                          class="h-auto max-h-full w-full dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                          alt="imac image"
                        />
                        <img
                          class="hidden h-auto max-h-full w-full dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                          alt="imac image"
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="#"
                        class="mb-2 font-medium text-gray-900 hover:underline dark:text-white sm:mt-0"
                      >
                        {" "}
                        Sony PlayStation 5
                      </a>
                      <dl class="mt-2 sm:flex items-center gap-2.5">
                        <dt class="text-gray-500 dark:text-gray-400 lg:w-36">
                          Order Number:
                        </dt>
                        <dd class="text-base font-normal text-gray-500 dark:text-gray-400">
                          <a href="#" class="hover:underline">
                            #45632736
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center">
                  <svg
                    class="h-6 w-6 text-yellow-300 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="ms-2 h-6 w-6 text-yellow-300 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="ms-2 h-6 w-6 text-yellow-300 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="ms-2 h-6 w-6 text-gray-300 dark:text-gray-500 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span class="ms-2 text-lg font-bold text-gray-900 dark:text-white">
                    3.0 out of 5
                  </span>
                </div>
                <div>
                  <label
                    for="title"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Review title{" "}
                    <span class="dark:text-gay-400 font-normal text-gray-500">
                      (30-150 characters)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Type review title"
                    required=""
                  />
                </div>
                <div>
                  <p class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Title suggestions
                  </p>
                  <div class="flex space-x-2">
                    <button
                      type="button"
                      class="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                    >
                      Awesome specifications
                    </button>
                    <button
                      type="button"
                      class="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                    >
                      Best price
                    </button>
                    <button
                      type="button"
                      class="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800"
                    >
                      Great battery
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    for="review"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Review{" "}
                    <span class="dark:text-gay-400 font-normal text-gray-500">
                      (150-3000 characters)
                    </span>
                  </label>
                  <textarea
                    id="review"
                    rows="5"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    required=""
                  ></textarea>
                  <p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
                    Problems with the product or delivery?{" "}
                    <a
                      href="#"
                      class="text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Send a report
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <label
                    for="likes"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What did you like?
                  </label>
                  <input
                    type="text"
                    name="likes"
                    id="likes-1"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    value="Great customer support"
                    required=""
                  />
                  <input
                    type="text"
                    name="likes-2"
                    id="likes-2"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    value="Fair pricing"
                    required=""
                  />
                  <input
                    type="text"
                    name="likes-2"
                    id="likes-2"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="What you like about this product?"
                    required=""
                  />
                  <button
                    type="button"
                    class="py-2.5 px-5 w-full inline-flex justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {" "}
                    <svg
                      class="w-5 h-5 me-2"
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
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    Add another
                  </button>
                </div>
                <div>
                  <label
                    for="dislikes"
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    What did you dislike?
                  </label>
                  <input
                    type="text"
                    name="dislikes"
                    id="dislikes-1"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    value="Product arrived later than expected"
                    required=""
                  />
                  <input
                    type="text"
                    name="dislikes-2"
                    id="dislikes-2"
                    class="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="What you dislike about this product?"
                    required=""
                  />
                  <button
                    type="button"
                    class="py-2.5 px-5 w-full inline-flex justify-center items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {" "}
                    <svg
                      class="w-5 h-5 me-2"
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
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    Add another
                  </button>
                </div>

                <div class="flex w-full justify-center space-x-4 pb-4">
                  <button
                    type="submit"
                    class="w-full justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit review
                  </button>
                  <button
                    type="button"
                    data-drawer-dismiss="addReviewDrawer"
                    aria-controls="addReviewDrawer"
                    class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 w-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddDrawer;
