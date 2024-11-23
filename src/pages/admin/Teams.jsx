import React, { useState } from "react";
import AddTeamMember from "../../Components/Modals/AddTeamMember";
import { EllipsisVertical } from "lucide-react";

const teamMembers = [
  { name: "John Doe", role: "Developer" },
  { name: "Jane Smith", role: "Designer" },
  { name: "Alice Johnson", role: "Project Manager" },
];

function Teams() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [dropdownDirection, setDropdownDirection] = useState(null);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleDropdownToggle = (event, index) => {
    const buttonElement = event.currentTarget;
    const rect = buttonElement.getBoundingClientRect();

    const spaceAbove = rect.top; // Distance from button to top of the viewport
    const spaceBelow = window.innerHeight - rect.bottom; // Distance from button to bottom of the viewport

    // Adjust dropdownDirection based on available space
    if (spaceBelow < 150 && spaceAbove > 150) {
      setDropdownDirection("up"); // Show dropdown upwards
    } else {
      setDropdownDirection("down"); // Show dropdown downwards
    }

    setDropdownVisible(index === dropdownVisible ? null : index);
  };

  return (
    <>
      <AddTeamMember isOpen={isAddModalOpen} onClose={handleCloseAddModal} />

      <div className="h-screen flex flex-col p-2">
        {/* Adjust padding and spacing */}
        <header className="p-4 bg-white text-white">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Admin
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Teams
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </header>
        <section class="bg-gray-300 dark:bg-gray-900 py-3 sm:py-5">
          <div class="mx-auto max-w-screen-2xl ">
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div class="border-b dark:border-gray-700 mx-4">
                <div class="flex items-center justify-between space-x-4 pt-3">
                  <div class="flex-1 flex items-center space-x-3">
                    <h5 class="dark:text-white font-semibold">Team Members</h5>
                  </div>
                </div>
                <div class="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
                  <div class="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
                    <form class="w-full md:max-w-sm flex-1 md:mr-4">
                      <label
                        for="default-search"
                        class="text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewbox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search..."
                          required=""
                        />
                        <button
                          type="submit"
                          class="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <div class="flex items-center space-x-4"></div>
                  </div>
                  <div class="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleOpenAddModal}
                      class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      <svg
                        class="h-3.5 w-3.5 mr-2"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        />
                      </svg>
                      Add Team Member
                    </button>
                  </div>
                </div>
              </div>
              <div class="mx-4 pb-3 flex flex-wrap">
                <div class="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">
                  Show only:
                </div>
                <div class="flex flex-wrap">
                  <div class="flex items-center mt-3 mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      All
                    </label>
                  </div>
                  <div class="flex items-center mr-4 mt-3">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-2-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Active products
                    </label>
                  </div>
                  <div class="flex items-center mr-4 mt-3">
                    <input
                      id="inline-3-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-3-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Pending products
                    </label>
                  </div>
                  <div class="flex items-center mr-4 mt-3">
                    <input
                      id="inline-4-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="inline-4-radio"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Inactive products
                    </label>
                  </div>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-all"
                            type="checkbox"
                            class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-all" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>
                      <th scope="col" class="px-4 py-3 min-w-[14rem]">
                        Name
                      </th>
                      <th scope="col" class="px-4 py-3 min-w-[10rem]">
                        Role Type
                        <svg
                          class="h-4 w-4 ml-1 inline-block"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          />
                        </svg>
                      </th>

                      <th scope="col" class="px-4 py-3 min-w-[6rem]">
                        Assigned To
                        <svg
                          class="h-4 w-4 ml-1 inline-block"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          />
                        </svg>
                      </th>

                      <th scope="col" class="px-4 py-3 min-w-[7rem]">
                        Status
                        <svg
                          class="h-4 w-4 ml-1 inline-block"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                          />
                        </svg>
                      </th>
                      <th scope="col" class="px-4 py-3">
                        <span class="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member, index) => (
                      <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="px-4 py-3 w-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              onclick="event.stopPropagation()"
                              class="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-1"
                              class="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                        >
                          <img
                            src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                            alt="iMac Front Image"
                            class="h-8 w-auto mr-3"
                          />
                          Apple iMac 27&#34;
                        </th>
                        <td className="px-4 py-3">{member.name}</td>
                        <td className="px-4 py-3">{member.role}</td>

                        <td class="px-4 py-3 whitespace-nowrap">
                          <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            Active
                          </span>
                        </td>
                        <td class="px-4 py-3">
                          <button
                            className="focus:outline-none"
                            onClick={(e) => handleDropdownToggle(e, 1)}
                          >
                            <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                          </button>
                          {dropdownVisible === index && (
                            <div
                              id="apple-imac-27-dropdown"
                              class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                              <ul
                                class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="apple-imac-27-dropdown-button"
                              >
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Show
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Edit
                                  </a>
                                </li>
                              </ul>
                              <div class="py-1">
                                <a
                                  href="#"
                                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div
                class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4"
                aria-label="Table navigation"
              >
                <div class="text-xs flex items-center space-x-5">
                  <div>
                    <div class="text-gray-500 dark:text-gray-400 mb-1">
                      Purchase price
                    </div>
                    <div class="dark:text-white font-medium">$ 3,567,890</div>
                  </div>
                  <div>
                    <div class="text-gray-500 dark:text-gray-400 mb-1">
                      Total selling price
                    </div>
                    <div class="dark:text-white font-medium">$ 8,489,400</div>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <button
                    type="button"
                    class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
                  >
                    Print barcodes
                  </button>
                  <button
                    type="button"
                    class="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
                  >
                    Duplicate
                  </button>
                  <button
                    type="button"
                    class="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Export CSV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Teams;
