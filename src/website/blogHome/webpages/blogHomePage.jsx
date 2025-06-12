import { useEffect, useState } from "react";
import Footer from "../../comman/sections/footerSection";
import Header from "../../comman/sections/headerSection";
import BlogHomeBlogsSection from "./sections/blogHomeBlogsSection";
import BlogHomeHeaderTestSection from "./sections/blogHomeHeaderTextSection";
import {
  getBlogsByCategoryId,
  getBlogsCategory,
  getPublishedBlogs,
} from "../../../api/blogsApi";
import PageLoader from "../../../commons/components/loader/pageLoader";

function BlogsHome() {
  const [blogsCategory, setBlogsCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchCategories = async () => {
    try {
      const list = await getBlogsCategory();
      if (list.status === 200) {
        const filtered = list.data.result.filter(
          (data) => data?.blogPostCount > 0
        );
        setBlogsCategory(filtered);
      }
    } catch (error) {
      console.log("Error fetching categories", error);
    }
  };

  const fetchAllBlogs = async (page = 1, loadMore = false) => {
    try {
      if (page === 1) setIsLoading(true);
      else setIsLoadMoreLoading(true);

      const res = await getPublishedBlogs(page);
      if (res.status === 200) {
        const newBlogs = res.data.result;
        setBlogs((prev) => (loadMore ? [...prev, ...newBlogs] : newBlogs));
        setTotalPages(res.data?.totalPages);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.log("Error fetching blogs", error);
    } finally {
      setIsLoading(false);
      setIsLoadMoreLoading(false);
    }
  };

  const fetchBlogsByCategory = async (id, page = 1, loadMore = false) => {
    try {
      if (page === 1) setIsLoading(true);
      else setIsLoadMoreLoading(true);

      const res = await getBlogsByCategoryId(id, page);
      if (res.status === 200) {
        const published = res.data?.result?.filter(
          (item) => item.status === "publish"
        );
        setBlogs((prev) => (loadMore ? [...prev, ...published] : published));
        setTotalPages(res.data?.totalPages || 1);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      console.log("Error fetching category blogs", error);
    } finally {
      setIsLoading(false);
      setIsLoadMoreLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);

    if (categoryId === "all") {
      fetchAllBlogs(1, false);
    } else {
      fetchBlogsByCategory(categoryId, 1, false);
    }
  };

  const handleLoadMore = (categoryId, page, loadMore) => {
    if (categoryId === "all") {
      fetchAllBlogs(page, loadMore);
    } else {
      fetchBlogsByCategory(categoryId, page, loadMore);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchAllBlogs();
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
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isLoadMoreLoading={isLoadMoreLoading}
          fetchBlogs={handleLoadMore}
        />
        <Footer />
      </div>
    </div>
  );
}

export default BlogsHome;
