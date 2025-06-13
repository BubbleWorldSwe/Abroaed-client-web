import { useState, useRef, useEffect } from "react";
import { MoreVerticalIcon } from "lucide-react";
import studentColImg from "../../../assets/studentColImg.png";
import studentcolFrame from "../../../assets/studentcolFrame.png";
import { useSelector } from "react-redux";
import { statusSequence } from "../../../constants/values";
import { IMAGES } from "../../../constants/images";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";

const StudentApplicationCard = ({
  data,
  setSelectedApplication,
  onOpen,
  onOpenDocUpdate,
  onOpenStatusModal,
  status,
  onOpenCommentModal,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { isWriteAccess } = useSelector((state) => state.auth);

  const toggleMenu = (data) => {
    setIsMenuOpen((prev) => !prev);
    setSelectedApplication(data);
  };

  const coverImage = data?.college?.images?.find(
    (img) => img.type === "cover" && !img.isDeleted
  )?.ImageUrl;

  const logoImage = data?.college?.images?.find(
    (img) => img.type === "logo" && !img.isDeleted
  )?.ImageUrl;

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
          className="rounded-t-lg w-full max-w-xl h-36 object-cover"
          src={
            coverImage ? `${IMAGE_BASE_URL}/${coverImage}` : IMAGES.noCollege
          }
          alt="pic"
        />
        <div className="absolute w-16 h-16 -bottom-5 left-4 bg-white rounded-[5px] overflow-hidden shadow-md">
          <img
            src={logoImage ? `${IMAGE_BASE_URL}/${logoImage}` : IMAGES.noLogo}
            alt="add_img_pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-4 mt-5">
        <div className="flex justify-between items-center">
          <div className="relative group w-full">
            <h5 className="text-[18px] line-clamp-1 font-semibold tracking-tight text-gray-900 dark:text-white">
              {data?.college?.name || "----"}
            </h5>

            <div className="absolute z-10 hidden w-max max-w-xs group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-full mt-1">
              {data?.college?.name}
            </div>
          </div>
          {isWriteAccess && status !== "rejected" && (
            // status !== "offer_letter_received" &&
            <div className="relative" ref={menuRef}>
              <button onClick={() => toggleMenu(data)} className="p-2">
                <MoreVerticalIcon size={20} color="#71717A" />
              </button>
              {isMenuOpen && (
                <div className="absolute -right-3 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <ul className="text-gray-700">
                    {status !== "offer_letter_received" && (
                      <li
                        onClick={onOpen}
                        className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                      >
                        Modify
                      </li>
                    )}

                    {status !== "rejected" &&
                      status !== "offer_letter_received" && (
                        <li
                          onClick={onOpenStatusModal}
                          className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                        >
                          Move Forward
                        </li>
                      )}
                    <li
                      // onClick={onOpen}
                      onClick={onOpenCommentModal}
                      className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                    >
                      Add Comment
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-gray-500 mt-2 text-[14px]">{data?.intake}</p>
        <p className="text-gray-500 mb-2 text-[14px]">{data?.courseName}</p>
      </div>
    </div>
  );
};

export default StudentApplicationCard;
