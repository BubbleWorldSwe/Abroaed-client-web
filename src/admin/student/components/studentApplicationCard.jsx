import { useState, useRef, useEffect } from "react";
import { MoreVerticalIcon } from "lucide-react";
import studentColImg from "../../../assets/studentColImg.png";
import studentcolFrame from "../../../assets/studentcolFrame.png";
import { useSelector } from "react-redux";
import { statusSequence } from "../../../constants/values";

const StudentApplicationCard = ({
  data,
  setSelectedApplication,
  onOpen,
  onOpenDocUpdate,
  onOpenStatusModal,
  status,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const toggleMenu = (data) => {
    setIsMenuOpen((prev) => !prev);
    setSelectedApplication(data);
  };

  console.log(status);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow relative">
      <div className="relative">
        <img
          className="rounded-t-lg max-w-xl h-40 object-cover"
          src={studentColImg}
          alt="pic"
        />
        <div className="absolute w-24 h-24 -bottom-16 left-5">
          <img src={studentcolFrame} alt="add_img_pic" />
        </div>
      </div>
      <div className="p-5 mt-5">
        <div className="flex justify-between items-center">
          <h5 className="text-[19px] font-semibold text-gray-900 line-clamp-1">
            {data?.college?.name}
          </h5>
          {isWriteAccess &&
            status !== "rejected" &&
            status !== "offer_letter_received" && (
              <div className="relative" ref={menuRef}>
                <button onClick={() => toggleMenu(data)} className="p-2">
                  <MoreVerticalIcon size={20} color="#71717A" />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul className="text-gray-700">
                      <li
                        onClick={onOpen}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        Modify
                      </li>

                      {statusSequence.indexOf(status) <=
                        statusSequence.indexOf("verifying_documents") && (
                        <li
                          onClick={onOpenDocUpdate}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          Request Documents
                        </li>
                      )}

                      {status !== "rejected" &&
                        status !== "offer_letter_received" && (
                          <li
                            onClick={onOpenStatusModal}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            Move Forward
                          </li>
                        )}
                    </ul>
                  </div>
                )}
              </div>
            )}
        </div>

        <p className="text-gray-500 mt-2">{data?.intake}</p>
        <p className="text-gray-500 mb-2">{data?.courseName}</p>
      </div>
    </div>
  );
};

export default StudentApplicationCard;
