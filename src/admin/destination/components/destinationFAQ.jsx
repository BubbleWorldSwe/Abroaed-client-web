import { useEffect } from "react";
import pencil from "../../../assets/pencil.png";

function DestinationFAQ({ details, onEdit }) {
  const handleEditClick = (faq) => {
    onEdit(faq);
  };

  return (
    <div className="px-8 py-5">
      <table className="table-auto w-full bg-white dark:bg-gray-800 rounded-lg">
        <tbody>
          {details?.faqs?.length > 0 ? (
            details?.faqs.map((data, i) => (
              <tr key={i}>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  <p className="font-bold">{data?.question}</p>
                  <p>{data?.answer}</p>
                </td>
                <td className="text-center">
                  <img
                    src={pencil}
                    alt="Edit Icon"
                    className="w-7 h-5 cursor-pointer"
                    onClick={() => handleEditClick(data)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 border text-gray-500">
                No Records
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DestinationFAQ;
