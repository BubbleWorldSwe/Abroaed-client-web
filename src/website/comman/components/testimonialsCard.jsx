import { useState } from "react";
import TestimonialModal from "../modals/testimonialModal";
import PrimaryBodyText from "../../styleComponents/primaryBodyText";

/* eslint-disable react/prop-types */
const TestimonialsCard = ({ data }) => {
  const [readMore, setReadMore] = useState(false);

  const handleClose = () => {
    setReadMore(false)
  }

  return (
    // <div className="max-w-full bg-white border transition-transform duration-300 hover:scale-105 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   {/* Video Wrapper */}
    //   <div className="relative w-full h-[23rem] pb-[56.25%] overflow-hidden rounded-t-lg border border-gray-300">
    //     <iframe
    //       id="ytplayer"
    //       type="text/html"
    //       className="absolute top-0 left-0 w-full h-full"
    //       src={`https://www.youtube.com/embed/${data}`}
    //       allowFullScreen
    //     ></iframe>
    //   </div>
    //   {/* User Info */}
    //   <div className="flex p-3 items-center space-x-4">
    //     <img
    //       className="w-14 h-14 rounded-full"
    //       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    //       alt="Jese Leos avatar"
    //     />

    //     <div className="font-medium dark:text-white">
    //       <div className="text-lg font-body">Jese Leos</div>
    //       <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
    //         Arbaz
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <TestimonialModal
        item={data}
        isOpen={readMore}
        onClose={handleClose}
      />
      <div className="max-w-md mx-auto hover:scale-[1.01] bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-[15rem] overflow-hidden rounded-t-lg border border-gray-300">
          <img
            className="absolute  w-full h-full object-cover"
            src={data.img}
            alt={data.name}
          />
        </div>

        <div className="p-4 flex flex-col justify-between">
          <h3 className="text-xl font-medium">{data.name}</h3>
          <div>
            <p className="text-[15px] text-gray-primary font-medium">{data.university}</p>
            <p className="text-[15px] text-gray-primary font-me">{data.country}</p>
          </div>
          <PrimaryBodyText >
            <span className={"line-clamp-2"}>
              {data.testimonial}
            </span>
            <span
              className="cursor-pointer text-blue-500 "
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? " Read Less" : "Read More"}
            </span>
          </PrimaryBodyText>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
