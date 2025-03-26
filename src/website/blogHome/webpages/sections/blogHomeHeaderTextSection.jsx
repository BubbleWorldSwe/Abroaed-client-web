const BlogHomeHeaderTestSection = () => {
  return (
    <div className="">
      <section className="dark:bg-gray-900 relative px-12 py-5 mx-auto">
        <div
          className="absolute top-0 left-0 right-0 p-28 z-0"
          style={{
            background: `linear-gradient(to bottom, rgba(253,250,80,0.4), rgba(253,224,71,0.2), rgba(255,255,255,0.1))`,
          }}
        ></div>
        <div className=" mx-auto max-w-screen-2xl lg:grid lg:grid-cols-1 ">
          <div className="w-full flex flex-col gap-1 items-center  justify-center   ">
            <h2 className={`text-[57px] font-extrabold text-gray-primary`}>
              Our Blogs
            </h2>
            <div className="flex gap-2">
              <p className="text-[#52525B] font-semibold text-base">
                Whether you’re looking to deepen your knowledge, stay up-to-date
                with emerging innovations, or simply find inspiration, our blog
                is the go-to resource.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogHomeHeaderTestSection;
