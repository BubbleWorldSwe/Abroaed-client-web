import { simplifyThings } from "../data"


const SimplifyThingsTable = () => {
    return (
        <table className="w-full px-5 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-500  bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-4 py-3 min-w-[14rem]">
                        Title
                    </th>
                    <th scope="col" className="px-4 py-3 min-w-[10rem]">
                        Description
                    </th>
                    <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {simplifyThings?.map((item, index) => (
                    <tr
                        key={index}
                        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <td className="px-4 py-3 font-semibold" >{item.title}</td>
                        <td className="px-4 py-3">{item.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SimplifyThingsTable