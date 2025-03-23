import dark from "../../../assets/dark.png"
import { COLORS } from "../../../constants/colors"
const BlogPageMiddleContaint = () => {
    return (
        <div>
            <div className="mb-10">
                < img
                    src={dark}
                    alt="image-pic"
                    className="rounded-xl w-full"
                />
            </div>
            <div className="py-6 ">
                <h2 className={`text-[32px] mb-5 text-[${COLORS.GRAY_PRIMARY}] font-bold `} >
                    Section Header</h2>
                <p className="text-[18px] mb-3 text-[#52525B] font-normal ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-[18px]  text-[#52525B] font-normal ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>

            <div className="py-8">
                < img
                    src={dark}
                    alt="image-pic"
                    className="rounded-xl max-w-lg"
                />
            </div>
            <div className="py-8 ">
                <h2 className={`text-[32px] mb-5 text-[${COLORS.GRAY_PRIMARY}] font-bold `} >
                    Section Header
                </h2>
                <p className="text-[18px] mb-3 text-[#52525B] font-normal ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <ul className="list-disc px-10 space-y-3 text-[#52525B]">
                    <li>
                        <span className="text-base  font-bold">
                            JEE Main 2024 January Session:
                        </span>
                        <span className="text-[18px]  font-normal">
                            NTA released the JEE Main 2024 session 1 will be conducted between 24th January and 1st February, 2024.
                        </span>
                    </li>
                    <li>
                        <span className="text-base  font-bold">
                            JEE Main 2024 January Session:
                        </span>
                        <span className="text-[18px]  font-normal">
                            NTA released the JEE Main 2024 session 1 will be conducted between 24th January and 1st February, 2024.
                        </span>
                    </li>
                    <li>
                        <span className="text-base  font-bold">
                            JEE Main 2024 January Session:
                        </span>
                        <span className="text-[18px]  font-normal">
                            NTA released the JEE Main 2024 session 1 will be conducted between 24th January and 1st February, 2024.
                        </span>
                    </li>
                    <li>
                        <span className="text-base  font-bold">
                            JEE Main 2024 January Session:
                        </span>
                        <span className="text-[18px]  font-normal">
                            NTA released the JEE Main 2024 session 1 will be conducted between 24th January and 1st February, 2024.
                        </span>
                    </li>
                    <li>
                        <span className="text-base  font-bold">
                            JEE Main 2024 January Session:
                        </span>
                        <span className="text-[18px]  font-normal">
                            NTA released the JEE Main 2024 session 1 will be conducted between 24th January and 1st February, 2024.
                        </span>
                    </li>
                </ul>
            </div>
            <div className="py-8 ">
                <div className="overflow-x-auto">
                    <table className="w-full bg-white  text-sm text-left text-gray-500 border-4 border-[#E4E4E7] dark:text-gray-400">
                        <thead className="text-base  text-[#71717A] font-bold  bg-[#E4E4E7] dark:bg-gray-700 ">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    Column Header
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Column Header
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    Column Header
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(6).fill().map(
                                (_, i) =>
                                    i < 3 && (
                                        <tr
                                            key={i}
                                            className={`border-b text-base text-[${COLORS.GRAY_PRIMARY}] font-normal  dark:border-gray-700`}
                                        >

                                            <td className="px-4 py-3"> Entry 1</td>
                                            <td className="px-4 py-3"> Entry 2</td>
                                            <td className="px-4 py-3"> Entry 3</td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                    <nav
                        className="bg-[#E4E4E7] md:items-center space-y-3 md:space-y-0 p-4"
                        aria-label="Table navigation"
                    ></nav>
                </div>
            </div>
        </div>
    )
}

export default BlogPageMiddleContaint