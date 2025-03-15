
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogHomeArticlesSection from "./sections/blogHomeArticlesSection";
import BlogHomeCategorySection from "./sections/blogHomeCategorSection";
import BlogHomeHeroSection from "./sections/blogHomeHeroSection";
import BlogHomeTradingNowSection from "./sections/blogHomeTradingNowSection";
import BlogHomeRountingSection from "./sections/blogHomeRountingSection";

function BlogsHome() {

  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      <BlogHomeRountingSection />
      <div className="absolute top-40 left-0 w-full">
        <BlogHomeHeroSection />
        <BlogHomeArticlesSection />
        <BlogHomeTradingNowSection />
        <BlogHomeCategorySection />
        <Footer />
      </div>
    </div>
  );
}

export default BlogsHome;
