
import Blogs from "../../comman/components/blogs";
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogPageContaintSection from "./sections/blogPageContaintSection";
import BlogPageHeaderText from "./sections/blogPageHeaderText";
import BlogRountingSection from "./sections/blogRountingSection";

function BlogPage() {

  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      <BlogRountingSection />
      <div className="absolute top-40 left-0 w-full">
        <BlogPageHeaderText />
        <BlogPageContaintSection />
        <Blogs />
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
