
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogHomeBlogsSection from "./sections/blogHomeBlogsSection";
import BlogHomeHeaderTestSection from "./sections/blogHomeHeaderTextSection"
function BlogsHome() {

  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      <div className="absolute top-32 left-0 w-full">
        <BlogHomeHeaderTestSection />
        <BlogHomeBlogsSection />
        <Footer />
      </div>
    </div>
  );
}

export default BlogsHome;
