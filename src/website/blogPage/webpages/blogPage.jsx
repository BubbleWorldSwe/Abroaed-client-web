import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogPageContaintSection from "./sections/blogPageContaintSection";
import BlogPageHeaderText from "./sections/blogPageHeaderText";
// import BlogRountingSection from "./sections/blogPageRountingSection";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogDetailsById } from "../../../api/blogsApi";
import PageLoader from "../../../commons/components/loader/pageLoader";

function BlogPage() {
  const [blogDetails, setblogDetails] = useState(null);
  const { id } = useParams();

  console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    try {
      const data = await getBlogDetailsById(id);

      if (data.status === 200) {
        setblogDetails(data.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(blogDetails);
  useEffect(() => {
    fetchData();
  }, [id]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      {/* <BlogRountingSection /> */}
      <div className="absolute top-32 left-0 w-full">
        <BlogPageHeaderText blogDetails={blogDetails} />
        <BlogPageContaintSection blogDetails={blogDetails} />

        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
