import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import BlogPage from "./Components/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;