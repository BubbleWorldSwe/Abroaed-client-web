import pencil from "../../../assets/pencil.png";
import trash from "../../../assets/delete.png";
import { useSelector } from "react-redux";

function DestinationFAQ({ onEdit, onUpdate }) {
  const details = useSelector(
    (state) => state.destinations.selectedDestination
  );
  const handleEditClick = (faq) => {
    onEdit(faq);
  };

  function handleDeleteClick(id) {
    console.log("Delete onDeleteFaq : " + id);

    const updatedFaqs = details.faqs.filter((faq) => faq._id !== id);
    const faqWithoutId = updatedFaqs.map(({ _id, ...rest }) => rest);
    console.log(faqWithoutId);

    onUpdate({ faqs: faqWithoutId });
  }

  return (
    <div className="bg-white py-0 dark:border-gray-700 dark:bg-gray-800">
      {details?.faqs?.length > 0 ? (
        <table className="table-auto w-full bg-white dark:bg-gray-800 rounded-lg">
          <tbody>
            {details?.faqs.map((data, i) => (
              <tr key={i} className="border-b">
                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p className="font-bold">{data?.question}</p>
                  <p>{data?.answer}</p>
                </td>
                <td className="text-center px-4 py-4">
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
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-center py-4 text-gray-500">No Records</p>
        </div>
      )}
    </div>
  );
}

export default DestinationFAQ;
