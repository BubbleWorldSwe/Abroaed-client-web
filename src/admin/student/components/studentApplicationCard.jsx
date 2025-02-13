import studentColImg from "../../../assets/studentColImg.png"
import studentcolFrame from "../../../assets/studentcolFrame.png"


const StudentApplicationCard = () => {
    return (
        <div
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="relative">
                <img
                    className="rounded-t-lg max-w-xl h-40 object-cover"
                    src={studentColImg}
                    alt={'pic'}
                />
                <div
                    className="absolute w-24 h-24  -bottom-16  left-5"
                >
                    <img src={studentcolFrame} alt="add_img_pic" />
                </div>
            </div>
            <div className="p-5 mt-5">
                <div className="flex justify-between">
                    <h5 className=" text-xl whitespace-nowrap font-semibold tracking-tight text-gray-900 dark:text-white">
                        University of Glassgow
                    </h5>
                    <div>
                        <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                        </svg>

                    </div>
                </div>
                <p className="text-gray-500 mb-2">Undergraduate (March 2025)
                    Accountancy & Finance (BAcc)</p>
            </div>
        </div>
    )
}

export default StudentApplicationCard