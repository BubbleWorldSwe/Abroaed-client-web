/* eslint-disable react/prop-types */


const LanguageNavModalMobile = ({
  menuItems = [],

}) => {
  return (
    <ul className="">
      {menuItems?.map((data, index) => (
        <li
          key={index}
          className="hover:bg-white hover:bg-opacity-10 py-1"
        >
          <div className="">
            <a
              href={`/languageprep/${data._id}`}
              className="px-2"
            >
              {data?.title}
            </a>
          </div>
        </li>
      ))}
    </ul>

  );
};

export default LanguageNavModalMobile;
