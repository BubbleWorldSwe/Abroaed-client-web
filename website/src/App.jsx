import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import BlogPage from './Components/BlogPage';
import LayoutPage from './pages/destinations/layout';
import TestPrepLayoutPage from './pages/TestPrep/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/destinations" element={<LayoutPage />} />
        <Route path="/testprep" element={<TestPrepLayoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
