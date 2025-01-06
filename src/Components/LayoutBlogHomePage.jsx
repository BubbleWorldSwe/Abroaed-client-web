import React from "react";
import BlogHomePage from "./BlogHomePage";
import Header from "./Header";
import Footer from "./Footer";
import BlogHoro from "../pages/Blogs/BlogHoro";
import BlogCardsSection from "../pages/Blogs/BlogCardsSection";
import BlogTranding from "../pages/Blogs/BlogTranding";
import BlogCategories from "../pages/Blogs/BlogCategories";

function LayoutBlogHomePage() {
  return (
    <div>
      <Header />
      <BlogHoro/>
      <BlogCardsSection/>
      <BlogTranding/>
      <BlogCategories />
      <BlogCategories />
      <BlogCategories />
      {/* <BlogHomePage /> */}
      <Footer />
    </div>
  );
}

export default LayoutBlogHomePage;
