import React from "react";
import BlogHomePage from "./BlogHomePage";
import Header from "./Header";
import Footer from "./Footer";

function LayoutBlogHomePage() {
  return (
    <div>
      <Header />

      <BlogHomePage />
      <Footer />
    </div>
  );
}

export default LayoutBlogHomePage;
