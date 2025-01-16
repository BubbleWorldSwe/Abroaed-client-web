import pencil from '../../assets/pencil.png'

const Batches = () => {
  return (
    <div className=" bg-white  dark:border-gray-700 dark:bg-gray-800">
             <div class="overflow-x-auto">
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead class="text-lg text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th  class="px-4 py-3">Batch Name</th>
                                  <th  class="px-4 py-3 whitespace-nowrap">Last Edited</th>
                                  <th  class="px-4 py-3">
                                       </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                  <td class=" px-4 py-3">
                                      <div class="flex items-center">
                                      Scholarship - Engineering
                                             </div>
                                  </td>
                                  <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div class="flex items-center">
                                          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt="iMac Front Image" class="w-auto h-8 mr-3 rounded-full"/>
                                          <span>Jan 12,2030</span>
                                      </div>
                                  </th>
                                 
                                  <td className="px-4 py-3">
                                  <img src={pencil} alt="iMac Front Image" class="w-5 h-5 mr-3 "/>
        
        
                                     </td>
                                  </tr>
                              </tbody>
                      </table>
                  </div>
             </div>
  )
}

export default Batches;