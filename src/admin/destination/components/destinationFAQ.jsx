import pencil from "../../../assets/pencil.png";

function DestinationFAQ({ details }) {
  return (
    <div className="px-8 py-5">
      <table className="table-auto w-full bg-white dark:bg-gray-800 rounded-lg">
        <tbody>
          {details?.faqs?.map((data, i) => (
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
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DestinationFAQ;
