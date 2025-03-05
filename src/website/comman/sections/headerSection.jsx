/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSelector } from "react-redux";

const DropdownMenu = ({
  title,
  items,
  urlPrefix,
  stateKey,
  toggleDropdown,
  isOpen,
  scrolling,
}) => {
  return (
    <li>
      <button
        onClick={() => toggleDropdown(stateKey)}
        className={`font-medium flex items-center gap-1 ${scrolling ? "text-black" : "text-white"
          }`}
      >
        {title} {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[70%] text-black bg-white border shadow-md">
          <ul>
            {items?.map((data, i) => {
              console.log(data);
              return (
                <li key={i}>
                  <a
                    href={data._id ? `/${urlPrefix}/${data._id}` : data.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                    target="_blank"
                  >
                    {data?.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

function Header() {
  const [scrolling, setScrolling] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`w-full fixed top-0 z-30 border-gray-400 transition-all duration-300 ${scrolling
        ? "bg-white text-black shadow-md"
        : "bg-black text-white bg-opacity-20"
        }`}
    >
      <nav>
        <div
          className={`py-3 text-center font-inter text-sm ${scrolling ? "bg-yellow-300 text-black" : "bg-yellow-300 text-white"
            }`}
        >
          Improve Your IELTS Writing with Our Free Tool 🔍
        </div>
        <nav className="flex items-center   justify-center w-full px-12 py-4">
          <div className="flex flex-grow-0 basis-[10%] items-center">
            <h3 className="text-lg font-semibold sm:text-3xl md:text-4xl lg:text-lg">
              <span
                className={`font-cinzel tracking-[0.15em] text-2xl font-extrabold leading-[40px] ${scrolling ? "text-black" : "text-white"
                  }`}
              >
                ABROA<span style={{ color: "#fbba18" }}>ED</span>
              </span>
            </h3>
          </div>
          <div className="flex-grow basis-[80%] flex justify-center">
            <div className="flex items-center justify-center ">
              <ul className="flex items-center space-x-8 justify-center text-sm font-medium">
                <li>
                  <a
                    href="/home"
                    className={`font-medium ${scrolling ? "text-black" : "text-white"
                      }`}
                  >
                    Home
                  </a>
                </li>
                <DropdownMenu
                  title="Why Abroad?"
                  items={[
                    { title: "About Us", href: "/aboutus" },
                    { title: "Career", href: "/careers" },
                  ]}
                  stateKey="whyAbroad"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.whyAbroad}
                  scrolling={scrolling}
                />
                <DropdownMenu
                  title="Destinations"
                  items={allDestinations.map((data) => ({
                    title: `${data?.countryId?.emoji} ${data?.countryId?.name}`,
                    _id: data._id,
                  }))}
                  urlPrefix="destinations"
                  stateKey="destinations"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.destinations}
                  scrolling={scrolling}
                />
                <DropdownMenu
                  title="Test Prep"
                  items={allTestPreps.map((data) => ({
                    title: data?.productName,
                    _id: data._id,
                  }))}
                  urlPrefix="testprep"
                  stateKey="testPrep"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.testPrep}
                  scrolling={scrolling}
                />
                <DropdownMenu
                  title="Language Prep"
                  items={allLanguagePreps.map((data) => ({
                    title: data?.productName,
                    _id: data._id,
                  }))}
                  urlPrefix="languageprep"
                  stateKey="languagePrep"
                  toggleDropdown={toggleDropdown}
                  isOpen={dropdowns.languagePrep}
                  scrolling={scrolling}
                />
                <li>
                  <a
                    href="/finance"
                    className={`font-medium ${scrolling ? "text-black" : "text-white"
                      }`}
                  >
                    Finance
                  </a>
                </li>
                <li>
                  <a
                    href="/pathways"
                    className={`font-medium ${scrolling ? "text-black" : "text-white"
                      }`}
                  >
                    Pathways
                  </a>
                </li>
                <li>
                  <button className="px-3 py-2 bg-[#FDDA24] text-[#27272A] font-semibold rounded-lg">
                    Book Counselling Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-grow-0 basis-[10%] justify-end">
            <a
              href="/admin/signin"
              className={`text-sm font-medium ${scrolling ? "text-black" : "text-white"
                } hover:underline`}
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
