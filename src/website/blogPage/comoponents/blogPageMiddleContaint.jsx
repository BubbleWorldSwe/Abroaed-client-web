import dark from "../../../assets/dark.png";
const BlogPageMiddleContaint = ({ blogDetails }) => {
  return (
    <div>
      <div className="mb-10">
        <img src={dark} alt="image-pic" className="rounded-xl w-full" />
      </div>
      <div className="py-6 ">
        {/*  <h2 className={`text-[32px] mb-5 text-gray-primary font-bold `}>
          Section Header
        </h2> */}

        <div
          className="mb-3 dark:text-gray-400 line-clamp-3 flex-grow"
          dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
        />
      </div>
    </div>
  );
};

export default BlogPageMiddleContaint;
