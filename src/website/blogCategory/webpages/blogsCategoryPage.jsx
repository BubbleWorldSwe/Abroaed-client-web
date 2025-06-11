import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogCategoryArticlesSection from "./sections/blogCategoryArticlesSection";
import BlogCategoryCategorySection from "./sections/blogCategoryCategorySection";
import BlogCategoryHeaderText from "./sections/blogCategoryHeaderText";
import BlogCategoryHeroSection from "./sections/blogCategoryHeroSection";
import BlogCategoryTradingNowSection from "./sections/blogCategoryTradingNowSection";
import BlogRountingSection from "./sections/blogRountingSection";

function BlogsCategoryPage() {
  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      <BlogRountingSection />
      <div className="absolute top-40 left-0 w-full">
        <BlogCategoryHeaderText />
        <BlogCategoryHeroSection />
        <BlogCategoryArticlesSection />
        <BlogCategoryTradingNowSection />
        <BlogCategoryCategorySection />
        <Footer />
      </div>
    </div>
  );
}

export default BlogsCategoryPage;
