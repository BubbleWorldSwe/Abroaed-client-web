import { useSelector } from "react-redux";
import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";

const LanguageFaqs = ({ onEdit, onUpdate }) => {
  const testPrepDetails = useSelector(
    (state) => state.testPreps.selectedTestPrep
  );

  const handleEditClick = (faq) => {
    onEdit(faq);
  };

  function handleDeleteClick(id) {
    console.log("Delete onDeleteFaq : " + id);

    const updatedFaqs = testPrepDetails.faqs.filter((faq) => faq._id !== id);
    const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);
    console.log(faqWithoutId);

    onUpdate({ faqs: faqWithoutId });
  }

  return (
    <div className="px-1">
      {testPrepDetails?.faqs.map((data, i) => (
        <table
          key={i}
          className="table-auto w-full bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg mb-5"
        >
          {/* Table Head with Grey Background */}
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th
                colSpan={"2"}
                className="px-6 py-3 text-left text-gray-700 dark:text-gray-300"
              >
                {data.question}
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="px-4 py-4 text-gray-600 dark:text-gray-300">
                {data.answer}
              </td>
              <td className="text-center w-[100px]">
                <div className="flex items-center justify-center space-x-5">
                  <img
                    src={pencil}
                    alt="Edit"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleEditClick(data)}
                  />
                  <img
                    src={trash}
                    alt="Delete"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => handleDeleteClick(data?._id)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default LanguageFaqs;
