/* eslint-disable react/prop-types */

const TestPrepNavMobileModal = ({
    menuItems = [],

}) => {
    return (
        <ul className=" grid grid-cols-1 " >
            {menuItems?.map((data, index) => (
                <li
                    key={index}
                    className="hover:bg-blue-50 py-1"
                >
                    <div className="">
                        <a
                            href={`/testprep/${data._id}`}
                            className="px-2"
                        >
                            {data?.title}
                        </a>
                    </div>
                </li>
            ))}
        </ul>

    )
}

export default TestPrepNavMobileModal