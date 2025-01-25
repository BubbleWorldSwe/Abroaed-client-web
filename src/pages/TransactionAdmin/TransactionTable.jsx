import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import filter_list from "../../assets/filter_list.png"
import { Download, EllipsisVertical } from "lucide-react";

const TransactionTable = () => {
  const dispatch = useDispatch();
  // const { colleges, loading, error } = useSelector((state) => state.colleges);
  const [selectedRows, setSelectedRows] = useState({});
  useEffect(() => {
    // dispatch(fetchColleges());
  }, [dispatch]);

  let studentPayments = [
    {
        studentName: "John Doe",
        planType: "Annual",
        amountPaid: 1200,
        paymentMethod: "Credit Card",
        balance: 0,
        paymentDate: "2025-01-25"
    },
    {
        studentName: "Jane Smith",
        planType: "Monthly",
        amountPaid: 100,
        paymentMethod: "PayPal",
        balance: 50,
        paymentDate: "2025-01-24"
    },
    {
        studentName: "Michael Johnson",
        planType: "Quarterly",
        amountPaid: 300,
        paymentMethod: "Bank Transfer",
        balance: 0,
        paymentDate: "2025-01-23"
    },
    {
        studentName: "Emily Brown",
        planType: "Annual",
        amountPaid: 1200,
        paymentMethod: "Credit Card",
        balance: 0,
        paymentDate: "2025-01-22"
    },
    {
        studentName: "David Wilson",
        planType: "Monthly",
        amountPaid: 100,
        paymentMethod: "PayPal",
        balance: 0,
        paymentDate: "2025-01-21"
    },
    {
        studentName: "Sophia Lee",
        planType: "Monthly",
        amountPaid: 100,
        paymentMethod: "Credit Card",
        balance: 0,
        paymentDate: "2025-01-20"
    },
    {
        studentName: "Daniel Martinez",
        planType: "Quarterly",
        amountPaid: 300,
        paymentMethod: "Bank Transfer",
        balance: 0,
        paymentDate: "2025-01-19"
    }
];

const handleCheckboxClick = (index) => {
  setSelectedRows((prevState) => ({
    ...prevState,
    [index]: !prevState[index],
  }));
};
  // if (loading) return <p>Loading colleges...</p>;
  // if (error) return <p>Error: {error}</p>;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to manage Add modal open/close
  const [dropdownDirection, setDropdownDirection] = useState(null);

  const [dropdownVisible, setDropdownVisible] = useState(null);
  const navigate = useNavigate();
  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
    setDropdownVisible(false);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  console.log(selectedRows);
  
  const handleDropdownToggle = (event, index) => {
    console.log("index", index);
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
    <div className="min-h-screen bg-gray-150 dark:bg-gray-900 flex flex-col ">
    {/* Section - Takes the remaining space */}
    <section className="   flex-grow">
      <div className="flex flex-col h-screen mx-auto max-w-screen-2xl bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg">
        <div className=" dark:border-gray-700 mx-4">
          <div className="  py-3">
            <div className="w-full  flex  space-y-3 md:space-y-0 md:flex-row ">
              <form className="w-full md:max-w-sm flex-1 md:mr-4">
                <label
                  htmlFor="default-search"
                  className="text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-10 text-sm text-gray-900 border-2 border-gray-500 rounded-lg  focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search Transactions"
                    required=""
                  />
                 
                </div>
              </form>
              <div className="flex items-center space-x-4">
               <img src={filter_list} alt="filterIcon"/>
              </div>
            </div>
          </div>
        </div>
<div className="mb-5 px-4">
        <button
      className="flex items-center justify-center gap-2 w-[115px] h-[32px] max-w-[762px] px-2 py-1 border border-black rounded-sm opacity-100 hover:opacity-90 transition"
    >
      <Download className="w-4 h-4" />
      <span className="text-sm font-medium">Download</span>
    </button>

</div>
      
        <div className="flex-grow overflow-auto bg-white dark:bg-gray-800">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className=" text-[#71717A] font-rethink  bg-[#E4E4E7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-4 py-3 min-w-[14rem]">
                  Student Name
                </th>
                <th scope="col" className="px-4 py-3 min-w-[10rem]">
                  Plan Type
                </th>
                <th scope="col" className="px-4 py-3 min-w-[10rem]">
                  Amount Paid
                </th>
                <th scope="col" className="px-4 py-3 min-w-[14rem]">
                  Payment Method
                </th>
                <th scope="col" className="px-4 py-3 min-w-[14rem]">
                  Balance
                </th>
                <th scope="col" className="px-4 py-3 min-w-[10rem]">
                  Payment Date
                </th>
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {studentPayments.map((transaction, index) => (
                <tr
                key={index}
                className={`border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  selectedRows[index] ? "bg-[#FFFCC2]" : ""
                }`}
              >
                  <td className="px-4 py-3 w-4">
                    <div className="flex items-center">
                    <input
                  id={`checkbox-college-${index}`}
                  type="checkbox"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCheckboxClick(index);
                  }}
                  checked={selectedRows[index] || false}
                  className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`checkbox-college-${index}`}
                  className="sr-only"
                >
                  checkbox
                </label>
                    </div>
                  </td>

                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {transaction.studentName}
                  </th>

                  <td className="px-4 py-3">{transaction.planType}</td>
                  <td className="px-4 py-3">{`$ ${transaction.amountPaid}`}</td>
                  <td className="px-4 py-3">
                    {transaction.paymentMethod}
                    {/* <a
                      href={transaction.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {transaction.website}
                    </a> */}
                  </td>
                  <td className="px-4 py-3">{`$ ${transaction.balance}`}</td>
                  <td className="px-4 py-3">{transaction.paymentDate}</td>

                  <td className="px-4 py-3">
                    <button
                      className="focus:outline-none"
                      onClick={(e) => handleDropdownToggle(e, index)}
                    >
                      <EllipsisVertical className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </button>
                    {dropdownVisible === index && (
                      <div
                        className={`absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-[9999] ${
                          dropdownDirection === "up"
                            ? "bottom-full mb-2"
                            : "mt-2"
                        }`}
                      >
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <button
                              type="button"
                              onClick={() =>
                                navigate(
                                  `/admin/colleges/${encodeURIComponent(
                                    transaction.name
                                  )}`
                                )
                              }
                              className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              View Details
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              onClick={handleOpenAddModal}
                              className="block py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Edit
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4"
          aria-label="Table navigation"
        >
          <div className="text-xs flex items-center space-x-5">
            <div>
              <div className="text-gray-500 dark:text-gray-400 mb-1">
                Purchase price
              </div>
              <div className="dark:text-white font-medium">$ 3,567,890</div>
            </div>
            <div>
              <div className="text-gray-500 dark:text-gray-400 mb-1">
                Total selling price
              </div>
              <div className="dark:text-white font-medium">$ 8,489,400</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
            >
              Print barcodes
            </button>
            <button
              type="button"
              className="py-1.5 flex items-center text-sm font-medium text-center text-primary-700 rounded-lg hover:text-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
            >
              Duplicate
            </button>
            <button
              type="button"
              className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Export CSV
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default TransactionTable;