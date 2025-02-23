

const RecentlyViewCollegeCard = () => {
  return (
    <div
      className="bg-white border rounded-lg shadow p-4 flex gap-5 "
    >
      <img
        src="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
        alt="college"
        className="w-16 h-16 "
      />
      <div className="py-3 text-start">
        <h3 className="text-center font-semibold text-base">
          California Institute of Art
        </h3>
        <p className="text-center text-gray-500 text-sm">
          United States of America
        </p>
      </div>
    </div>
  )
}

export default RecentlyViewCollegeCard;