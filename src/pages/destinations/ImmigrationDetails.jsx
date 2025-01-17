
const ImmigrationDetails = () => {
  return (
     <div className="relative px-10 mx-auto">
         <div className=" px-4 py-10 flex flex-col gap-6 mx-auto max-w-screen-2xl  mt-5">
    {/* Content */}
    <div className="relative z-10">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Immigration Details  
                      </h2>
            <div className="my-4 border-t border-gray-300"></div>
            <div className="flex gap-5 py-10 overflow-x-auto flex-nowrap">
              {Array(6).fill().map((_, index) => (
                <div
                  key={index}
                  className="max-w-sm  bg-white flex-shrink-0 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                >
                 
                  <div className="p-5">
                  <div className="flex justify-between">
                      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Visa Name
                      </h5>
                       </div>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                     visa type
                    </p>
                   <p>
                   lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique felis non odio accumsan laoreet. Integer cursus libero placerat ex volutpat posuere. Quisque non nisl ultricies, volutpat mauris sed, venenatis dui. Integer eget eleifend augue, ac consequat dui. Nam arcu libero, blandit vel ipsum sagittis, lacinia tincidunt quam. Donec volutpat sodales tincidunt. Praesent pharetra nisi placerat diam fringilla, ac fermentum erat commodo. Quisque semper arcu sit amet auctor consequat. Mauris diam urna, dignissim sed metus eu, congue porttitor nisi. Nulla facilisi.
                   </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
           </div>
          </div>
  )
}

export default ImmigrationDetails;
