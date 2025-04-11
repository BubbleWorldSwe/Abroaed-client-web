import studentColImg from "../../assets/studentColImg.png";
import studentcolFrame from "../../assets/studentcolFrame.png";

const StudentApplicationCard = ({ data }) => {
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
        </div>

        <p className="text-gray-500 mt-2">{data?.intake}</p>
        <p className="text-gray-500 mb-2">{data?.courseName}</p>
      </div>
    </div>
  );
};

export default StudentApplicationCard;
