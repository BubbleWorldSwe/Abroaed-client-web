import React from "react";
import Header from "./Header";
import BlogCategoryPage from "./BlogCategoryPage";
import Footer from "./Footer";

function LayoutBlogsCategoryPage() {
  document.head.insertAdjacentHTML(
    "afterbegin",
    '<link rel="stylesheet" type="text/css" href="https://unpkg.com/flowbite-typography@1.0.3/dist/typography.min.css">'
  );
  return (
    <div className="flex flex-col gap-3">
      <Header />

      <BlogCategoryPage />
      <Footer />
    </div>
  );
}

export default LayoutBlogsCategoryPage;
