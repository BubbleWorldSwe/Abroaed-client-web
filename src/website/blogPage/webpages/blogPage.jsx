
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogPageContaintSection from "./sections/blogPageContaintSection";
import BlogPageHeaderText from "./sections/blogPageHeaderText";
import BlogPageRelatedArticle from "./sections/blogPageRelatedArticle";
import BlogRountingSection from "./sections/blogRountingSection";
import rightAngle from "../../../assets/rightAngle.png"
function BlogPage() {

  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      <BlogRountingSection />
      <div className="absolute top-40 left-0 w-full">
        <BlogPageHeaderText />
        <BlogPageContaintSection />
        <div className="relative ">
          <BlogPageRelatedArticle />
          <div className="absolute -bottom-20 left-[35%] -z-10">
            <img
              className="rounded-lg w-full h-full object-cover"
              src={rightAngle}
              alt="Counselling session"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
