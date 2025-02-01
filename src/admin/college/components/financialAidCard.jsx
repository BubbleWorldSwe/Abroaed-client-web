import pencil from '../../../assets/pencil.png'

function FinancialAidTable() {
  return (
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Scholarship Name</th>
              <th className="px-4 py-3 whitespace-nowrap">Last Edited</th>
              <th className="px-4 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className=" px-4 py-3">
                <div className="flex items-center">
                  Scholarship - Engineering
                </div>
              </td>
              <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="iMac Front Image" className="w-auto h-8 mr-3 rounded-full" />
                  <span>Jan 12,2030</span>
                </div>
              </th>
              <td className="px-4 py-3">
                <img src={pencil} alt="iMac Front Image" className="w-5 h-5 mr-3 " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialAidTable;
