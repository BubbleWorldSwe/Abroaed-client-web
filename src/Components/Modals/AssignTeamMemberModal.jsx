import React, { useState } from "react";

const AssignTeamMemberModal = ({ isOpen, onClose, onSubmit, teamMembers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("");

  const handleSearch = () => {
    return teamMembers.filter((member) =>
      member.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSelect = (member) => {
    setSelectedTeamMember(member);
    setSearchTerm("");
  };

  const resetSelection = () => {
    setSelectedTeamMember(null);
    setSearchTerm("");
  };

  const handleSubmit = () => {
    const data = {
      teamMember: selectedTeamMember,
      remarks,
      preferredSlot,
    };
    onSubmit(data);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Assign Team Member</h2>

        {/* Search Input */}
        <div className="relative mb-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="border w-full p-2 rounded-md focus:outline-none"
              placeholder="Search team member..."
              value={selectedTeamMember || searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={!!selectedTeamMember}
            />
            {selectedTeamMember ? (
              <button
                className="text-red-500 font-semibold"
                onClick={resetSelection}
              >
                ✕
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={handleSearch}
              >
                Search
              </button>
            )}
          </div>

          {/* Dropdown for search results */}
          {!selectedTeamMember && searchTerm && (
            <div className="absolute bg-white border rounded-md w-full max-h-40 overflow-y-auto mt-2 z-10">
              {handleSearch().length ? (
                handleSearch().map((member, index) => (
                  <div
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelect(member)}
                  >
                    {member}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          <textarea
            className="border p-2 rounded-md w-full resize-none focus:outline-none"
            placeholder="Remarks"
            rows={3}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
          <input
            type="datetime-local"
            className="border p-2 rounded-md w-full focus:outline-none"
            value={preferredSlot}
            onChange={(e) => setPreferredSlot(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
            disabled={!selectedTeamMember || !preferredSlot}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTeamMemberModal;
