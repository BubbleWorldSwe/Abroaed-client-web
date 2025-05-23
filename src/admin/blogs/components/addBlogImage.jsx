import pencil from "../../../assets/pencil.png";
import { useState, useRef } from "react";
import dark from "../../../assets/dark.png";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AddBlogImage = ({ setImageFile }) => {
  const { isWriteAccess } = useSelector((state) => state.auth);

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const validateImage = (file) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    const maxSize = 1000 * 1024; // 1MB

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG and PNG images are allowed");
      return false;
    }

    if (file.size > maxSize) {
      toast.error("Image size must be less than 1MB");
      return false;
    }

    return true;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!validateImage(file)) return;

    setImageFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-t-lg">
      <div className="relative w-full h-56 bg-gradient-to-r from-yellow-200 to-blue-500 cursor-pointer overflow-hidden rounded-t-lg">
        <img
          src={imagePreview || dark}
          alt="Blog"
          className="w-full h-full object-cover rounded-t-lg"
        />

        {isWriteAccess && (
          <>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <button
              type="button"
              className="absolute bottom-5 right-5 text-green-600 text-lg border-green-500 hover:border-2 font-semibold rounded-lg px-4 py-2 text-center inline-flex items-center bg-white border-2"
              onClick={() => fileInputRef.current.click()}
            >
              <img src={pencil} alt="Edit" className="w-4 h-4 mr-2" />
              Select Image
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddBlogImage;
