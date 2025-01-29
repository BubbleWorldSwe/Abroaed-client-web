
import pencil from '../../assets/pencil.png'
const StudentPersonDetails = () => {
    return (
        <div className="w-full mx-auto   p-5 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <img src={pencil} alt="pencil-img" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="font-semibold">Full Name</label>
                    <span className="text-gray-600">John Doe</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Phone Number</label>
                    <span className="text-gray-600">+1234567890</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Highest Educational Qualification</label>
                    <span className="text-gray-600">Bachelor of Science</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Email</label>
                    <span className="text-gray-600">johndoe@example.com</span>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold">Language</label>
                    <span className="text-gray-600">English, Spanish</span>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Location</label>
                    <span className="text-gray-600">New York, USA</span>
                </div>
            </div>
        </div>

    )
}

export default StudentPersonDetails