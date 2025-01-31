
import dark from "../../../assets/dark.png"

const MediaGallery = ({ closeModal }) => {
    return (
        <div className="p-6">
            <div className="overflow-x-auto ">
                <div className="flex space-x-5" style={{ maxWidth: "60rem" }}>
                    {Array(5)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="w-96 relative flex-shrink-0"
                                style={{ flex: "0 0 auto" }} // Prevent images from shrinking
                            >
                                {/* Image */}
                                <img
                                    className="w-full h-60 object-cover rounded-lg"
                                    src={dark}
                                    alt={`Profile cover ${index + 1}`}
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
                        ))}
                </div>
            </div>
            <div className="text-end mt-5">(4/5)</div>
            <p className="mb-2">
                Add up-to 10 images or videos. Supported files JPG, PNG, MP4.
            </p>

            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
            {/* </form> */}

        </div>)
}

export default MediaGallery