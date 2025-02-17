import { useState } from "react";
import DestinationNavItemModal from "../modals/destinationNavItemModal";
import { destinationMenuItems } from "../data";
import ExploreCourseNavItemModal from "../modals/exploreCourseNavItemModal";
import { ChevronDown } from "lucide-react";

function Header() {
  const [dropdowns, setDropdowns] = useState({
    whyAbroad: false,
    exploreCourses: false,
    testPrep: false,
    pathways: false
  });
  const [activeDropdown, setActiveDropdown] = useState(null);


  // Open dropdown
  const handleMouseEnter = (key) => {
    setActiveDropdown(key);
  };

  // Close dropdown when leaving both nav link & modal
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  // const handleMouseEnter = (key) => {
  //   setDropdowns((prev) => ({
  //     ...prev,
  //     [key]: true, // Open the dropdown
  //   }));
  // };

  // // Close dropdown when mouse leaves
  // const handleMouseLeave = (key) => {
  //   setDropdowns((prev) => ({
  //     ...prev,
  //     [key]: false, // Close the dropdown
  //   }));
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={`w-full sticky top-0 z-[30] border-b-2 border-gray-400 transition-all duration-300 ease-in-out bg-white`}
    >
      <nav className="border-gray-900  dark:border-gray-600 dark:bg-gray-800 ">
        <div className={`py-3   ${"bg-yellow-300 shadow-md opacity-100"}`}>
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <a
              href="#"
              title=""
              className="flex items-center justify-center gap-2  font-inter text-sm hover:underline text-white dark:text-yellow-300"
            >
              Improve Your IELTS Writing with Our Free Tool 🔍
              <svg
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
        <nav className="flex items-center w-full px-6 py-4 bg-white ">
          {/* First Div: Logo Section */}
          <div className="flex flex-grow-0 basis-[10%]">

            <img
              src="https://flowbite.com/docs/images/logo.svg"
              // src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ABROAED
            </span>
          </div>

          {/* Second Div: Links Section */}
          <div className="flex-grow basis-[80%] flex items-center justify-center relative text-yellow-500">
            <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium">
              <li>
                <button
                  id="mega-menu-button"
                  onClick={() => toggleDropdown("exploreCourses")}
                  className="whitespace-nowrap flex gap-1  hover:text-black border border-gray-500 hover:bg-white bg-red-600   rounded text-white p-2 dark:text-primary-500"
                >
                  Explore Courses
                  <ChevronDown />
                </button>
                {dropdowns.exploreCourses && (
                  <ExploreCourseNavItemModal />
                )}
              </li>

              <li>
                <a
                  href="/home"
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => toggleDropdown("whyAbroad")}
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  Why ABROAED
                </button>
              </li>
              <li>
                {dropdowns.whyAbroad && (
                  <div
                    id="mega-menu"
                    className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-100 shadow-md z-50"
                  >
                    {" "}
                    <ul>
                      <li>
                        <a
                          href="/aboutus"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <a
                          href="/careers"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Career
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/blog"
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  Blog
                </a>
              </li>
              <li
                onMouseEnter={() => handleMouseEnter("destinations")}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer"
              >
                <a className="block px-4 py-2">
                  Destinations
                </a>
                {activeDropdown === "destinations" && (
                  <DestinationNavItemModal
                    menuItems={destinationMenuItems}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                )}
              </li>

              <li>
                <a
                  href="/ivyLeagues"
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  Ivy Leagues
                </a>
              </li>
              <li>
                <button
                  onClick={() => toggleDropdown("testPrep")}
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  TestPrep

                </button>
                {dropdowns.testPrep && (
                  <div
                    id="mega-menu"
                    className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-100 shadow-md z-50"
                  >
                    <div className="p-2 text-gray-900 bg-white lg:rounded-lg dark:dark:text-white lg:col-span-2 dark:bg-gray-800">
                      <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                        <li>
                          <a
                            href="/testprep/ielts"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full"
                          >
                            IELTS
                          </a>
                        </li>
                        <li>
                          <a
                            href="/toefl"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full"
                          >
                            TOEFL
                          </a>
                        </li>
                        <li>
                          <a
                            href="/gmat"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full"
                          >
                            GMAT
                          </a>
                        </li>
                        <li>
                          <a
                            href="/gmat"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full"
                          >
                            Duolingo
                          </a>
                        </li>
                        <li>
                          <a
                            href="/gmat"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full"
                          >
                            German
                          </a>
                        </li>
                        <li>
                          <a
                            href="/gmat"
                            className="group flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 w-full"
                          >
                            Spanish
                          </a>
                        </li>
                        {/* Add more exams as needed */}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/finance"
                  className="block rounded text-yellow-700 dark:text-primary-500"
                >
                  Finance
                </a>
              </li>
              <li>
                <a
                  href="/accomodation"
                  className="block dark:text-white rounded text-yellow-700 "
                >
                  Accommodation
                </a>
              </li>
              <li
              >
                <a href="/pathways" className="block px-4 py-2 ">
                  Pathways
                </a>
              </li>
              <li>
                <a
                  href="/pathwaysProgram"
                  className="block  rounded  dark:text-primary-500"
                >
                  Pathways Program
                </a>
              </li>
              <li>
                <a
                  href="/college"
                  className="block  rounded  dark:text-primary-500"
                >
                  College
                </a>
              </li>
              <li>
                <a
                  href="/homeCounselling"
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  Home Counselling
                </a>
              </li>
            </ul>
          </div>

          {/* Third Div: Social Media Links */}
          <div className="flex flex-grow-0 basis-[10%] justify-end gap-2">
            <a
              href="/admin/signin"
              className="text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Login
            </a>

            {/* Additional social media icons */}
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
