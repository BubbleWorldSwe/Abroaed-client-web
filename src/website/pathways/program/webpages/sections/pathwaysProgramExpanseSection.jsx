import PrimaryBodyText from "../../../../styleComponents/primaryBodyText"
import SecondaryTitle from "../../../../styleComponents/secondaryTitle"
import SectionMainHeader from "../../../../styleComponents/sectionMainHeader"

const PathwaysProgramExpanseSection = () => {
    return (
        <div className="relative">
            <section className=" dark:bg-gray-900 relative px-7 mx-auto">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-16 lg:px-6">
                    <div className="">
                        <SectionMainHeader className={`mb-4`}>
                            Expenses
                        </SectionMainHeader>
                        <PrimaryBodyText className={`font-semibold text-[22px]`}>
                            Here’s a list of the minimum monthly amount you should expect for living expenses in the UK:
                        </PrimaryBodyText>
                    </div>
                    <div className="grid grid-cols-2 gap-10 ">
                        <div>
                            <SecondaryTitle className={`mb-4`}>
                                Cost of Studying
                            </SecondaryTitle>
                            <PrimaryBodyText className="mb-1 ">
                                Here’s a list of the minimum monthly amount you should expect for studying in the UK:
                            </PrimaryBodyText>
                            <section className=" dark:bg-gray-900 py-3 sm:py-5">
                                <div className=" w-11/12 ">
                                    <div className=" dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                        <div className="overflow-x-auto">
                                            <table className="w-full bg-white  text-sm text-left text-gray-500 border-4 border-[#E4E4E7] dark:text-gray-400">
                                                <thead className="text-base  text-[#71717A] font-bold  bg-[#E4E4E7] dark:bg-gray-700 ">
                                                    <tr>
                                                        <th scope="col" className="px-4 py-3">Description</th>
                                                        <th scope="col" className="px-4 py-3">Price</th>
                                                        <th scope="col" className="px-4 py-3">
                                                            <span className="sr-only">Actions</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                                    >
                                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                                                        <td className="px-4 py-3">PC</td>

                                                    </tr>
                                                    <tr
                                                        className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                                    >
                                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 20&#34;</th>
                                                        <td className="px-4 py-3">PC</td>
                                                    </tr>
                                                    <tr
                                                        className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                                    >
                                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPhone 14</th>
                                                        <td className="px-4 py-3">Phone</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <nav className="bg-[#E4E4E7] md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                            <SecondaryTitle className={`mb-4`}>
                                Cost of Studying
                            </SecondaryTitle>
                            <PrimaryBodyText className="mb-1 ">
                                Here’s a list of the minimum monthly amount you should expect for studying in the UK:
                            </PrimaryBodyText>
                            <section className=" dark:bg-gray-900 py-3 sm:py-5">
                                <div className=" w-11/12 ">
                                    <div className=" dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                        <div className="overflow-x-auto">
                                            <table className="w-full bg-white  text-sm text-left text-gray-500 border-4 border-[#E4E4E7] dark:text-gray-400">
                                                <thead className="text-base  text-[#71717A] font-bold  bg-[#E4E4E7] dark:bg-gray-700 ">
                                                    <tr>
                                                        <th scope="col" className="px-4 py-3">Description</th>
                                                        <th scope="col" className="px-4 py-3">Price</th>
                                                        <th scope="col" className="px-4 py-3">
                                                            <span className="sr-only">Actions</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                                    >
                                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                                                        <td className="px-4 py-3">PC</td>

                                                    </tr>
                                                    <tr
                                                        className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                                    >
                                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 20&#34;</th>
                                                        <td className="px-4 py-3">PC</td>
                                                    </tr>
                                                    <tr
                                                        className={`border-b text-base text-gray-primary font-normal  dark:border-gray-700`}
                                                    >
                                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPhone 14</th>
                                                        <td className="px-4 py-3">Phone</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <nav className="bg-[#E4E4E7] md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PathwaysProgramExpanseSection