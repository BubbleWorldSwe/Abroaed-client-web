import { useState } from "react";
import pencil from '../assets/pencil.png'
import deleteIcon from '../assets/deleteIcon.png'

import dark from '../assets/dark.png'

const DestinationImage = () => {
   const [openMadal, setOpenModal] = useState(false);
      const [modalType, setModalType] = useState(null);
      const closeModal = () => {
          setOpenModal(false);
          setModalType(null);
      }
  
  return (
    <div className='flex flex-col'>
               <div className="w-full h-48 rounded-t-xl bg-gradient-to-r from-yellow-200 to-blue-500"
                   onClick={(e) => {
                       e.preventDefault()
                       setOpenModal(true);
                       setModalType("add");
                   }}
               >
               </div>
               <div
                   className="rounded-b-xl px-10 flex justify-between border-l-2 p-4 border-r-2 border-b-2 border-gray-400 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800"
               >
                   <p className='text-2xl font-semibold'>
                   Country Name
                   </p>
                   <div className='flex align-center '>
                       <div>
                           <button
                               type="button"
                               class="text-green-600 text-lg border-green-500 hover:border-4    font-semibold rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 bg-white border-2  "
                               onClick={(e) => {
                                   e.preventDefault();
                                   setModalType("edit");
                                   setOpenModal(true);
                               }}
                           >
                               <img src={pencil} alt='pic' className='w-4 h-4 mr-2' />
                               Edit Info
                           </button>
   
                       </div>
                       <div>
                           <button
                               type="button"
                               class="text-gray-500 text-lg font-bold border-gray-700 hover:border-4 rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 bg-white border-2"
                           >
                               <img src={deleteIcon} alt='pic' className='w-5 h-5 mr-2' />
                               Delete
                           </button>
                       </div>
                   </div>
               </div>
               {openMadal && modalType === "add" && (
                   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 min-w-max relative">
                           <button
                               className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                               onClick={closeModal}
                           >
                               &times;
                           </button>
                           <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
                           <div className="mt-4">
                               <p className='text-gray-600'>Size should be 1000 x 1500 px. Supported files JPG, PNG.</p>
                               <div class="flex items-center justify-center w-full">
                                   <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                       <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
                                           <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                           </svg>
                                           <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                           <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                       </div>
                                       <div>
   
                                       </div>
                                       <input id="dropzone-file" type="file" class="hidden" />
                                   </label>
                               </div>
                               <div className="col-span-full text-end">
                                   <button
                                       type="button"
                                       className="mt-4 border-2 border-gray-500 text-gray-700 px-4 py-2 mr-2 rounded transition"
                                       onClick={closeModal}
                                   >
                                       Cancel
                                   </button>
                                   <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                       Save
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               )}
               {openMadal && modalType === "edit" && (
                   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                       <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/2 min-w-max relative">
                           <button
                               className="absolute w-10 h-10 top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
                               onClick={closeModal}
                           >
                               &times;
                           </button>
   
                           <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
                           <div
   
                               className="w-full relative flex-shrink-0"
                               style={{ flex: "0 0 auto" }} // Prevent images from shrinking
                           >
                               {/* Image */}
                               <img
                                   className="w-full h-60 object-cover rounded-lg"
                                   src={dark}
                                   alt={`Profile cover `}
                               />
                               {/* Overlay */}
                               <div className="absolute top-2 r-10">
   
                               </div>
                               {/* Button */}
                               <div className="absolute top-2 right-2">
                                   <button
                                       type="button"
                                       className=" items-center justify-center w-10 h-10 font-medium   hover:opacity-60 group focus:outline-none dark:focus:ring-blue-800"
                                   >
                                       <svg class="text-white opacity-80 dark:text-gray-500 w-8 h-8 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
   
                                   </button>
                               </div>
                           </div>
                           <div className="mt-4">
                               <h3 className='text-lg font-semibold text-gray-600'> Upload a new image here.</h3>
                               <p className='text-gray-600 text-sm'>Size should be 1000 x 1500 px. Supported files JPG, PNG.</p>
                               <div class="flex items-center justify-center w-full">
                                   <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                       <div class="flex flex-col items-center justify-center pt-5 pb-6 ">
                                           <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                           </svg>
                                           <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                           <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                       </div>
                                       <div>
   
                                       </div>
                                       <input id="dropzone-file" type="file" class="hidden" />
                                   </label>
                               </div>
                               <div className="col-span-full text-end">
                                   <button
                                       type="button"
                                       className="mt-4 border-2 border-gray-500 text-white bg-red-500 hover:bg-red-600 px-4 py-2 mr-2 rounded transition"
                                       onClick={closeModal}
                                   >
                                       Delete
                                   </button>
                                   <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                       Save
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               )}
   
   
           </div>
  )
}

export default DestinationImage;
