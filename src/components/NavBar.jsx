// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Thêm CSS nếu cần

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Quản lý Bài viết</h1>
      <ul>
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/add-post">Thêm bài viết</Link>
        </li>
        <li>
          <Link to="/posts">Danh sách bài viết</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
