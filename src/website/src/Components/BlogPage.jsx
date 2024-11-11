import React from 'react';
import Header from './Navbar';
import BlogLayout from './BlogLayout';
import Footer from './Footer';

function BlogPage() {
  document.head.insertAdjacentHTML(
    'afterbegin',
    '<link rel="stylesheet" type="text/css" href="https://unpkg.com/flowbite-typography@1.0.3/dist/typography.min.css">'
  );
  return (
    <div className="flex flex-col gap-3">
      <Header />

      <BlogLayout />
      <Footer />
    </div>
  );
}

export default BlogPage;
