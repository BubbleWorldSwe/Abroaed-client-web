import { TableOfContents, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function Header() {
  const [nav, setNav] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Why ABROAED' },
    { id: 3, text: 'Destinations' },
    { id: 4, text: 'ABROAED Pathways' },
    { id: 5, text: 'Lang & Prep Test' },
    { id: 6, text: 'Finance' },
    { id: 5, text: 'Accomodation' },
    { id: 5, text: 'More' }
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-[99999999] transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-yellow-300 shadow-md opacity-100' : 'bg-transparent opacity-80'
      }`}
    >
      <nav className="border-gray-200 dark:border-gray-600 dark:bg-gray-800">
        <div className={`py-3   ${'bg-yellow-200'}`}>
          <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <a
              href="#"
              title=""
              class="flex items-center justify-center gap-2  font-inter text-sm hover:underline text-yellow-700 dark:text-yellow-300"
            >
              Improve Your IELTS Writing with Our Free Tool 🔍
              <svg
                class="w-4 h-4 shrink-0"
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
        <nav className="flex items-center w-full px-6 py-4">
          {/* First Div: Logo Section */}
          <div className="flex flex-grow-0 basis-[10%]">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ABROAED</span>
          </div>

          {/* Second Div: Links Section */}
          <div className="flex-grow basis-[80%] flex items-center justify-center">
            <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium">
              <li>
                <a href="/" class="block text-white rounded text-primary-700 dark:text-primary-500">
                  Home
                </a>
              </li>
              <li>
                <button
                  id="mega-menu-button"
                  onClick={toggleDropdown}
                  class="flex  text-white rounded text-primary-700 dark:text-primary-500"
                >
                  Explore Courses
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <a href="/blog" class="block text-white rounded text-primary-700 dark:text-primary-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="/destinations" class="block text-white rounded text-primary-700 dark:text-primary-500">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/testprep" class="block text-white rounded text-primary-700 dark:text-primary-500">
                  Test Prep
                </a>
              </li>
              <li>
                <a href="/finance" class="block text-white rounded text-primary-700 dark:text-primary-500">
                  Finance
                </a>
              </li>
              <li>
                <a href="/accommodation" class="block text-white rounded text-primary-700 dark:text-primary-500">
                  Accommodation
                </a>
              </li>
            </ul>
          </div>

          {/* Third Div: Social Media Links */}
          <div className="flex flex-grow-0 basis-[10%] justify-end gap-2">
            <a href="#" className="text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
              Login
            </a>

            {/* Additional social media icons */}
          </div>
        </nav>
      </nav>
      {isDropdownOpen && (
        <div
          id="mega-menu"
          className="grid relative z-10 w-full bg-white border border-gray-100 shadow-md dark:border-gray-700 lg:rounded-lg lg:w-auto lg:grid-cols-3 dark:bg-gray-700"
        >
          <div class="p-2 text-gray-900 bg-white lg:rounded-lg dark:text-white lg:col-span-2 dark:bg-gray-800">
            <ul>
              <li>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold">Explore Design Work</div>
                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Trending designs to inspire you
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold">New & Noteworthy</div>
                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">Up-and-coming designers</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
                      <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold">Playoffs</div>
                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">Work designers are riffing on</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                      <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold">Blog</div>
                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Interviews, tutorials, and more
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div class="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold">Weekly Warm-up</div>
                    <div class="text-sm font-light text-gray-500 dark:text-gray-400">Prompt to flex your skills</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="py-5 px-5 bg-gray-50 lg:rounded-lg lg:col-span-1 dark:bg-gray-700">
            <h3 class="mb-4 text-sm font-semibold text-gray-900 dark:text-white">Browse categories</h3>
            <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Animation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Illustration
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Mobile
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Print
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Product Design
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-primary-600 dark:hover:text-primary-500">
                  Web Design
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
