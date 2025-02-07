
import BlogHoro from "../pages/Blogs/BlogHoro";
import Footer from "../website/comman/sections/footerSection";
import Header from "../website/comman/sections/headerSection";

function LayoutBlogs() {
  document.head.insertAdjacentHTML(
    "afterbegin",
    '<link rel="stylesheet" type="text/css" href="https://unpkg.com/flowbite-typography@1.0.3/dist/typography.min.css">'
  );
  return (
    <div className="flex flex-col gap-3">
      <Header />

      {/* <BlogHoro /> */}
      {/* <BlogPage /> */}
      <Footer />
    </div>
  );
}

export default LayoutBlogs;
