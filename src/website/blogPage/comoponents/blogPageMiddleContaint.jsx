import dark from "../../../assets/dark.png";
import { IMAGE_BASE_URL } from "../../../constants/baseUrl";
const BlogPageMiddleContaint = ({ blogDetails }) => {
  return (
    <div>
      <div className="mb-10">
        <img
          className="rounded-xl w-full"
          src={
            blogDetails?.image
              ? `${IMAGE_BASE_URL}/${blogDetails?.image}`
              : dark
          }
        />
      </div>
      <div className="py-6 ">
        {/*  <h2 className={`text-[32px] mb-5 text-gray-primary font-bold `}>
          Section Header
        </h2> */}

        <div
          className="mb-3 dark:text-gray-400 flex-grow"
          dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
        />
      </div>
    </div>
  );
};

export default BlogPageMiddleContaint;
