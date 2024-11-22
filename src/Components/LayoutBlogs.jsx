import React from "react";
import Footer from "./Footer";
import BlogPage from "./BlogPage";
import Header from "./Header";

function LayoutBlogs() {
  document.head.insertAdjacentHTML(
    "afterbegin",
    '<link rel="stylesheet" type="text/css" href="https://unpkg.com/flowbite-typography@1.0.3/dist/typography.min.css">'
  );
  return (
    <div className="flex flex-col gap-3">
      <Header />

      <BlogPage />
      <Footer />
    </div>
  );
}

export default LayoutBlogs;
