
import pencil from '../../../assets/pencil.png'

function FAQsCard() {
  return (
    <div className="px-8 py-5">
      <table className="table-auto w-full   bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg">
        <tbody>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <td className="px-6 py-4 text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </td>
            <td className=" text-center border-b  dark:border-gray-700">
              <img src={pencil} alt="Edit Icon" className="w-7 h-5 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FAQsCard;
