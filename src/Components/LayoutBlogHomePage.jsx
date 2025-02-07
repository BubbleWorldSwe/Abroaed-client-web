import React from "react";
import BlogHomePage from "./BlogHomePage";

import BlogHoro from "../pages/Blogs/BlogHoro";
import BlogCardsSection from "../pages/Blogs/BlogCardsSection";
import BlogTranding from "../pages/Blogs/BlogTranding";
import BlogCategories from "../pages/Blogs/BlogCategories";
import Header from "../website/comman/sections/headerSection";
import Footer from "../website/comman/sections/footerSection";

function LayoutBlogHomePage() {
  return (
    <div>
      <Header />
      <BlogHoro />
      <BlogCardsSection />
      <BlogTranding />
      <BlogCategories categoryName="finance" />
      <BlogCategories categoryName="Accomodation" />
      <BlogCategories categoryName="Destinations" />
      {/* <BlogHomePage /> */}
      <Footer />
    </div>
  );
}

export default LayoutBlogHomePage;
