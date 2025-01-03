import React from "react";
import image from "../../assets/dark.png";


const accommodations = [
  {
    name: "Luxury Apartment",
    location: "New York, USA",
    price: "$150/night",
    description: "Experience the city life in this modern and fully equipped apartment.",
    imgUrl: image,
  },
  {
    name: "Cozy Cabin",
    location: "Seattle, USA",
    price: "$120/night",
    description: "Relax in this tranquil cabin surrounded by nature.",
    imgUrl: image,

  },
  {
    name: "Beach House",
    location: "Miami, USA",
    price: "$200/night",
    description: "Enjoy a beachfront stay with breathtaking views.",
    imgUrl: image,

  },
  {
    name: "Beach House",
    location: "Miami, USA",
    price: "$200/night",
    description: "Enjoy a beachfront stay with breathtaking views.",
    imgUrl: image,

  },
  {
    name: "Beach House",
    location: "Miami, USA",
    price: "$200/night",
    description: "Enjoy a beachfront stay with breathtaking views.",
    imgUrl: image,

  },
];

function AccommodationGrid() {
  return (
    <div className="flex gap-4 px-6 py-8 bg-white">
      {/* Search Bar Section */}
      <div className="w-1/4  p-6 ">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Search</h3>
        <input
          type="text"
          placeholder="Search by location"
          className="w-full p-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cards Grid Section */}
      <div className="w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodations.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={item.imgUrl}
                  alt={item.name}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">
                  {item.location}
                </p>
                <p className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  {item.price}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Book Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccommodationGrid;