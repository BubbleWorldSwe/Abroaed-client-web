import { useEffect, useState } from "react";
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogHomeBlogsSection from "./sections/blogHomeBlogsSection";
import BlogHomeHeaderTestSection from "./sections/blogHomeHeaderTextSection";
import {
  getBlogs,
  getBlogsByCategoryId,
  getBlogsCategory,
} from "../../../api/blogsApi";
import PageLoader from "../../../commons/components/loader/pageLoader";

function BlogsHome() {
  const [blogsCategory, setBlogsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "All Posts"
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  async function fetchData() {
    try {
      const list = await getBlogsCategory();
      if (list.status === 200) {
        setBlogsCategory(list.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchBlogsByCategory2(id) {
    setIsLoading(true);
    try {
      const list = await getBlogsByCategoryId(id);

      if (list.status === 200) {
        const publishedBlogs = list.data?.result?.filter(
          (item) => item.status === "publish"
        );

        setBlogs(publishedBlogs);
      } else setBlogs([]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function fetchBlogsByCategory(id) {
    setIsLoading(true);
    try {
      const list = allBlogs.filter((item) => item?.category?._id === id);

      const publishedBlogs = list?.filter((item) => item.status === "publish");

      setBlogs(publishedBlogs);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  async function fetchAllBlogs() {
    setIsLoading(true);
    try {
      const list = await getBlogs();
      if (list.status === 200) {
        const publishedBlogs = list.data.result.filter(
          (item) => item.status === "publish"
        );
        setBlogs(publishedBlogs);
        setAllBlogs(publishedBlogs);

        const categories = list.data.result.map((item) => item.category);

        const uniqueCategories = [
          ...new Set(list.data.result.map((item) => item.category)),
        ];

        const unique = Array.from(
          new Map(
            uniqueCategories.map(({ _id, name }) => [
              `${_id}-${name}`,
              { _id, name },
            ])
          ).values()
        );

        setBlogsCategory(unique);
      } else setBlogs([]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      fetchAllBlogs();
    } else {
      fetchBlogsByCategory(categoryId);
    }
  };

  useEffect(() => {
    //  fetchData();
    fetchAllBlogs(); // Fetch all blogs by default
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-rethink relative">
      <Header isHeaderBgWhite={true} />
      <div className="absolute top-32 left-0 w-full">
        <BlogHomeHeaderTestSection />
        <BlogHomeBlogsSection
          category={blogsCategory}
          blogs={blogs}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <Footer />
      </div>
    </div>
  );
}

export default BlogsHome;
