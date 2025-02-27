import { useState } from "react";
import ExploreCourseNavItemModal from "../modals/exploreCourseNavItemModal";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSelector } from "react-redux";

const DropdownMenu = ({
  title,
  items,
  urlPrefix,
  stateKey,
  toggleDropdown,
  isOpen,
}) => (
  <li>
    <button
      onClick={() => toggleDropdown(stateKey)}
      className="text-yellow-700 flex items-center gap-1"
    >
      {title} {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}{" "}
    </button>
    {isOpen && (
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[70%] bg-white border shadow-md">
        <ul>
          {items?.map((data, i) => (
            <li key={i}>
              <a
                href={`/${urlPrefix}/${data._id}`}
                className="block px-4 py-2 hover:bg-gray-100"
                target="_blank"
              >
                {data?.productName ||
                  `${data?.countryId?.emoji} ${data?.countryId?.name}` ||
                  data?.menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

function Header() {
  const [dropdowns, setDropdowns] = useState({
    whyAbroad: false,
    exploreCourses: false,
    testPrep: false,
    languagePrep: false,
    destinations: false,
  });

  const { allDestinations } = useSelector((state) => state.destinations);
  const { allTestPreps } = useSelector((state) => state.testPreps);
  const { allLanguagePreps } = useSelector((state) => state.languagePreps);

  const toggleDropdown = (key) => {
    setDropdowns((prev) => {
      const newDropdowns = Object.keys(prev).reduce((acc, curr) => {
        acc[curr] = curr === key ? !prev[curr] : false;
        return acc;
      }, {});
      return newDropdowns;
    });
  };

  return (
    <header className="w-full sticky top-0 z-[30] border-b-2 border-gray-400 bg-white">
      <nav className="border-gray-900 dark:border-gray-600 dark:bg-gray-800">
        <div className="py-3 bg-yellow-300 shadow-md text-center text-white font-inter text-sm">
          Improve Your IELTS Writing with Our Free Tool 🔍
        </div>
        <nav className="flex items-center w-full px-6 py-4 bg-white">
          <div className="flex flex-grow-0 basis-[10%] items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 sm:h-9"
              alt="Logo"
            />
            <span className="text-xl font-semibold ml-2">ABROAED</span>
          </div>
          <div className="flex-grow basis-[80%] flex justify-center">
            <ul className="flex space-x-8 text-sm font-medium">
              {/*   <li>
                <button
                  id="mega-menu-button"
                  onClick={() => toggleDropdown("exploreCourses")}
                  className="whitespace-nowrap flex gap-1  hover:text-black border border-gray-500 hover:bg-white bg-red-600 rounded text-white p-2 dark:text-primary-500"
                >
                  Explore Courses
                  <ChevronDown />
                </button>
                {dropdowns.exploreCourses && <ExploreCourseNavItemModal />}
              </li> */}

              <li>
                <a
                  href="/home"
                  target="_blank"
                  className="text-yellow-700 mt-5"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => toggleDropdown("whyAbroad")}
                  className="block  rounded text-yellow-700 dark:text-primary-500"
                >
                  Why Abroaed?
                </button>

                {dropdowns.whyAbroad && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[70%] bg-white border shadow-md">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          href="/aboutus"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          About Us
                        </a>
                      </li>

                      <li>
                        <a
                          target="_blank"
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
                <a href="/blog" target="_blank" className="text-yellow-700">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/accomodation"
                  target="_blank"
                  className="block dark:text-white rounded text-yellow-700 "
                >
                  Accommodation
                </a>
              </li>
              <DropdownMenu
                title="Destinations"
                items={allDestinations}
                urlPrefix="destinations"
                stateKey="destinations"
                toggleDropdown={toggleDropdown}
                isOpen={dropdowns.destinations}
              />
              <li>
                <a
                  href="/ivyLeagues"
                  target="_blank"
                  className="text-yellow-700"
                >
                  Finance
                </a>
              </li>
              <DropdownMenu
                title="Test Prep"
                items={allTestPreps}
                urlPrefix="testprep"
                stateKey="testPrep"
                toggleDropdown={toggleDropdown}
                isOpen={dropdowns.testPrep}
              />
              <DropdownMenu
                title="Language Prep"
                items={allLanguagePreps}
                urlPrefix="languageprep"
                stateKey="languagePrep"
                toggleDropdown={toggleDropdown}
                isOpen={dropdowns.languagePrep}
              />
              <li>
                <a href="/pathways" target="_blank" className="text-yellow-700">
                  Pathways
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-grow-0 basis-[10%] justify-end">
            <a
              href="/admin/signin"
              target="_blank"
              className="text-sm font-medium text-primary-600 hover:underline"
            >
              Login
            </a>
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
